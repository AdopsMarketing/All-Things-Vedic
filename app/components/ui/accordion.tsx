'use client';
import React, { useState, ReactNode } from 'react';
import clsx from 'clsx';

export interface AccordionProps {
  type?: 'single';
  collapsible?: boolean;
  className?: string;
  children: ReactNode;
}

export function Accordion({ children, className }: AccordionProps) {
  return <div className={clsx('w-full', className)}>{children}</div>;
}

export interface AccordionItemProps {
  value: string;
  className?: string;
  children: ReactNode;
}

export function AccordionItem({ value, className, children }: AccordionItemProps) {
  return <div className={clsx('overflow-hidden', className)}>{children}</div>;
}

export interface AccordionTriggerProps {
  className?: string;
  children: ReactNode;
}

export function AccordionTrigger({ children, className, ...props }: AccordionTriggerProps) {
  const [open, setOpen] = useState(false);
  return (
    <button
      className={clsx(
        'flex items-center justify-between w-full cursor-pointer focus:outline-none',
        className
      )}
      onClick={() => setOpen((o) => !o)}
      type="button"
      {...props}
    >
      {children}
      <svg
        className={clsx('ml-2 w-4 h-4 transform transition-transform', { 'rotate-180': open })}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
}

export interface AccordionContentProps {
  className?: string;
  children: ReactNode;
}

export function AccordionContent({ children, className }: AccordionContentProps) {
  return <div className={clsx('mt-2', className)}>{children}</div>;
}
