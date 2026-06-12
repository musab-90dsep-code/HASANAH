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
      {iconOnly ? (
        // Just the inner circuit-star mark
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(42,140,158,0.25)] transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="nav-brand-grad-teal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2A8C9E" />
              <stop offset="100%" stopColor="#3AA6B5" />
            </linearGradient>
            <linearGradient id="nav-brand-grad-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8B84B" />
              <stop offset="100%" stopColor="#F0C674" />
            </linearGradient>
            <linearGradient id="nav-brand-circuit" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2A8C9E" />
              <stop offset="50%" stopColor="#3AA6B5" />
              <stop offset="100%" stopColor="#E8B84B" />
            </linearGradient>
          </defs>

          {/* Left vertical circuit pillar of the 'H' */}
          <path
            d="M 28,32 L 28,68"
            stroke="url(#nav-brand-grad-teal)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <circle cx="28" cy="32" r="3.5" fill="#fff" />
          <circle cx="28" cy="68" r="3.5" fill="#fff" />

          {/* H horizontal linking crossbar */}
          <path
            d="M 28,50 L 46,50"
            stroke="url(#nav-brand-grad-teal)"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* Right looping circuit ('b'/ERP shape) connected to crossbar */}
          <path
            d="M 46,50 C 46,62 58,74 72,68 C 82,64 82,48 72,40 C 62,32 50,42 46,50 Z"
            stroke="url(#nav-brand-circuit)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner dots on looping tracks */}
          <circle cx="56" cy="58" r="3" fill="#3AA6B5" />
          <circle cx="68" cy="54" r="3" fill="#E8B84B" />

          {/* Gold sweep trails (fiber optics / cloud streams) */}
          <path
            d="M 46,45 C 54,34 68,22 84,18"
            stroke="url(#nav-brand-grad-gold)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="84" cy="18" r="2.5" fill="#F0C674" />

          <path
            d="M 48,48 C 58,38 72,27 86,25"
            stroke="url(#nav-brand-grad-gold)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="86" cy="25" r="2.5" fill="#F0C674" />

          <path
            d="M 48,51 C 60,43 74,33 86,33"
            stroke="url(#nav-brand-grad-gold)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="86" cy="33" r="2.5" fill="#F0C674" />

          {/* Stylized Four-pointed star at the top center */}
          <path
            d="M 50,4 L 52.5,13 L 61,15.5 L 52.5,18 L 50,27 L 47.5,18 L 39,15.5 L 47.5,13 Z"
            fill="url(#nav-brand-grad-gold)"
          />
          <circle cx="50" cy="15.5" r="1.5" fill="#fff" />
        </svg>
      ) : (
        // Full circular official badge with text
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full filter drop-shadow-md"
        >
          <defs>
            <linearGradient id="full-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2A8C9E" />
              <stop offset="50%" stopColor="#3AA6B5" />
              <stop offset="100%" stopColor="#E8B84B" />
            </linearGradient>
            <linearGradient id="badge-inner-teal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2A8C9E" />
              <stop offset="100%" stopColor="#3AA6B5" />
            </linearGradient>
            <linearGradient id="star-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8B84B" />
              <stop offset="100%" stopColor="#F0C674" />
            </linearGradient>
          </defs>

          {/* Outer circle background (adapts on light/dark because of standard css target) */}
          <circle cx="100" cy="100" r="94" fill="currentColor" className="text-white dark:text-[#0b1523] stroke-slate-200 dark:stroke-white/10" strokeWidth="2.5" />

          {/* Embedded Central Icon Brandmark */}
          <g transform="translate(50, 22) scale(1.0)">
            {/* Left vertical circuit pillar of the 'H' */}
            <path
              d="M 28,32 L 28,68"
              stroke="url(#badge-inner-teal)"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <circle cx="28" cy="32" r="3.5" fill="#fff" />
            <circle cx="28" cy="68" r="3.5" fill="#fff" />

            {/* H horizontal linking crossbar */}
            <path
              d="M 28,50 L 46,50"
              stroke="url(#badge-inner-teal)"
              strokeWidth="7"
              strokeLinecap="round"
            />

            {/* Right looping circuit connected to crossbar */}
            <path
              d="M 46,50 C 46,62 58,74 72,68 C 82,64 82,48 72,40 C 62,32 50,42 46,50 Z"
              stroke="url(#full-gold-grad)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="56" cy="58" r="3" fill="#3AA6B5" />
            <circle cx="68" cy="54" r="3" fill="#E8B84B" />

            {/* Gold sweep trails (fiber optics) */}
            <path
              d="M 46,45 C 54,34 68,22 84,18"
              stroke="url(#star-gold)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="84" cy="18" r="2.5" fill="#F0C674" />

            <path
              d="M 48,48 C 58,38 72,27 86,25"
              stroke="url(#star-gold)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="86" cy="25" r="2.5" fill="#F0C674" />

            <path
              d="M 48,51 C 60,43 74,33 86,33"
              stroke="url(#star-gold)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="86" cy="33" r="2.5" fill="#F0C674" />

            {/* Stylized Four-pointed star at the top center */}
            <path
              d="M 50,4 L 52.5,13 L 61,15.5 L 52.5,18 L 50,27 L 47.5,18 L 39,15.5 L 47.5,13 Z"
              fill="url(#star-gold)"
            />
            <circle cx="50" cy="15.5" r="1.5" fill="#fff" />
          </g>

          {/* Big display name below central icon */}
          <text
            x="100"
            y="126"
            textAnchor="middle"
            fontFamily="var(--font-display), system-ui, sans-serif"
            fontWeight="800"
            fontSize="18.5"
            letterSpacing="0.4"
            fill="currentColor"
            className="text-slate-800 dark:text-white"
          >
            HASANAH
          </text>
          
          <text
            x="100"
            y="142"
            textAnchor="middle"
            fontFamily="var(--font-display), system-ui, sans-serif"
            fontWeight="700"
            fontSize="12.5"
            letterSpacing="2.8"
            fill="currentColor"
            className="text-slate-700 dark:text-[#2A8C9E]"
          >
            TECH SOLUTIONS
          </text>

          {/* Bottom circular curved brand slogan text */}
          <path id="curve" d="M 32,156 A 68,68 0 0,0 168,156" fill="none" />
          <text
            fontSize="7"
            fontWeight="700"
            letterSpacing="2.1"
            fill="currentColor"
            className="text-slate-500 dark:text-slate-400"
            style={{ textTransform: 'uppercase' }}
          >
            <textPath href="#curve" startOffset="50%" textAnchor="middle">
              Innovate | Empower | Transform
            </textPath>
          </text>
        </svg>
      )}
    </div>
  );
}
