
var convas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var image = new Image();
var slider = document.getElementById('scale-range');

var watermarkCanvas = document.getElementById('watermark-canvas');
var watermarkContext = watermarkCanvas.getContext('2d');

window.onload = function () 
{
	canvas.width = 1152;
	canvas.height = 768;
	image.src = 'img/technology_h.png';
	var scale = slider.value;
	image.onload = function()
	{
	
		drawImageByScale(scale);
		slider.onmousemove = function ()
		{
			scale = slider.value;
			drawImageByScale(scale);
		}
		//放大镜效果
		convas.onmousedown = function(e)
		{
			e.preventDefault();
			var point = windowToCanvas(e.clientX , e.clientY);
			console.log( point.x, point.y);
			isMouseDown = true;
		}
		
		convas.onmousemove = function(e)
		{
			e.preventDefault();
			if(isMouseDown == true)
			{
				var point = windowToCanvas(e.clientX , e.clientY);
			}
		}
		canvas.onmouseup = function(e)
		{
			e.preventDefault();
			isMouseDown = false;
		}
		canvas.onmouseout = function(e)
		{
			e.preventDefault();
			isMouseDown = false;
		}
	}
	
	watermarkCanvas.width = 600;
	watermarkCanvas.height = 100;
	
	watermarkContext.font = "bold 30px Arial";
	watermarkContext.lineWidth = "1";
	watermarkContext.fillStyle = "rgba(0,0,0,0.9)";
	watermarkContext.textBaseline = "middle";
	watermarkContext.fillText("练习canvas图片操作，2016/4/17 加油！" , 20 ,50);
	
	
}

function drawImageByScale(scale)
{
	var imageWidth = 1152 * scale;
	var imageHeight = 768 * scale;
	
	var dx = canvas.width / 2 - imageWidth / 2;
	var dy = canvas.height / 2 - imageHeight / 2;
	context.clearRect(0,0,canvas.width,canvas.height);
	context.drawImage(image, dx ,dy , imageWidth , imageHeight);
	context.drawImage(watermarkCanvas , canvas.width-watermarkCanvas.width , canvas.height-watermarkCanvas.height);

}

