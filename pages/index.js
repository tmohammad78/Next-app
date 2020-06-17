import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { END } from "redux-saga";
import { wrapper } from "../store";
import { loadData, startClock, tickClock } from "../actions";
// import Page from "../components/page";
import Order from "../src/Container/Order";
import AuthRequire from "../src/Hoc/Auth/index";

const Index = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!logged) {
  //     Router.push("/auth");
  //   }
  // });
  useEffect(() => {
    dispatch(startClock());
  }, [dispatch]);

  const temp = AuthRequire(Order);
  debugger
  return <div>{temp}</div>;
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(tickClock(false));

  if (!store.getState().placeholderData) {
    store.dispatch(loadData());
    store.dispatch(END);
  }

  await store.sagaTask.toPromise();
});

export default Index;
