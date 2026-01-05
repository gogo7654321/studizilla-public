'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
}

export function MagneticButton({ children, href, onClick, variant = 'default', size = 'lg' }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < 150) {
      const strength = Math.max(0, 1 - distance / 150);
      setPosition({
        x: distanceX * strength * 0.3,
        y: distanceY * strength * 0.3,
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const buttonContent = (
    <motion.div
      ref={buttonRef}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Button
        variant={variant}
        size={size}
        className="font-bold shadow-lg hover:shadow-2xl transition-shadow duration-300"
        onClick={onClick}
      >
        {children}
      </Button>
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
}
