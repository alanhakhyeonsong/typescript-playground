// api url
let url = 'https://jsonplaceholder.typicode.com/users/1';

// DOM
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const address = document.querySelector('#address');

let user = {};

function startApp() {
  axios.get(url)
    .then(function (response) {
      console.log(response);
      user = response.data;

      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.address.street;
    })
    .catch(function (error) {
      console.error(error);
    })
}

startApp();