import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Router';
import store from './store/index';


const App = () => {

  return (
    <>   
    <BrowserRouter>    
      <Provider store = {store}>
        <Router/>
      </Provider>  
      </BrowserRouter> 
    </>
  );
}

export default App;
