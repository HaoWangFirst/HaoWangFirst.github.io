
var myImage = document.querySelector('img');

myImage.onclick=function(){
	var myscr = myImage.getAtrtibute('src');
/*	if(myscr === '.\images\my.JPG'){
		myImage.setAttribute('src','.\images\duanjiaqi.jpg');
	}else{
		myImage.setAttribute('src',',\images\my.JPG');
	}*/
	myImage.setAttribute('src','./images/duanjiaqi.jpg');
}