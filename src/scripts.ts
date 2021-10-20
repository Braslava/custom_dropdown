

const dropdownContainer = document.querySelector('.js-dropdown-container'); 
const openBtn = dropdownContainer.querySelector('.js-open-btn'); 
const dropdownMenu = dropdownContainer.querySelector('.js-menu'); 
//const menuOptions = dropdownContainer.querySelectorAll('.js-option'); 
const selectedTextBox = dropdownContainer.querySelector('.js-dropdown-sidebar'); 
let selection: HTMLParagraphElement = dropdownContainer.querySelector('.selection'); 


const choices = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']; 

function openDropdown() {
    dropdownMenu.classList.add('show'); 
}

function closeDropdown(){
    dropdownMenu.classList.remove('show'); 
}

openBtn.addEventListener('click', () => {
    if (dropdownMenu.classList.contains('show')) {
        closeDropdown();  
    } else {
        openDropdown(); 
    }
}); 

const menuOptions: HTMLAnchorElement[] = choices.map((choice, index) => {
    const menuOption = document.createElement("a"); 
    const optionText = document.createTextNode(`${choices[index]}`); 
    menuOption.appendChild(optionText); 
    menuOption.classList.add('option'); 
    //menuOption.classList.add('option:focus'); 
    dropdownMenu.appendChild(menuOption);

    const displayValue = document.createElement("p"); 
    const displayText = document.createTextNode(`Slected option: ${choices[index]}`);
    displayValue.appendChild(displayText); 
    selectedTextBox.appendChild(displayValue)
    displayValue.classList.add('selection');

    menuOption.addEventListener('click', () => {
        displayValue.classList.add('show'); 
        closeDropdown();
    })
    return menuOption;
}); 


document.addEventListener('click', (event) => {
    const element = event.target as HTMLElement; 
    const clickedOutsideElement = !!element.closest('.dropdown'); 
    if (clickedOutsideElement === false) {
        closeDropdown();
    }
});
  
   