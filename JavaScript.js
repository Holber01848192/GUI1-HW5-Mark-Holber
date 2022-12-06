/*
Name: Mark Holber/UML CS/mark_holber@student.uml.edu
Date: 11-30-2022
File:JavaScript.js
Description: Scrabble game
*/
//when the document is ready to output, this function runs

//When the document is ready, hide all the tiles
$(document).ready(function(){

  document.getElementById('a').style.display = 'none';
  document.getElementById('b').style.display = 'none';
  document.getElementById('c').style.display = 'none';
  document.getElementById('d').style.display = 'none';
  document.getElementById('e').style.display = 'none';
  document.getElementById('f').style.display = 'none';
  document.getElementById('g').style.display = 'none';
  document.getElementById('h').style.display = 'none';
  document.getElementById('i').style.display = 'none';
  document.getElementById('j').style.display = 'none';
  document.getElementById('k').style.display = 'none';
  document.getElementById('l').style.display = 'none';
  document.getElementById('m').style.display = 'none';
  document.getElementById('n').style.display = 'none';
  document.getElementById('o').style.display = 'none';
  document.getElementById('p').style.display = 'none';
  document.getElementById('q').style.display = 'none';
  document.getElementById('r').style.display = 'none';
  document.getElementById('s').style.display = 'none';
  document.getElementById('t').style.display = 'none';
  document.getElementById('u').style.display = 'none';
  document.getElementById('v').style.display = 'none';
  document.getElementById('w').style.display = 'none';
  document.getElementById('x').style.display = 'none';
  document.getElementById('y').style.display = 'none';
  document.getElementById('z').style.display = 'none';
  document.getElementById('blank').style.display = 'none';

    /*document.getElementById('a').style.display = 'block';
  document.getElementById('b').style.display = 'block';
  document.getElementById('c').style.display = 'block';
  document.getElementById('d').style.display = 'block';
  document.getElementById('e').style.display = 'block';
  document.getElementById('f').style.display = 'block';
  document.getElementById('g').style.display = 'block';
  document.getElementById('h').style.display = 'block';
  document.getElementById('i').style.display = 'block';
  document.getElementById('j').style.display = 'block';
  document.getElementById('k').style.display = 'block';
  document.getElementById('l').style.display = 'block';
  document.getElementById('m').style.display = 'block';
  document.getElementById('n').style.display = 'block';
  document.getElementById('o').style.display = 'block';
  document.getElementById('p').style.display = 'block';
  document.getElementById('q').style.display = 'block';
  document.getElementById('r').style.display = 'block';
  document.getElementById('s').style.display = 'block';
  document.getElementById('t').style.display = 'block';
  document.getElementById('u').style.display = 'block';
  document.getElementById('v').style.display = 'block';
  document.getElementById('w').style.display = 'block';
  document.getElementById('x').style.display = 'block';
  document.getElementById('y').style.display = 'block';
  document.getElementById('z').style.display = 'block';
  document.getElementById('blank').style.display = 'block';*/


})

//defining arrays, which are defined globally to override resets
const letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','blank'];
const values = [1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10,2];
let remaining = [9,2,2,4,12,2,3,2,9,1,1,4,2,6,8,2,1,6,4,6,4,2,2,1,2,1,2];
let word = "Word:";
let add = 0;
var repeat = "";
var finalScore = 0;
var counter = 0;

//Values initalized for the multiplication of the double word and double tiles slot
var b1 = 1;
var b2 = 2;
var b3 = 1;
var b4 = 1;
var b5 = 1;
var b6 = 1;
var b7 = 2;

//values of tiles on board
var p1a = -1;
var p2a = -1;
var p3a = -1;
var p4a = -1;
var p5a = -1;
var p6a = -1;
var p7a = -1;
var p1b = -1;
var p2b = -1;
var p3b = -1;
var p4b = -1;
var p5b = -1;
var p6b = -1;
var p7b = -1;


//when new tiles are selected, this function is called
function newTiles(){

 
//Initalize values between 1 and 27
      p1a = Math.floor(Math.random() * 27);
      p2a = Math.floor(Math.random() * 27);
      p3a = Math.floor(Math.random() * 27);
      p4a = Math.floor(Math.random() * 27);
      p5a = Math.floor(Math.random() * 27);
      p6a = Math.floor(Math.random() * 27);
      p7a = Math.floor(Math.random() * 27);

//if there are any matching numbers, repeat generation until all are distinct
      while((p1a == p2a) || (p1a == p3a) ||(p1a == p4a) ||(p1a ==p5a) ||(p1a == p6a) || (p1a == p7a)
      || (p2a == p3a) || (p2a == p4a) || (p2a ==p5a) || (p2a == p6a) || (p2a == p7a) || (p3a == p4a) ||
      (p3a == p5a) ||(p3a == p6a) ||(p3a == p7a) ||(p4a == p5a) ||(p4a == p6a) ||(p4a == p7a) || 
      (p5a == p6a) ||(p5a == p7a) ||(p6a == p7a))
      {
        p1a = Math.floor(Math.random() * 27);
      p2a = Math.floor(Math.random() * 27);
      p3a = Math.floor(Math.random() * 27);
      p4a = Math.floor(Math.random() * 27);
      p5a = Math.floor(Math.random() * 27);
      p6a = Math.floor(Math.random() * 27);
      p7a = Math.floor(Math.random() * 27);
      }
      /*console.log(p1a);
      console.log(p2a);
      console.log(p3a);
      console.log(p4a);
      console.log(p5a);
      console.log(p6a);
      console.log(p7a);*/

//Convert numbers to associated letters
      var p1b = letter[p1a];
      var p2b = letter[p2a];
      var p3b = letter[p3a];
      var p4b = letter[p4a];
      var p5b = letter[p5a];
      var p6b = letter[p6a];
      var p7b = letter[p7a];

//Subtract the remaining number of each tile
      remaining[p1b] = remaining[p1b] - 1;
      remaining[p2b] = remaining[p2b] - 1;
      remaining[p3b] = remaining[p3b] - 1;
      remaining[p4b] = remaining[p4b] - 1;
      remaining[p5b] = remaining[p5b] - 1;
      remaining[p6b] = remaining[p6b] - 1;
      remaining[p7b] = remaining[p7b] - 1;

//test outputs
      console.log(p1b);
      console.log(p2b);
      console.log(p3b);
      console.log(p4b);
      console.log(p5b);
      console.log(p6b);
      console.log(p7b);

      console.log(counter);
      
//Reveal tiles    
      document.getElementById(p1b).style.display = 'block';
      counter++;
      document.getElementById(p2b).style.display = 'block';
      counter++;
      document.getElementById(p3b).style.display = 'block';
      counter++;
      document.getElementById(p4b).style.display = 'block';
      counter++;
      document.getElementById(p5b).style.display = 'block';
      counter++;
      document.getElementById(p6b).style.display = 'block';
      counter++;
      document.getElementById(p7b).style.display = 'block';
      counter++;
     

      console.log(counter);
  }

  
 

  



//allow for the dropping of tiles on specified sections
function allowDrop(ev) {
  ev.preventDefault();
}

//allows tiles to be dragged from their starting position to their destination
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  var data = ev.dataTransfer.getData("text");
  counter--;
  console.log(counter);
 

}

var j = 0;
var k = 0;

//function when a tile is dropped onto an appropriate destination.
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));

  console.log(data);
  console.log(typeof data);



  const addSymbol = "+";

  var i = 0;

  while(letter[i] != data){
    i++;
  }
  word = word + letter[i];
  repeat = repeat + letter[i];

  //values for the double word and double letter sections
  var elem = document.querySelector("#div3")
  var elem2 = document.querySelector("#div7")
  if(elem.childNodes.length == 0 ){
    add = add + values[i];
    if(elem2.childNodes.length != 0 && k == 0){
      add = add + (values[i] );
      k++;
    }
   
  }
  else if(elem.childNodes.length != 0 && j == 0){
        add = add + values[i];
        add = add * 2;
        j++;
        if(elem2.childNodes.length != 0 && k == 0){
          add = add + (values[i] * 2);
          k++;
        }
       
  }

  else if(elem.childNodes.length != 0 && j != 0){
       add = add + (values[i] * 2);
       if(elem2.childNodes.length != 0 && k == 0){
        add = add + (values[i] * 2);
        k++;
      }
  }



  
//output the current score and the current word
  document.getElementById('score').innerHTML = add;
  document.getElementById('word').innerHTML = word;
  


}

//When the submit button is pressed, remove all tiles from game and
//reset board. Update current score and word to be 0
//Set final score to be what the current score was
function btnSubmit(){
  document.getElementById('finalScore').innerHTML = add;
  word = " ";
  add = 0;
  

  document.getElementById('score').innerHTML = add;
  document.getElementById('word').innerHTML = word;


  //Hide all tiles
  document.getElementById('a').style.display = 'none';
  document.getElementById('b').style.display = 'none';
  document.getElementById('c').style.display = 'none';
  document.getElementById('d').style.display = 'none';
  document.getElementById('e').style.display = 'none';
  document.getElementById('f').style.display = 'none';
  document.getElementById('g').style.display = 'none';
  document.getElementById('h').style.display = 'none';
  document.getElementById('i').style.display = 'none';
  document.getElementById('j').style.display = 'none';
  document.getElementById('k').style.display = 'none';
  document.getElementById('l').style.display = 'none';
  document.getElementById('m').style.display = 'none';
  document.getElementById('n').style.display = 'none';
  document.getElementById('o').style.display = 'none';
  document.getElementById('p').style.display = 'none';
  document.getElementById('q').style.display = 'none';
  document.getElementById('r').style.display = 'none';
  document.getElementById('s').style.display = 'none';
  document.getElementById('t').style.display = 'none';
  document.getElementById('u').style.display = 'none';
  document.getElementById('v').style.display = 'none';
  document.getElementById('w').style.display = 'none';
  document.getElementById('x').style.display = 'none';
  document.getElementById('y').style.display = 'none';
  document.getElementById('z').style.display = 'none';
  document.getElementById('blank').style.display = 'none';

  $('div#div1').empty();
  $('div#div2').empty();
  $('div#div3').empty();
  $('div#div4').empty();
  $('div#div5').empty();
  $('div#div6').empty();
  $('div#div7').empty();

 
}

//reset all values on the board.
function reset(){

 
  word = " ";
  $('div#div1').empty();
  $('div#div2').empty();
  $('div#div3').empty();
  $('div#div4').empty();
  $('div#div5').empty();
  $('div#div6').empty();
  $('div#div7').empty();
  document.getElementById('word').innerHTML = word;
  add = 0;

  document.getElementById('score').innerHTML = add;


}



