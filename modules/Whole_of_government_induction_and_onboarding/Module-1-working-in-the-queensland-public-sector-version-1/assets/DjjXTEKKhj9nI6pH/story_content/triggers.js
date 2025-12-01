function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6kvkUo9AjFF":
        Script1();
        break;
      case "6OJplwf8ZHX":
        Script2();
        break;
      case "66CF66l0EgR":
        Script3();
        break;
      case "5o0oZDuvnKs":
        Script4();
        break;
      case "64AndqUfmCy":
        Script5();
        break;
      case "6Og7xtJg8Ni":
        Script6();
        break;
      case "5d6WmAyoEmY":
        Script7();
        break;
      case "5p4gW0yZEno":
        Script8();
        break;
      case "697CJmyUyrP":
        Script9();
        break;
      case "5zSOlsEKOl1":
        Script10();
        break;
      case "6ggzlPE1s7M":
        Script11();
        break;
      case "6MLhY55S3tl":
        Script12();
        break;
      case "5tHPdmAVOre":
        Script13();
        break;
      case "6BGdzihh5hX":
        Script14();
        break;
      case "64QcOcRtK38":
        Script15();
        break;
      case "6hZbp7OBwj0":
        Script16();
        break;
  }
}

window.InitExecuteScripts = function()
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
  player.once(() => {
const target = object('6VrVzKGoGYE');
const duration = 750;
const easing = 'ease-out';
const id = '5qpcGThenG0';
const growAmount = 0.2;
const delay = 250;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5tCP3onwmc5');
const duration = 750;
const easing = 'ease-out';
const id = '6oAyb459JyO';
const growAmount = 0.3;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6MqDhK4QYRs');
const duration = 750;
const easing = 'ease-out';
const id = '6McNX52uBqg';
const pulseAmount = 0.03;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  const target = object('5tCP3onwmc5');
const duration = 750;
const easing = 'ease-out';
const id = '6BrbVmISsl0';
const shrinkAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('5tCP3onwmc5');
const duration = 750;
const easing = 'ease-out';
const id = '6oAyb459JyO';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  player.once(() => {
const target = object('5Yc5f11L1NP');
const duration = 750;
const easing = 'ease-out';
const id = '5x6Z81Jjj3t';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  player.once(() => {
const target = object('6QgV3M0WnCj');
const duration = 750;
const easing = 'ease-out';
const id = '5fFHmHDUHPa';
const growAmount = 0.3;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script8 = function()
{
  const target = object('6QgV3M0WnCj');
const duration = 750;
const easing = 'ease-out';
const id = '6E3bIRJ7c9J';
const shrinkAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6QgV3M0WnCj');
const duration = 750;
const easing = 'ease-out';
const id = '5fFHmHDUHPa';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  player.once(() => {
const target = object('5dJLLL8FcVJ');
const duration = 750;
const easing = 'ease-out';
const id = '611oiW7p3oh';
const pulseAmount = 0.03;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script11 = function()
{
  player.once(() => {
const target = object('61CdIFFsQ6u');
const duration = 750;
const easing = 'ease-out';
const id = '6G6uwJaeMwQ';
const growAmount = 0.3;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script12 = function()
{
  const target = object('61CdIFFsQ6u');
const duration = 750;
const easing = 'ease-out';
const id = '6DGoA60t4ql';
const shrinkAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('61CdIFFsQ6u');
const duration = 750;
const easing = 'ease-out';
const id = '6G6uwJaeMwQ';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
