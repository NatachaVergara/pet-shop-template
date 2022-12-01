import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './scss/bootstrap.scss'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import UsePetShopContextProvider from './Context/PetShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <UsePetShopContextProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </UsePetShopContextProvider>

);


reportWebVitals();
