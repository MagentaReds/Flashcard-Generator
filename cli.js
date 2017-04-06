var BasicCard= require("./flashcard.js").BasicCard;
var ClozeCard= require("./flashcard.js").ClozeCard;


var typeCard = process.argv[2];
var text1 = process.argv[3];
var text2 = process.argv[4];

if(typeCard==="basic"){
  var card= new BasicCard(text1,text2);
  console.log(card.getDisplayStr());
  console.log(card.front);
  console.log(card.back);
} else if(typeCard==="cloze"){
  var card = new ClozeCard(text1, text2);
  console.log(card.getDisplayStr());
  console.log(card.text);
  console.log(card.cloze);
}