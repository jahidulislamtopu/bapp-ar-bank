//Step-1:add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    console.log('withdraw button clicked');
    //Step-2: get the withdraw amount from the withdraw input field.

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    console.log(newWithdrawAmount);

    //Step-7:clear the input field
    withdrawField.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('Plese provide a valid number');
        return;
    }

    //Step-3:get previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);




    // //Step-4:calculate total withdraw amount
    // const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // withdrawTotalElement.innerText = currentWithdrawTotal;

    //Step-5:get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Sorry! You have no availabe balance');
        return;
    }

    //Step-4:calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    //Step-6: calculate new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;






})










//Step-1:
//Step-1: