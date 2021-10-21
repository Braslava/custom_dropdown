

const dropdownContainer = document.querySelector('.js-dropdown-container'); 
const openBtn = dropdownContainer.querySelector('.js-open-btn'); 
const dropdownMenu = dropdownContainer.querySelector('.js-menu'); 
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
const displayValues: HTMLParagraphElement[] = []; 


const menuOptions: HTMLButtonElement[] = choices.map((choice, index) => {
    const menuOption = document.createElement("button"); 
    const optionText = document.createTextNode(`${choices[index]}`); 
    menuOption.appendChild(optionText); 
    menuOption.classList.add('option'); 
    dropdownMenu.appendChild(menuOption);

    const displayValue = document.createElement("p"); 
    const displayText = document.createTextNode(`Slected option: ${choices[index]}`);
    displayValue.appendChild(displayText); 
    selectedTextBox.appendChild(displayValue)
    displayValue.classList.add('selection');

    displayValues.push(displayValue);

    return menuOption;
}); 

let activeItem: HTMLParagraphElement; 

menuOptions.forEach((menuOption, i) => {
    menuOption.addEventListener('click', () => {
    // Need to remove 'show' class from already selected options 
    if (!!activeItem === true) {
        activeItem.classList.remove('show'); 
    }
    displayValues[i].classList.add('show'); 
    displayValues[i] = activeItem; 
    closeDropdown();
    }); 
}
   
)


document.addEventListener('click', (event) => {
    const element = event.target as HTMLElement; 
    const clickedOutsideElement = !!element.closest('.dropdown'); 
    if (clickedOutsideElement === false) {
        closeDropdown();
    }
});
  
   