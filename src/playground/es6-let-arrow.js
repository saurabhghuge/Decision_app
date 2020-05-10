console.log('arrow'); 
const fullName = "saurabh ghuge";
const firstname = (fullName) => fullName.split(" ")[0]
console.log(firstname(fullName));

const user = {
    ar : [1,5],
    b : 3,
    printmul(){
        return this.ar.map((ele) => ele * this.b);
    }
};
console.log(user.printmul());
console.log("hafksdh")