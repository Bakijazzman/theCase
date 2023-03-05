const names = prompt("Please enter your name")
const pass = prompt("please enter your password")
const database =[
    {
        username: "Obafemi",
        password : "oba234"
    },
    {
        username: "Olayinka",
        password : "ola234"
    },
    {
        username: "Samuel",
        password : "sam234"
    }
];
const newsFeed = [
    {
        olayinka: "samuel tagged  you in a recently uploaded video",
        olayinka: "obafemi mentioned you in a comment"
    },
    {
        obafemi: "you have 7 unread messages",
        obafemi: "olayinka just uploaded a new video"
    },
    {
        samuel: "you have  new friend requests",
        samuel: "someone tried to login to your account, confirm it was you below"
    }
];
const validity = function isUserValid(user, pass){
    for (var i = 0; i < database.length; i++) {
        if(user === database[i].username && pass === database[i].password){
            return true
        }else{
            // console.log("false")
        }
        
    }return false
} 
const valid = validity(names,pass);
const signIn = function myLogin(valid){
    if (validity === true){
        alert("welcome user, we\'ve been expecting you")
        console.log(newsFeed)
    }else{
        alert("invalid username or password")
    }
}
signIn();