var BasicCard= require("./flashcard.js").BasicCard;
var ClozeCard= require("./flashcard.js").ClozeCard;


var typeCard = process.argv[2];
var text1 = process.argv[3];
var text2 = process.argv[4];

if(typeCard==="basic"){
  var card= new BasicCard(text1,text2);

  //console output of card
  console.log(card.getDisplayStr());

  //Get relevant inforamtion directly from object
  console.log();
  console.log(card.front);
  console.log(card.back);
} else if(typeCard==="cloze"){
  var card;

  //ClozeCard will throw an error if the cloze is not in the text, or of the cloze is the empty string
  try {
    card = new ClozeCard(text1, text2);
  } catch(err){
    return console.log(err);
  }

  //console output of card
  console.log(card.getDisplayStr());

  //Get relevant information direclty from object
  console.log();
  console.log(card.fullText);
  console.log(card.partialText);
  console.log(card.cloze);
} else {
  console.log("Invalid argument");
}