import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

const PascalsTriangle = (props) => {

  const [counter, setCounter] = useState(0);
  const [pascalsArray, setPascalsArray] = useState([]);
  const [xCoordinate, setXCoordinate] = useState(0);
  const [yCoordinate, setYCoordinate] = useState(0);

  const handle = useFullScreenHandle();

  useEffect(() => {
    setCounter(props.numOfRows);
    setPascalsArray(populatePascalsArray(counter));
  },[counter, props.numOfRows]);

  const populatePascalsArray = (pascalsNumber) => {
    let pascalsArray=[];
    let pascalsRow=[];
    for(let i=0; i < pascalsNumber; i++) {
      if(i===0) {
        pascalsArray.push([1]);
      } else {
        for(let j=0; j<=i; j++) {
          if(j===0) {
            pascalsRow.push(1);
          } else if(j===i) {
            pascalsRow.push(1);
            pascalsArray.push(pascalsRow);
            pascalsRow=[];
          } else {
            pascalsRow.push(pascalsArray[i-1][j-1] + pascalsArray[i-1][j]);
          }
        }
      }
    }
    return pascalsArray;
  }

  const handleOnclick = (y, x) => {
    setXCoordinate(x);
    setYCoordinate(y);
  }

  return (
    <div>
      <div className="fullscreen-container">
        <FullScreen handle={handle}>
          <Link to='/'>
            <button className="btn btn-secondary fixed">Close</button>
          </Link>
          <div className="coordinate">Current X Y: <span className="x-coordinate">X{xCoordinate}</span><span className="y-coordinate"> Y{yCoordinate}</span></div>
          <div className="triangle-container">
            <div className="center">{pascalsArray.map((element, element_id) => (
              <div className="pascal-row triangle" key={element_id}>{element.map((num, num_id) => (
                <button className={`spaced-row ${num_id % 2 === 0?" blue":" green"}`} key={num_id} onClick={() => handleOnclick(element_id, num_id)}>{num}</button>
              ))}</div>
            ))}</div>
          </div>
        </FullScreen>
      </div>
      <button className="fullscreen-btn" onClick={handle.enter}>
        Enter fullscreen
      </button>
    </div>
  )
}

export default PascalsTriangle;