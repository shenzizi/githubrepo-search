import {
  useEffect,
  useRef,
  useState
} from "react";

const useIntersect = (options, isInCallback) => {
  const [node, setNode] = useState(null);

  const observer = useRef(
    new window.IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        isInCallback();
      }
    }), options);

  useEffect(
    () => {
      const { current: currentObserver } = observer;
      currentObserver.disconnect();

      if (node) currentObserver.observe(node);

      return () => currentObserver.disconnect();
    },
    [node]
  );

  return [setNode];
}

export default useIntersect; 