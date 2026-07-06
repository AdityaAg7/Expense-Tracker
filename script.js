const balance = document.getElementById('balance inside')
const form = document.getElementById('expense-tracker')
const textInput = document.querySelector('input[type="text"]')
const amountInput = document.querySelector('input[type="number"]')
const transactionList = document.getElementById("Transaction-list")

let transactions = []

form.addEventListener('submit' , function(e){
    e.preventDefault();

    if (textInput.value.trim() === '' || amountInput.value.trim() ===''){
        alert('Please fill out both the text description and the amount!');
        return;
    }

    const transaction = {
        id : Math.floor(Math.random()* 10000000000),
        text : textInput.value,
        amount : parseFloat(amountInput.value)
    };
    transactions.push(transaction);
    addHistory(transaction);
    updateBalance();

    textInput.value="";
    amountInput.value="";

    console.log(transactions);
});
//add to the history 

function addHistory(transaction){
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `${transaction.text} <span>${sign}$${Math.abs(transaction.amount)}</span>`;

    transactionList.appendChild(item);
}

// 5. Function to update the total balance display
function updateBalance() {
    const total = transactions.reduce((acc, item) => (acc += item.amount), 0).toFixed(2);
    balance.innerText = `$${total}`;
}
