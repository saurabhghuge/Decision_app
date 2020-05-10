console.log('App.js is running bro');

// JSX - JavaScript XML
const user = {
    name : "luke",
    age : 19,
    loc: "Pune",
    saa:[]
};
//writing funtion to check wheter location exist or not
function getlocation (location){
    if (location){
    return <p> Location : {location}</p>
    }

}
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option){
        user.saa.push(option);
        e.target.elements.option.value = '';
        render();

    }
};
const chooseran=() =>{
    const num = Math.floor(Math.random() * user.saa.length);
    const msg = user.saa[num];
    alert(msg);
};
const resetb = () => {
    user.saa = [];
    render()
}
var appRoot = document.getElementById("app"); 
const render = () => {
    const template =  (
        <div>
            <h1>Name :{user.name ? user.name : "Anonymous "}</h1>
            {//if username exist then print username or print Anonymous
            }
            {(user.age && user.age >= 18 ) && <p>Age:{user.age
            //this is boolean  operaton example 
        }</p>} 
            {getlocation(user.loc)}
            <p>{user.saa.length > 0 ? " here are " : " no  "
            //this is ternery operator example
            } </p>
            <button onClick = {resetb}>reset all </button>
            <button disabled = {user.saa.length == 0} onClick = {chooseran}> what shoud i do </button>
            <p>{user.saa.length} </p> 
            <p>{user.saa}</p>
            {
                user.saa.map((op) => {
                    return <p key = {op}> element : {op}</p>;
                }
                )
            }
            <form onSubmit = {onFormSubmit}>
                <input type = "text" name = "option"/>
                <button> add option</button>
            </form>

        
        </div>
    );
    
    ReactDOM.render(template,appRoot);       
};
render();
    //<h1>This is JSX from app.js</h1>;
var trailtemp = (
    <div>
        <h1> saurabh ghuge</h1>
        <p>age : 21  </p>
        <p>locarion : Mumbai</p>
    
    </div>
);

//var template = /*#__PURE__*/React.createElement("p", null, "This is JSX from app.js");  

// ReactDOM.render(template,appRoot);       
