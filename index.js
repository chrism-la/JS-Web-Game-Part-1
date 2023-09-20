function newImage(source, leftValue, bottomValue) {
   let newImage = document.createElement("img");
   newImage.src = source;
   newImage.style.position = "fixed";
   newImage.style.left = leftValue;
   newImage.style.bottom = bottomValue;
   document.body.append(newImage);
}

newImage("assets/green-character.gif", "100px", "100px");
newImage("assets/pine-tree.png", "450px", "200px");
