 function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("../images/p2_5.jpeg")) {
    image.src = "../images/p2_1.jpeg";
  } else if (image.src.match("../images/p2_1.jpeg")){
    image.src = "../images/p2_2.jpeg";
  }
else if (image.src.match("../images/p2_2.jpeg")){
image.src="../images/p2_3.jpeg"
}
else if (image.src.match("../images/p2_3.jpeg")){
image.src="../images/p2_4.jpeg"
}
else{
image.src="../images/p2_5.jpeg"
}
}

