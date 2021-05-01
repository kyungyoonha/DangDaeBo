import { useRef, useEffect, useCallback } from 'react';

const useObserver = (fetchMoreData) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const options = { threshold: 0.5 };
    const observer = new IntersectionObserver(handleObserver, options);
    observer.observe(ref.current);

    function handleObserver(entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        fetchMoreData();
        observer.unobserve(entry.target);
      });
    }

    return () => observer && observer.disconnect();
  }, [ref, fetchMoreData]);

  return ref;
};

export default useObserver;
