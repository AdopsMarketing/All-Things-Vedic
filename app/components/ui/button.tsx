import React from 'react';
import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'cosmic' | 'cosmicOutline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const variantStyles = {
    default: 'bg-primary text-white',
    cosmic: 'bg-gradient-to-r from-cosmic-royal to-cosmic-gold text-white shadow-cosmic',
    cosmicOutline: 'border-2 border-cosmic-gold text-cosmic-royal bg-transparent hover:bg-cosmic-gold hover:text-white transition',
};

const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
    variant = 'default',
    size = 'md',
    className,
    children,
    ...props
}) => (
    <button
        className={clsx(
            'rounded-full font-semibold flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cosmic-royal transition group',
            variantStyles[variant],
            sizeStyles[size],
            className
        )}
        {...props}
    >
        {children}
    </button>
);
