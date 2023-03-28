function getInfo() {
    let year = prompt("Enter your year of birth:");

    year = Number(year);

    if (isNaN(year)) {
        alert("It is a pity that you did not want to enter your year of birth.");
        return;
    }

    let city = prompt("Enter the city you live in:");
    if (!city) {
        alert("It's a shame you didn't want to enter the city.");
        return;
    }

    let sport = prompt("Enter your favorite sport:");
    if (!sport) {
        alert("It's a shame you didn't want to introduce a sport.");
        return;
    }

    let today = new Date();
    let age = today.getFullYear() - year;

    let message = "Your age: " + age + "\n";
    if (city === "Kyiv" || city === "Washington" || city === "London") {
        message += "You live in the capital: " + getCountry(city) + ".";
    } else {
        message += "You live in the city: " + city + ".";
    }

    if (sport === "football") {
        message += "\nCool! Do you want to be Lionel Messi?";
    } else if (sport === "basketball") {
        message += "\nCool! Do you want to be Kobe Bryant?";
    } else if (sport === "tennis") {
        message += "\nCool! Do you want to be Rafael Nadal?";
    }

    alert(message);
}

function getCountry(city) {
    switch(city) {
        case "Kyiv":
            return "Ukraine";
        case "Washington":
            return "USA";
        case "London":
            return "Great Britain";
        default:
            return "unknown country";
    }
}





