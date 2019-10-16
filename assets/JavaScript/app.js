var button_array = ["cat", "dog", "bat", "spider", "rat", "lion", "tiger", "hawk", "parrot"];


var btnSetup = $(".btn-secondary");
var buttonDisplay = $(".button-display");
var cardSetup = $(".card")
var gifDisplay = $(".gif-display")

function load_fav_btn(){
    button_array = JSON.parse(window.localStorage.getItem('fav_array'));
}

load_fav_btn();

function add_button(button_name, add_to){
    var newBtn = btnSetup.clone(true);
    newBtn.attr("data-item", button_name);
    newBtn.removeClass("off");
    newBtn.text(button_name);
    add_to.append(newBtn);
}

function add_gif (stillLinkInput, playLinkInput, ratingInput, addTo) {
    var newCard = cardSetup.clone(true);
    newCard.attr("data-still", stillLinkInput);
    newCard.attr("data-play", playLinkInput);
    newCard.attr("data-status", "still");
    newCard.removeClass("off");
    newCard.children().attr("src", stillLinkInput);
    newCard.find("#rating").text("Raiting: "+ ratingInput);
    addTo.append(newCard)
}

for (var i = 0; i < button_array.length; i++) {
    add_button(button_array[i], buttonDisplay);
}

$(".btn-secondary").on("click", function (){
    var animalName = $(this).attr("data-item");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=7cDSLMzhZcERGBKhmFgrnnS0pg9sAEtR&q=" + animalName + "&limit=10&offset=0&lang=en";
    $.ajax({url: queryURL, method: "GET"}).then(function(results){
        console.log(results)
        for (var i = 0; i < 11; i++){
            var stillLink = results.data[i].images.fixed_width_still.url;
            var playLink = results.data[i].images.fixed_width.url;
            var rating = results.data[i].rating
            add_gif(stillLink, playLink, rating, gifDisplay);
        }
    });
});

$("#add").on("click", function (){
    var add_name = $("#animal-input").val().trim()
    if (add_name != "") {
        add_button(add_name, buttonDisplay);
    }
});

$("#add-fav").on("click", function(){
    var add_name = $("#animal-input").val().trim()
    button_array.push(add_name);
    window.localStorage.setItem("fav_array", JSON.stringify(button_array));
    if (add_name != "") {
        add_button(add_name, buttonDisplay);
    }
});

$(".card").on("click", function(){
    var gifCard = $(this);
    var status = gifCard.attr("data-status");
    
    if (status == "still"){
        gifCard.children().attr("src", gifCard.attr("data-play"));
        gifCard.attr("data-status", "play");
    }
    else if (status == "play"){
        gifCard.children().attr("src", gifCard.attr("data-still"));
        gifCard.attr("data-status", "still");
    }

});
