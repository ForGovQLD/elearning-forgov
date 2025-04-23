window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const player = GetPlayer();
const question1JS = player.GetVar("question1")
const url = "https://prod-30.australiasoutheast.logic.azure.com:443/workflows/31a9f0dcb9e5458d8c6c23330dded257/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=FVn3LHScyJvJN_OqLceGimDsxj7GjqHrCRJ80eOzeE8";
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
