import React from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Customers from './features/Customers';
import './App.css';
import MainFooter from './components/Footer';
import MainHeader from './components/MainHeader';
import MainWrapper from './components/MainWrapper';
import GlobalStyle from './core/GlobalStyles';
import CustomerDetail from './features/CustomerDetail';


function App() {
  return (
    <div className="App">

      <MainWrapper>
        <MainHeader />
        <Router>
          <Routes>
            <Route path="/" caseSensitive={false} element={<Customers />} />
            <Route path="/customer-details" caseSensitive={false} element={<CustomerDetail />} />
          </Routes>
        </Router>
        <MainFooter />
      </MainWrapper>
      <GlobalStyle />
    </div>
  );
}

export default App;
