import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-server';

// Firebase admin analytics - real connection and request data
export async function GET() {
  try {
    const now = Date.now();
    const fiveMinutesAgo = now - 5 * 60 * 1000;

    // Get recent activity logs to calculate actual request rate
    const logsSnapshot = await adminDb
      .collection('activityLogs')
      .where('timestamp', '>', new Date(fiveMinutesAgo))
      .get();

    const recentActivityCount = logsSnapshot.size;
    const requestsPerMinute = Math.round(recentActivityCount / 5); // Over last 5 minutes

    console.log(`📊 Found ${recentActivityCount} recent activity logs`);

    // Get actual active user sessions (users who logged in recently)
    const oneHourAgo = now - 60 * 60 * 1000;
    const sessionsSnapshot = await adminDb
      .collection('activityLogs')
      .where('action', 'in', ['login', 'login_google'])
      .where('timestamp', '>', new Date(oneHourAgo))
      .get();

    // Count unique users
    const uniqueUsers = new Set();
    sessionsSnapshot.forEach((doc: any) => {
      const data = doc.data();
      if (data.userId) {
        uniqueUsers.add(data.userId);
      }
    });

    const activeConnections = uniqueUsers.size;

    console.log(`👥 Found ${activeConnections} unique active users`);

    // Calculate activity data points for graph (last 20 intervals of 30 seconds each)
    const activityData = [];
    const intervalSeconds = 30;
    const numIntervals = 20;
    
    for (let i = numIntervals - 1; i >= 0; i--) {
      const intervalEnd = now - (i * intervalSeconds * 1000);
      const intervalStart = intervalEnd - (intervalSeconds * 1000);
      
      const intervalLogs = logsSnapshot.docs.filter((doc: any) => {
        const timestamp = doc.data().timestamp?.toMillis() || 0;
        return timestamp >= intervalStart && timestamp < intervalEnd;
      });

      activityData.push({
        time: new Date(intervalEnd).toISOString(),
        count: intervalLogs.length,
      });
    }

    const response = {
      requestsPerMinute,
      activeConnections,
      activityData,
      totalRecentEvents: recentActivityCount,
      timestamp: now,
    };

    console.log('✅ Analytics response:', JSON.stringify(response, null, 2));

    return NextResponse.json(response);
  } catch (error: any) {
    console.error('❌ Error fetching analytics:', error);
    
    // Return fallback data instead of failing
    return NextResponse.json({
      requestsPerMinute: 0,
      activeConnections: 0,
      activityData: Array.from({ length: 20 }, (_, i) => ({
        time: new Date(Date.now() - (19 - i) * 30000).toISOString(),
        count: 0,
      })),
      totalRecentEvents: 0,
      timestamp: Date.now(),
      error: error.message,
    });
  }
}
