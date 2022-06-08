import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/store'
import { BrowserRouter } from 'react-router-dom';
import { RouteWrapper } from './RouteWrapper';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouteWrapper />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
