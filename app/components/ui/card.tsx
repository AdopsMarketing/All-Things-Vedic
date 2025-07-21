import React from 'react';
import clsx from 'clsx';

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
    ...props
}) => (
    <div className={clsx('rounded-2xl shadow bg-gray-600 overflow-hidden', className)} {...props}>
        {children}
    </div>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    className,
    children,
    ...props
}) => (
    <div className={clsx('p-6', className)} {...props}>
        {children}
    </div>
);
