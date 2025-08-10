let currentDate = new Date();
let currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
  return `Formatted Date (MM/DD/YYYY): ${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
}

function formatDateLong(date) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `Formatted Date (Month Day, Year): ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}


let testDate = new Date("Fri Sep 27 2024 16:16:11 GMT+0500 (Pakistan Standard Time)");
console.log(formatDateMMDDYYYY(testDate) === "Formatted Date (MM/DD/YYYY): 9/27/2024");
console.log(formatDateLong(testDate) === "Formatted Date (Month Day, Year): September 27, 2024");