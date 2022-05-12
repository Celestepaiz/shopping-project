import "./App.css";
import { legacy_createStore as createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { basketReducers } from "./store/reducers";
import BasketList from "./components/BasketList.jsx";

const rootReducer = combineReducers({
  basket: basketReducers,
});

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BasketList />
      </Provider>
    </div>
  );
}

export default App;
