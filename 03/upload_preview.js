(function(){
		//获取图片路径方法
		function getObjectURL(file) {
		    var url = null ; 
		    if (window.createObjectURL!=undefined) { // basic
		        url = window.createObjectURL(file) ;
		    } else if (window.URL!=undefined) { // mozilla(firefox)
		        url = window.URL.createObjectURL(file) ;
		    } else if (window.webkitURL!=undefined) { // webkit or chrome
		        url = window.webkitURL.createObjectURL(file) ;
		    }
		    return url ;
		}
		
		function preview(that,options) {
			//接受files数组列表
			var _file = that.files,str = "";
			console.log(_file);
			//限制上传图片的最大值
			if(_file.length > options.maxLen){
				alert("最多上传" + options.maxLen + "张图片！");
				return;
			}
			
			//循环拼接为字符串
			for(var i = 0; i < _file.length; i++){
				str += "<img src='" + getObjectURL(_file[i]) + "'/>";
			}
			
			//将图片动态添加到图片展示区
			document.getElementById(options.showID).innerHTML = str;
		}
		
		
		var upload_preview = window.uploadPreview = function(options){
			var defaults = {
				fileID : options.fileID || "file",
				showID : options.showID || "img-box",
				maxLen : options.maxLen || 3
			}
			//获取页面的input标签
		    var file = document.getElementById(defaults.fileID);
		    //给input绑定change事件
		    file.onchange = function(){
		    	var that = this;
		    	preview(that,defaults);
		    };
		}
	})()