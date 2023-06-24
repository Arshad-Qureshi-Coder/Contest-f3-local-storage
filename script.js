
// Generate access token for singUp
// const accessToken = generateAccessToken();

// random access token
const generateAccessToken = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let accessToken ="";
    for(let i =0; i <16 ;i++){
        const randomIdx = Math.floor(Math.random()* chars.length);
        accessToken += chars[randomIdx];
    }
    return accessToken;

}


// const singUpPage = document.getElementById('singup-container');


document.getElementById("signup-btn").addEventListener("click", () => {
    var name = document.getElementById("full-name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var ConfirmPassword = document.getElementById("confirm-password").value;

    // show error message
    if (!(name && email && password && ConfirmPassword)) {
        document.getElementById("error").style.display = "block";
        setTimeout(()=>{
            document.getElementById("error").style.display = "none";  
        },1000);
    }
    else {
        // Generating  accessToken
        var accessToken = getAccessToken();

        // Create user object
        var user = {
            name: name,
            email: email,
            password: password,
            token: accessToken,
        };

        // saving user obj in localStorahe 
        localStorage.setItem("user", JSON.stringify(user));

        // show Successfull message 
        document.getElementById("success").style.display = "block";

        // Redirect to profile page after a delay
        setTimeout(function () {
            window.location.href = "/profile";
        }, 2000);

    }

})


// Redirecting  to signup or profile based on storage  
document.getElementById('prof').addEventListener('click', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken!="") {
        window.location.href = "/profile";
    } else {
        window.location.href = "/SignUp";
    }
});
// profile page

 user = JSON.parse(localStorage.getItem("user"));
console.log(user);

document.getElementById("name").innerText = user.name;
document.getElementById("email").innerText = user.email;
document.getElementById("password").innerText = user.password;

document.getElementById("login-btn").addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.href = "/SignUp";
})



// Redirecting  to signup or profile based on storage  
document.getElementById("sign").addEventListener("click", () => {
    if(JSON.parse(localStorage.getItem("user") &&JSON.parse(localStorage.getItem("user" )).accessToken!="")){
        window.location.href = '/Profile';
    }
    else {
        window.location.href = '/';
    }

})