import logo from './logo.svg';
import './App.css';
import LayoutContainer from './Containers/LayoutContainer';
import { Provider } from 'react-redux';
import store from './Redux/store'
function App() {
  return (
    <Provider store={store}>
      <LayoutContainer />
    </Provider>
  );
}

export default App;
