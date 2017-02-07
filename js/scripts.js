function bankAccount(name, initialDeposit) {
    this.name = name;
    this.balance = initialDeposit;
}

bankAccount.prototype.transaction = function(deposit, withdrawal) {
    this.balance += (deposit - withdrawal)
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

        newAccount.transaction(deposit, withdrawal);

        $(".balance").text(newAccount.balance.toFixed(2));
        });
    });
});