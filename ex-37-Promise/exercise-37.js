const number = 15;

const checkNumber  = (number) => {
    return new Promise((resolve, reject) => {
    if (number > 10) {
    return resolve ('The number is greater than 10');
} else {
    return  reject ('The number is minor o equal than 10');
}
});
}


checkNumber(number) 
.then((result) => {
    console.log(result);
})
.catch((error) => {
console.log(error);
});
