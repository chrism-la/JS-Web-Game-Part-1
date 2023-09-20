function newImage(imageFile, leftValue, bottomValue) {
   let newImage = document.createElement("img");
   newImage.src = imageFile;
   newImage.style.position = "fixed";
   newImage.style.left = leftValue;
   newImage.style.bottom = bottomValue;
   document.body.append(newImage);
}

newImage("assets/green-character.gif", "100px", "100px");
newImage("assets/pine-tree.png", "450px", "200px");
newImage("assets/tree.png", "200px", "300px");
newImage("assets/pillar.png", "350px", "100px");
newImage("assets/crate.png", "150px", "200px");
newImage("assets/well.png", "500px", "425px");

function newItem(imageFile, leftValue, bottomValue) {
   let newItem = document.createElement("img");
   newItem.src = imageFile;
   newItem.style.position = "fixed";
   newItem.style.left = leftValue;
   newItem.style.bottom = bottomValue;
   document.body.append(newItem);

   newItem.addEventListener("dblclick", function () {
      newItem.remove();
   });
}

newItem("assets/sword.png", "500px", "405px");
newItem("assets/shield.png", "165px", "185px");
newItem("assets/staff.png", "600px", "100px");
