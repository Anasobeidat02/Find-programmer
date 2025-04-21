
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

  const selectNeeds = document.getElementById('SelectNeedsId');
  const options = document.querySelectorAll('.dropdown-list-item');

  // Set initial inner text of the span
  selectNeeds.innerText = 'Select your needs';

  // Add click event listener to each option
  options.forEach(option => {
    option.addEventListener('click', function() {
      selectNeeds.innerText = option.innerText; // Change the inner text of the span to the selected option
    });
  });
