import WalletContextProvider from '../components/WalletContextProvider';
import { ShowFormModalProvider } from '../context/show-form';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <WalletContextProvider>
      <ShowFormModalProvider>
        <Component {...pageProps} />;
      </ShowFormModalProvider>
    </WalletContextProvider>
  );
}

export default MyApp;
