const toolptips = document.querySelectorAll('.cell .tooltip');

toolptips.forEach((tooltip) => {
    tooltip.parentElement.addEventListener('mouseenter', (e) => {
        tooltip.style.display='block';
    })
    tooltip.parentElement.addEventListener('mouseleave', (e) => {
        tooltip.style.display='none';
    })
})

const dayNames = document.querySelectorAll('.day_names');
const resultNames = Array.from(dayNames);
const dayNamesArray = resultNames.map((resultName) => resultName.textContent.trim());

window.addEventListener('load', () => {
    if(window.innerWidth < 500){
        dayNames.forEach((dayName, index) => {
            dayName.textContent = dayNamesArray[index].slice(0, 2)
        })
    }
    if(window.innerWidth > 500){
        dayNames.forEach((dayName, index) => {
            dayName.textContent = dayNamesArray[index].slice(0, 3)
        })
    }
    if(window.innerWidth > 1000){
        dayNames.forEach((dayName, index) => {
            dayName.textContent = dayNamesArray[index]
        })
    }
})

window.addEventListener('resize', () => {
    if(window.innerWidth < 500){
        dayNames.forEach((dayName, index) => {
            dayName.textContent = dayNamesArray[index].slice(0, 2)
        })
    }
    if(window.innerWidth > 500){
        dayNames.forEach((dayName, index) => {
            dayName.textContent = dayNamesArray[index].slice(0, 3)
        })
    }
    if(window.innerWidth > 1000){
        dayNames.forEach((dayName, index) => {
            dayName.textContent = dayNamesArray[index]
        })
    }
})