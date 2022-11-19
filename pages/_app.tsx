import WalletContextProvider from '../components/WalletContextProvider';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <WalletContextProvider>
      <Component {...pageProps} />;
    </WalletContextProvider>
  );
}

export default MyApp;
