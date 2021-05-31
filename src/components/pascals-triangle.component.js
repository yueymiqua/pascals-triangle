import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const PascalsTriangle = (props) => {

  const [currentRow, setCurrentRow] = useState(0);
  const [prevRow, setPrevRow] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(props.numOfRows);
    console.log(counter);
  },[counter]);

  return (
    <div>
      <div>{props.numOfRows}</div>
      <Link to='/'>
        <button className="btn btn-primary">Back to Home Page</button>
      </Link>
    </div>
  )
}

export default PascalsTriangle;