# GifTastic

###
Deployed Link: https://parthmparmar.github.io/GifTastic/

### Overview

In the website the user is clicks on predefined buttons or buttons from favorite list to get 10 still gifs.  The gifs can be played by clicking on the still image and paused by clicking on it again.  

The user can also add a new animal to get gifs for by adding a new button using the input form on the right side.  The user can make a permanent button on the page by click add to favorite button.

![screenshot](assets/images/Screenshot.png?raw=true "Screen Shot")

### What was used for this assignment

- jQuery to listen to the button clicks, get user input values from the from and add element / items to the page

- .attr to assign attributes to elements

- .text to add text that is displayed on page to an element

- .removeClass to remove a class from an element (remove off class to ensure element is displayed on page)

- .clone to copy an existing element with event listeners (card and button, original elements are off display)

- .children to get focus on the child element of a select element (allows for more targeted changes within a given element like card, so to change the src of the image in the card)

- .ajax to connect to GIMPHY api and get 10 images for the button clicked, e.g. cat or dog

- windows.localstorage to allow user to save animals for future use as buttons (use JSON to convert to string and back to object as needed)
