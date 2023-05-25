import "@/styles/globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Newsletter } from "@/components/Nyhedsbrev/Newsletter.jsx";
import { Sponsors } from "@/components/Sponsors/Sponsors.jsx";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const { data } = pageProps;

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Germania+One&family=Pirata+One&family=Sen:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header data={data} />
      <Component {...pageProps} />
      <Newsletter></Newsletter>
      <Sponsors></Sponsors>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const apiUrl = "https://sunrise-innovative-pediatrician.glitch.me/bands";

  const res = await fetch(apiUrl);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
