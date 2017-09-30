!function(){
	"use strict";
	var $ = function(elem){
		return document.getElementById(elem);
	}
	
	
	var createStr = function(str){
		return  '<div class="tyfo-layer-fixed">' +
					'<div class="tyfo-layer-bg" style="opacity:0;"></div>' +
					'<div class="tyfo-layer-relative">' +
						'<div class="tyfo-layer-absolute">' +
							str +
						'</div>' +
					'</div>' +
				'</div>';
	}
	window.layer = {
		msg : function(str){
			var str = createStr(str);
			console.log(str);
			body.innerHTML = str;
		}
	}
}()
