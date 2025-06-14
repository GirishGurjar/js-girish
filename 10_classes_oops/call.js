function SetUsername(username) {

    //complext db calls
    this.username = username 
    console.log("called");
    
}

function createUser( username, email, password) {
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const coffee = new createUser("girish","g@gmail.com, 112233")
console.log(coffee);