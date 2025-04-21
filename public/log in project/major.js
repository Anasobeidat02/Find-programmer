
function toggleDropdown(button) {
  var dropdown = button.nextElementSibling;
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  } else {
    var allDropdowns = document.querySelectorAll('.dropdown');
    allDropdowns.forEach(function(dropdown) {
      dropdown.style.display = 'none';
    });
    dropdown.style.display = 'block';
  }
}
window.onclick = function(event) {
  var buttons = document.querySelectorAll('.button0-1');
  buttons.forEach(function(button) {
    var dropdown = button.nextElementSibling;
    if (event.target !== button && event.target !== dropdown) {
      dropdown.style.display = 'none';
    }
  });
}

const usernameField = document.getElementById('user');
const passwordField = document.getElementById('pass');
function updateLabelDisplay(field) {
  const label = field.nextElementSibling; 
  if (field === document.activeElement || field.value !== '') {
    label.style.display = 'none';
  } else {
    label.style.display = 'block';
  }
}
usernameField.addEventListener('click', () => {
  updateLabelDisplay(usernameField);
});

usernameField.addEventListener('input', () => {
  updateLabelDisplay(usernameField);
});

passwordField.addEventListener('click', () => {
  updateLabelDisplay(passwordField);
});

passwordField.addEventListener('input', () => {
  updateLabelDisplay(passwordField);
});

// function joinFunction() {
//   fetch('/signUp') // قم بتوجيه هذا إلى المسار الصحيح للحصول على صفحة التسجيل
//   .then(response => response.text())
//   .then(data => {
//       document.getElementById("popup-body").innerHTML = data;
//       document.getElementById("popup").style.display = "block";


      
//   })
//       .catch(error => console.error('Error loading the sign-up form:', error));
// }

// function closePopup() {
//   document.getElementById("popup").style.display = "none";
// }

// // إخفاء النافذة المنبثقة عند النقر في أي مكان خارجها
// window.onclick = function(event) {
//   const popup = document.getElementById("popup");
//   if (event.target == popup) {
//       popup.style.display = "none";
//   }
// }



