import { useEffect, useRef, useState } from 'react';

export function useScrollSentinel(rootMargin = '20px 0px 0px 0px') {
  const [isScrolled, setIsScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(([entry]) => setIsScrolled(!entry.isIntersecting), {
      rootMargin,
    });
    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [rootMargin]);

  return { sentinelRef, isScrolled };
}
