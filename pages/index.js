import Head from 'next/head';
import { Diet, FitLand, Footer, Sport } from '../components';

export default function Home () {
  return (
    <>
      <Head>
        <title>
          فیت لند | خانه
        </title>
      </Head>
      <FitLand />
      <Diet />
      <Sport />
      <Footer />
    </>
  )
}
