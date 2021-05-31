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
        <div className="container center">
          <h3>Select Number for Pascal Triangle</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <Link to={'/pascalstriangle'}>
                    <button className="btn btn-secondary spaced" onClick={() => setNumOfRows(1)}>1</button>
                  </Link>
                </td>
                <td>
                  <Link to={'/pascalstriangle'}>
                    <button className="btn btn-secondary spaced" onClick={() => setNumOfRows(2)}>2</button>
                  </Link>
                </td>
                <td>
                  <Link to={'/pascalstriangle'}>
                    <button className="btn btn-secondary spaced" onClick={() => setNumOfRows(3)}>3</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to={'/pascalstriangle'}>
                    <button className="btn btn-secondary spaced" onClick={() => setNumOfRows(4)}>4</button>
                  </Link>
                </td>
                <td>
                  <Link to={'/pascalstriangle'}>
                    <button className="btn btn-secondary spaced" onClick={() => setNumOfRows(5)}>5</button>
                  </Link>
                </td>
                <td>
                  <Link to={'/pascalstriangle'}>
                    <button className="btn btn-secondary spaced" onClick={() => setNumOfRows(6)}>6</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to={'/pascalstriangle'}>
                    <button className="btn btn-secondary spaced" onClick={() => setNumOfRows(7)}>7</button>
                  </Link>
                </td>
                <td>
                  <Link to={'/pascalstriangle'}>
                    <button className="btn btn-secondary spaced" onClick={() => setNumOfRows(8)}>8</button>
                  </Link>
                </td>
                <td>
                  <Link to={'/pascalstriangle'}>
                    <button className="btn btn-secondary spaced" onClick={() => setNumOfRows(9)}>9</button>
                  </Link>
                </td>
              </tr>
            </tbody>
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
