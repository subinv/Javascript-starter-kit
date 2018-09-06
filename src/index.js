import './index.css';
import numeral from 'numeral';
import { getUsers, deleteUser } from './api/userApi';

const value = numeral(1000).format('$0,0.00');
console.log(`I would pay ${value} for this`); // eslint-disable-line no-console

getUsers().then(result => {
  let userBody = '';
  result.forEach(user => {
    userBody += `<tr>
    <td><a href='#' data-id='${user.id}' class='deleteUser'>Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
    </tr>`
  });
  global.document.querySelector('#users').innerHTML = userBody;

  const deleteLinks = global.document.querySelectorAll('.deleteUser');
  //Must use array.from to create a real array from a dom collection
  //querySelectorAll returns an array like object
  Array.from(deleteLinks, link => {
    link.onclick = (event) => {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes['data-id'].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    }
  });
});
