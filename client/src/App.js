import { Container } from 'reactstrap';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import  ItemModal  from './components/ItemModal';

import { Provider } from 'react-redux';
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Component } from 'react';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar />
      <Container>
      <ItemModal/>
      <ShoppingList />
      </Container>
    </div>
    </Provider>
  );
}

export default App;
