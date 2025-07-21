function greet(name) 
{
    return ' hello, ${name} ! ' ;

}
//arrow fuction equivalent 
const greetArrow = (name) => ' hello , ${name} !' ;
//usage
console.log(greet("charan"));
console.log(greetArrow("charan"));

const checkoddevenArrow = (num) => {
    console.log(num%2 === 0 ? "is even": "is odd");

};
checkoddevenArrow(7);
checkoddevenArrow(12);
 function checkoddeven(num) {
    console.log(num%2 === 0 ? "is even ": "is odd")
 }