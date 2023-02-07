  const form = document.querySelector("form"),
   emailfield = form.querySelector(".email-field"),
   emailinput = form.querySelector(".email"),
   passField = form.querySelector(".create-password"),
   passInput = passField.querySelector(".password"),
   cpassField = form.querySelector(".confirm-password"),
   cpassInput = cpassField.querySelector(".cpassword");

   //Email Validation
   function checkEmail(){
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailinput.value.match(emailPattern)){
     return  emailfield.classList.add("invalid") /* adding invalid class
     if the email do not matche with email pattern
      */
    }
    emailfield.classList.remove("invalid")/*
    removing invalid class if email matched with emailpattern */
   }

   //Hide and show password
   const eyeIcons = document.querySelectorAll(".show-hide")
   
   eyeIcons.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
      const pInput = eyeIcon.parentElement.querySelector("input") /* getting parent element of
       eye icon and selecting the passwod input */

      if(pInput.type === "password"){
         eyeIcon.classList.replace("bx-hide", "bx-show");
         return (pInput.type = "text");
      }
      eyeIcon.classList.replace("bx-show", "bx-hide");
      pInput.type = "password";
    })
   })

   //Paasword Vallidation
   function createPass(){
    const passPattern =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            if(!passInput.value.match(passPattern)){
             return  passField.classList.add("invalid") // adding invalid class if the input do not match passPattern
            }
             passField.classList.remove("invalid")
   }

   // confirm Vallidation
   function confirmPass(){
    if(passInput.value !== cpassInput.value || cpassInput.value === "" ){
     return cpassField.classList.add("invalid");
    }
    cpassField.classList.remove("invalid");
   }

   //Calling function on Form submit
   form.addEventListener("submit", (e) =>{
    e.preventDefault(); //preventing form submitting
    checkEmail();
    createPass();
    confirmPass();

    //calling function on key up
    emailinput.addEventListener("keyup", checkEmail)
    passInput.addEventListener("keyup", createPass)
    cpassInput.addEventListener("keyup", confirmPass)

    if(!emailfield.classList.contains("invalid") && !passField.classList.contains("invalid") && !cpassField.classList.contains("invalid")){
        location.href = form.getAttribute("action")
    }
   });