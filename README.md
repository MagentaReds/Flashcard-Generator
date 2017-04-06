# Flashcard-Generator

Sample Usage of the CLI:
```
node cli.js basic "This is the Front Text" "This is the Back Text" 
node cli.js cloze "This is the Front Text" "Front Text"
```

The simple cli interface is expecting three arguments
- basic/cloze
- Front text for basic cards, or the Full text for cloze cards
- Back text for basic cards, or the Cloze for cloze cards.

It will then output a consolized display of the card made and then after that all the properties of the card object.  Also in cli.js, it shows you how to access the parts of either type of card object directly.


## BasicCard

  This object only has two properties (front, back) that are taken as paramemters by the constructor.
  
  It also has a method called getDisplayStr() that returns a string that is built using the front and back properties.

## ClozeCard

  This object has three properties (fullText, partialText, cloze).  The constructor takes in two parameters, the full text and the cloze, and then generates the partialText based off them.
  
  The constructor does very little validation or checking to make sure the card makes sense; it is mostly garbage in, garbage out.  The execptions are if the cloze does not exist in the fullText, or if the cloze is the empty string, then it will throw an error.

  ClozeCard also has a getDisplayStr() that builds and returns a string based off the fullText and partialText properties.
  It also has a helper function called getClozeText() that returns a clozed text based off the fullText and cloze stored in the object.  The constructor calls this to set the property of partialText.
