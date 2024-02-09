import type { AppProps } from "next/app";
import { Header } from "@/components/Header";
import "../assets/css/plugins.css";
import "../assets/css/plugins.css";
import "../assets/css/style.css";
import { Footer } from "@/components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg pt-80">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
