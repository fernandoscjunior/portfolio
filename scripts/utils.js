//Get year for Footer automatically

const currentYear = document.querySelector("#currentyear");
const today = new Date();

currentYear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

//---