

document.addEventListener("DOMContentLoaded", function () {
    const clientRadio = document.getElementById("Client"); // Radio button for "Client"
    const hideDiv = document.querySelector(".hide"); // Div to show/hide

    // Event listener to toggle visibility based on radio selection
    clientRadio.addEventListener("change", function () {
        if (this.checked) { // If "Client" is selected
            hideDiv.style.display = "flex"; // Show the div
           
           
        }
    });

    // To ensure the div is hidden when "Programmer" is selected
    const programmerRadio = document.getElementById("Programmer");
    programmerRadio.addEventListener("change", function () {
        if (this.checked) { // If "Programmer" is selected
            hideDiv.style.display = "none"; // Hide the div
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const signUpLink = document.querySelector('.login-form .sign-up a'); // رابط "Sign Up" في قسم "login-form"
    const loginSection = document.querySelector('.login'); // قسم "login"
    const loginFormSection = document.querySelector('.login-form'); // قسم "login-form"

    signUpLink.addEventListener("click", function (e) {
        e.preventDefault(); // منع السلوك الافتراضي للرابط (مثل إعادة تحميل الصفحة)

        // إظهار قسم "login"
        loginSection.classList.remove("is-hidden");

        // إخفاء قسم "login-form"
        loginFormSection.classList.add("is-hidden");
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const continueButton = document.querySelector(".Continue"); // زر "Continue To FP"
    const signUpSection = document.querySelector(".signUp"); // قسم "sign up"
    const mainSection = document.querySelector(".home"); 
    const loginSection = document.querySelector(".login"); // قسم "login"
    const contentSection = document.querySelector(".content"); 
    const loginFormSection = document.querySelector(".login-form"); // قسم "login-form"
    const clientRadio = document.querySelector('input[name="new"][value="Client"]'); // زر راديو "Client"
    const ProgrammerRadio = document.querySelector('input[name="new"][value="Programmer"]'); // زر راديو "Programmer"
    const individualRadio = document.querySelector('input[name="Client"][value="Individual"]'); // زر راديو "Individual"
    const companyRadio = document.querySelector('input[name="Client"][value="Company"]'); // زر راديو "Company"

    continueButton.addEventListener("click", function (e) {
        e.preventDefault(); // لمنع السلوك الافتراضي (مثل إرسال النموذج)

        // إذا تم اختيار "Client" و"Individual"
        if (clientRadio.checked && individualRadio.checked) {

            window.location.href = '/signUp/clientIndividual'; 
            // إخفاء الأقسام الأخرى
            loginSection.classList.add("is-hidden");
            loginFormSection.classList.add("is-hidden");
            contentSection.classList.add("is-hidden");
            // mainSection.style.background-color("black");
            // إظهار قسم "sign up"
            signUpSection.classList.remove("is-hidden");
        } else if(clientRadio.checked &&companyRadio.checked){
            window.location.href = '/signUp/company'; 
        }
         else if(ProgrammerRadio.checked){
            window.location.href = '/signUp/programmer'; 
        }
        else {
            e.preventDefault(); // منع الإجراء إذا لم يكن كلا الخيارين محددين
            alert("Please select 'Client' and 'Individual' if you just a user to continue."); // رسالة توضح سبب عدم المتابعة
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const continueButton = document.querySelector('.Continue'); // زر "Continue To FP"
    const contentSection = document.querySelector(".content"); 

    const signUpSection = document.querySelector(".signUp"); // قسم "sign up"
    const loginSection = document.querySelector(".login"); // قسم "login"
    const loginFormSection = document.querySelector(".login-form"); // قسم "login-form"
    const clientRadio = document.querySelector('input[name="new"][value="Client"]'); // زر راديو "Client"
    const individualRadio = document.querySelector('input[name="Client"][value="Individual"]'); // زر راديو "Individual"

    continueButton.addEventListener("click", function (e) {
        e.preventDefault(); // لمنع السلوك الافتراضي

        if (clientRadio.checked && individualRadio.checked) {
            loginSection.classList.add("is-hidden"); // إخفاء قسم "login"
            loginFormSection.classList.add("is-hidden"); // إخفاء "login-form"
            contentSection.classList.add("is-hidden");


            signUpSection.classList.remove("is-hidden"); // إظهار قسم "sign up"
            signUpSection.classList.add("signUp-active"); // إضافة فئة CSS الجديدة
        }
    });
});
// company ------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const companyForm = document.querySelector('.signupCompany');
    const programmerForm = document.querySelector('.signup-programer');
  
    if (companyForm) {
      companyForm.addEventListener('submit', async function(event) {
        event.preventDefault();
  
        const name = document.getElementById('name').value;
        const email = document.getElementById('Email').value;
        const password = document.getElementById('password').value;
  
        const response = await fetch('/signUp/company', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            name: name,
            email: email,
            password: password
          })
        });
  
        const errorMessages = document.getElementById('company-error-messages');
        errorMessages.innerHTML = '';
  
        if (response.status === 400) {
          const data = await response.json();
          data.errors.forEach(error => {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = error.msg;
            errorMessages.appendChild(errorMessage);
          });
        } else if (response.status === 201) {
          errorMessages.style.color = 'green';
          errorMessages.textContent = 'Company added successfully!';
          
          // الانتظار ثانيتين قبل إعادة التوجيه
      // setTimeout(() => {
      //   window.location.href = 'http://localhost:3001/company';
      // }, 2000);
        } else {
          errorMessages.textContent = 'An unexpected error occurred.';
        }
      });
    }


    
    if (programmerForm) {
      programmerForm.addEventListener('submit', async function(event) {
        event.preventDefault();
    
        const formData = new FormData(programmerForm);
    
        const response = await fetch('/signUp/programmer', {
          method: 'POST',
          body: formData
        });
    
        const errorMessages = document.getElementById('programmer-error-messages');
        errorMessages.innerHTML = '';
    
        if (response.status === 400) {
          const data = await response.json();
          data.errors.forEach(error => {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = error.msg;
            errorMessages.appendChild(errorMessage);
          });
        } else if (response.status === 201) {
          errorMessages.style.color = 'green';
          errorMessages.textContent = 'Programmer added successfully!';
          // Wait for 2 seconds before redirecting
          // setTimeout(() => {
          //   window.location.href = 'http://localhost:3001/programmer';
          // }, 2000);
        } else {
          errorMessages.textContent = 'An unexpected error occurred.';
        }
      });
    }
    
    // if (programmerForm) {
    //   programmerForm.addEventListener('submit', async function(event) {
    //     event.preventDefault();
  
    //     const name = document.getElementById('name').value;
    //     const lastName = document.getElementById('lastName').value;
    //     const email = document.getElementById('Email').value;
    //     const password = document.getElementById('password').value;
    //     const programmerType = document.getElementById('programmerType').value;
  
    //     const response = await fetch('/signUp/programmer', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //       },
    //       body: new URLSearchParams({
    //         name: name,
    //         lastName: lastName,
    //         email: email,
    //         password: password,
    //         programmerType: programmerType
    //       })
    //     });
  
    //     const errorMessages = document.getElementById('programmer-error-messages');
    //     errorMessages.innerHTML = '';
  
    //     if (response.status === 400) {
    //       const data = await response.json();
    //       data.errors.forEach(error => {
    //         const errorMessage = document.createElement('p');
    //         errorMessage.textContent = error.msg;
    //         errorMessages.appendChild(errorMessage);
    //       });
    //     } else if (response.status === 201) {
    //       errorMessages.style.color = 'green';
    //       errorMessages.textContent = 'Programmer added successfully!';
    //       // الانتظار ثانيتين قبل إعادة التوجيه
    //   // setTimeout(() => {
    //   //   window.location.href = 'http://localhost:3001/programmer';
    //   // }, 2000);
    //     } else {
    //       errorMessages.textContent = 'An unexpected error occurred.';
    //     }
    //   });
    // }
  });

  // ------------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.querySelector('.signup-form');
  
    signUpForm.addEventListener('submit', async function(event) {
      event.preventDefault();
  
      const firstName = document.getElementById('First').value;
      const lastName = document.getElementById('Last').value;
      const age = document.getElementById('Age').value;
      const email = document.getElementById('Email').value;
      const password = document.getElementById('Password').value;
  
      const response = await fetch('/signUp/clientIndividual', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          age: age,
          email: email,
          password: password
        })
      });
  
      const errorMessages = document.getElementById('client-error-messages');
      errorMessages.innerHTML = '';
  
      if (response.status === 400) {
        const data = await response.json();
        data.errors.forEach(error => {
          const errorMessage = document.createElement('p');
          errorMessage.textContent = error.msg;
          errorMessages.appendChild(errorMessage);
        });
      } else if (response.status === 409) {
        const data = await response.json();
        const errorMessage = document.createElement('p');
        errorMessage.textContent = data.message;
        errorMessages.appendChild(errorMessage);
      } else if (response.status === 201) {
        errorMessages.style.color = 'green';
        const successMessage = document.createElement('p');
        successMessage.textContent = 'User registered successfully!';
        errorMessages.appendChild(successMessage);
        // الانتظار ثانيتين قبل إعادة التوجيه
      // setTimeout(() => {
      //   window.location.href = 'http://localhost:3001/User';
      // }, 2000);
      } else {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'An unexpected error occurred.';
        errorMessages.appendChild(errorMessage);
      }
    });
  });
  
  
