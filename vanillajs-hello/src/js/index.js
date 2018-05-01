/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
import '../style/index.scss';

window.onload = function(){
    document.querySelector('.back-card').addEventListener('click',theButtonWasClicked);
};

function theButtonWasClicked(){
    
var rank = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10",
            "J", "Q", "K"];
var types = ["&clubs;", "&diams;", "&hearts;", "&spades;"];
var suits = ["clubs", "diams","hearts","spades"];
var cards = new Array();
    
    var randomType = Math.floor(Math.random() *3);
    var randomRank = Math.floor(Math.random() *13);

    let theSymbol = document.querySelector('.symbol');
    theSymbol.innerHTML = "<span>"+types[randomType]+"</span>";
    
    let theUpperNumber = document.querySelector('.upper-number');
    theUpperNumber.innerHTML = "<span>"+rank[randomRank]+"</span>";
    
    let theLowerNumber = document.querySelector('.lower-number');
    theLowerNumber.innerHTML = "<span>"+rank[randomRank]+"</span>";

    let theCard = document.querySelector('.card');
    theCard .className = "card "+suits[randomType];
}



//     function newStyles(){
//     document.querySelector('.hearts').style.color = 'red';
// }