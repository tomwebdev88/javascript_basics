// Javascript Array 
var myArray = ['a','b','c','d'];
myArray.push('end');
myArray.unshift('beginning');

console.log(myArray);

// ES-6

var myArray_2 = ['a', 'b', 'c', 'd'];

myArray_2 = ["start",...myArray_2];
myArray_2 = [...myArray_2, "end"];
myArray_2 = ["start",...myArray_2, "end"];

// Private Variable in JS

function secretVariable() {
    var private = "super secret codde";
    return function() {
        return private;
    }
}

var getPrivateVariable = secretVariable();

console.log(getPrivateVariable());

// What is the output?  Closures

var num = 4;
function outer() {
    var num =2;
    function inner() {
        num++;
        var num = 3;
        console.log(num);
    }
    inner();
}
outer();

// What is the output? Returns a String

console.log(typeof typeof 1);

// What is the output?  Returns Undefined, John Doe, Undefined
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function () {
        return this._name;
    }
};

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());