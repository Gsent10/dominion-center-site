import Head from 'next/head'
import Image from 'next/image'

import{ Hero, Livestream, Programs, FirstFruit, GivingTestimony, Footer } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>RCCG Dominion Center</title>
        <meta name="description" content="Offical website for RCCG Dominion Center Church" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap" rel="stylesheet" />
      </Head>

      <Hero />
      <Livestream />
      <Programs />
      <FirstFruit />
      <GivingTestimony />
      <Footer />
    </div>
  )
}
