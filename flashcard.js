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
    if(text.includes(cloze) && cloze!==""){
      this.fullText=text;
      this.cloze=cloze;
      this.partialText=this.getClozeText();
    } else if(cloze!=="") {
      throw "Cloze not in Text";
    } else {
      throw "Cloze cannot be empty";
    }
  } else {
    return new ClozeCard(text, cloze);
  }
}

ClozeCard.prototype.getClozeText = function(){
  //sanitizing cloze for regex;
  var tempCloze=this.cloze.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
  var reg = new RegExp(tempCloze, "g");
  return this.fullText.replace(reg, " ... ");
};


ClozeCard.prototype.getDisplayStr = function(){
  var str="======Front========\n";
  str+=this.partialText;
  str+="\n=======Back========\n";
  str+=this.fullText;
  str+="\n===================";

  return str;
};