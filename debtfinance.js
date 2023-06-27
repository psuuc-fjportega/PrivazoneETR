function calculateDebtPayments() {
    var monthlyIncome = parseFloat(document.getElementById("monthlyIncome").value);
    var monthlyExpenses = parseFloat(document.getElementById("monthlyExpenses").value);
  
    var maxDebtPayments = monthlyIncome - monthlyExpenses;
  
    document.getElementById("result").innerHTML = "Maximum Monthly Debt Payments: $" + maxDebtPayments.toFixed(2);
  }
  function goBack() {
    window.history.back();
}  