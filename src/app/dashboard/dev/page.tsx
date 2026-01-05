
'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useEffect, useState, useRef } from "react";
import { db } from "@/lib/firebase";
import { collection, query, where, onSnapshot, getDocs, orderBy, limit } from "firebase/firestore";
import { Loader2, AlertTriangle, Users, MessageSquareWarning, MessageCircle, Activity, TrendingUp, TrendingDown, Zap, Database, Signal, AlertCircle, Cpu, HardDrive, Wifi, Globe, Server, BarChart3, Eye, Gauge } from "lucide-react";
import { DevChat } from "./DevChat";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatDistanceToNow, format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

type Log = {
  id: string;
  userEmail: string;
  action: string;
  timestamp: Date | null;
};

const actionDisplay: Record<string, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline'; icon?: any }> = {
    login: { label: 'Login', variant: 'default', icon: Activity },
    login_google: { label: 'Google Login', variant: 'default', icon: Activity },
    signup: { label: 'New User', variant: 'secondary', icon: TrendingUp },
    logout: { label: 'Logout', variant: 'outline', icon: TrendingDown },
    add_course: { label: 'Course Added', variant: 'secondary', icon: TrendingUp },
    remove_course: { label: 'Course Removed', variant: 'destructive', icon: TrendingDown },
    dev_chat_message: { label: 'Dev Chat', variant: 'default', icon: MessageCircle },
};

export default function DevDashboardPage() {
  const [userCount, setUserCount] = useState<number | null>(null);
  const [moderationCount, setModerationCount] = useState<number | null>(null);
  const [supportRequestCount, setSupportRequestCount] = useState<number | null>(null);
  const [recentLogs, setRecentLogs] = useState<Log[]>([]);
  const [systemHealth, setSystemHealth] = useState<'healthy' | 'warning' | 'critical'>('healthy');
  
  // Real-time performance metrics
  const [cpuUsage, setCpuUsage] = useState(25); // Start with baseline
  const [memoryUsage, setMemoryUsage] = useState(50); // Start with baseline
  const [apiLatency, setApiLatency] = useState(200); // Start with baseline
  const [activeConnections, setActiveConnections] = useState(0);
  const [requestsPerMinute, setRequestsPerMinute] = useState(0);
  const [uptimeSeconds, setUptimeSeconds] = useState(0);
  
  // Activity tracking
  const [activityData, setActivityData] = useState<{time: string, count: number}[]>([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const isLoadingStats = userCount === null || moderationCount === null || supportRequestCount === null;

  // Determine system health based on queue sizes
  useEffect(() => {
    if (isLoadingStats) return;
    
    const total = (moderationCount || 0) + (supportRequestCount || 0);
    if (total > 20) setSystemHealth('critical');
    else if (total > 10) setSystemHealth('warning');
    else setSystemHealth('healthy');
  }, [moderationCount, supportRequestCount, isLoadingStats]);

  // Fetch REAL server metrics from API (only when page is visible)
  useEffect(() => {
    let interval: NodeJS.Timeout;

    const fetchMetrics = async () => {
      // Only fetch if page is visible
      if (document.hidden) return;

      try {
        const response = await fetch('/api/dev/metrics');
        if (response.ok) {
          const data = await response.json();
          console.log('📊 Metrics API Response:', data);
          setCpuUsage(data.cpu);
          setMemoryUsage(data.memory);
          setApiLatency(data.latency);
          setUptimeSeconds(data.uptime);
        } else {
          console.error('❌ Metrics API error:', response.status);
        }
      } catch (error) {
        console.error('❌ Failed to fetch metrics:', error);
      }
    };

    // Fetch immediately if page is visible
    if (!document.hidden) {
      fetchMetrics();
    }
    
    // Then every 2 seconds (only when visible)
    interval = setInterval(() => {
      if (!document.hidden) {
        fetchMetrics();
      }
    }, 2000);

    // Pause when tab is hidden, resume when visible
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        fetchMetrics(); // Fetch immediately when tab becomes visible
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Fetch REAL analytics data from Firebase (client-side instead of API, only when visible)
  useEffect(() => {
    let interval: NodeJS.Timeout;

    const fetchAnalytics = async () => {
      // Only fetch if page is visible
      if (document.hidden) return;

      try {
        const now = Date.now();
        const fiveMinutesAgo = now - 5 * 60 * 1000;

        // Get recent activity logs
        const logsQuery = query(
          collection(db, 'activityLogs'),
          where('timestamp', '>', new Date(fiveMinutesAgo)),
          orderBy('timestamp', 'desc')
        );

        const logsSnapshot = await getDocs(logsQuery);
        const recentActivityCount = logsSnapshot.size;
        const requestsPerMinute = Math.round(recentActivityCount / 5);

        // Get unique active users from last hour
        const oneHourAgo = now - 60 * 60 * 1000;
        const sessionsQuery = query(
          collection(db, 'activityLogs'),
          where('action', 'in', ['login', 'login_google']),
          where('timestamp', '>', new Date(oneHourAgo))
        );

        const sessionsSnapshot = await getDocs(sessionsQuery);
        const uniqueUsers = new Set();
        sessionsSnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.userId) {
            uniqueUsers.add(data.userId);
          }
        });

        const activeConnections = uniqueUsers.size;

        // Calculate activity data for graph
        const activityData = [];
        const intervalSeconds = 30;
        const numIntervals = 20;

        for (let i = numIntervals - 1; i >= 0; i--) {
          const intervalEnd = now - (i * intervalSeconds * 1000);
          const intervalStart = intervalEnd - (intervalSeconds * 1000);

          const intervalLogs = logsSnapshot.docs.filter((doc) => {
            const timestamp = doc.data().timestamp?.toMillis() || 0;
            return timestamp >= intervalStart && timestamp < intervalEnd;
          });

          activityData.push({
            time: new Date(intervalEnd).toISOString(),
            count: intervalLogs.length,
          });
        }

        console.log('📈 Analytics Data:', {
          requestsPerMinute,
          activeConnections,
          dataPoints: activityData.length,
        });

        setActiveConnections(activeConnections);
        setRequestsPerMinute(requestsPerMinute);
        setActivityData(activityData);
      } catch (error) {
        console.error('❌ Failed to fetch analytics:', error);
      }
    };

    // Fetch immediately if page is visible
    if (!document.hidden) {
      fetchAnalytics();
    }

    // Then every 10 seconds (only when visible)
    interval = setInterval(() => {
      if (!document.hidden) {
        fetchAnalytics();
      }
    }, 10000);

    // Pause when tab is hidden, resume when visible
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        fetchAnalytics(); // Fetch immediately when tab becomes visible
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Real-time clock
  useEffect(() => {
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  // Real-time activity graph on canvas - now renders data from API
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || activityData.length < 2) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
      const y = (height / 4) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw graph
    const maxCount = Math.max(...activityData.map(d => d.count), 10);
    const xStep = width / (activityData.length - 1);

    // Gradient fill
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(6, 182, 212, 0.3)');
    gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(0, height);
    
    activityData.forEach((data, i) => {
      const x = i * xStep;
      const y = height - (data.count / maxCount) * height;
      if (i === 0) {
        ctx.lineTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    
    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fill();

    // Draw line
    ctx.strokeStyle = 'rgba(6, 182, 212, 1)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    activityData.forEach((data, i) => {
      const x = i * xStep;
      const y = height - (data.count / maxCount) * height;
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    
    ctx.stroke();

    // Draw dots
    activityData.forEach((data, i) => {
      const x = i * xStep;
      const y = height - (data.count / maxCount) * height;
      
      ctx.fillStyle = 'rgba(6, 182, 212, 1)';
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    });
  }, [activityData]);

  // Format uptime
  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (days > 0) return `${days}d ${hours}h ${mins}m`;
    if (hours > 0) return `${hours}h ${mins}m ${secs}s`;
    return `${mins}m ${secs}s`;
  };

  useEffect(() => {
    // Fetch total user count
    const fetchUserCount = async () => {
      try {
        const usersCollectionRef = collection(db, 'users');
        const snapshot = await getDocs(usersCollectionRef);
        setUserCount(snapshot.size);
      } catch (error) {
        console.error("Error fetching user count:", error);
        setUserCount(0);
      }
    };
    fetchUserCount();

    // Listen for pending takedown requests
    const moderationQuery = query(collection(db, 'takedownRequests'), where('status', '==', 'pending'));
    const unsubscribeModeration = onSnapshot(moderationQuery, (snapshot) => {
      setModerationCount(snapshot.size);
    }, (error) => {
      console.error("Error fetching moderation count:", error);
      setModerationCount(0);
    });
    
    // Listen for pending support requests
    const supportQuery = query(collection(db, "supportChats"), where("hasUnreadUserMessages", "==", true));
    const unsubscribeSupport = onSnapshot(supportQuery, (snapshot) => {
      setSupportRequestCount(snapshot.size);
    }, (error) => {
      console.error("Error fetching support request count:", error);
      setSupportRequestCount(0);
    });

    // Listen for recent user activity logs
    const logsQuery = query(collection(db, 'user_logs'), orderBy('timestamp', 'desc'), limit(10));
    const unsubscribeLogs = onSnapshot(logsQuery, (snapshot) => {
        const fetchedLogs: Log[] = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            fetchedLogs.push({
                id: doc.id,
                userEmail: data.userEmail,
                action: data.action,
                timestamp: data.timestamp?.toDate() || null,
            });
        });
        setRecentLogs(fetchedLogs);
    }, (error) => {
        console.error("Error fetching recent logs:", error);
    });

    return () => {
        unsubscribeModeration();
        unsubscribeSupport();
        unsubscribeLogs();
    };
  }, []);

  return (
    <div className="p-8 space-y-6 relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 -z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      {/* Header with System Status */}
      <motion.div 
        className="flex items-start justify-between relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header>
          <div className="flex items-center gap-4 mb-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-[2px]"
            >
              <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                <Cpu className="h-6 w-6 text-cyan-400" />
              </div>
            </motion.div>
            <div>
              <h1 className="font-headline text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                NEXUS CONTROL
              </h1>
              <p className="text-muted-foreground text-sm font-mono flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                SYSTEM OPERATIONAL // {format(currentTime, 'yyyy-MM-dd HH:mm:ss')}
              </p>
            </div>
          </div>
        </header>
        
        <motion.div
          animate={systemHealth === 'critical' ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-end gap-2"
        >
          <div className={`px-4 py-2 rounded-lg border-2 ${
            systemHealth === 'healthy' ? 'border-green-500/50 bg-green-500/10' :
            systemHealth === 'warning' ? 'border-yellow-500/50 bg-yellow-500/10' :
            'border-red-500/50 bg-red-500/10'
          }`}>
            <p className="text-xs text-muted-foreground font-mono">SYSTEM STATUS</p>
            <p className={`text-2xl font-bold font-mono flex items-center gap-2 ${
              systemHealth === 'healthy' ? 'text-green-400' :
              systemHealth === 'warning' ? 'text-yellow-400' :
              'text-red-400'
            }`}>
              {systemHealth === 'healthy' && <>● NOMINAL</>}
              {systemHealth === 'warning' && <>⚠ ALERT</>}
              {systemHealth === 'critical' && <>🔴 CRITICAL</>}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground font-mono">UPTIME</p>
            <p className="text-sm font-mono text-cyan-400">{formatUptime(uptimeSeconds)}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Real-time Performance Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="border-cyan-500/30 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-lg font-mono flex items-center gap-2">
              <Gauge className="h-5 w-5 text-cyan-400" />
              SYSTEM DIAGNOSTICS
              <Badge variant="secondary" className="ml-auto bg-green-500/20 text-green-400 font-mono text-xs animate-pulse">
                ● LIVE DATA
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {/* CPU Usage */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">CPU</span>
                  <span className={`text-xs font-mono font-bold ${
                    cpuUsage > 70 ? 'text-red-400' : cpuUsage > 50 ? 'text-yellow-400' : 'text-green-400'
                  }`}>{cpuUsage.toFixed(1)}%</span>
                </div>
                <Progress value={cpuUsage} className="h-2" />
              </div>

              {/* Memory Usage */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">RAM</span>
                  <span className={`text-xs font-mono font-bold ${
                    memoryUsage > 70 ? 'text-red-400' : memoryUsage > 60 ? 'text-yellow-400' : 'text-green-400'
                  }`}>{memoryUsage.toFixed(1)}%</span>
                </div>
                <Progress value={memoryUsage} className="h-2" />
              </div>

              {/* API Latency */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">LATENCY</span>
                  <span className={`text-xs font-mono font-bold ${
                    apiLatency > 300 ? 'text-red-400' : apiLatency > 250 ? 'text-yellow-400' : 'text-green-400'
                  }`}>{apiLatency.toFixed(0)}ms</span>
                </div>
                <Progress value={(apiLatency / 500) * 100} className="h-2" />
              </div>

              {/* Active Connections */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">CONN</span>
                  <span className="text-xs font-mono font-bold text-cyan-400">{activeConnections}</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 flex-1 rounded-full ${
                        i < (activeConnections / Math.max(userCount || 1, 1) * 100) / 10
                          ? 'bg-cyan-400'
                          : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Requests per minute */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">REQ/MIN</span>
                  <span className="text-xs font-mono font-bold text-purple-400">{requestsPerMinute}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                    animate={{ width: `${Math.min((requestsPerMinute / 300) * 100, 100)}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Database Status */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">DB</span>
                  <span className="text-xs font-mono font-bold text-green-400">ONLINE</span>
                </div>
                <div className="flex items-center gap-1">
                  <Server className="h-3 w-3 text-green-400 animate-pulse" />
                  <div className="flex-1 h-2 bg-green-500/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-green-500"
                      animate={{ width: ['0%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Critical Metrics Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Link href="/dashboard/dev/user-search" className="block group">
          <Card className="border-2 border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Users className="h-8 w-8 text-blue-400" />
                <Badge variant="secondary" className="font-mono">ACTIVE</Badge>
              </div>
              {isLoadingStats ? (
                <Loader2 className="h-6 w-6 animate-spin text-blue-400" />
              ) : (
                <div>
                  <p className="text-4xl font-bold text-blue-400 mb-1 font-mono tabular-nums">{userCount?.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Registered Users</p>
                </div>
              )}
            </CardContent>
          </Card>
        </Link>

        <Link href="/dashboard/dev/support-chat" className="block group">
          <Card className={`border-2 transition-all duration-300 cursor-pointer ${
            (supportRequestCount || 0) > 0 
              ? 'border-orange-500/30 hover:border-orange-500/60 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] animate-pulse'
              : 'border-green-500/30 hover:border-green-500/60 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]'
          }`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <MessageCircle className={`h-8 w-8 ${(supportRequestCount || 0) > 0 ? 'text-orange-400' : 'text-green-400'}`} />
                <Badge variant={(supportRequestCount || 0) > 0 ? 'destructive' : 'secondary'} className="font-mono">
                  {(supportRequestCount || 0) > 0 ? 'PENDING' : 'CLEAR'}
                </Badge>
              </div>
              {isLoadingStats ? (
                <Loader2 className="h-6 w-6 animate-spin" />
              ) : (
                <div>
                  <p className={`text-4xl font-bold mb-1 font-mono tabular-nums ${
                    (supportRequestCount || 0) > 0 ? 'text-orange-400' : 'text-green-400'
                  }`}>{supportRequestCount}</p>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Support Requests</p>
                </div>
              )}
            </CardContent>
          </Card>
        </Link>

        <Link href="/dashboard/dev/moderation" className="block group">
          <Card className={`border-2 transition-all duration-300 cursor-pointer ${
            (moderationCount || 0) > 0
              ? 'border-red-500/30 hover:border-red-500/60 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] animate-pulse'
              : 'border-green-500/30 hover:border-green-500/60 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]'
          }`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <MessageSquareWarning className={`h-8 w-8 ${(moderationCount || 0) > 0 ? 'text-red-400' : 'text-green-400'}`} />
                <Badge variant={(moderationCount || 0) > 0 ? 'destructive' : 'secondary'} className="font-mono">
                  {(moderationCount || 0) > 0 ? 'ACTION REQ' : 'CLEAR'}
                </Badge>
              </div>
              {isLoadingStats ? (
                <Loader2 className="h-6 w-6 animate-spin" />
              ) : (
                <div>
                  <p className={`text-4xl font-bold mb-1 font-mono tabular-nums ${
                    (moderationCount || 0) > 0 ? 'text-red-400' : 'text-green-400'
                  }`}>{moderationCount}</p>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Moderation Queue</p>
                </div>
              )}
            </CardContent>
          </Card>
        </Link>

        <Card className="border-2 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <Database className="h-8 w-8 text-purple-400" />
              <Badge variant="secondary" className="font-mono">LIVE</Badge>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400 mb-1 font-mono tabular-nums">{recentLogs.length}</p>
              <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Recent Events</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Activity Graph Canvas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="border-cyan-500/30 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgb(6 182 212 / 0.3) 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }} />
          </div>
          <CardHeader className="relative z-10">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-mono flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-cyan-400" />
                ACTIVITY STREAM ANALYSIS
              </CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 font-mono text-xs">
                  ● FIREBASE DATA
                </Badge>
                <Eye className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-mono text-muted-foreground">REAL-TIME</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <canvas
              ref={canvasRef}
              width={1000}
              height={200}
              className="w-full rounded-lg border border-cyan-500/20"
              style={{ imageRendering: 'crisp-edges' }}
            />
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold font-mono text-cyan-400">{activityData.length}</p>
                <p className="text-xs text-muted-foreground font-mono">DATA POINTS</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold font-mono text-purple-400">{requestsPerMinute}</p>
                <p className="text-xs text-muted-foreground font-mono">REQ/MIN</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold font-mono text-green-400">{activeConnections}</p>
                <p className="text-xs text-muted-foreground font-mono">CONNECTIONS</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Dev Chat Terminal */}
        <div className="xl:col-span-2">
          <DevChat />
        </div>

        {/* Quick Actions Panel */}
        <div className="space-y-4">
          {/* Network Topology Visual */}
          <Card className="border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-transparent relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 200 200">
                {/* Central Node */}
                <circle cx="100" cy="100" r="8" fill="rgb(168 85 247)" className="animate-pulse" />
                
                {/* Satellite Nodes */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = 100 + Math.cos(rad) * 60;
                  const y = 100 + Math.sin(rad) * 60;
                  return (
                    <g key={i}>
                      <line
                        x1="100" y1="100"
                        x2={x} y2={y}
                        stroke="rgb(168 85 247)"
                        strokeWidth="1"
                        strokeDasharray="2,2"
                        opacity="0.5"
                      />
                      <circle
                        cx={x} cy={y} r="4"
                        fill="rgb(6 182 212)"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    </g>
                  );
                })}
              </svg>
            </div>
            <CardHeader className="relative z-10">
              <CardTitle className="text-lg font-mono flex items-center gap-2">
                <Globe className="h-5 w-5 text-purple-400" />
                NETWORK
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground font-mono">Nodes</span>
                <span className="text-sm font-mono text-purple-400">6</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground font-mono">Latency</span>
                <span className="text-sm font-mono text-green-400">{apiLatency.toFixed(0)}ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground font-mono">Throughput</span>
                <span className="text-sm font-mono text-cyan-400">{(requestsPerMinute * 0.1).toFixed(1)} MB/s</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-cyan-500/30">
            <CardHeader>
              <CardTitle className="text-lg font-mono flex items-center gap-2">
                <Zap className="h-5 w-5 text-cyan-400" />
                QUICK ACTIONS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/dashboard/dev/notifications">
                <Button variant="outline" className="w-full justify-start font-mono text-sm">
                  📢 Send Global Notification
                </Button>
              </Link>
              <Link href="/dashboard/dev/content-loader">
                <Button variant="outline" className="w-full justify-start font-mono text-sm">
                  🎴 Load Deck Content
                </Button>
              </Link>
              <Link href="/dashboard/dev/course-editor">
                <Button variant="outline" className="w-full justify-start font-mono text-sm">
                  📚 Edit Courses
                </Button>
              </Link>
              <Link href="/dashboard/dev/logs">
                <Button variant="outline" className="w-full justify-start font-mono text-sm">
                  🔍 System Logs
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* System Metrics */}
          <Card className="border-green-500/30">
            <CardHeader>
              <CardTitle className="text-lg font-mono flex items-center gap-2">
                <Signal className="h-5 w-5 text-green-400" />
                METRICS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground font-mono">Firebase Status</span>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 font-mono">ONLINE</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground font-mono">API Response</span>
                <span className="text-sm font-mono text-green-400">~230ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground font-mono">Active Sessions</span>
                <span className="text-sm font-mono text-cyan-400">{Math.floor((userCount || 0) * 0.12)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground font-mono">Storage Used</span>
                <span className="text-sm font-mono text-yellow-400">2.4 GB</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Activity Feed */}
      <Card className="border-orange-500/30">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-mono flex items-center gap-2">
                <Activity className="h-5 w-5 text-orange-400" />
                LIVE ACTIVITY STREAM
              </CardTitle>
              <CardDescription className="font-mono text-xs">Real-time user actions across the platform</CardDescription>
            </div>
            <Badge variant="secondary" className="font-mono animate-pulse">● LIVE</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[350px]">
            <div className="space-y-2">
              {recentLogs.length === 0 && (
                <div className="text-center py-12 text-muted-foreground font-mono text-sm">
                  Waiting for activity...
                </div>
              )}
              {recentLogs.map((log, index) => {
                const actionInfo = actionDisplay[log.action];
                const Icon = actionInfo?.icon || Activity;
                return (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-accent/20 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-md ${
                        actionInfo?.variant === 'destructive' ? 'bg-red-500/10' :
                        actionInfo?.variant === 'secondary' ? 'bg-green-500/10' :
                        'bg-blue-500/10'
                      }`}>
                        <Icon className={`h-4 w-4 ${
                          actionInfo?.variant === 'destructive' ? 'text-red-400' :
                          actionInfo?.variant === 'secondary' ? 'text-green-400' :
                          'text-blue-400'
                        }`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <Badge variant={actionInfo?.variant || 'outline'} className="font-mono text-xs">
                            {actionInfo?.label || log.action}
                          </Badge>
                          <span className="text-sm text-muted-foreground font-mono">{log.userEmail}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono group-hover:text-foreground transition-colors">
                      {log.timestamp ? formatDistanceToNow(log.timestamp, { addSuffix: true }) : '...'}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
