const que1 = document.getElementById("que1");

if (typeof jQuery !== 'undefined') {
    que1.innerText = "jQuery is loaded!";
} else {
    que1.innerText = "jQuery is NOT loaded.";
}


$("#topBtn").click(function () {
    $(window).scrollTop(0);
})