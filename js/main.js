window.onload = function() {
	setListener('quantify');
	setListener('duration');
	document.addEventListener('click', function(e) {
		var v = ['quantify', 'duration'];
		for(x in v) {
			var id = document.getElementById(`${v[x]}_helper`);

			if(!id.contains(e.target)) {
				document.getElementById(`${v[x]}_tooltip`).style.display = 'none';
			}
			

		}

	});

};

document.addEventListener("DOMContentLoaded", function() {
    var screenWidth = window.innerWidth;

   
	var image = document.getElementById('seeding');
	var moveDistance = (64 * (0.02 + image.offsetWidth / 2)) / screenWidth;

    // 旋转和移动图片
    var angleRad = Math.atan(64 / screenWidth);
    var angleDeg = angleRad * (180 / Math.PI);
    
	image.style.transform = 'rotate(' + angleDeg + 'deg)';
	image.style.bottom = (moveDistance) + 'px';
});

function setListener(keyword) {


	var id = document.getElementById(`${keyword}_helper`);
	var tooltip = document.getElementById(`${keyword}_tooltip`);


	//id.addEventListener('mouseover', function() {
	//	tooltip.style.display = 'block';
	//	setShowPosition(id, tooltip);
	//});

	//id.addEventListener('mouseout', function() {
	//	tooltip.style.display = 'none';
	//	setShowPosition(id, tooltip);
	//});

	id.addEventListener('click', function() {
		if(tooltip.style.display === 'block') {
			tooltip.style.display = 'none';
		} else {
			tooltip.style.display = 'block';
			setShowPosition(id, tooltip);
		}
	});



}

function setShowPosition(helper, element) {
	var helperRect = helper.getBoundingClientRect();
	var screenHeight = window.innerHeight;
	var screenWidth = window.innerWidth;
	var elementHeight = element.offsetHeight;
	var elementWidth = element.offsetWidth;
	var elementTop = helperRect.bottom - helperRect.top;//event.pageY - elementHeight / 2;
	var elementLeft = 0//event.pageX - elementWidth / 2;


	if (screenHeight - helperRect.top < elementHeight) {
		elementTop = elementHeight * -1;
	  }
	var diff = screenWidth - helperRect.left;
	if (diff < elementWidth) {
		elementLeft = (elementWidth - diff) * -1;//elementWidth * -1 + helperRect.right - helperRect.left;

	  }
	
	  // 设置元素的位置
	  //element.style.top = elementTop + 'px';
	  element.style.left = elementLeft + 'px';
}

