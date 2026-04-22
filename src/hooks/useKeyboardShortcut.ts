import { useEffect } from "react";

export function useKeyboardShortcut(
  key: string,
  callback: () => void,
  options?: {
    ctrl?: boolean;
    shift?: boolean;
    alt?: boolean;
  }
) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isCtrlMatch = options?.ctrl ? event.ctrlKey || event.metaKey : !event.ctrlKey && !event.metaKey;
      const isShiftMatch = options?.shift ? event.shiftKey : !event.shiftKey;
      const isAltMatch = options?.alt ? event.altKey : !event.altKey;

      if (
        event.key.toLowerCase() === key.toLowerCase() &&
        isCtrlMatch &&
        isShiftMatch &&
        isAltMatch
      ) {
        event.preventDefault();
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [key, callback, options]);
}
