import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
})


export default function App({ Component, pageProps }: AppProps) {
  return (
  <main className={`${sora.variable} font-sora`}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </main>
    
      
  );
}
