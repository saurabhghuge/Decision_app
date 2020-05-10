class Visibilitytoggle extends React.Component {
    constructor(props){
        super(props);
        this.handletogglevisibility = this.handletogglevisibility.bind(this);

        this.state ={
            visibility : false
            //render();
        };
    }
    handletogglevisibility(){
        this.setState((pre) => {
            return{
                visibility : !pre.visibility


            };
        });
    }
    render ()  {
        return(
            <div>
                <h1> this is my toggle</h1>
                <button onClick = {this.handletogglevisibility} >
                    {this.state.visibility ? " hide" : "show"}
                </button>
                {this.state.visibility && (
                    <div>
                        <p> this is content</p>
                    </div>
                )}
            </div>
    );
};

}
ReactDOM.render(<Visibilitytoggle/>,document.getElementById('app'));


// console.log('ssdfffaf');
// let visibility = false;
// const visi =() => {
//     visibility = !visibility;

//     render();
// };


// const render = () => {
//     const maincontent = (
//         <div>
//             <h1> this is my toggle</h1>
//             <button onClick = {visi} >
//                 {!visibility ? " hide" : "show"}
//             </button>
//             {visibility && (
//                 <div>
//                     <p> this is content</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(maincontent,document.getElementById('app'));
// };

// render();