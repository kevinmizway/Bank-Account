function bankAccount(name, initialDeposit) {
    this.name = name;
    this.balance = initialDeposit;
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
    });
});