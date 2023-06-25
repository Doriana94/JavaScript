class CustomError extends Error{
    constructor(params) {
        super(params);
        this.name = 'CustomError';
    }
}

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


login(true)
.then((randomNumber)=>{
    console.log('Locked in successfully!');
    console.log('RandomNumber:', randomNumber);
    return user(randomNumber);
})
.catch((error) =>{
   if (error instanceof CustomError) {
    console.log('Custom Error:', error.message);
   } else {
    console.log('Unknow Error:', error);
   }
})
.then((userObject) =>{
    console.log('User object:', userObject);
})
.catch((error) => {
    console.log('Unhandled Error:', error);
})
.finally(() => {
    console.log('Process completed');
})
