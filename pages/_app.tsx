import { wrapper } from "../redux/store";
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
// import with  from 'next-redux-saga';
import {makeStore as store} from '../redux/store';
import "../src/Styles/main.scss";

function App({ Component, pageProps , store}:any) {
  return (
    // <Provider store={store}>
    <Component {...pageProps} />
    // </Provider>
  );
}

App.getInitialProps = async ({Component ,ctx}) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps({ctx}) : {};
  return { pageProps }; 
}

// class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
//     return { pageProps };
//   }
// }
export default withRedux(store)(App);
