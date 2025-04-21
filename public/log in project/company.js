// 
function toggleDropdown() {
    const dropdownList = document.querySelector(".dropdown-list");
    dropdownList.classList.toggle("active");
  }
  
  // Close the dropdown if clicked outside of the button and dropdown list
  window.addEventListener("click", function(event) {
    const dropdown = document.querySelector(".dropdown");
    if (!dropdown.contains(event.target)) {
      const dropdownList = document.querySelector(".dropdown-list");
      dropdownList.classList.remove("active");
    }
  });