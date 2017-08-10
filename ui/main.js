console.log('Loaded!');

//move the image
var img = document.getElementById('madi');
img.onclick = function()
{

    var interval = setInterval(moveRight,50);
};

var div = document.getElementById('div');
div.onclick = function()
{
    var int = setInterval(moveUp,50);
};
function moveUp()
{
    marginUp = marginUp + 5;
    div.style.marginUp = marginUp + 'px';
}

var marginLeft = 0;
function moveRight()
{
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
