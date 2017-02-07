function bankAccount(name, initialDeposit) {
    this.name = name;
    this.balance = initialDeposit;
}

bankAccount.prototype.transaction = function(deposit, withdrawal) {
    this.balance += (deposit - withdrawal)

    if(this.balance <0) {
     if (confirm("You have insufficient funds. You will be charged a $25 overdraft fee"));
        this.balance = this.balance - 25;
    } else {
    return false;
    }

    return this.balance;
}

$(function() {    
    $("#register").submit(function(event) {
        event.preventDefault();
        
        var name = $("#name").val();
        $("#name").val("");
        var initialDeposit = parseFloat($("#initial-deposit").val());
        $("#initial-deposit").val("")
        var newAccount = new bankAccount(name, initialDeposit);

        $(".accountName").text(newAccount.name);
        $(".balance").text(newAccount.balance.toFixed(2));

        $("#transaction").submit(function(event) {
        event.preventDefault();
       
        var deposit = parseFloat($("#deposit").val());
        $("#deposit").val("")
        var withdrawal = parseFloat($("#withdrawal").val());
        $("#withdrawal").val("")

        if(isNaN(deposit)) {
            deposit = 0;
        }

        if(isNaN(withdrawal)) {
            withdrawal = 0;
        }

        newAccount.transaction(deposit, withdrawal);

        $(".balance").text(newAccount.balance.toFixed(2));
        });
    });
});