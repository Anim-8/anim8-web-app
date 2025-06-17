import { useRef, useEffect, useState } from 'react';

function useIntersectionObserver(options: IntersectionObserverInit): [React.RefObject<HTMLDivElement | null>, IntersectionObserverEntry | null] {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(([ent]) => {
      setEntry(ent);
    }, options);

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [options]);

  return [targetRef, entry];
}

export default useIntersectionObserver;