const loginSystem = document.getElementById('login');
loginSystem.addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('transaction-area').style.display = 'block';
    // console.log('Some one clicked')
})

//deposit button handel

document.getElementById('deposit-button').addEventListener('click', function() {
    
    const depositNumber = getInputNumber('deposit-amount')
    updateSpanBalance('current-deposit', depositNumber);
    updateSpanBalance('current-balance', depositNumber);

    document.getElementById('deposit-amount').value = '';
})

//withdraw amount

document.getElementById('withdraw-button').addEventListener('click', function() {
    
    const withdrawNumber = getInputNumber('withdraw-amount');
    updateSpanBalance('current-withdraw', withdrawNumber);
    updateSpanBalance('current-balance', -1*withdrawNumber);

    document.getElementById('withdraw-amount').value = '';

})

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanBalance(id, inputNumber){
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalAmount = inputNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalAmount;
}