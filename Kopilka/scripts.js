//income inputs
const incomeSalary = document.getElementById('income-salary');
const incomeFreelance = document.getElementById('income-freelance');
const incomeExtra1 = document.getElementById('income-extra-1');
const incomeExtra2 = document.getElementById('income-extra-2');

//costs inputs
const costsFlat = document.getElementById('costs-flat');
const costsHouseServices = document.getElementById('costs-house-services');
const costsTransport = document.getElementById('transport');
const costsDebts = document.getElementById('debts');

//total inputs
const totalMonthInput = document.getElementById('total-month');
const totalDayInput = document.getElementById('total-day');
const totalYearInput = document.getElementById('total-year');

let totalMonth, totalDay, totalYear;

//money box
const moneyBoxRange = document.getElementById('money-box-range'),
      accumulationInput = document.getElementById('accumulation-saving'),
      spend = document.getElementById('accumulation-spending');

let accumulation = 0;
let totalPrecents = 0;

const inputs = document.querySelectorAll('.input');

for(input of inputs) {
    input.addEventListener('input', () => {
        countingAvailableMoney();
        calculationPrecents();
    })
}

moneyBoxRange.addEventListener('input', e => {
    const totalPrecentElement = document.getElementById('total-precents');
    totalPrecents = e.target.value;
    totalPrecentElement.innerHTML = totalPrecents;
    calculationPrecents();
})

const strToNum = str => str.value ? parseInt(str.value) : 0;

function countingAvailableMoney() {
    const totalPerMonth = strToNum(incomeSalary) + strToNum(incomeFreelance) + strToNum(incomeExtra1) + strToNum(incomeExtra2);
    const totalCosts = strToNum(costsFlat) + strToNum(costsHouseServices) + strToNum(costsTransport) + strToNum(costsDebts);

    totalMonth = totalPerMonth - totalCosts;
    totalMonthInput.value = totalMonth;
}

function calculationPrecents() {
    accumulation = ((totalMonth * totalPrecents) / 100).toFixed();
    accumulationInput.value = accumulation;

    spend.value = totalMonth - accumulation;

    totalDay = (spend.value / 30).toFixed();
    totalDayInput.value = totalDay;

    totalYear = accumulation * 12;
    totalYearInput.value = totalYear;
}


