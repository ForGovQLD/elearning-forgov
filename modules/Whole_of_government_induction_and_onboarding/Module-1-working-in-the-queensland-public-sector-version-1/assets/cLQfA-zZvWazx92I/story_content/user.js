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
window.Script1 = function()
{
  var style = document.createElement('style');
style.type = 'text/css';
style.media = 'print';
style.appendChild(document.createTextNode(`
  @page { 
    size: landscape; 
    margin: 0.9in; /* Set a top margin of 0.9 inches */
  }
  body {
    margin: 0; /* Remove default body margins */
    overflow: hidden; /* Prevent any overflow issues */
    background: white; /* Ensure a white background for printing */
  }
  img, .printable-content {
    width: calc(100% - 1.8in); /* Adjust width to fit within the printable area */
    height: calc(100% - 0.9in); /* Adjust height to fit within the printable area */
    object-fit: contain; /* Ensure the content maintains its aspect ratio */
    page-break-inside: avoid; /* Prevent the content from splitting across pages */
    border: 2px solid blue; /* Add a 2px blue border around the content */
    box-sizing: border-box; /* Include the border in the element's dimensions */
    margin-top: 0.9in; /* Add a top margin of 0.9 inches */
  }
`));
document.head.appendChild(style);

}

};
