console.log('Loaded!');

//move the image
var img = document.getElementById('madi');
img.onclick = function()
{

    var interval = setInterval(moveRight,50);
};

var marginLeft = 0;
function moveRight()
{
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
