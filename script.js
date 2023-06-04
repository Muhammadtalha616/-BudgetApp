
var BudgetApp = {
  userInput: 0,
  expenseAmount: 0,
  totalExpense: 0,
  
  addhtml: function() {
    this.h1 = document.getElementById("budgetH1");
    this.divForBudgetInput = document.getElementById("divForBudgetInput");
    this.divForExpenseInput = document.getElementById("divForExpenseInput");
    this.table = document.getElementById("table");
    this.span = document.getElementById("span");
    this.td3 = null;
  },

  // Function to add budget
  addBudget: function() {
    this.userInput = parseInt(document.getElementById("inputTag").value);
    if (isNaN(this.userInput)) {
      alert("Please enter only numbers");
    } else {
      this.span.innerText = this.userInput;
    }
    document.getElementById("inputTag").value = "";
  },

  // Function to add expense
  addExpense: function() {
    var expenseName = document.getElementById("expenseName").value;
    this.expenseAmount = parseInt(document.getElementById("expenseAmount").value);
    var date = document.getElementById("expenseDate").value;
    if (isNaN(this.expenseAmount)) {
      alert("Please enter numbers");
    } else {
      var tr = document.createElement("tr");
      this.table.appendChild(tr);
      var td1 = document.createElement("td");
      td1.textContent = date;
      var td2 = document.createElement("td");
      td2.textContent = expenseName;
      this.td3 = document.createElement("td");
      this.td3.textContent = this.expenseAmount;
      var dltButton = document.createElement("button");
      tr.setAttribute("data-amount", this.expenseAmount.toString());

      dltButton.setAttribute("onclick", "BudgetApp.deleteRow(this)");
      dltButton.textContent = "Delete";
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(this.td3);
      tr.appendChild(dltButton);
    }
    this.userInput -= this.expenseAmount;
    this.span.innerText = this.userInput;
    this.totalExpense += this.expenseAmount;
  },

  // Function to delete expense row
  deleteRow: function(d) {
    var tdValue = parseInt(d.parentNode.querySelector("td:nth-child(3)").textContent);
    d.parentNode.remove();
    this.userInput += tdValue;
    this.span.innerText = this.userInput;
  }
};

// Initialize the BudgetManager object
BudgetApp.addhtml();
