const ul = document.querySelector('ul');

async function newFetch(url) {
  try {
    const response = await fetch (url);
    const data = await response.json();

    data.map(element => {
        const li = document.createElement('li')
        li.innerText = element.title
         ul.appendChild(li)
    })
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
 

newFetch('https://jsonplaceholder.typicode.com/todos');