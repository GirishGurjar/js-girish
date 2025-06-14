class User {

    constructor(username){

        this.username = username
    }

    logMe() {
        console.log(`Hello ${this.username}`);
    }

   static createId() {
        return `123`
    }
}

const girish = new User("girish")
//console.log(girish.createId());



 class Teacher extends User {

    constructor(username,email) {

super(username)
this.email = email;

    }
 } 

 const iphone = new Teacher("iphone", "g@gmail.com")
    console.log(iphone.createId());
    ;