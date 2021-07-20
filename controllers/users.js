let users = [];

export const register = (req, res) => {
    //console.log('POST ROUTE REACHED');

    const user = req.body;

    if(user.firstname && user.lastname && user.email && user.password){

        users.push(user);

        res.send(`Dear ${user.firstname} your account has been created`);

    }else{

        if(user.firstname == null) res.send("enter firstname");

        if(user.lastname == null) res.send("enter lastname");

        if(user.email == null) res.send("enter email");

        if(user.password == null) res.send("enter password");
        
    }

    
}

export const getUsers = (req, res) => {
    res.send(users);
}

export const login = (req, res) => {

    const {email, password} = req.body;

    if(email && password){

    const user = users.find((user) => user.email == email);
    
    if(user){

        if(email == user.email && password == user.password){
            res.send('You have succesfully logged in');
        }else{
            res.send('Email or Password is incorrect');
        }
    }else{
        res.send('User does not exist');
    }
    
    }{
        if(email == null) res.send("enter email");

        if(password == null) res.send("enter password");
    }

}

export const update = (req, res) => {

    const {email} = req.params;

    const { firstname, lastname, password } = req.body;

    const user = users.find((user) => user.email == email);
        
    if(user){

        if(firstname) user.firstname = firstname;

        if(lastname) user.lastname = lastname;

        if(password) user.firstname = password;

        res.send('Your details has been updated');

    }else{
        res.send('User does not exist');
    }

}

