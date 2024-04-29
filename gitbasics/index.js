console.log("Let's learn some git basics with Piyush Garg");

const age = 20;
console.log("My age is :" + age);

const sym = Symbol("Key1");

const myObj = {
  firstName: "Akshay",
  userEmail: "akshay@gmail.com",
  phoneNo: 8857816258,
  isLoggedIn: true,
  [sym]: "NewSymbol",
  userArray: [1, 2, 3, 4],
  userObj: { uname: "tyler@durden", ualias: "Fight Club" },
};

console.log(myObj);

const fun = function () {
  console.log("Hellow Batman's");
};

console.log(fun());
