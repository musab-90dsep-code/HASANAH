'use client';

import React from 'react';

interface HasanahLogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function HasanahLogo({
  className = "w-10 h-10",
  iconOnly = true,
}: HasanahLogoProps) {
  return (
    <div className={`inline-flex items-center justify-center ${className}`} id="hasanah-brand-logo">
      <img
        src="/images/logo.png"
        alt="Hasanah Logo"
        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}
