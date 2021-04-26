import { useState, useCallback } from 'react';

const useScroll = () => {
  const [percent, setPercent] = useState(0);

  const onScroll = useCallback((e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const scrollPercent = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);
    setPercent(scrollPercent);
  }, []);

  return { percent, setPercent, onScroll };
};

export default useScroll;
