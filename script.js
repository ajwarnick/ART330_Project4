console.log("js loaded");

// This section is to make a field the user types into
// and we can do something if they type the magic phrase

// These are the variable you will need
let magicPhrase = "web";
let name = "Your name does not match any in our system";

let editable = document.getElementById('textInput');
let output = document.getElementById('textOutput');

// if the editable feild is present we add an event listener 
if ( editable ){ 
    // This happend each time the text in the textInput changes
    editable.addEventListener('input', function() {
        //console.log(editable.innerHTML);
        if( editable.innerHTML.includes(magicPhrase) ){
            // This happens if the magicPhrase is in the text typed
            output.innerHTML = "";
            //this takes you to a new page
            //window.location.href = '/index.html';
        }else{
            output.innerHTML = name;
        }
    });
}



// This is the way we link to pages based on a dice roll
document.querySelectorAll('.random_link').forEach(function(random_link) {
    // Now do something with my button
    random_link.addEventListener("click", function(){
        let data = Object.assign({}, random_link.dataset);
        // We get the number of links and roll a dice of that many sides
        let number_of_links = Object.keys(data).length;
        let dice_roll = Math.floor(Math.random() * Math.floor(number_of_links));

        // we send the window to the rolled link
        window.location.href = Object.values(data)[dice_roll]
    })
});