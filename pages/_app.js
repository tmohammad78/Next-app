import { wrapper } from "../redux/store";
import "../src/Styles/main.scss";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
