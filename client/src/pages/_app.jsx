import { StateProvider } from "@/context/StateContext";
import reducer, { initialState } from "@/context/StateReducers";

import "@/styles/globals.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
        <title>WassUP</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </StateProvider>
  );
}

export default App;