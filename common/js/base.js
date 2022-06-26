window.onload = function () {
  var subHeader = document.getElementById("subHeaderArea");
  var about = document.getElementById("item__about");
  var solutions = document.getElementById("item__solutions");
  var ir = document.getElementById("item__ir");
  var sustainability = document.getElementById("item__sustainability");
  var pressRoom = document.getElementById("item__press-room");



  about.addEventListener("mouseover", function () {
    subHeader.style.display = 'block';
    document.getElementById("list__about").style.display = 'block';
    document.getElementById("list__solutions").style.display = 'none';
    document.getElementById("list__ir").style.display = 'none';
    document.getElementById("list__sustainability").style.display = 'none';
    document.getElementById("list__press-room").style.display = 'none';
  }, false);
  
  solutions.addEventListener("mouseover", function () {
    subHeader.style.display = 'block';
    document.getElementById("list__about").style.display = 'none';
    document.getElementById("list__solutions").style.display = 'block';
    document.getElementById("list__ir").style.display = 'none';
    document.getElementById("list__sustainability").style.display = 'none';
    document.getElementById("list__press-room").style.display = 'none';
  }, false);
  
  ir.addEventListener("mouseover", function () {
    subHeader.style.display = 'block';
    document.getElementById("list__about").style.display = 'none';
    document.getElementById("list__solutions").style.display = 'none';
    document.getElementById("list__ir").style.display = 'block';
    document.getElementById("list__sustainability").style.display = 'none';
    document.getElementById("list__press-room").style.display = 'none';
  }, false);

  sustainability.addEventListener("mouseover", function () {
    subHeader.style.display = 'block';
    document.getElementById("list__about").style.display = 'none';
    document.getElementById("list__solutions").style.display = 'none';
    document.getElementById("list__ir").style.display = 'none';
    document.getElementById("list__sustainability").style.display = 'block';
    document.getElementById("list__press-room").style.display = 'none';
  }, false);

  pressRoom.addEventListener("mouseover", function () {
    subHeader.style.display = 'block';
    document.getElementById("list__about").style.display = 'none';
    document.getElementById("list__solutions").style.display = 'none';
    document.getElementById("list__ir").style.display = 'none';
    document.getElementById("list__sustainability").style.display = 'none';
    document.getElementById("list__press-room").style.display = 'block';
  }, false);


  subHeader.addEventListener("mouseover", function () {
    document.getElementById("subHeaderArea").style.display = 'block';
  }, false);

  subHeader.addEventListener("mouseout", function () {
    document.getElementById("subHeaderArea").style.display = 'none';
  }, false);
}