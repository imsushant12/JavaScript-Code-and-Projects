class User
{
    constructor(username, roll)
    {
        this.name = username;
        this.roll = 28;
    } 

    get getInfo()
    {
        return this.name;
    }

    set setInfo(username)
    {
        this.name = username;
    }

    getter()
    {
        return this.roll;
    }
};

var newuser = new User("Sushant", 181);

console.log(newuser.getInfo);
console.log(newuser.getter());