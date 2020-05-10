class Counter extends React.Component{
    //let count = 0;
    constructor (props){
        super(props);
        //let count = 0;
        this.pluscount = this.pluscount.bind(this);
        this.reducecount = this.reducecount.bind(this);
        this.resetcount = this.resetcount.bind(this);
        this.state = {
            count : 0
        }
    }
    componentDidMount(){
        const stringcount = localStorage.getItem("count");
        const count = parseInt(stringcount,10);
        this.setState(()=> ({count}));
        
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.count !== this.state.count){
            localStorage.setItem("count", this.state.count);
            
        }
        
    }
    pluscount(){
        this.setState((prestate) =>{
            return{
                count : prestate.count + 1
            };
        });
        console.log('vojf');

    }
    reducecount(){
        this.setState((prestate) =>{
            return{
                count : prestate.count - 1
            };
        });
        console.log("-1");
        
    }
    resetcount(){
        this.setState((prestate) =>{
            return{
                count : 0
            };
        });
        console.log("reset");
        
    }
    render(){
        return(
            <div>
                <h1>Count :{this.state.count}</h1>
                <button onClick = {this.pluscount}>+1</button>
                <button onClick = {this.reducecount}>-1</button>
                <button onClick = {this.resetcount}>RESET</button>


            </div>
        );
    }
}
// Counter.defaultProps  = {
//     count : 0
// }

ReactDOM.render(<Counter  />,document.getElementById('app'));

// let count = 0;
// const addone = () =>{
//     console.log("addone");
//     count = count + 1 ;
//     console.log(count )
//     renderapp();
    

// };
// const renderapp = () => {
//     const temptwo = (
//         <div>
//             <h1>count :{count}</h1>
//             <button onClick = {addone}> +1 ka button {count} </button>
//             <h1>count :{count}</h1>
//         </div>

//     );
//     ReactDOM.render(temptwo,appRoot);
// };
// renderapp();
