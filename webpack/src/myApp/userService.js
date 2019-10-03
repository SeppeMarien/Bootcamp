// a commonJS module
function userService() {
  this.getById = function(id) {
    return { id: 123, name: 'peter' };
  };
  this.getAll = function() {
    return [{ id: 123, name: 'peter' }, { id: 222, name: 'robbert' }];
  };
}
module.exports = new userService();