const user = {
    username: 'john-doe',
    password: 'test1234',
    email: 'john@gmail.com',
    age: 45,
    city: 'Chicago',
    credentials: function () {
        return [this.username, this.password];
    }
};

// Object destructuring - NOT PREFERRED
// const username = user.username;
// const password = user.password;
// const email = user.email;

// PREFFERED WAY of object destructuring -> order does not matter
const {username, password, email} = user;

console.log(username, password, email);

console.log(user.credentials());