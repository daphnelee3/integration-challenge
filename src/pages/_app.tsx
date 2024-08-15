import type { AppProps } from 'next/app';
import { BankContextProvider } from '../context/BankContext';
import '@/styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BankContextProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </BankContextProvider>
  );
}
