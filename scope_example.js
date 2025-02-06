const hello = "hello";

function printArgument(hello) {
  console.log(`hello is ${hello}`);
}

function printConst() {
  console.log(`hello is ${hello}`);
}

function changeHelloValueAndPrint() {
  let hello = "hi";
  console.log(`hello is ${hello}`);
}

printArgument(); // hello is undefined
printArgument("world"); // hello is world
printConst(); // hello is hello
changeHelloValueAndPrint(); // hello is hi
printConst(); // hello is hello

function exampleFunction() {
  console.log("example run");
  throw new Error("oh no");
}

try {
  exampleFunction();
} catch (e) {
  console.error(e);
}

// equivalent to:

// (function exampleFunction2() {
//   console.log("example self invoking");
//   throw new Error("oh no 2");
// })();

function multiplyButNotBy2(a, b) {
    if (a === 2 || b === 2)
    {
        throw new Error("I said no 2");
    }

    console.log(a * b);
}

multiplyButNotBy2(13, 5);
multiplyButNotBy2(2, 5);

console.log("finished!")
