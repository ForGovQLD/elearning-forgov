window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const player = GetPlayer();
const question1JS = player.GetVar("question1")
const url = "https://default51778d2aa6ab4c7697dc782782d650.46.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/77f941400afa4b2fb26d67bda5695472/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=zoAuKPpxX8QYZeLABi5kfe6o90vi67Lzo3GhJn7VPbg";
const xhr = new XMLHttpRequest();
xhr.open("POST", url);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};
const data = JSON.stringify ({
  "question1": question1JS
})
xhr.send(data);

}

};
