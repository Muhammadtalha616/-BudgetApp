        var userInput;
        var expenseAmount;
        var totalExpense = 0;
        var span;
        var h1 = document.getElementById("budgetH1");
        var divForBudgetInput = document.getElementById("divForBudgetInput")
        var divForExpenseInput = document.getElementById("divForExpenseInput");
        var table = document.getElementById("table");
         var td3;
        function addBudget() {
            userInput = parseInt(document.getElementById("inputTag").value);
            if (isNaN(userInput)) {
                alert("Please enter only numbers")
            } else {
                span = document.getElementById("span");
                span.innerText = userInput;
            }
            document.getElementById("inputTag").value = "";
        }

        function addExpense() {
            var expenseName = document.getElementById("expenseName").value;
            expenseAmount = parseInt(document.getElementById("expenseAmount").value);
            var date = document.getElementById("expenseDate").value;
            if (isNaN(expenseAmount)) {
                alert("Please enter numbers")

            } else {
                var tr = document.createElement("tr");
                table.appendChild(tr);
                var td1 = document.createElement("td");
                td1.textContent = date;
                var td2 = document.createElement("td");
                td2.textContent = expenseName
                td3 = document.createElement("td");
                td3.textContent = expenseAmount;
                var dltButton = document.createElement("button");
                tr.setAttribute("data-amount", expenseAmount.toString());

                dltButton.setAttribute("onclick", "deleteRow(this)")
                dltButton.textContent = "Delete";
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(dltButton);
            }
            userInput = userInput - expenseAmount;
            span = document.getElementById("span");
            span.innerText = userInput;
            totalExpense = totalExpense + expenseAmount;
        }
        function deleteRow(d) {
            var tdValue = parseInt(d.parentNode.querySelector("td:nth-child(3)").textContent);
            d.parentNode.remove();
            userInput = userInput + tdValue;
            span = document.getElementById("span");
            span.innerText = userInput;

        }