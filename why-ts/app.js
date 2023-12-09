// api url
let url = 'https://jsonplaceholder.typicode.com/users/1';

// DOM
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const address = document.querySelector('#address');

// user data
/** @type {User} */
let user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} Data 
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @typedef {object} User
 * @property {Data} data
 */

/**
 * 
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

function startApp() {
  fetchUser()
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