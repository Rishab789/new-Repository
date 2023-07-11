function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "beraprakash456@gmail.com",
        Password : "Rourkela@890",
        To : 'beraprakash456@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Nwe Contact Form Enquiry",
        Body : "Name:"+ document.getElementById('name').value
               + "<br> Email: " + document.getElementById('email').value
               + "<br> Phone no.: " + document.getElementById('phone').value
               + "<br> Message: " + document.getElementById('message').value
    }).then(
      message => alert("Message Sent Successfully")
    );
    
}