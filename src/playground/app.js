class Universal extends React.Component{ 
    constructor(props){
        super(props);
        this.handelremoveall = this.handelremoveall.bind(this);
        this.chooserandome = this.chooserandome.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.removeoption = this.removeoption.bind(this);
        this.state = {
            options : props.options
        }   
    }

    componentDidMount(){
        try{
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            
            if (options){
                this.setState(()=> ({options}));
            }
        } catch (e) {
            // Do nothing at all if there is any error
        }
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    } 

    handelremoveall(){
        this.setState (() => ({ options : [ ]}));
        // {
        //     return {
        //         options : []
        //     };
        // });
    }
    chooserandome(){
        // this.setState(()=>
        // {
        //     return {
                const num = Math.floor(Math.random() * this.state.options.length);
                const msg = this.state.options[num];
                alert(msg + num);

        //     };
        // });
    }
    onFormSubmit(option){
        if (!option){
            return "enter valid value to add item";
        } else if (this.state.options.indexOf(option) > -1){
            return "this option already exists";

        }
        this.setState((prevState) => ({options : prevState.options.concat(option)}));
        
    }
    removeoption(optiontoremove){
        this.setState((prevState)=> ({
        options : prevState.options.filter((option) => optiontoremove !== option)
        }));
    }
    render(){
        const title = " this is Indecision App";
        const subtitle = " Based on React";
        //const options = ["sda","dsa",];
        return(
            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <Action options = {this.state.options }
                chooserandome = {this.chooserandome}/>
                <h3><Options options = {this.state.options } 
                    handelremoveall = {this.handelremoveall}
                    removeoption = {this.removeoption}/>
                </h3>
                <Addoption onFormSubmit = {this.onFormSubmit}/>

            </div>        
        );
    }
}
Universal.defaultProps = {
    options : []
};

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
const Header =(props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}
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
const Options = (props) => {
    return (
        <div>       
          <h3>{props.options.length}</h3>
          {/* {
          props.options.map((op) =><p key = {op}> element : {op}</p>)
          } */}
          <div>
          <button onClick = {props.handelremoveall}>remove all elements from options</button>
          {props.options.length == 0 && <p>please add an option to get started</p>}
          </div>
          {props.options.map((op) => (
                <Option 
                    key = {op}
                    optionText = {op}
                    removeoption = {props.removeoption}
          
                />))}
      </div>
  )
}
// class Option extends React.Component{
//     render(){
//         return (
//             <div>
//                 we are in option
//             </div>
//         )
//     }
// }
const Option = (props) =>{
    return (
        <div>
            
            {props.optionText + "-  -"}
            <button onClick = {(e) =>{
                props.removeoption(props.optionText);                
            }}  
            >
                remove 
            </button>
        </div>
    )
}
class Addoption extends React.Component{
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error : undefined
        };
    }
    onFormSubmit (e)  {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.onFormSubmit(option);

        this.setState(() => ({ error}));
        if (!error){
            e.target.elements.option.value = '';
        }
    };
    render(){   
        return(
            <div >       
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.onFormSubmit}>
                    <input type = "text" name = "option"/>
                    <button> add option</button>
                </form>
            </div>
        )
    }
}
// class Action extends React.Component{
//         render(){
//             return (
//                 <button 
//                  disabled = {this.props.options.length == 0}
//                  onClick = {this.props.chooserandome}> what shoud i do </button>

//             );
//         };
// }
const Action =(props) => {
            return (
            <button 
             disabled = {props.options.length == 0}
             onClick = {props.chooserandome}> what shoud i do </button>
        );

}
ReactDOM.render(<Universal/>, document.getElementById('app'));
