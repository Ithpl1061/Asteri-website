import { useEffect, useState } from "react";

// False during server rendering and the first client render; true once the page is interactive.
// Forms use it to stay disabled until their JavaScript handler is attached.
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return hydrated;
}
