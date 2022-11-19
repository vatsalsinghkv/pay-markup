import { NextPage } from 'next';
import Head from 'next/head';
import { SendSolForm } from '../components/SendSolForm';
import Hero from '../containers/Hero';
import Nav from '../containers/Nav';
import SendSolModal from '../components/SendSolModal';
import Products from '../containers/Products';
import { useContext } from 'react';
import ShowFormModalContext from '../context/show-form';

const Home: NextPage = (props) => {
  const { price } = useContext(ShowFormModalContext);
  return (
    <>
      <Head>
        <title>Wallet-Adapter Example</title>
        <meta name="description" content="Wallet-Adapter Example" />
      </Head>
      <SendSolModal price={price} />
      <Nav />
      <div className="app">
        <Hero />
        <Products />
      </div>
    </>
  );
};

export default Home;
