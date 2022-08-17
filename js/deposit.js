//step:1 add event listner to the deposite button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //console.log('deposite button clicek');
    //step:2 get the deposit amount from the deposit input field
    //for input field use. value to the value inside the input field 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);



    //step:3
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step: 4
    const currentDepositTotal = previousDepositTotal + newDepositAmount;


    depositTotalElement.innerText = currentDepositTotal;

    //step:5 get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step:6 calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;




    //step :7
    depositField.value = '';

})

