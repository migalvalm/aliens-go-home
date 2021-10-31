import { useEffect } from "react";

export function useKeyPress(callback) {
  useEffect(() => {
    window.addEventListener("keydown", callback)
    return () => window.removeEventListener("keydown", callback)
  }, [callback])
}