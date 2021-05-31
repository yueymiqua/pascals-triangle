import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import PascalsTriangle from './components/pascals-triangle.component';

function App() {
  
  const [numOfRows, setNumOfRows] = useState(0);
  
  return (
    <Router>
      <Route path='/' exact>
        <div className="container">
          <h3>Select Number for Pascal Triangle</h3>
          <table className="table">
            <tr>
              <td>
                <Link to={'/pascalstriangle'}>
                  <button className="btn btn-secondary" onClick={() => setNumOfRows(1)}>1</button>
                </Link>
              </td>
              <td>
                <Link to={'/pascalstriangle'}>
                  <button className="btn btn-secondary" onClick={() => setNumOfRows(2)}>2</button>
                </Link>
              </td>
              <td>
                <Link to={'/pascalstriangle'}>
                  <button className="btn btn-secondary" onClick={() => setNumOfRows(3)}>3</button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to={'/pascalstriangle'}>
                  <button className="btn btn-secondary" onClick={() => setNumOfRows(4)}>4</button>
                </Link>
              </td>
              <td>
                <Link to={'/pascalstriangle'}>
                  <button className="btn btn-secondary" onClick={() => setNumOfRows(5)}>5</button>
                </Link>
              </td>
              <td>
                <Link to={'/pascalstriangle'}>
                  <button className="btn btn-secondary" onClick={() => setNumOfRows(6)}>6</button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to={'/pascalstriangle'}>
                  <button className="btn btn-secondary" onClick={() => setNumOfRows(7)}>7</button>
                </Link>
              </td>
              <td>
                <Link to={'/pascalstriangle'}>
                  <button className="btn btn-secondary" onClick={() => setNumOfRows(8)}>8</button>
                </Link>
              </td>
              <td>
                <Link to={'/pascalstriangle'}>
                  <button className="btn btn-secondary" onClick={() => setNumOfRows(9)}>9</button>
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </Route>
      <Route path='/pascalstriangle' exact>
        <PascalsTriangle numOfRows={numOfRows}/>
      </Route>
    </Router>
  );
}

export default App;
