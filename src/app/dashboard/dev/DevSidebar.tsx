'use client';

import * as React from "react";
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { auth, db } from '@/lib/firebase';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { signOut } from 'firebase/auth';
import { cn } from '@/lib/utils';
import { isDev } from '@/lib/authUtils';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Users,
  MessageSquareWarning,
  TestTube2,
  LogOut,
  MessageCircle,
  Languages,
  Star,
  Send,
  ChevronRight,
  Zap,
  BookOpen,
  ArrowLeft,
} from 'lucide-react';

const menuItems = [
  { href: '/dashboard/dev', label: 'Command Center', icon: Home, badge: null },
  { href: '/dashboard/dev/user-search', label: 'Users', icon: Users, badge: null },
  { href: '/dashboard/dev/support-chat', label: 'Support', icon: MessageCircle, badge: 'support' },
  { href: '/dashboard/dev/moderation', label: 'Reports', icon: MessageSquareWarning, badge: 'moderation' },
  { href: '/dashboard/dev/reviews', label: 'Reviews', icon: Star, badge: 'reviews' },
  { href: '/dashboard/dev/language-requests', label: 'Languages', icon: Languages, badge: 'language' },
  { href: '/dashboard/dev/course-content-manager', label: 'Content Manager', icon: BookOpen, badge: null },
  { href: '/dashboard/dev/notifications', label: 'Push Notify', icon: Send, badge: null },
  { href: '/dashboard/dev/logs', label: 'Dev Tools', icon: TestTube2, badge: null },
];

export function DevSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();
  const isDeveloper = isDev(user);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [counts, setCounts] = React.useState({
    support: 0,
    language: 0,
    reviews: 0,
    moderation: 0,
  });

  React.useEffect(() => {
    if (!isDeveloper) return;

    const unsubscribers: (() => void)[] = [];

    const supportQuery = query(
      collection(db, 'supportRequests'),
      where('status', '==', 'open')
    );
    const supportUnsub = onSnapshot(supportQuery, (snapshot) => {
      setCounts(prev => ({ ...prev, support: snapshot.size }));
    });
    unsubscribers.push(supportUnsub);

    const langQuery = query(
      collection(db, 'languageRequests'),
      where('status', '==', 'pending')
    );
    const langUnsub = onSnapshot(langQuery, (snapshot) => {
      setCounts(prev => ({ ...prev, language: snapshot.size }));
    });
    unsubscribers.push(langUnsub);

    const reviewsQuery = query(
      collection(db, 'reviews'),
      where('status', '==', 'pending')
    );
    const reviewsUnsub = onSnapshot(reviewsQuery, (snapshot) => {
      setCounts(prev => ({ ...prev, reviews: snapshot.size }));
    });
    unsubscribers.push(reviewsUnsub);

    const modQuery = query(
      collection(db, 'reports'),
      where('status', '==', 'pending')
    );
    const modUnsub = onSnapshot(modQuery, (snapshot) => {
      setCounts(prev => ({ ...prev, moderation: snapshot.size }));
    });
    unsubscribers.push(modUnsub);

    return () => unsubscribers.forEach(unsub => unsub());
  }, [isDeveloper]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <motion.div 
      className="fixed left-0 top-0 h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-r border-cyan-500/20 overflow-hidden rounded-r-2xl z-50"
      initial={{ width: '4rem' }}
      animate={{ width: isExpanded ? '16rem' : '4rem' }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8
      }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }} />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      <div className="relative h-full flex flex-col p-3">
        <motion.div 
          className="mb-6"
          initial={false}
          animate={{ opacity: isExpanded ? 1 : 0.8 }}
        >
          <div className="flex items-center px-3 gap-3">
            <div className="h-10 w-10 -ml-2.5 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
                  className="overflow-hidden"
                >
                  <p className="font-bold text-white text-sm whitespace-nowrap">DEV PORTAL</p>
                  <p className="text-xs text-cyan-400 whitespace-nowrap">System Control</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <nav className="flex-1 space-y-1">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            const badgeCount = item.badge ? counts[item.badge as keyof typeof counts] : 0;

            return (
              <motion.button
                key={item.href}
                onClick={() => router.push(item.href)}
                className={cn(
                  "w-full flex items-center py-2.5 rounded-lg transition-all group relative",
                  isExpanded ? "gap-3 px-3" : "px-3",
                  isActive 
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 shadow-lg shadow-cyan-500/20" 
                    : "text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50"
                )}
                whileHover={{ x: isActive || !isExpanded ? 0 : 4 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03 }}
              >
                {isActive && (
                  <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-r-full"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <Icon className={cn(
                  "h-5 w-5 shrink-0",
                  isActive ? "text-cyan-400" : "text-slate-500 group-hover:text-cyan-400"
                )} />

                <AnimatePresence mode="wait">
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
                      className="text-sm font-medium whitespace-nowrap overflow-hidden"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>

                {badgeCount > 0 && isExpanded && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto h-5 px-2 rounded-full bg-red-500/20 text-red-400 text-xs font-bold flex items-center justify-center border border-red-500/50"
                  >
                    {badgeCount > 99 ? '99+' : badgeCount}
                  </motion.div>
                )}

                {badgeCount > 0 && !isExpanded && (
                  <div className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-red-500 rounded-full border border-slate-900" />
                )}

                {!isActive && (
                  <ChevronRight className={cn(
                    "h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity",
                    !isExpanded && "hidden"
                  )} />
                )}
              </motion.button>
            );
          })}
        </nav>

        <div className="mt-4 pt-4 border-t border-slate-800">
          <motion.button
            onClick={() => router.push('/dashboard')}
            className={cn(
              "w-full flex items-center py-2.5 mb-2 rounded-lg text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all border border-cyan-500/20",
              isExpanded ? "gap-3 px-3" : "px-3 justify-center"
            )}
            whileHover={{ x: isExpanded ? 4 : 0 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowLeft className="h-5 w-5 shrink-0" />
            <AnimatePresence mode="wait">
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  className="text-sm font-medium whitespace-nowrap overflow-hidden"
                >
                  Return to Dashboard
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {user && (
            <div className={cn(
              "flex items-center gap-3 px-3 py-2 mb-2 rounded-lg bg-slate-800/50",
              isExpanded ? "justify-start" : "justify-center"
            )}>
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                {user.displayName?.charAt(0) || user.email?.charAt(0) || 'D'}
              </div>
              <AnimatePresence mode="wait">
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs text-white font-medium truncate max-w-[120px]">
                      {user.displayName || 'Developer'}
                    </p>
                    <p className="text-xs text-cyan-400">Admin Access</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          <motion.button
            onClick={handleLogout}
            className={cn(
              "w-full flex items-center py-2.5 rounded-lg text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all",
              isExpanded ? "gap-3 px-3" : "px-3"
            )}
            whileHover={{ x: isExpanded ? 4 : 0 }}
            whileTap={{ scale: 0.98 }}
          >
            <LogOut className="h-5 w-5 shrink-0" />
            <AnimatePresence mode="wait">
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  className="text-sm font-medium whitespace-nowrap overflow-hidden"
                >
                  Sign Out
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
