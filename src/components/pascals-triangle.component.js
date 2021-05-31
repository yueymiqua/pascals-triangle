import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const PascalsTriangle = (props) => {

  const [counter, setCounter] = useState(0);
  const [pascalsArray, setPascalsArray] = useState([]);

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

  return (
    <div>
      <Link to='/'>
        <button className="btn btn-secondary">Close</button>
      </Link>
      <div className="center">{pascalsArray.map((element, element_id) => (
        <div className="pascal-row" key={element_id}>{element.map((num, num_id) => (
          <button className="spaced" key={num_id}>{num}</button>
        ))}</div>
      ))}</div>
      
    </div>
  )
}

export default PascalsTriangle;