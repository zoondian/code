function html5Tags(){
	document.createElement('header');  
	document.createElement('section');  
	document.createElement('nav');  
	document.createElement('footer');  
	document.createElement('menu');  
	document.createElement('hgroup');  
	document.createElement('article');  
	document.createElement('aside');  
	document.createElement('details'); 
	document.createElement('figure');
	document.createElement('time');
	document.createElement('mark');
}

html5Tags();

	
var projectName;



jQuery(document).ready(function($){
//alert($(window).width());
	projectName = {
		
		common : {
			commonLoad : function(){
				$('body').append('<div class="overlay"></div>');
				$('body').append('<div class="modal_wrapper"></div>');
				$('.overlay').css('opacity', 0.6);
				
				/*$('.getDirection').live('click',function(){ 				
					$.ajax({
						url:'modalDirections.html',
						success:function(loadContent){
							$('.modal_wrapper').html(loadContent);
							$('.modal_wrapper, .overlay').fadeIn(1000);
							$('html,body').stop().animate({scrollTop: 0},{queue: false, 

duration:1000, easing:'easeOutExpo'});
						}
					});
				});*/
				
				if($.browser.msie) {
					
					if(jQuery.browser.version == 8.0) {
						$(".workBox").css("margin-right","19px");
					}
					if(jQuery.browser.version == 8.0 || jQuery.browser.version == 9.0) {
						$(".workFlip, .serviceFlip").hover(function() {
							$(this).find(".front").stop(true,true).fadeOut(400);
							$(this).find(".back").stop(true,true).fadeIn(400);
						}, function() {
							$(this).find(".front").stop(true,true).fadeIn(400);
							$(this).find(".back").stop(true,true).fadeOut(400);
						});
					}
				}
				
				var videoScroll=0;
				
				var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
				if(is_chrome == true ) {
					$('head').append('<link rel="stylesheet" href="css/bubbleStyleChrome.css" type="text/css" />');
				} else {
					$('head').append('<link rel="stylesheet" href="css/bubbleStyle.css" type="text/css" />');
				}
				
				
				$(".vimeoControls .progressBar").slider({
					min: 0,
					max: 100,
					slide: function( event, ui ) {
						curValue=ui.value;
					//	var thisIndex=$(slider).parent().index(".vimeoPlayer");
						var sliderIndex=$(this).parent().parent().parent().index(".vimeoPlayer");
						setDynamicProgress(curValue,sliderIndex);
						//$("p").first().append( ui.value+' ');
					}
				});
				
				
				$(".ytControls .progressBar").slider({
					min: 0,
					max: 100,
					slide: function( event, ui ) {
						var curValue=ui.value;
						var slider=$(this).parent().parent().parent();
						$(slider).find(".progressBar .playProgress").width(curValue+"%");
						setDynamicYTProgress(curValue,slider);
					}
				});
					
					
				var pageLink=$(location).attr('href');
				var start=pageLink.lastIndexOf("/")+1;
				pageLink=pageLink.substr(start,pageLink.length);
				
				$.ajax({
					url:'header.html',
					dataType: "html",
					success:function(loadContent){
						$("#container").prepend(loadContent);
							checkNavName(pageLink, ".pageNav ul li a");
							if($(".innerNav").size() > 0 && $(".pageNav ul li a.active").size() <= 0 ) {
								var firstLink=$(".innerNav ul li").first().find("a").attr("href");
								checkNavName(firstLink,".pageNav ul li a");
							}
					}
				});
				
				$.ajax({
					url:'footer.html',
					dataType: "html",
					success:function(loadContent){
						$("#container").append(loadContent);
						checkNavName(pageLink, ".footerNav ul li a");
						
						if($(".innerNav").size() > 0 && $(".footerNav ul li a.active").size() <= 0 ) {
							var firstLink=$(".innerNav ul li").first().find("a").attr("href");
							checkNavName(firstLink,".footerNav ul li a");
						}
					}
				});
				
				function checkNavName(checkLink, checkNav) {
					$(checkNav).each(function() {
						var currentLink=$(this).attr("href");
						if(currentLink == checkLink) {
							$(this).addClass("active"); 
						}
					});
				}
				
				
			var touchDevice=0;
			var windowLoaded =0;
			if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/android/i)) || (navigator.userAgent.match(/phone/i))|| (navigator.userAgent.match(/ipad/i))) { 
        		touchDevice = 1;
        		windowLoad();
        			
        		$(".vimeoOverlay").css("display","none");
        		$(window).load(function() {
        			windowLoaded=1;
        			calculateImagesize();
					calculateParasize();
        		});
        		setTimeout(function() {
        			if(windowLoaded == 0 ) {
						calculateImagesize();
						calculateParasize();
					}
				},2000);
        		
			}  else {
				
				$(window).load(function(){
					windowLoad();
					calculateParasize();
				});
			}
			
			function calculateImagesize() {
				
				$(".projectSliderContents .slides > img").each(function() {
					var curHeight=$(this).closest(".projectSliderContents").height();
					var imgHeight=$(this).height();
					if( curHeight < imgHeight ) {
						imgHeight=imgHeight+"px";
						$(this).closest(".projectSliderContents").height(imgHeight);
						$(this).parent(".slides").height(imgHeight);
					}
				});
				
				
			}
			
			function calculateParasize() {
				$(".sliderDetailContents").each(function() {
					var paraCurHeight=$(this).closest(".sliderDetails").height();
					var paraHeight=$(this).height();
					
					if( paraCurHeight < paraHeight ) {
						paraHeight=paraHeight+"px";
						$(this).closest(".sliderDetails").height(paraHeight);
					}
					
				});
			}
				
			function windowLoad() {
				
				$('.cirrusIpadSlider .projectSlider .projectSliderContents').cycle({
	                    fx:     'scrollLeft',
	                    speed:  1000,
	                    easing: 'easeInOutExpo',
	                    slideExpr: '.slidesA',
	                    timeout:6100, delay: 6000, 
	                    pager: '#cirrusIpadSliderNav'
	            });
				
				$('#pressImageWrapper').cycle({ 
				    fx:     'fade', 
				    speed:  1500, 
				    expr: '.slide',
				    timeout: 0, 
				    easing:'easeInOutExpo',
				    next:   '#btnNext', 
				    prev:   '#btnPrev' 
				});
				
				$('.ipadSlider .projectSlider .projectSliderContents').cycle({
                    fx:     'scrollLeft',
                    speed:  1000,
                    timeout:6100, delay: 6000, 
                    easing: 'easeInOutExpo',
                    slideExpr: '.slidesA',
					pager: '#ipadSliderNav'
                });
                

                $('#labsGallery').cycle({
			        fx:     'fadeout',
			        speed:  1500,
			        timeout: 0,
			        easing: 'easeOutExpo',
			        pager:  '#labsThumb',
			        pagerAnchorBuilder: function(idx, slide) {
		            	return '<li><a href="#"><img src="' + slide.src + '" width="129" height="79" /></a></li>';
		        	}
			    });
			    
			    $('#largeGallery').cycle({
			        fx:     'fadeout',
			        speed:  1500,
			        timeout: 0,
			        easing: 'easeOutExpo',
			        pager:  '#designThumb',
			        pagerAnchorBuilder: function(idx, slide) {
		            	return '<li><a href="#"><img src="' + $(slide).find('img').attr('src') + '" width="80" height="79" /></a></li>';
		        	}
			    });
                
				$('.macSlider .projectSlider .projectSliderContents').cycle({
                    fx:     'scrollLeft',
                    speed:  1000,
                    timeout:6100, delay: 6000, 
                    easing: 'easeInOutExpo',
                    slideExpr: '.slides',
					pager: '#macSliderNav'
                });
				
				$('.imageSlider .projectSlider .projectSliderContents').cycle({
                    fx:     'scrollLeft',
                    speed:  1000,
                    timeout:6100, delay: 6000, 
                    easing: 'easeInOutExpo',
                    slideExpr: '.slides',
					pager: '#imageSliderNav'
                });
                
				$('.tvSlider .projectSlider .projectSliderContents').cycle({
                    fx:     'scrollLeft',
                    speed:  1000,
                    timeout:6100, delay: 6000, 
                    easing: 'easeInOutExpo',
                    slideExpr: '.slides',
					pager: '#tvSliderNav'
                });
				
				$('.atlantiusSlider .projectSlider .projectSliderContents').cycle({
                    fx:     'scrollLeft',
                    speed:  1000,
                    timeout:6100, delay: 6000, 
                    easing: 'easeInOutExpo',
                    slideExpr: '.slides',
					pager: '#atlantiusSliderNav'
                });
				
				
				$('.atlantsimageSlider .projectSlider .projectSliderContents').cycle({
                    fx:     'scrollLeft',
                    speed:  1000,
                    timeout:6100, delay: 6000, 
                    easing: 'easeInOutExpo',
                    slideExpr: '.slides',
					pager: '#atlantisImageSliderNav'
                });
                
                
                $('.cirrusImageSlider .projectSlider .projectSliderContents').cycle({
                    fx:     'scrollLeft',
                    speed:  1000,
                    timeout:6100, delay: 6000, 
                    easing: 'easeInOutExpo',
                    slideExpr: '.slides',
					pager: '#cirrusImageSliderNav'
                });
                
                $('.mayoSlider .projectSlider .projectSliderContents').cycle({
                    fx:     'scrollLeft',
                    speed:  1000,
                    timeout:6100, delay: 6000, 
                    easing: 'easeInOutExpo',
                    slideExpr: '.slides',
					pager: '#mayoSlider'
                });
                
                 $('.mayoimageSlider .projectSlider .projectSliderContents').cycle({
                    fx:     'scrollLeft',
                    speed:  1000,
                    timeout:6100, delay: 6000, 
                    easing: 'easeInOutExpo',
                    slideExpr: '.slides',
					pager: '#mayoimageSlider'
                });
                
                $('.expresimageSlider .projectSlider .projectSliderContents').cycle({
                    fx:     'scrollLeft',
                    speed:  1000,
                    timeout:6100, delay: 6000, 
                    easing: 'easeInOutExpo',
                    slideExpr: '.slides',
					pager: '#mayoimageSlider'
                });
                
                $('.nassauimageSlider .projectSlider .projectSliderContents').cycle({
                    fx:     'scrollLeft',
                    speed:  1000,
                    timeout:6100, delay: 6000, 
                    easing: 'easeInOutExpo',
                    slideExpr: '.slides',
					pager: '#nassauimageSliderNav'
                });
                
                $('.macSliderLeft .projectSlider .projectSliderContents').cycle({
                    fx:     'scrollLeft',
                    speed:  1000,
                    timeout:6100, delay: 6000, 
                    easing: 'easeInOutExpo',
                    slideExpr: '.slides',
					pager: '#macSliderLeftNav'
                });
                
                 $('.tvSliderTop .projectSlider .projectSliderContents').cycle({
                    fx:     'scrollLeft',
                    speed:  1000,
                    timeout:6100, delay: 6000, 
                    easing: 'easeInOutExpo',
                    slideExpr: '.slidesA',
					pager: '#tvSliderTopNav'
                });
                	
		    		$("#cirrusIpadSliderNav > a, #tvSliderTopNav > a, #ipadSliderNav > a").live("click", function(){
		    			if($(".vjs-playing").size() > 0 ) {
			    			var thisVal=$(".vjs-playing").parent().parent().parent().index();
			    			if($(this).index() != thisVal ) {
			    				$(".vjs-playing").trigger("click");
			    			}
		    			}
		    			
		    			if($(".pause").size() > 0 ) {
		    				$(".pause").trigger("click");
		    			}
		    			
		    			
		    			$(this).closest("aside").siblings(".projectSlider").find(".projectSliderContents").cycle("resume");
		    			videoScroll = 0;
		    			$(this).closest("aside").find(".sliderDetails").cycle("resume");
		    			
		    			
					});

					$('.sliderDetails').each(function(index){
					 	var thisVideo=$(this).parent().siblings(".projectSlider").find(".projectSliderContents > .slides > img").size();
					 	var timeoutVal;
					 	// if(thisVideo > 0 ) {
					 		// timeoutVal=6100;
					 	// } else {
					 		// timeoutVal=0;
					 	// }
					 	
					 	
						$(this).append("<div class='slideDetailsPager' id='detailsSliderNav"+index+"'></div>")
					
						var nav="#"+"detailsSliderNav"+index;
						$(this).cycle({
		                    fx:     'fade',
		                    speed:  1000,
		                    timeout:6100, delay: 6000, 
		                    easing: 'easeInOutExpo',
		                    slideExpr: '.sliderDetailContents',
							pager: nav
		                });
	                });
					
					$("body").animate({opacity: "1.0"},1000);
					
					$(".sliderNav a").bind("click", function(){
						var thisIndex=$(this).index();
						var thisVal=$(this).parent().siblings(".sliderDetails").find(".slideDetailsPager a").eq(thisIndex);
						$(thisVal).trigger("click");
					});
					
				 $('.projectBox').find(".projectSliderContents").cycle('pause'); 
				  $('.projectBox').eq(0).find(".projectSliderContents").cycle('resume'); 
				  
				$('.projectBox').find('aside .sliderDetails').cycle('pause'); 
				 $('.projectBox').first().find("aside .sliderDetails").cycle('resume'); 
				 
			      	$(".projectBox  .projectSliderContents").bind('inview', function (event, visible) {
			      		
			    		if (visible && ieScroll == 0 && videoScroll == 0 ) {
						    $(this).cycle('resume'); 
						    $(this).parent().siblings("aside").find(".sliderDetails").cycle('resume');
						 } else {
						    $(this).cycle('pause'); 
						   $(this).parent().siblings("aside").find(".sliderDetails").cycle('pause');
						 }
		    		}); 
		    		//|| $(this).find(".play").hasClass("pause")
		    		
			      	$(".projectSliderContents").each(function() {
						if( ($(this).find(".slidesA").first().find(".vjs-controls .vjs-play-control").hasClass("vjs-playing"))  ) {
							$(this).cycle("pause");
							$(this).parent(".projectSlider").siblings("aside").find(".sliderDetails").cycle("pause");
							videoScroll=1;
						}
					});
            } 
				
				
		// end of windowLoad...
				
				$(".twitterWrap #twitter_update_list li").first().addClass("showTwitter");
				$(".twitterWrap #twitter_update_list li").first().css("opacity","1.0");
				$("#twitter_update_list > li > span > a").attr("target","_blank");
				$('.tweetWrap #twitter_update_list li > span ').prepend('<span class="leftQuote">“</span>');
				$('.tweetWrap #twitter_update_list li > span').append('<span class="rightQuote">”</span>');
				
				
			$(".center").addClass("bubbleShow");
				
				$(".bubbleWrap").click(function() {
					
					if(! $(this).hasClass("center")) {
						$(".center").removeClass().addClass("bubbleWrap bubbleSmall5");
						
						var order=$(this).attr("class");
						order=order.replace("bubbleWrap","");
						order=parseInt(order.substr(order.length - 1));
						$(this).addClass("center");
						
						$(".bubbleWrap").each(function() {
							if(!$(this).hasClass("center")) {
								var currentClass=$(this).attr("class");
							
								currentClass=currentClass.replace("bubbleWrap","");
								currentClass=parseInt(currentClass.substr(currentClass.length - 1));
								var newClass=currentClass-1;
								if(currentClass > order ) {
									$(this).removeClass("bubbleSmall"+currentClass).addClass("bubbleSmall"+newClass);
								}
							} 
							else {
							}
						});
					}
				});
// 				
				$(".bubbleWrap").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){ 
					
					 $(".center").addClass("bubbleShow");
					// $(".center .bubbleContent").fadeIn(100);
					
				});

				$(".innerNav .commonWidth ul li a").each(function() {
					$(this).append("<span></span>");
				});
				
				$(".teamBoxHeader").click(function() {
					$(this).parent().siblings().find(".teamContentHolder").slideUp

(1200,'easeOutExpo');
					$(this).parent().siblings().removeClass("teamExpand");
					
					$(this).siblings(".teamContentHolder").stop(true,true).slideDown

(1000,'easeOutExpo');
					
					if($(this).siblings(".teamContentHolder").size() > 0) {
						$(this).parent().addClass("teamExpand");
					}
				});
				
				var slider="undefined";
				var size;
				var slideStart=false;
				
				
				$(".slide1").addClass("current");
				size=$(".bannerContainer .bannerHolder").size();
				size--;
					
				setTimeout(function() {
					if($(".amazingActive").size() <= 0 ) {
						$(".amazingHolder .workBox").eq(0).addClass("amazingActive");
						$(".bannerHolder").css("display","block");
						startSlideShow();
					}
				},6000);
				
				
				function startSlideShow() {
					slider=setInterval(function() {
						var indexVal=parseInt($(".current").index(".bannerHolder"));
						var nextIndex=indexVal+1;
						if(indexVal == size ) {
							nextIndex=0;
						}
						moveSlide(indexVal,nextIndex);
					},5000);
				}
					
				$(".amazingHolder .workBox").hover(function(){
					if(slider != "undefined") {
						clearInterval(slider);
					}
					$(".bannerHolder").css("display","block");
					$(".amazingHolder .workBox").removeClass("amazingActive");
					$(this).addClass("amazingActive");
					var indexVal=parseInt($(this).index());
					moveSlide(indexVal,indexVal);
					
					if(touchDevice == 1) {
						startSlideShow();
					}
				}, function() {
					if(touchDevice == 0) {
						startSlideShow();
					}
				});
				
				$("a.next").click(function() {
					if(slider != "undefined") {
						clearInterval(slider);
					}
					slider = null;
					$(".bannerHolder").css("display","block");
					$(".amazingHolder .workBox").removeClass("amazingActive");
					var indexVal=parseInt($(".current").index(".bannerHolder"));
					var nextIndex=indexVal+1;
					if(indexVal == size || slideStart == false ) {
						nextIndex=0;
					}
					moveSlide(indexVal,nextIndex);
				});
				
				$("a.prev").click(function() {
					if(slider != "undefined") {
						clearInterval(slider);
					}
					slider = null;
					$(".bannerHolder").css("display","block");
					$(".amazingHolder .workBox").removeClass("amazingActive");
					var indexVal=parseInt($(".current").index(".bannerHolder"));
					var nextIndex=indexVal-1;
					if(indexVal <= 0 || slideStart == false ) {
						nextIndex=size;
					}
					moveSlide(indexVal,nextIndex);
				});
				
				function moveSlide(indexVal,nextIndex) {
					slideStart=true;
					$(".bannerStarter").css("display","none");
					$(".bannerContainer .bannerHolder").siblings(".bannerHolder").animate({
				       opacity: '0.0'
				    }, { duration: 500, queue: false });
				    $(".bannerContainer .bannerHolder").eq(nextIndex).animate({
				       opacity: '1.0'
				    }, { duration: 500, queue: false });

					$(".bannerContainer .bannerHolder").removeClass("current");
					$(".bannerContainer .bannerHolder").eq(nextIndex).addClass("current");
					
					$(".amazingHolder .workBox").removeClass("amazingActive");
					$(".amazingHolder .workBox").eq(nextIndex).addClass("amazingActive");
					
					if(slider == null) {
						startSlideShow();
					}
				}
				
				$('.serviceFlip').click(function() {
				 $('this').siblings().removeClass('serviceTabletHover');				
				  $('this').addClass('serviceTabletHover');
				}, function() {
				  $(this).find('serviceTabletHover').parent().removeClass('serviceTabletHover');
				});
				
				
				$('.workFlip').click(function() {
				 $('this').siblings().removeClass('workTabletHover');				
				  $('this').addClass('workTabletHover');
				}, function() {
				  $(this).find('workTabletHover').parent().removeClass('workTabletHover');
				});
				
				var thisName;
				$(".contactInfo").hover(function(){
					thisName=$(this).attr("class").split("Wrap");
					thisName="."+thisName[0]+"Hover";
					$(thisName).addClass("highIndex");
					$(thisName).find("img").stop(true,true).fadeOut(400);
					$(thisName).find(".shoopingActive").stop(true,true).fadeIn(400);
					
				}, function(){
					$(thisName).find("img").stop(true,true).fadeIn(400);
					$(thisName).removeClass("highIndex");
					$(thisName).find(".shoopingActive").stop(true,true).fadeOut(400);
				});
				
				$(".contactMap .contactDetails").hover(function(){
					$(this).find("img").stop(true,true).fadeOut(400);
					$(this).addClass("highIndex");
					$(this).find(".shoopingActive").stop(true,true).fadeIn(400);
				}, function() {
					$(this).find("img").stop(true,true).fadeIn(400);
					$(this).removeClass("highIndex");
					$(this).find(".shoopingActive").stop(true,true).fadeOut(400);
				});
						
        		var workBoxSize=$(".workWrap .workBox").size();
        		
        		if(workBoxSize > 12 ) {
        			$(".btnSeemore").css("display","block");
        		}
	        		
				var visibleItems=24;
				$(".workWrap .workBox").slice(0,12).css("display","block");
				
				$(".btnSeemore").click(function() {
					$(".workWrap .workBox").slice(visibleItems-12,visibleItems).show(1000);
					if(visibleItems <= workBoxSize ) {
						$(".btnSeemore").css("display","block");
					} else {
						$(".btnSeemore").css("display","none");
					}
					visibleItems=visibleItems+12;
				});
				
				var twitterId=$("#twitter_update_list > li > a").attr("href");
				
				if(twitterId != null ){
					var start=twitterId.lastIndexOf("/");
					var idFinal=twitterId.substring(start+1,twitterId.length);
					
					var newId="https://twitter.com/intent/retweet?tweet_id="+idFinal;
				
				}
				//$(".twitterProcess .btnRefresh").attr("href",newId);
				
				
				$(".btnRefresh").click(function(event) {
					event.preventDefault();
					$(this).fadeOut(1);
					var $twitter=$("#twitter_update_list .showTwitter");
					
					var newIndex=$(".showTwitter").index()+1;
					
					var size=$("#twitter_update_list li").size();
					if(newIndex >= size ) {
						newIndex=0;
					}
					
				   
					$twitter.removeClass("showTwitter");
					$twitter.animate({ opacity: '0.0'}, { duration: 700, queue: false });
					
				   $("#twitter_update_list li").eq(newIndex).addClass("showTwitter");
				   
				   $('#twitter_update_list li').eq(newIndex).animate({
				    opacity: '1.0'
				  }, {
				    duration: 700, queue: false,
				    complete: function() {
				      $(".btnRefresh").fadeIn(200);
				    }
				  });
					
					
				});
				
				var videoName="http://www.vimeo.com/28201447";
				//var videoName="http://www.youtube.com/watch?v=XSGBVzeBUbk";
				var typeName='';
				
				
				if(videoName.indexOf("vimeo") != -1)
				{
					typeName='http://test.zoowork.com/goconvergence/vimeo.swf';
				}
				else
				{
					typeName='';
				}
				
				// if($("#player1").size() > 0 ) {
					// jwplayer("player1").setup({
						  // stretching: "fill",
						  // flashplayer: "http://test.zoowork.com/goconvergence/player.swf",
						  // controlbar: 'over',
						  // skin: "http://test.zoowork.com/goconvergence/skins/goco.zip",
						  // width: 298,
						  // height: 169,
						  // dock: false,
						  // type: typeName,
						  // image: 'http://test.zoowork.com/goconvergence/images/imgHomePageVideo.jpg',
						  // levels: [
							 // {
								 // file: videoName
							  // }],
						  // 'plugins': {
						    // 'like-1': {}
						  // }
					 // });
				// }
				
				$("#twitter_update_list li > a").each(function() {
					$(this).attr("target","_blank");
				});
				
				if($.browser.msie) {
					$("head").append('<link rel="stylesheet" type="text/css" href="css/stylesIE10.css" />');
				}
				
				if(touchDevice == 1 ) {
					$(".vimeoControlHolder").addClass("displayNone");
					
				} else {
					$(".vimeoControlHolder").css("opacity","0.0");
					$(".vimeoPlayer").hover(function(){
						$(this).find(".vimeoControlHolder").animate({opacity: 1.0},"fast");
					}, function(){
						$(this).find(".vimeoControlHolder").animate({opacity: 0.0},"fast");
					});
					
					$(".ytControlHolder").css("opacity","0.0");
					
					$(".ytPlayer, .projectSliderContents").hover(function(){
						$(this).find(".ytControlHolder").animate({opacity: 1.0},"fast");
					}, function(){
						$(this).find(".ytControlHolder").animate({opacity: 0.0},"fast");
					});
				}
				
				/* start of vimeo Player */
				
				var player=new Array();
				$(".vimeoPlayer").each(function(num){
					var playerId="#player"+(parseInt(num)+1);
					var iframe = $(playerId)[0];
					
					player[num] = $f(iframe),
				    startPlayer(player[num],num);
			    });
			    
			   
			    var playerDuration=new Array();
			    var iframeRealWidth, iframeRealHeight;
		
				function startPlayer(player,indexVal) {
					player.addEvent('ready', function() {
					    player.addEvent('play', onPlay);
					    player.addEvent('pause', onPause);
					    player.addEvent('finish', onFinish);
					    player.addEvent('playProgress', onPlayProgress);
					    player.addEvent('loadProgress', onLoadProgress);
					    player.api('getDuration', function (value, player_id) {
	                    	playerDuration[indexVal]=value;
	                    	if($(".vimeoPlayer").eq(indexVal).find(".play").hasClass("pause")) {
		                    	player.api("play");
		                    } 
	                    });
	                    
					});
				}	
					// Call the API when a button is pressed
					$(".vimeoPlayer").hover(function() {
						$(this).closest(".projectSliderContents").cycle("pause");
				    	$(this).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("pause");
					}, function() {
						if(!$(this).find(".play").hasClass("pause")) { 
							$(this).closest(".projectSliderContents").cycle("resume");
				    		$(this).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("resume");
						}
					});
					
					$(".vimeoOverlay").live("click",function(){
						$(this).closest(".projectSliderContents").cycle("pause");
					    $(this).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("pause");
					    
						var thisIndex=$(this).parent().index(".vimeoPlayer");
						if($(this).siblings(".vimeoControlHolder").find(".play").hasClass("pause")) {
							$(this).siblings(".vimeoControlHolder").find(".play").removeClass("pause");
					    	 player[thisIndex].api("pause");
						} else {
					    	videoScroll=1;
					    	$(this).siblings(".vimeoControlHolder").find(".play").addClass("pause");
					    	 player[thisIndex].api("play");
					    }
					});
					
					$('.vimeoPlayer .play').bind('click', function() {
						$(this).closest(".projectSliderContents").cycle("pause");
					    $(this).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("pause");
						var thisIndex=$(this).parent().parent().parent().index(".vimeoPlayer");
					    if($(this).hasClass("pause")) {
					    	$(this).removeClass("pause");
					    	 player[thisIndex].api("pause");
					    } else {
					    	videoScroll=1;
					    	$(this).addClass("pause");
					    	 player[thisIndex].api("play");
					    }
					});
					
					
					function onPlay(id) {
						id="#"+id;
						$(id).closest(".projectSliderContents").cycle("pause");
				    	$(id).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("pause");
						videoScroll=1;
						$(id).parent(".vimeoPlayer").find(".play").addClass("pause");
					}
					
					function onPause(id) {
						id="#"+id;
						$(id).parent(".vimeoPlayer").find(".play").removeClass("pause");
					}
					
					function onFinish(id) {
						setTimeout(function() {
							id="#"+id;
							var thisIndex=$(id).parent().index(".vimeoPlayer");
							player[thisIndex].api("unload");
							$(id).siblings(".vimeoControlHolder").find($(".vimeoControls .playProgress")).css("width","0%");
					    $(id).siblings(".vimeoControlHolder").find($(".vimeoControls .progressBar")).slider("value","1");
						    $(id).siblings(".vimeoControlHolder").find($(".vimeoControls .loadProgress")).css("width","0%");
					   },600);
					}
					
					function onPlayProgress(data, id) {
					    var percentVal=(data.percent * 100 )+"%";
					   id="#"+id;
					    $(id).siblings(".vimeoControlHolder").find($(".vimeoControls .playProgress")).css("width",percentVal);
					    var sliderVal=Math.round(data.percent * 100);
					    $(id).siblings(".vimeoControlHolder").find($(".vimeoControls .progressBar")).slider("value",sliderVal);
					}
					
					function onLoadProgress(data, id) {
					   var percentVal=(data.percent * 100 )+"%";
					   id="#"+id;
					    $(id).siblings(".vimeoControlHolder").find($(".vimeoControls .loadProgress")).css("width",percentVal);
					}	
					
					function setDynamicProgress(slideVal,sliderIndex) {
						$(".vimeoPlayer").eq(sliderIndex).find($(".vimeoControls .playProgress")).css("width",slideVal+"%");
						var playVal=(slideVal * playerDuration[sliderIndex])/100;
						 player[sliderIndex].api('seekTo', playVal);
					}
					
					var windowWidth=$(window).width();
					var windowHeight=$(window).height();
					
					$(".muteControl").toggle(function() {
						var thisVal=$(this).parent().parent().parent().index(".vimeoPlayer");
						player[thisVal].api('setVolume', 0);
						$(this).addClass("muted");
					}, function() {
						var thisVal=$(this).parent().parent().parent().index(".vimeoPlayer");
						player[thisVal].api('setVolume', 10);
						$(this).removeClass("muted");
					});
				
				
				/* end of vimeo */  
				var playValue=false;
				$(".ytPlayer").each(function(index) {
					var link=$(this).find(".ytLink").text();
					var val=link.lastIndexOf("/");
					link=link.substring(val+1,link.length);
					var playerWidth=$(this).width();
					var playerHeight=$(this).height();
					
					
					
					var id="#youTubePlayer"+index;
					
					jQuery(id).tubeplayer({
						width: playerWidth, // the width of the player
						height: playerHeight, // the height of the player
						allowFullScreen: "true", // true by default, allow user to go full screen
						initialVideo: link, // the video that is loaded into the player
						// showControls: false,
						iframed: true,
						modestbranding: false,
						showControls: false,
						allowFullScreen: false,
						preferredQuality: "default",// preferred quality: default, small, medium, large, hd720
						
						onPlayerPlaying:  function(){
			    	       playFuncion(id);
			        	},
						onPlayerPaused:  function(){
			    	       pauseFuncion(id);
			      		},
			        	onPlayerEnded: function(){
			        		if(ytTimer != null ) {
								clearInterval(ytTimer);
								ytTimer=null;
							}
							jQuery(id).tubeplayer("stop");
							$(id).find(".progressBar .playProgress").width("0%");
							$(id).find(".progressBar > a").css("left","0px");
							$(id).find(".progressBar .loadProgress").width("0%");
			        	}
					});
				
				});
				
				$.tubeplayer.defaults.afterReady = function($player){
					$(".ytPlayer").each(function(index) {
						
						if($(this).find(".ytControls .play").hasClass("pause")) {
							jQuery("#youTubePlayer"+index).tubeplayer("play");
						}
						
					});
				}
				
				var ytTimer=null;
				function playFuncion(id) {
					$(id).find(".ytControls .play").addClass("pause");
					$(id).closest(".projectSliderContents").cycle("pause");
			    	$(id).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("pause");
					videoScroll=1;
					$(".ytPlayer").each(function(index){
						if(("#youTubePlayer"+index)!= id ) {
							jQuery("#youTubePlayer"+index).tubeplayer("pause");
						}
					});
					if( touchDevice == 1 ){
						$(id).addClass("playing");
					}
					if(ytTimer == null ) {
						ytTimer=window.setInterval( function() { checkProgress(id); }, 500 );
						//ytTimer.start();
					}
				}
				var iframeYTRealWidth,iframeYTRealHeight;
				function checkProgress(id) {
					
					var bytesPercent=Math.round((jQuery(id).tubeplayer("data").bytesLoaded / jQuery(id).tubeplayer("data").bytesTotal)*100);
					bytesPercent=bytesPercent+"%";
					
					var percentVal=Math.round((jQuery(id).tubeplayer("data").currentTime / jQuery(id).tubeplayer("data").duration)*100);
					percentVal=percentVal+"%";
					
					$(id).find(".progressBar .playProgress").width(percentVal);
					$(id).find(".progressBar > a").css("left",percentVal);
					$(id).find(".progressBar .loadProgress").width(bytesPercent);
					$(id).addClass("played");
					if( touchDevice == 1 ) {
						$(id).find(".ytControlHolder").css("display","table");
					} 
				}
				
				function setDynamicYTProgress(curValue,id) {
					var seekTime=(curValue * jQuery(id).tubeplayer("data").duration)/100;
					$(".text").append("<br />dynamic -  "+curValue+" - "+seekTime);
					jQuery(id).tubeplayer("seek", seekTime);
					//checkProgress(id);
				}
				
				function pauseFuncion(id) {
					clearInterval(ytTimer);
					ytTimer=null;
					$(id).find(".ytControls .play").removeClass("pause");
				}
				
				$(".ytPlayer").hover(function() {
					$(this).closest(".projectSliderContents").cycle("pause");
			    	$(this).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("pause");
				}, function() {
					if(!$(this).find(".play").hasClass("pause")) { 
						$(this).closest(".projectSliderContents").cycle("resume");
			    		$(this).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("resume");
					}
				});
					  
				var currentYTPlayer;
				$(".ytControls .play").live("click", function(){
					$(this).closest(".projectSliderContents").cycle("pause");
			    	$(this).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("pause");
					currentYTPlayer=$(this).parent().parent().parent();
					if($(this).hasClass("pause")) {
						jQuery(currentYTPlayer).tubeplayer("pause");
						$(this).removeClass("pause");
					} else {
						jQuery(currentYTPlayer).tubeplayer("play");
						$(this).addClass("pause");
					}
				});
				
				$(".ytControls .muteControl").live("click", function(){
					var thisPlayer=$(this).parent().parent().parent();
					if($(this).hasClass("muted")) {
						jQuery(thisPlayer).tubeplayer("unmute");
						$(this).removeClass("muted");
					} else {
						jQuery(thisPlayer).tubeplayer("mute");
						$(this).addClass("muted");
					}
				
				});
				fullScreenDiv=null;
					$(".fullScreenControl").click(function() {
						if(fullScreenDiv != null && $(fullScreenDiv).hasClass("fullScreenWrap")) {
							$(fullScreenDiv).fullScreen(false);
						} 
						else {
							fullScreenDiv=$(this).parent().parent().parent();
							$(fullScreenDiv).closest(".projectSliderContents").cycle("pause");
					    	$(fullScreenDiv).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("pause");
			
							if($.browser.msie || touchDevice == 1 ) {
								if($(this).parent().parent().parent().hasClass("fullScreenIEWrap")) {
									removeIEFullScreen();
								} else {
									$(fullScreenDiv).closest(".projectSliderContents").cycle("pause");
									$(fullScreenDiv).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("pause");
									setIEFullScreenMode();
								}
								
							} else {
								$(fullScreenDiv).fullScreen(true);
								
								
								// var id=$(this).parent().parent().parent().attr("id");
								// var elem = document.getElementById("player0");
								// if (elem.requestFullScreen) {
								  // elem.requestFullScreen();
								// } else if (elem.mozRequestFullScreen) {
								  // elem.mozRequestFullScreen();
								// } else if (elem.webkitRequestFullScreen) {
								  // elem.webkitRequestFullScreen();
								// } else {}
							}
						
						}
					});
					
					$(window).keypress(function(e) {
						if(e.keyCode == 27 ) {
							removeIEFullScreen();
						}
					});
					
					if(touchDevice == 1 ) {
						$(".slidesA").each(function(){
							$(this).addClass("displayBlock");
						});
					}
					
					document.addEventListener("fullscreenchange", function () {
						if($(fullScreenDiv).hasClass("fullScreenWrap")) {
							removeMode();
						} else {
							setMode();
						}
					}, false);
					 
					document.addEventListener("mozfullscreenchange", function () {
						if($(fullScreenDiv).hasClass("fullScreenWrap")) {
							removeMode();
						} else {
							setMode();
						}
					}, false);
					 
					document.addEventListener("webkitfullscreenchange", function () {
						if($(fullScreenDiv).hasClass("fullScreenWrap")) {
							removeMode();
						} else {
							setMode();
						}
					}, false);
					
						var ieScroll=0;
					function setIEFullScreenMode() {
						if(touchDevice == 1 ) {
							$(".projectBox  .projectSliderContents").css("overflow","visible");
							$(".pageHeader").css("display","none");
						}
						var windowWidth=$(window).width();
						var windowHeight2=$(window).height();
						
						$("body, html").css("overflow","hidden");
						
						var windowWidth=$(window).width();
						$(fullScreenDiv).addClass("fullScreenIEWrap");
						
						$(fullScreenDiv).css("width",windowWidth+"px");
						$(fullScreenDiv).css("height",windowHeight2+"px");
						
						 $("body").css("height",windowHeight2+"px");
						$(fullScreenDiv).find("iframe").css("width",windowWidth+"px");
						$(fullScreenDiv).find("iframe").css("height",(windowHeight2-36)+"px");
					
						if(touchDevice == 1 ) {
							setTimeout(function(){
								$(fullScreenDiv).find("iframe").css("width",windowWidth+"px");
								$(fullScreenDiv).find("iframe").css("height",windowHeight2+"px");
							},500);
						}
						
						ieScroll=1;
						window.scrollTo(0, 0);
					}
					
					function removeIEFullScreen() {
						if(touchDevice == 1 ) {
							$(".projectBox  .projectSliderContents").css("overflow","hidden");
							$(".pageHeader").css("display","block");
						}
						$(fullScreenDiv).css("width","");
						$(fullScreenDiv).css("height","");
						
						$(fullScreenDiv).find("iframe").css("width","");
						$(fullScreenDiv).find("iframe").css("height","");
						$("body").css("height","");
						$(fullScreenDiv).removeClass("fullScreenIEWrap");
						$("body, html").css("overflow","visible");
						ieScroll=0;
					}
					
					function setMode() {
						$(fullScreenDiv).closest(".projectSliderContents").cycle("pause");
						$(fullScreenDiv).closest(".projectSlider").siblings("aside").find(".sliderDetails").cycle("pause");
						$(".workBox").css("display","none");
						var mainWindowWidth=window.screen.width;
						var mainWindowHeight=window.screen.height;
						iframeRealWidth=$(fullScreenDiv).find("iframe").width();
						iframeRealHeight=$(fullScreenDiv).find("iframe").height();
						
						$(fullScreenDiv).addClass("fullScreenWrap");
						$(".vimeoPlayer").css("z-index","-1");
						$(".ytPlayer").css("z-index","-1");
						
						$(fullScreenDiv).find("iframe").width(mainWindowWidth);
						$(fullScreenDiv).find("iframe").height(mainWindowHeight);
						
						$(fullScreenDiv).find("object").width(mainWindowWidth);
						$(fullScreenDiv).find("object").height(mainWindowHeight);
					}
					
					function removeMode() {
						$(".workBox").css("display","block");
						$(fullScreenDiv).removeClass("fullScreenWrap");
						$(fullScreenDiv).find("iframe").width(iframeRealWidth+"px");
						$(fullScreenDiv).find("iframe").height(iframeRealHeight+"px");

						$(fullScreenDiv).find("object").css("width","");
						$(fullScreenDiv).find("object").css("height","");
						
						$(".vimeoPlayer").css("z-index","");
						$(".ytPlayer").css("z-index","");
						if(!(fullScreenDiv).find(".play").hasClass("pause")) {
						}
						
					}
					
			},
			
			modalClose : function(){
				$('.close').live('click', function(){
					$('.modal_wrapper, .overlay, .overlaySign').fadeOut(1000);
					$('.openerVideo, .modalFrame object').hide();
					Join=1;
				});
			},
						
			commonInput : function(){
				
				var $inputText = $('.queryInput input, .queryInput textarea');
				$inputText.each(function(){
					var $thisHH = $(this);
					if(!$(this).val()){
						$(this).parent().find('label').show();
					}else{
						setTimeout(function(){
						$thisHH.parent().find('label').hide();
						},100);
					}
				});
				$inputText.live('focus',function(){
					if(!$(this).val()){
						$(this).parent().find('label').addClass('showLab');
					}
				});
				$inputText.live('keydown',function(){
					if(!$(this).val()){
						$(this).parent().find('label').hide();
					}
				});
				$inputText.live("blur",function(){
					var $thisH = $(this);
					if(!$(this).val()){
						$(this).parent().find('label').show().removeClass('showLab');
					}else{
						$thisH.parent().find('label').hide();
					}
					
				});
				
			}
			
		}//end commonLoad
			
	};

	projectName.common.commonLoad();
	projectName.common.commonInput();
	projectName.common.modalClose();

});