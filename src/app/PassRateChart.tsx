
"use client"

import dynamic from "next/dynamic";

// Lazy load the entire chart component (includes recharts)
const PassRateChartClient = dynamic(() => import('./PassRateChartClient').then(mod => ({ default: mod.PassRateChartClient })), { 
  ssr: false,
  loading: () => <div className="w-full max-w-md mx-auto min-h-[200px] flex items-center justify-center text-muted-foreground">Loading chart...</div>
});

export function PassRateChart() {
  return <PassRateChartClient />;
}

