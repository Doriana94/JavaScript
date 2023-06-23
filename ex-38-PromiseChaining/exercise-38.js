const isLogged = true;

const firstisLogged = (isLogged) => {
    if (isLogged) {
        return 0.7;
    } else {
        return ('Is Logged is false');
    }
}

 const secondisLogged = (number) => {
    if (number > 0.5) {
        return {name: 'John', age: 24};
    } else {
        return  ('Is Logged is false');
    }
 }

 const Logged = secondisLogged(firstisLogged(isLogged));

 console.log(Logged);