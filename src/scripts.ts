const dropdownContainer = document.querySelector('.js-dropdown-container');
const openBtn = dropdownContainer.querySelector('.js-open-btn');
const dropdownMenu = dropdownContainer.querySelector('.js-menu');
const selectedItem = document.querySelector('.js-selected-item');

const choices = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

/* Helper functions for opening/closing the dropdown */
function openDropdown() {
  dropdownMenu.classList.add('show');
}

function closeDropdown() {
  dropdownMenu.classList.remove('show');
}

/* Events */

openBtn.addEventListener('click', () => {
  if (dropdownMenu.classList.contains('show')) {
    closeDropdown();
  } else {
    openDropdown();
  }
});

// create the options and add them to the dropdown
choices.map((choice, index) => {
  const menuOption = document.createElement('button');
  menuOption.innerHTML = `${choices[index]}`;
  menuOption.classList.add('option');
  dropdownMenu.appendChild(menuOption);
  return menuOption;
});

// display the selection
dropdownMenu.addEventListener('click', (event) => {
  const clickedOption = event.target as HTMLElement;
  if (clickedOption.nodeName === 'BUTTON') {
    selectedItem.textContent = clickedOption.innerText;
  }
});

// closes the dropdown when clicked outside
document.addEventListener('click', (event) => {
  const element = event.target as HTMLElement;
  const clickedOutsideElement = !!element.closest('.dropdown');
  if (clickedOutsideElement === false) {
    closeDropdown();
  }
});
