window.onload = function () {
  var subHeader = document.getElementById("subHeaderArea");
  var mainHeader = document.getElementById("mainHeaderArea");
  var about = document.getElementById("item__about");
  var solutions = document.getElementById("item__solutions");
  var ir = document.getElementById("item__ir");
  var sustainability = document.getElementById("item__sustainability");
  var pressRoom = document.getElementById("item__press-room");
  var scroll = document.getElementById("scroll");

  about.addEventListener("mouseover", function () {
    subHeader.style.display = 'block';
    mainHeader.style.backgroundColor = '#fff';
    document.getElementById("list__about").style.display = 'block';
    document.getElementById("list__solutions").style.display = 'none';
    document.getElementById("list__ir").style.display = 'none';
    document.getElementById("list__sustainability").style.display = 'none';
    document.getElementById("list__press-room").style.display = 'none';
  }, false);
  
  solutions.addEventListener("mouseover", function () {
    subHeader.style.display = 'block';
    mainHeader.style.backgroundColor = '#fff';
    document.getElementById("list__about").style.display = 'none';
    document.getElementById("list__solutions").style.display = 'block';
    document.getElementById("list__ir").style.display = 'none';
    document.getElementById("list__sustainability").style.display = 'none';
    document.getElementById("list__press-room").style.display = 'none';
  }, false);
  
  ir.addEventListener("mouseover", function () {
    subHeader.style.display = 'block';
    mainHeader.style.backgroundColor = '#fff';
    document.getElementById("list__about").style.display = 'none';
    document.getElementById("list__solutions").style.display = 'none';
    document.getElementById("list__ir").style.display = 'block';
    document.getElementById("list__sustainability").style.display = 'none';
    document.getElementById("list__press-room").style.display = 'none';
  }, false);

  sustainability.addEventListener("mouseover", function () {
    subHeader.style.display = 'block';
    mainHeader.style.backgroundColor = '#fff';
    document.getElementById("list__about").style.display = 'none';
    document.getElementById("list__solutions").style.display = 'none';
    document.getElementById("list__ir").style.display = 'none';
    document.getElementById("list__sustainability").style.display = 'block';
    document.getElementById("list__press-room").style.display = 'none';
  }, false);

  pressRoom.addEventListener("mouseover", function () {
    subHeader.style.display = 'block';
    mainHeader.style.backgroundColor = '#fff';
    document.getElementById("list__about").style.display = 'none';
    document.getElementById("list__solutions").style.display = 'none';
    document.getElementById("list__ir").style.display = 'none';
    document.getElementById("list__sustainability").style.display = 'none';
    document.getElementById("list__press-room").style.display = 'block';
  }, false);


  subHeader.addEventListener("mouseover", function () {
    subHeader.style.display = 'block';
    mainHeader.style.backgroundColor = '#fff';
  }, false);

  subHeader.addEventListener("mouseout", function () {
    subHeader.style.display = 'none';
    mainHeader.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  }, false);

  scroll.onclick = function() {
    window.scroll({top: window.innerHeight, behavior: 'smooth'});
  };


}