import { all } from "redux-saga/effects";
import registerSaga from "./auth";

export function* rootSaga() {
    yield all([
        registerSaga(),
    ]);
}