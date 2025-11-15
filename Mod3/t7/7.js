const button = document.getElementById("target");
button.addEventListener('mouseover', function(evt){
  button.src = "img/picB.jpg";
});

button.addEventListener('mouseout', function(evt){
  button.src = "img/picA.jpg";
});