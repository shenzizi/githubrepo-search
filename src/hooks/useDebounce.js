import {
  useState,
  useCallback
} from "react";

function useDebouncedValue({
  initialValue,
  delay,
  callback,
  inputChangeClearData
}) {
  const [val, setValue] = useState(initialValue);
  const [timer, setTimer] = useState(null);

  const handleInputChange = useCallback(
    event => {
      const inputVal = event.target.value;
      setValue(inputVal);
      inputChangeClearData();

      if (timer) {
        clearTimeout(timer);
      }

      const timerId = setTimeout(() => callback(inputVal), delay);
      setTimer(timerId);

      return () => {
        if (timer) {
          clearTimeout(timer);
        }
      };
    },
    [callback, delay, timer, inputChangeClearData]
  );

  return [val, handleInputChange];
}

export default useDebouncedValue;