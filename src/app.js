import React from 'react';
import ReactDOM from 'react-dom';
import Universal from './components/Universal'; 
import './styles/styles.scss';
import 'normalize.css';
ReactDOM.render(<Universal/>, document.getElementById('app'));
// class Header extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

// class Options extends React.Component {    
    
//     // constructor(props){
//     //     super(props);
//     //     this.handelremoveall = this.handelremoveall.bind(this);
//     // }
//     // handelremoveall () {
       
        
//     //     console.log(this.props.options);
        
//     //     //alert("removed all elements");
//     // }
//     render (){
//         return (
//               <div>
                
//                 <h3>{this.props.options.length}</h3>
//                 {
//                 this.props.options.map((op) =><p key = {op}> element : {op}</p>)
//                 }
//                 <div>
//                 <button onClick = {this.props.handelremoveall}>remove all elements from options</button>
//                 </div>
//                 <Option/>
//             </div>
//         )
//     }
// }

// class Option extends React.Component{
//     render(){
//         return (
//             <div>
//                 we are in option
//             </div>
//         )
//     }
// }

// class Action extends React.Component{
//         render(){
//             return (
//                 <button 
//                  disabled = {this.props.options.length == 0}
//                  onClick = {this.props.chooserandome}> what shoud i do </button>

//             );
//         };
// }


