const MIN_HOURS = 2;
const MAX_HOURS = 720;
const PROPERTY_PRICE = 5000;

const tariffPrices = {
    business: 3000,
    comfort: 1500,
    economy: 1000
};
const optionPrices = {
    option1: 1500,
    option2: 5000
};

const form = document.querySelector(".form1");
const time = document.querySelector("#time");
const option = document.querySelector("#option");
const property = document.querySelector("#property");
const optionBlock = document.querySelector("#optionBlock");
const propertyBlock = document.querySelector("#propertyBlock");
const total = document.querySelector("#total");

function updatePrice() {
    const tariff = document.querySelector(".tariff:checked").value;
    const hours = Number(time.value);
    let price = tariffPrices[tariff];

    optionBlock.hidden = tariff !== "comfort";
    propertyBlock.hidden = tariff !== "business";

    if (tariff === "comfort") {
        price += optionPrices[option.value];
    }
    if (tariff === "business" && property.checked) {
        price += PROPERTY_PRICE;
    }

    if (Number.isInteger(hours) && hours >= MIN_HOURS && hours <= MAX_HOURS) {
        total.value = price * hours;
    } else {
        total.value = 0;
    }
}

form.addEventListener("input", updatePrice);
form.addEventListener("change", updatePrice);
updatePrice();
