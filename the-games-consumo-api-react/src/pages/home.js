import Container from "@/components/Container";
import Footer from "@/components/Footer";
import HomeContent from "@/components/HomeContent";
import Menu from "@/components/Menu";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Games &copy; 2024</title>
        <meta name="description" content="Consumo de uma API de games em React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu/>
        <Container>
          <HomeContent/>
        </Container>
      </main>
      <Footer />
    </>
  );
}
