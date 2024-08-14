function handleFormSubmit(event) {
    event.preventDefault(); 
    if(checkEmail()){
    window.location.href = "index.html";
}  
}
function checkEmail(){
    let email = document.getElementById('email').value;
    let confirmEmail = document.getElementById('confirmEmail').value;
    if (email !== confirmEmail){
        alert("Emails do not match");
        return false;
    }
    alert("Form Submitted Successfully.")
    return true;
}

document.getElementById('myForm').addEventListener('submit', handleFormSubmit);