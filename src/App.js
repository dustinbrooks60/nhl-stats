import React, {Component} from 'react';
import Teams from './components/Teams';
import Roster from './components/Roster';
import Mika from './components/Mika';
import MikaStats from './components/MikaStats';
import Intro from './components/Intro';
import NextGame from './components/NextGame';
import './App.css';

class App extends Component{
  render(){
    return (
      <div>
        <Intro />
        {/* <Teams /> */ }
        <NextGame />
        <Roster />
        { /* <MikaStats /> */ }
      </div>
    );
  }
}

export default App;
