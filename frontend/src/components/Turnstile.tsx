import { useEffect, useRef } from "react";

// Cloudflare Turnstile widget. Renders only when VITE_TURNSTILE_SITE_KEY is set.
// Turnstile writes the visitor's token into a hidden "cf-turnstile-response" field of the form.
const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;
const SCRIPT_URL = "https://challenges.cloudflare.com/turnstile/v0/api.js";

type TurnstileApi = { render: (element: HTMLElement, options: { sitekey: string }) => void };

export function Turnstile() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!SITE_KEY || !ref.current) return;
    const element = ref.current;
    const api = (window as unknown as { turnstile?: TurnstileApi }).turnstile;
    const render = () => {
      const current = (window as unknown as { turnstile?: TurnstileApi }).turnstile;
      current?.render(element, { sitekey: SITE_KEY });
    };

    if (api) {
      render();
      return;
    }
    let script = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_URL}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = SCRIPT_URL;
      script.async = true;
      document.head.appendChild(script);
    }
    script.addEventListener("load", render);
    return () => script?.removeEventListener("load", render);
  }, []);

  if (!SITE_KEY) return null;
  return <div ref={ref} className="my-4" />;
}
