import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StoreProvider } from "../store/Index";
import { TodoListContext } from "../store/todoListContext";

const store = new TodoListContext();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />
    </StoreProvider>
  );
};

export default MyApp;
