import { NextPage } from 'next';
import Head from 'next/head';
import { BalanceDisplay } from '../components/BalanceDisplay';
import { SendSolForm } from '../components/SendSolForm';
import Hero from '../containers/Hero';
import Nav from '../containers/Nav';
import Products from '../containers/Products';

const Home: NextPage = (props) => {
  return (
    <>
      <Head>
        <title>Wallet-Adapter Example</title>
        <meta name="description" content="Wallet-Adapter Example" />
      </Head>
      {/* <AppBar /> */}
      <Nav />
      <div className="app">
        <Hero />
        <Products />
      </div>
    </>
  );
};

export default Home;
