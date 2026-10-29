'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible,setVisible] = useState(false);
  useEffect(() => {
    const el=ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setVisible(true); return; }
    const obs = new IntersectionObserver(entries => { if (entries[0]?.isIntersecting){setVisible(true);obs.disconnect();} }, {threshold:.09,rootMargin:'0px 0px -24px 0px'});
    obs.observe(el);return ()=>obs.disconnect();
  },[]);
  return <div ref={ref} className={`reveal ${visible?'revealed':''} ${className}`} style={{transitionDelay:`${delay}ms`}}>{children}</div>;
}
