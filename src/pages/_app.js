import "@/styles/globals.css";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";

export default function App({ Component, pageProps }) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.DYNAMIC_CLIENT_ENV_ID,
      }}
    >
      <App />
    </DynamicContextProvider>
  );
}
