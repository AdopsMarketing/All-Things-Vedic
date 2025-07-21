'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import clsx from 'clsx';

type AccordionType = 'single';

interface AccordionContextType {
  openItem: string | null;
  toggleItem: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error('Must be used within <Accordion>');
  return ctx;
}

interface AccordionProps {
  type?: AccordionType;
  collapsible?: boolean;
  className?: string;
  children: ReactNode;
}

export function Accordion({
  type = 'single',
  collapsible = false,
  className,
  children,
}: AccordionProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (value: string) => {
    if (openItem === value && collapsible) {
      setOpenItem(null);
    } else {
      setOpenItem(value);
    }
  };

  return (
    <AccordionContext.Provider value={{ openItem, toggleItem }}>
      <div className={clsx('w-full', className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  className?: string;
  children: ReactNode;
}

export function AccordionItem({ value, className, children }: AccordionItemProps) {
  // Clone children and inject value prop to AccordionTrigger
  const enhancedChildren = React.Children.map(children, child => {
    if (
      React.isValidElement<AccordionTriggerProps>(child) &&
      (child.type as any).displayName === 'AccordionTrigger'
    ) {
      return React.cloneElement(child, { value });
    }
    return child;
  });

  return (
    <div className={clsx('border-b', className)}>
      {enhancedChildren}
    </div>
  );
}

interface AccordionTriggerProps {
  value: string;
  className?: string;
  children: ReactNode;
}

export function AccordionTrigger({ value, className, children }: AccordionTriggerProps) {
  const { openItem, toggleItem } = useAccordionContext();

  return (
    <button
      onClick={() => toggleItem(value)}
      type="button"
      className={clsx('flex items-center justify-between w-full focus:outline-none', className)}
    >
      {children}
      <svg
        className={clsx('ml-2 w-4 h-4 transform transition-transform', {
          'rotate-180': openItem === value,
        })}
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


interface AccordionContentProps {
  value: string;
  className?: string;
  children: ReactNode;
}

export function AccordionContent({ value, className, children }: AccordionContentProps) {
  const { openItem } = useAccordionContext();
  if (openItem !== value) return null;
  return <div className={clsx('mt-2', className)}>{children}</div>;
}
