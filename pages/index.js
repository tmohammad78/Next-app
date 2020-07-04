import { useEffect, useState } from "react";
import { wrapper } from "../store";
import {useSelector  ,useDispatch } from 'react-redux';
// import Page from "../components/page";
import Router from 'next/router'
import Order from "../src/Container/Order";
import { checkToken } from '../redux/Auth/action';
import PrivateRoute from "../src/Hoc/Auth/index";
import "../src/Styles/main.scss";

const Index = () => {
  const auth = useSelector(state => state.auth);

  return (
      <div>
       Hi
      </div>

  );
};



export default PrivateRoute(Index);
