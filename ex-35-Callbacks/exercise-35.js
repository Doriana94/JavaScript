function repeatHello(callback) {
    setInterval(callback, 1000);
}

 const callback = () => {
console.log('Hello');
}

repeatHello(callback);



/*La funzione callback è definita come un arrow function, perchè l'arrow function non associa il proprio valore, ma eredita il valore del contesto stesso. Ciò permette di accedere al contesto circostante, che siano funzioni o variabili, senza problemi. 
Utilizzando un' arrow function come callback ci assicuriamo che la funzione venga eseguita correttamente e allo stesso tempo rendiamo il codice più leggibile.*/