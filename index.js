 const home = document.getElementById("Home");
 const services = document.getElementById("Services");
 const aboutus = document.getElementById("About");
 const contact = document.getElementById("Contact");


 home.addEventListener("click" , ()=>{
  home.classList.add("active");
  services.classList.remove("active");
  aboutus.classList.remove("active");
  contact.classList.remove("active");

  

 });

 services.addEventListener("click" , ()=>{
  services.classList.add("active");
  aboutus.classList.remove("active");
  contact.classList.remove("active");
  home.classList.remove("active");


 });

 aboutus.addEventListener("click" , ()=>{
  aboutus.classList.add("active");
  contact.classList.remove("active");
  home.classList.remove("active");
  services.classList.remove("active");


 });

 contact.addEventListener("click" , ()=>{
  contact.classList.add("active");
  home.classList.remove("active");
  services.classList.remove("active");
  aboutus.classList.remove("active");

 });

function sendMail(isTop = false){
 
  var params = {
    from_name: isTop ? document.getElementById('fullName_top').value : document.getElementById('fullName').value,
    email_id:  isTop ? document.getElementById('email_id_top').value : document.getElementById('email_id').value,
    phone:  isTop ? document.getElementById('phone_top').value : document.getElementById('phone').value,
    message:  isTop ? document.getElementById('message_top').value : document.getElementById('message').value
   
  };

  
  if(params.from_name ==="" || params.email_id==="" || params.phone==="" || params.message === ""){
    alert("please fill the required fields.");
    
  }
  
  else {
     emailjs.send("service_0ci8bji" , "template_pqsumrd" , params).then(function(res){
      alert("message sent successfully");  
   
     isTop ? document.getElementById('fullName_top').value = "" : document.getElementById('fullName').value = "",
     isTop ? document.getElementById('email_id_top').value = "": document.getElementById('email_id').value ="",
     isTop ? document.getElementById('phone_top').value = "" : document.getElementById('phone').value = "",
     isTop ? document.getElementById('message_top').value = "" : document.getElementById('message').value= ""
      
      
    });
   
  }
}

function myfun(){
  var phoneCheck = document.querySelector(".phoneCheck").value;
  var pattern = /^[0-9]{9,11}$/;
  if(pattern.test(phoneCheck)){
    document.getElementById("msg").innerHTML="Valid Password";
    sendMail();

  }else{

    document.getElementById("msg").innerHTML="Invalid Password";
    return false;
    
  }
}


  

const serviceBtn = document.querySelector(".serviceBtn");
const btnP = document.querySelector(".btnP");

function serviceButton(){
  window.location="https://freezoad.netlify.app/services.html";
  

}


function homebtn(){
  window.location="https://freezoad.netlify.app/index.html";
}


const redBtn = document.querySelector(".redBtn");
function redButton(){
  window.location="https://freezoad.netlify.app//index.html#contact";
}
 function blackButton(){
  window.location="https://freezoad.netlify.app/index.html";

 }



