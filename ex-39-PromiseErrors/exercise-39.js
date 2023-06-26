class CustomError extends Error{
    constructor(name) {
        super(name);
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

try {
login(true)
 .then((randomNumber) => {
    console.log('Locked in successfully!');
    console.log('RandomNumber:', randomNumber);
    return user(randomNumber);
})
.then((userObject) =>{
  console.log('User object:', userObject);
})
.catch ((error) => {
   if (error instanceof CustomError) {
    console.log('Custom Error:', error.message);
   } else {
    console.log('Unknow Error:', error);
   }
  })
  .finally (() => {
    console.log('Process completed');
  });
} catch (error) {
  console.log('Unhandled Error:', error);
}

  


