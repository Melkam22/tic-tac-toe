import React, { Component } from 'react';
import Photo from './photo.jpg';
import './App.css';
import Main from './components/main.jsx';

/* const Example = (props) =>{
  console.log(props.age)
  return("Hi")
} */

class App extends Component {

  /* winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
 */
  render() {
    return (
      <>
        <h1>This is Tic-Tac-Toe with React-jsx</h1>
        <img src={Photo} alt="Photo" className="photo" />

        <Main />
        {/* <Main 
        winner={this.winningLines} 
        age="22",
        name="Ashu",
        calcAge={()=>{console.log("hi")}}
      />
      <Example age={12}/> */}
      </>
    );
  }
}

export default App;
