
jQuery(document).ready(function($){


			var ieCurrent;
			var myPlayer
			$(".video-js").each(function(index) {
				var videoId=$(this).attr("id");
				videoId=videoId.replace("_html5_api","");
				
				_V_(videoId).ready(function(){
				 	myPlayer = this;
				 	
				 	this.addEvent("ended", function(){
				 		$("#"+videoId).find(".vjs-poster").css("display","block");
					}); 
					
				});
			});
			
				$(".vjs-fullscreen-control").removeClass("fullScreenMode");
				var count=1;
				var current;
				var currentSize=0;
				
				var onFullScreen=0;
				
				var fullSize;
				
				var os=navigator.platform;
				os=os.substring(0,3).toLowerCase();
			
				var widthVal=$(".vjs-tech").width();
				
				// $(window).keypress(function() {
					// if($.browser.msie) {
						// if($(ieCurrent).hasClass("fullScreenMode")) {
							// $(ieCurrent).removeClass("fullScreenMode");
						// }
					// }
       			// });
       			
       			$(".projectSliderContents .vjs-play-control").live("click", function() {
       				if($(this).hasClass("vjs-playing")) {
       				} else {
       					$(this).parent().parent().parent().parent().cycle("pause");
       					$(this).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("pause");
       				}
       			});
       			
       			$(".projectSliderContents .vjs-poster, .projectSliderContents .vjs-tech").live("click", function() {
       				if($(this).siblings(".vjs-controls").find(".vjs-play-control").hasClass("vjs-playing")) {
       				} else {
       					$(this).parent().parent().parent().cycle("pause");
       					$(this).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("pause");
       				}
       			});
       			
        			document.addEventListener("fullscreenchange", function () {
        				
					if(os == "mac" && onFullScreen == 1 ) {
						
							setTimeout(function() {
								if($(current).width() <= currentSize  ) {
									currentSize=0;
			       			 		$(".vjs-controls").removeClass("fullScreenMode");
			       			 		$(".workBox").css("display","block");
			       			 		$(current).closest(".video-js").removeClass("inFullScreen");
			       			 		onFullScreen=0;
			       			 	} else {
			       			 		$(current).closest(".video-js").addClass("inFullScreen");
			       			 		$(current).parent().parent().parent().cycle("pause");
			       			 		$(current).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("pause");
			       			 	} 	
							},100);	
						} else {
						if($(current).width() <= currentSize  ) {
	       			 		$(".vjs-controls").removeClass("fullScreenMode");
	       			 		$(".workBox").css("display","block");
	       			 		$(current).closest(".video-js").removeClass("inFullScreen");
	       			 		onFullScreen=0;
	       			  	} else {
	       			  		$(current).closest(".video-js").addClass("inFullScreen");
	       			 		$(current).parent().parent().parent().cycle("pause");
	       			 		$(current).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("pause");
	       			 	} 
	       			  }
				}, false);
				 
				document.addEventListener("mozfullscreenchange", function () {
					if(os == "mac" && onFullScreen == 1 ) {
							setTimeout(function() {
								if($(current).width() <= currentSize  ) {
									
									currentSize=0;
			       			 		$(".vjs-controls").removeClass("fullScreenMode");
			       			 		$(".workBox").css("display","block");
			       			 		$(current).closest(".video-js").removeClass("inFullScreen");
			       			 		onFullScreen=0;
			       			  	}else {
			       			  		$(current).closest(".video-js").addClass("inFullScreen");
			       			 		$(current).parent().parent().parent().cycle("pause");
			       			 		$(current).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("pause");
			       			 	} 
							},500);	
						} else {
						if($(current).width() <= currentSize  ) {
	       			 		$(".vjs-controls").removeClass("fullScreenMode");
	       			 		$(".workBox").css("display","block");
	       			 		$(current).closest(".video-js").removeClass("inFullScreen");
	       			 		onFullScreen=0;
	       			  	} else {
	       			  		$(current).closest(".video-js").addClass("inFullScreen");
	       			 		$(current).parent().parent().parent().cycle("pause");
	       			 		$(current).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("pause");
	       			 	} 
	       			  }
				}, false);
				 
				document.addEventListener("webkitfullscreenchange", function () {
					if(os == "mac" && onFullScreen == 1 ) {
							setTimeout(function() {
								if($(current).width() <= currentSize  ) {
									currentSize=0;
			       			 		$(".vjs-controls").removeClass("fullScreenMode");
			       			 		$(".workBox").css("display","block");
			       			 		$(current).closest(".video-js").removeClass("inFullScreen");
			       			 		onFullScreen=0;
			       			  	}else {
			       			  		$(current).closest(".video-js").addClass("inFullScreen");
			       			 		$(current).parent().parent().parent().cycle("pause");
			       			 		$(current).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("pause");
			       			 	} 
							},500);	
						} else {
						if($(current).width() <= currentSize  ) {
	       			 		$(".vjs-controls").removeClass("fullScreenMode");
	       			 		$(".workBox").css("display","block");
	       			 		$(current).closest(".video-js").removeClass("inFullScreen");
	       			 		onFullScreen=0;
	       			  	}	else {
	       			  		$(current).closest(".video-js").addClass("inFullScreen");
	       			 		$(current).parent().parent().parent().cycle("pause");
	       			 		$(current).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("pause");
	       			 	} 
	       			  }
				}, false);
	       			
	       		var isIpad=0;
				if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/phone/i)))
				{
					isIpad=1;
				}
				
					
	       			
				$(".vjs-fullscreen-control").live("click", function() {
					$(this).closest(".projectSliderContents").cycle("pause");
					$(this).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("pause");
					if($.browser.msie) {
						ieCurrent=$(this).parent();
						$(this).parent().addClass("fullScreenMode");
						if($(ieCurrent).closest(".video-js").hasClass("inFullScreen")) {
							$(ieCurrent).closest(".video-js").removeClass("inFullScreen");
						} else {
							$(ieCurrent).closest(".video-js").addClass("inFullScreen");
						}
						
						$(ieCurrent).parent().parent().parent().cycle("pause");
						$(ieCurrent).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("pause");
					}
					
					if(isIpad == 0 ) {
						current=$(this).parent().siblings(".vjs-tech");
						currentSize=$(current).width();
						var thisVal=$(this);
						if($(this).closest(".video-js").hasClass("inFullScreen")) {
							$(this).closest(".video-js").removeClass("inFullScreen");
						} else {
							$(this).closest(".video-js").addClass("inFullScreen");
						}
						$(this).parent().parent().parent().parent().cycle("pause");
						$(this).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("pause");
						
						setTimeout(function() {
							$(thisVal).parent().addClass("fullScreenMode");
							fullSize=$(current).width();
							onFullScreen=1;
						},100);
					} 
				});
				
				
});