import React, { Component } from 'react';
import Editor from './Editor';
import BackgroundGrid from './BackgroundGrid';
import './App.css';

class App extends Component {
  cellWidth = 15;
  cellHeight = 20;
  
  render() {
    return (
      <div className="App">
        <BackgroundGrid width={this.cellWidth} height={this.cellHeight} />
        <Editor width={this.cellWidth} height={this.cellHeight} />
      </div>
    );
  }
}

export default App;
