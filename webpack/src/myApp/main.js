import '../style.scss';
import $ from 'jquery';
import userService from './userService';
var users = userService.getAll();
users.forEach(function(user) {
  $('#list').append(`<li>${user.name}</li>`);
});