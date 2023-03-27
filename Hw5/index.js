let hours = prompt("Enter the number of hours:");

if (isNaN(hours)) {
    alert("Error: The entered value is not a number");
} else {
    let seconds = hours * 3600;

    alert(` ${hours} hours it ${seconds} seconds`);
}