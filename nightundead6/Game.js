
var writing = "";

var button = [];


function Play () {

    for ( i = 0; i < 3;    i++) {
    
        button.push(prompt("Welcome to my game"));
        writing += button[i] + "<br>" ;
        document.getElementById('lists').innerHTML = writing;
    };
};

