global.fullname = 'John Doe';

const obj = {
  fullname: 'Colin Ihrig',
  prop: {
    fullname: 'Aurelio De Rosa',
    getFullname: function() {
      return this.fullname;
    }
  }
};

//const test = obj.prop.getFullname.bind(obj.prop);
//console.log(obj.prop.getFullname.call(obj.prop));

const test = obj.prop.getFullname;
console.log(test());