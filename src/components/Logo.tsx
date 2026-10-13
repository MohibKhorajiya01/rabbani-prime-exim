import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  showText = true,
  size = 'md',
}) => {
  const isDark = variant === 'dark';
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: { img: 'h-8 sm:h-9', text: 'text-sm' },
    md: { img: 'h-10 sm:h-11', text: 'text-base' },
    lg: { img: 'h-12 sm:h-14', text: 'text-xl' },
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Uploaded RPE Golden Swoosh Logo */}
      <div className={`relative shrink-0 flex items-center justify-center ${
        !isDark ? 'bg-white/10 p-1 rounded-lg backdrop-blur-xs' : ''
      }`}>
        {!imageError ? (
          <img
            src="/brand/golden-rpe-swoosh-logo.png"
            alt="Rabbani Prime Exim Official Logo"
            className={`${sizeClasses.img} w-auto object-contain transition-transform duration-200 hover:scale-105`}
            onError={() => setImageError(true)}
          />
        ) : (
          <img
            src="/brand/rabbani-prime-exim-logo.png"
            alt="Rabbani Prime Exim Official Logo"
            className={`${sizeClasses.img} w-auto object-contain`}
          />
        )}
      </div>

      {showText && (
        <div className="flex flex-col tracking-tight">
          <span
            className={`font-extrabold tracking-wider uppercase font-['Manrope'] ${
              isDark ? 'text-[#0B1F3A]' : 'text-white'
            } ${sizeClasses.text} leading-tight`}
          >
            Rabbani Prime Exim
          </span>
          <span
            className={`text-[10px] uppercase tracking-widest font-semibold ${
              isDark ? 'text-[#5E6878]' : 'text-[#F9B718]'
            } leading-none mt-0.5`}
          >
            Global Import &amp; Export
          </span>
        </div>
      )}
    </div>
  );
};
