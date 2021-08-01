function statusLogIn(data){
    const statusofLogIn = document.querySelector('.js--passwordIncorrect');
    statusofLogIn.innerHTML = '';
    if(data.Userdata === true){
        statusofLogIn.innerHTML = ' The email is not associated with a user'
    }else if (data.Userdata === false){
        statusofLogIn.innerHTML = 'The password is not correct';
    }else{
        // All the info of the user\
        console.log(data);
    }
}

function statusSignIn(data) {
    const statusofEmail = document.querySelector('.js--emailInUse')
    statusofEmail.innerHTML = '';
    if (data.newUser === true) {
        statusofEmail.innerHTML = 'The email is actually linked to a user';
    } else {
        //All the info of the user
    }
}

function addPerson(inputs) {
    fetch('http://localhost:3000/user', {
        method: "POST",
        body: JSON.stringify(inputs),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            statusSignIn(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

function loggedPerson(UserInfo) {
    fetch('http://localhost:3000/user/login', {
        method: "POST",
        body: JSON.stringify(UserInfo),
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            statusLogIn(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

export {loggedPerson,addPerson};