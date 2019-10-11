var button_array = ["cat", "dog", "bat", "spider", "rat", "lion", "tiger", "hawk", "parrot"];


var btnSetup = $("#btn-setup");
var buttonDisplay = $(".button-display");

function add_button(button_name, add_to){
    var newBtn = btnSetup.clone(true);
    newBtn.attr("data-item", button_name);
    newBtn.removeClass("off");
    newBtn.text(button_name);
    add_to.append(newBtn);
}

for (var i = 0; i < button_array.length; i++) {
    add_button(button_array[i], buttonDisplay);
}

$(".btn").on("click", function (){
    console.log($(this).attr("data-item"));
});

$("#add").on("click", function (){
    var add_name = $("#animal-input").val().trim()
    if (add_name != "") {
        add_button(add_name, buttonDisplay);
    }
});
