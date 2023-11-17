import type { AppProps, NextWebVitalsMetric } from 'next/app';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}


export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}
