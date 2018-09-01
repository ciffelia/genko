import React, { Component } from 'react';
import './BackgroundGrid.css'

class BackgroundGrid extends Component {
  constructor() {
    super();
    this.state = {gridRows: []};
  }
  
  componentDidMount() {
    let gridItems = new Array(this.props.height);
    for(let i = 0; i < this.props.height; i++) {
      gridItems[i] = new Array(this.props.width);
    }

    for (let y = 0; y < this.props.height; y++) {
      for (let x = 0; x < this.props.width; x++) {
        const style = {
          gridRowStart: y + 1, gridRowEnd: y + 1,
          gridColumnStart: x + 1, gridColumnEnd: x + 1,
        };
        gridItems[y][x] = <div key={[x, y]} style={style}>{x}, {y}</div>;
      }
    }

    this.setState({gridRows: gridItems});
  }
  
  render() {
    return (
      <div className="BackgroundGridContainer">
        {this.state.gridRows}
      </div>
    );
  }
}

export default BackgroundGrid;
