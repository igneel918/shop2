import React from "react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import ShopNavigator from "./src/navigation/ShopNavigator";
import AuthReducers from "./src/redux/reducers/AuthReducers";
import thunk from "redux-thunk";

const store = createStore(AuthReducers, applyMiddleware(thunk));
export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
