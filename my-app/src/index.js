import React/*, {useState}*/ from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('test'));
//lifecycle method
class Greetings extends React.Component {
    state = { //cannot be a constant; object used by component
        counter : 0
    }

    increament = () => {//method to increase the value of state
        this.setState({counter: this.state.counter+1});
    }

    componentDidMount() { //Method to initialize the state value
        this.setState({counter: 42});
    }

    render(){//method to render a class component
        return <div>
            <p>{this.state.counter}</p>
            <button onClick={this.increament}>Button</button>
        </div>;
    }
} 

const el = <Greetings />
root.render(
    el
);

//Learning hooks !! counter apps using hooks
// function Greetings(){
//     const [counter, setCounter] = useState(0);
    
//     function increament(){
//         setCounter(counter + 1);
//     }
//     return <div>
//         <p>{counter}</p>
//         <button onClick={increament}>Button</button>
//     </div>
// }

// const el = <Greetings />
// root.render(
//     el
// )

//counter app and changing state with onclick
// class Greetings extends React.Component {
//   state = {
//     counter : 0
//   };
//   increase = () => {
//     this.setState(
//       {counter : this.state.counter + 1}
//     );
//   }
//   render(){
//     return <div>
//       <p>{this.state.counter}</p>
//       <button onClick={this.increase}>Button</button>
//     </div>;
//   };
// }
// const el = <Greetings />;
// root.render(
//     el
//   );


//states
// class Greetings extends React.Component {
//   state = {
//     name : "john"
//   }
//   render(){
//     return <h1>Hello, {this.state.name}</h1>
//   }
// }
// const el = <Greetings name="William"/>
// root.render(
//     el
//   );

//probs
// function Greetings(probs){
//   return <h1>Hello, {probs.name}</h1>
// }
// const el = <Greetings name="William"/>
// root.render(
//   el
// );

//class component
//class Hello extends React.Component {
//   render() {
//     return <h1>Hello world.</h1>;
//   }
// }
// const el = <Hello />; 
// root.render(
//   el
// );


//Functional components
// /*function Hello(){
//   return <h1>Hello world</h1>
// }
// const el = <Hello />
// root.render(
//   el
// );*/

//Jsx
// /*let counter = 0;
// function show(){
//   counter++;
//   const el = <h1>{counter}</h1>;
//   root.render(
//     el
//   );
// }
// setInterval(show, 1000);
// */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
