import React, { Component } from 'react';
import Square from './Square';
import './App.css';

class Grid extends Component {
  constructor() {
    super()
  }

  render() {

    //generate map 
    const generateSquares = this.props.grid.map((item,index) => {
      let xindex = index;
      return <div className="squareRow">
      {item.map((y,index) => {
        let newId = xindex.toString() + "-" + index.toString();
        //visibility:not black
        var visibility = false;
        var verticalDistance = Math.abs(xindex - this.props.userPosition[0]);
        var horizontalDistance = Math.abs(index - this.props.userPosition[1]);
        if(horizontalDistance + verticalDistance < 5) {
          visibility = true;
        }
        //only display a square  from 6 before to 6 after - horizontally and vertically (not same as visibility)
        if(( verticalDistance < 6) && (horizontalDistance < 6)) {
        return <Square key = {newId}
                       value = {y} 
                       visibility = {visibility}
                       level = {this.props.level}/>    
          }
        })
      }
      </div>
    });
    return (
      <div className="Grid">
        {generateSquares}
      </div>
    );
  }
}

export default Grid;
