const currencyElement_one = document.querySelector('#currency-one');
const amountElement_one = document.querySelector('#amount-one');
const currencyElement_two = document.querySelector('#currency-two');
const amountElement_two = document.querySelector('#amount-two');

const rateEl = document.querySelector('#rate');
const swap = document.querySelector('#swap');


// Fetch exchange rates and update
function calculate() {
    const currency_one = currencyElement_one.value;
    const currency_two = currencyElement_two.value;
    const amount_one = amountElement_one.value;
    
    fetch(`https://v6.exchangerate-api.com/v6/a3047ec916da2c2a46d86e51/pair/${currency_one}/${currency_two}/${amount_one}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        rateEl.innerText = `1 ${currency_one} = ${data.conversion_rate.toFixed(2)} ${currency_two}`
        
        amountElement_two.value = (amount_one * data.conversion_rate).toFixed(2)
    })
}


// Event Listeners
currencyElement_one.addEventListener('change', calculate);
amountElement_one.addEventListener('input', calculate);
currencyElement_two.addEventListener('change', calculate);
amountElement_two.addEventListener('input', calculate);
swap.addEventListener('click', () => {
    const temp = currencyElement_one.value;
    currencyElement_one.value = currencyElement_two.value;
    currencyElement_two.value = temp;
    calculate();
})

calculate();