import React, { useEffect, Ref } from "react";

/**
 * Hook that close element when click outside
 */
export const useOutsideClickClose = (
  refs: React.RefObject<Element> | Array<React.RefObject<Element>>,
  closeCallBack: Function
) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (refs instanceof Array) {
        if (
          refs.every(ref => ref.current && !ref.current.contains(event.target))
        ) {
          closeCallBack(false);
        }
      } else {
        if (refs.current && !refs.current.contains(event.target)) {
          closeCallBack(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, closeCallBack]);
};
