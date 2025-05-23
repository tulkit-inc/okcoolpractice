import "@/styles/main.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Lenis from "lenis";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <Component {...pageProps} />;
}
