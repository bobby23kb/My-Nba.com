
          console.log("script.js loaded");
document.addEventListener ('DOMContentLoaded', ()=>{
    const form = document.getElementById('mainForm');
    const submitBtn = document.getElementById('submitBtn');

    const emailInput = document.getElementById ('exampleInputEmail1');

    form.addEventListener ('submit', (event) =>{
     event.preventDefault();

     const email = emailInput.value.trim();
     if (!validateEmail(email)) {
      alert('Please enter a valid email.');
      emailInput.focus();
      return;
      
     }  
     submitBtn.disabled = true;
    submitBtn.innerText = "submitted";
     });
     function validateEmail(email){
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }


});