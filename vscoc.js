const list = [];
const getmoods = localStorage.getItem("mood");
$(document).ready(function () {
    $("#contentDiv").load("headinc.html");
    $("#navs").load("navbar.html");
    setDefaults(); sessionStorage.setItem("lastname", "Smith");
});
function addTOBusket() {
    var getValue = $("#op").val();
    list.push(getValue);

    // Clear the existing content before appending the updated list
    $("#buket").html('');

    // Iterate over the list and append each item
    list.forEach(element => {
        $("#buket").append(element + " | "); // Adding <br> for line breaks
    });
}

function changeDarkmood() {
    if ($("#mood").prop("checked")) {
        localStorage.setItem("mood", "1")
        var element = document.getElementById("bodys");
        $(".ele").addClass("bg-dark");
        $(".ele").addClass("text-light");
    } else {
        localStorage.removeItem("mood")
        $(".ele").removeClass("bg-dark");
        $(".ele").removeClass("text-light");
    }

}
function setDefaults() {
    if (getmoods != null || getmoods == "1") {
        $(".ele").addClass("bg-dark");
        $(".ele").addClass("text-light");
        $("#mood").prop("checked", true);
    } else {
        $(".ele").removeClass("bg-dark");
        $(".ele").removeClass("text-light");
    }


}

