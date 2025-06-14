//ES6

class User {
 constructor(usrrname, loginCount, isLoggedIn) {
  this.username = usrrname;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
 }

encryptPassword(password) {

return `${this.password} abc`

}

changeUserName() {
    return `${this.username} changed`
}
}

const user1 = new User("girish", 9, true);
console.log(user1.encryptPassword());


//behind the scenes
// const user1 = Object.create(User.prototype);

function User2(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}
User2.prototype.encryptPassword = function(password) {
    return `${this.password} abc`;
};
User2.prototype.changeUserName = function() {
    return `${this.username} changed`;
};
const user2 = new User2("girish", 9, true);
console.log(user2.encryptPassword());
console.log(user2.changeUserName());