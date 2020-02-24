function agreeTermOfService() {
    document.getElementById("reserve-button").style.display = "none";
    document.getElementById("pay-button").style.display = "inline";
    document.getElementById("pay-button").disabled = false;
    document.getElementById("agreement-message").style.display = "inline";
}