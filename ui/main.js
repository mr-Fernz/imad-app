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
    var interval = setInterval(moveLeft,50);
};
function moveUp()
{
    marginLeft = marginLeft + 5;
    div.style.marginLeft = marginLeft + 'px';
}

var marginLeft = 0;
function moveRight()
{
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
