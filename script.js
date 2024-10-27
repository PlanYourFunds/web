// Budgeting Tool Functionality
document.getElementById('calculate-budget').addEventListener('click', function() {
    const salary = parseFloat(document.getElementById('salary').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const budgetResult = document.getElementById('budget-result');

    if (!isNaN(salary) && !isNaN(expenses)) {
        const remainingBudget = salary - expenses;
        budgetResult.innerText = `Remaining Budget: $${remainingBudget}`;
    } else {
        budgetResult.innerText = "Please enter valid numbers.";
    }
});

// Currency Converter (mock functionality)
document.getElementById('convert-button').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const conversionResult = document.getElementById('conversion-result');

    // Mock conversion rate for demonstration
    const conversionRate = 1.2; // Example rate
    const convertedAmount = (amount * conversionRate).toFixed(2);
    
    conversionResult.innerText = `Converted Amount: ${convertedAmount} ${toCurrency}`;
});

// Expense Tracker Functionality
document.getElementById('add-expense').addEventListener('click', function() {
    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
    const expenseList = document.getElementById('expense-list');

    if (expenseName && !isNaN(expenseAmount)) {
        const listItem = document.createElement('li');
        listItem.innerText = `${expenseName}: $${expenseAmount}`;
        expenseList.appendChild(listItem);
        document.getElementById('expense-name').value = '';
        document.getElementById('expense-amount').value = '';
    } else {
        alert("Please enter valid expense details.");
    }
});

// Goal Setting Functionality
document.getElementById('add-goal').addEventListener('click', function() {
    const goalName = document.getElementById('goal-name').value;
    const goalAmount = parseFloat(document.getElementById('goal-amount').value);
    const goalDeadline = document.getElementById('goal-deadline').value;
    const goalList = document.getElementById('goal-list');

    if (goalName && !isNaN(goalAmount)) {
        const listItem = document.createElement('li');
        listItem.innerText = `${goalName}: $${goalAmount} by ${goalDeadline}`;
        goalList.appendChild(listItem);
        document.get

