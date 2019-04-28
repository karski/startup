import { useEffect } from "react";

const useKeyboardEvent = (key, callback) => {
  useEffect(() => {
    const handler = function(event) {
      if (event.key === key) {
        callback();
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);
};

// * use like function
//   useKeyboardEvent("Escape", () => {
//     console.log("escape");
//   });

export default useKeyboardEvent;
