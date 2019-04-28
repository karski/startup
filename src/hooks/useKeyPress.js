import { useEffect } from "react";

// ! Only works for CTRL keypresses
const useKeyPress = (ref, callback, keyCode) => {
  useEffect(() => {
    ref.current.addEventListener("keydown", event => {
      if (event.ctrlKey && event.keyCode === keyCode) {
        callback();
      }
    });
    return ref.current.removeEventListener("keydown", callback);
  }, []);
};

export default useKeyPress;
