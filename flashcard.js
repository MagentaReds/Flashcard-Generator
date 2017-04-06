module.exports={
  BasicCard: BasicCard,
  ClozeCard: ClozeCard
};

function BasicCard(front, back){
  if(this instanceof BasicCard) {
    this.front=front;
    this.back=back;
  } else {
    return new BasicCard(front, back);
  }
}

BasicCard.prototype.getDisplayStr = function(){
  var str="======Front========\n";
  str+=this.front;
  str+="\n=======Back========\n";
  str+=this.back;
  str+="\n===================";

  return str;
};

function ClozeCard(text, cloze){
  if(this instanceof ClozeCard){
    this.text=text;
    this.cloze=cloze;
  } else {
    return new ClozeCard(text, cloze);
  }
}

ClozeCard.prototype.getClozeText = function(){
  var tempText=this.text;
  var tempCloze=this.cloze; 
  //santiizing cloze for regex;
  tempCloze.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
  var reg = new RegExp(tempCloze, "g");
  tempText = tempText.replace(reg, " ... ");
  return tempText;
};


ClozeCard.prototype.getDisplayStr = function(){
  var str="======Front========\n";
  str+=this.getClozeText();
  str+="\n=======Back========\n";
  str+=this.cloze;
  str+="\n===================";

  return str;
};