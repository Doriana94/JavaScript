const isLogged = true;

function login(isLogged) {
    return new Promise((resolve, reject) => {
         setTimeout(() => {
    if (isLogged === true) {
      resolve(Math.random());
    } else {
      reject("Not Logged in!");
    }
  }, 1000);
    });
}

function user(number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
    if (number > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject("The number is not greater than 0.5");
    }
  }, 2000);  
    });
  }


login(isLogged)
.then((value) => {
    console.log(value);
    return user(value);
  })
.then((resolve)=>{console.log(resolve)})
.catch((error) =>{console.log(error)});