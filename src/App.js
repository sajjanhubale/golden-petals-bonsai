import React, {Component} from 'react'
import './App.css';
import Header from './components/Header'
import TitlebarGridList from './components/TreeList';
import MyButton from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TitlebarGridList />
        <MyButton/>
      </div>
    );
  }
}

export default App;