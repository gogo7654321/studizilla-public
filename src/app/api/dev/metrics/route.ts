import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

// Server-side metrics using Node.js process
export async function GET() {
  try {
    // CPU usage calculation
    const startUsage = process.cpuUsage();
    const startTime = process.hrtime();
    
    // Wait a tiny bit to measure CPU
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const endUsage = process.cpuUsage(startUsage);
    const endTime = process.hrtime(startTime);
    const elapsedTime = endTime[0] * 1e6 + endTime[1] / 1e3; // microseconds
    
    const cpuPercent = ((endUsage.user + endUsage.system) / elapsedTime) * 100;

    // Memory usage
    const memUsage = process.memoryUsage();
    const totalMemory = memUsage.heapTotal;
    const usedMemory = memUsage.heapUsed;
    const memoryPercent = (usedMemory / totalMemory) * 100;

    // Uptime
    const uptimeSeconds = Math.floor(process.uptime());

    // Simulated latency (can be replaced with actual DB query timing)
    const latencyStart = Date.now();
    // In production, you'd do an actual DB ping here
    await new Promise(resolve => setTimeout(resolve, Math.random() * 50 + 10));
    const latency = Date.now() - latencyStart;

    return NextResponse.json({
      cpu: Math.min(cpuPercent, 100),
      memory: Math.min(memoryPercent, 100),
      latency,
      uptime: uptimeSeconds,
      memoryUsed: Math.round(usedMemory / 1024 / 1024), // MB
      memoryTotal: Math.round(totalMemory / 1024 / 1024), // MB
      timestamp: Date.now(),
    });
  } catch (error) {
    console.error('Error fetching metrics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch metrics' },
      { status: 500 }
    );
  }
}
