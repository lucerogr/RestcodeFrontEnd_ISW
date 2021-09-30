// User class

export default class User {
    constructor(id, userName, email, discriminator, password, token) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.discriminator = discriminator;
        this.password = password;
        this.token = token;
    }
}
