var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};


function autorun()
{
	var svgPaths = document.querySelectorAll("polyline, path");
	forEach(svgPaths, function(index, path){
		var totalLength = path.getTotalLength();
		path.style["stroke-dasharray"] = totalLength;
		path.style["stroke-dashoffset"] = totalLength;
	});
}


if (document.addEventListener) document.addEventListener("DOMContentLoaded", autorun, false);
else if (document.attachEvent) document.attachEvent("onreadystatechange", autorun);
else window.onload = autorun;