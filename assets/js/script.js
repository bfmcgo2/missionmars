// Activates touch events
// var touchEventHandler = {};

// touchEventHandler.prepareForTouches = function(){
		
// 		function dragElement(event){
// 			console.log(event)
// 			var elementToDrag = event.target;
// 			elementToDrag.style.top = event.deltaY + 'px';
// 			elementToDrag.style.left = event.deltaX + 'px';
// 		};

// 		var swipeOptions = {dragLockToAxis:true, dragBlockHorizontal:true};

// 		function initTouchListeners(touchableElement){
// 			var touchControl = new Hammer(touchableElement, swipeOptions);
// 			touchControl.get('pan').set({direction:Hammer.DIRECTION_ALL});
// 			touchControl.on('panleft panright panup pandown', dragElement);
// 		};
		
// 		var marsLandingPage = document.querySelector('.mission-to-mars');

		
// 		initTouchListeners(marsLandingPage);
// };

// touchEventHandler.prepareForTouchesWhenReady = function(){
// 		document.addEventListener("DOMContented", touchEventHandler.prepareForTouches);
// };

// touchEventHandler.prepareForTouchesWhenReady();

Draggable.create("#mars-img-explore",{
	type:"x,y", 
	edgeResistance:0.65, 
	bounds:{top:-30, left:-2160},
	throwProps:true
});


$(document).ready(function(){

	var spacesuitPositions = [
		0,
		-400,
		-800
	];
	var $spacesuits = [
		$(".spacesuit-showcase img").eq(0),
		$(".spacesuit-showcase img").eq(1),
		$(".spacesuit-showcase img").eq(2)
	];
	var $spacesuitDescriptions = [
		$(".spacesuit-description").eq(0),
		$(".spacesuit-description").eq(1),
		$(".spacesuit-description").eq(2)
	];
	var $chooseSuitButtons = [
		$(".choose-suit").eq(0),
		$(".choose-suit").eq(1),
		$(".choose-suit").eq(2)
	];
	// $(".mission-to-mars").click(function(){
	// 	$(".martian-page").hide();
	// 	$(".mars-landing-page").fadeOut(500, function(){
	// 		$(".martian-page").fadeIn(1000);
	// 	})
		
	// })
	// Next page
	$(".start-cta").click(function(){
		$(".main-content-container").animate({
			"width":"100%"
		}).css({
			"overflow":"visible"
		});
		$(".mission-to-mars, .start-cta, .spacesuit-description").fadeOut();
		$(".pentagon").animate({
			"left":"50px"
		},1000,function(){
			$(".spacesuit-showcase, .arrow-container, .description-container, .suit-directions, .choose-suit-container").fadeIn(1000);
			// $(".arrow-container").fadeIn(1000);
		});
		$(".mars-landing-page").animate({
			"top":"-100%"
		});
		$(".main-content-page").animate({
			"top":"0%"
		});
		$spacesuitDescriptions[0].delay(200).fadeIn(200);
		
	});

	// return to landing page
	$(".back-menu").click(function(){
		$(".spacesuit-showcase, .arrow-container, .description-container, .suit-directions, .choose-suit-container, .cta-container, .suit-fitting, .start-mission, .martian-page, .welcome-to-mars, .mars-cta-wrapper, .mars-jump-cta, .mars-jump-height, .mars-jump, .mars-sunset-cta, .keyboard-container").css({
			"display":"none"
		});
		$(".main-content-page").fadeOut().css({
			"top":"100%"
		}).fadeIn();
		$(".mars-landing-page").fadeOut().css({
			"top":"0"
		}).fadeIn();
		$(".main-content-container").animate({
			"width":"787px",
			"left":"50%",
			"top":"50%"
		}).css({
			"overflow":"visible",
			"background":"rgba(255,255,255,.7)"
		});
		$(".mission-to-mars, .start-cta, .pentagon, .main-content-container").fadeIn();
		$(".pentagon").css({
			"left":"-37px"
		});
		$({blurRadius: 10}).animate({blurRadius: 0}, {
	        duration: 500,
	        easing: 'swing', // or "linear"
	                         // use jQuery UI or Easing plugin for more options
	        step: function() {
	            console.log(this.blurRadius);
	            $('.main-content-container').css({
	                "-webkit-filter": "blur("+this.blurRadius+"px)",
	                "filter": "blur("+this.blurRadius+"px)"
	            });
	        }
	    });
	});
	
	
	// arrow action
	$(".white-arrow-right").click(function(){
		$spacesuits.push( $spacesuits.shift() );
		console.log($spacesuits[0]);
		$($spacesuits[0]).css({"left":"400px"}).animate({"left":"0"},200); // from off to the right, to be in view
		$($spacesuits[2]).animate({"left":"-400px"},200); // animate over to the left

		$spacesuitDescriptions.push( $spacesuitDescriptions.shift() );
		$(".spacesuit-description").fadeOut(100);
		$spacesuitDescriptions[0].delay(100).fadeIn(100);
		
		$chooseSuitButtons.push($chooseSuitButtons.shift() );
		$(".choose-suit").css({"display":"none"});
		$chooseSuitButtons[0].delay(100).fadeIn(100);
	})

	$(".white-arrow-left").click(function(){
		$spacesuits.unshift( $spacesuits.pop() );
		console.log($spacesuits[0]);
		$($spacesuits[0]).css({"left":"-400px"}).animate({"left":"0"},200); // from off to the left, to be in view
		$($spacesuits[1]).animate({"left":"400px"},200); // animate over to the right

		$spacesuitDescriptions.unshift( $spacesuitDescriptions.pop() );
		$(".spacesuit-description").fadeOut(100);
		$spacesuitDescriptions[0].delay(100).fadeIn(100);

		$chooseSuitButtons.unshift($chooseSuitButtons.pop() );
		$(".choose-suit").css({"display":"none"});
		$chooseSuitButtons[0].delay(100).fadeIn(100);
	})

	// choose suit action

	$(".choose-suit").click(function(){
		$(".cta-container, .main-cta-box, .suit-selection").fadeIn(300)
		
		$({blurRadius: 0}).animate({blurRadius: 10}, {
		        duration: 500,
		        easing: 'swing', // or "linear"
		                         // use jQuery UI or Easing plugin for more options
		        step: function() {
	            console.log(this.blurRadius);
	            $('.main-content-container').css({
	                "-webkit-filter": "blur("+this.blurRadius+"px)",
	                "filter": "blur("+this.blurRadius+"px)"
		            });
		        }
		    });
		});

	// DONE CHOOSING SUIT (NO)
	$(".suit-selection-cta.no").click(function(){
		$(".cta-container, .main-cta-box, .suit-selection").fadeOut(300);
		$({blurRadius: 10}).animate({blurRadius: 0}, {
	        duration: 500,
	        easing: 'swing', // or "linear"
	                         // use jQuery UI or Easing plugin for more options
	        step: function() {
	            console.log(this.blurRadius);
	            $('.main-content-container').css({
	                "-webkit-filter": "blur("+this.blurRadius+"px)",
	                "filter": "blur("+this.blurRadius+"px)"
	            });
	        }
	    });
	});

	// DONE CHOOSING SUIT (YES)
	$(".suit-selection-cta.yes").click(function(){

		$(".cta-container").fadeOut(300,function(){
			$(".suit-selection").hide();
			$(".suit-fitting").show();
			$(".start-mission").hide();

			$(".cta-container").fadeIn(300).delay(3000).fadeOut(300, function(){
				$(".suit-selection").hide();
				$(".suit-fitting").hide();
				$(".start-mission").show();

				$(".cta-container").fadeIn(300)
			});
		});
			
	});

	// BEGIN MISSION
	$(".mission-cta").click(function(){
		// Main-content-container action
		$(".suit-directions").fadeOut(300, function(){
			$(".main-content-container").animate({
				"width":"815px",
				"left": "28%",
				"top":"75%"
			},1000,"linear", function(){
				$(".welcome-to-mars").fadeIn(300);
				$(".mars-cta-wrapper").fadeIn(300);
			});
			$(".martian-page").fadeIn(1000,function(){
				$(".main-content-page").fadeOut(500);
				$(".selfie-cta, .swipe-cta").fadeIn(300);
			});
		});

		$(".cta-container, .spacesuit-showcase, .description-container, .arrow-container, .choose-suit-container, .start-mission").fadeOut(1000);
		// $(".main-content-page").fadeOut(300, function(){
		// 	$(".martian-page").fadeIn(300);
		// });
		$({blurRadius: 10}).animate({blurRadius: 0}, {
	        duration: 500,
	        easing: 'swing', // or "linear"
	                         // use jQuery UI or Easing plugin for more options
	        step: function() {
	            console.log(this.blurRadius);
	            $('.main-content-container').css({
	                "-webkit-filter": "blur("+this.blurRadius+"px)",
	                "filter": "blur("+this.blurRadius+"px)"
	            });
	        }
	    });
	});

	// MARTIAN PAGE



	$(".listen-cta, .jump-cta, .sunset-cta").click(function(){
		$(this).data('clicked',true);
		$(".cta-container, .main-cta-box, .swipe-cta, .selfie-cta").hide();

		$({blurRadius: 0}).animate({blurRadius: 10}, {
	        duration: 500,
	        easing: 'swing', // or "linear"
	                         // use jQuery UI or Easing plugin for more options
	        step: function() {
	            console.log(this.blurRadius);
	            $('.main-content-container').css({
	                "-webkit-filter": "blur("+this.blurRadius+"px)",
	                "filter": "blur("+this.blurRadius+"px)"
	            });
	        }
	    });
		$(".cta-container").fadeIn(300,function(){
			if($(".listen-cta").data('clicked')){
				$(".listen-cta").data('clicked',false);
				console.log("listen");
				$(".main-cta-box").fadeIn(300,function(){
					$(".mars-listen").show();
				});	
			}
			if($(".jump-cta").data('clicked')){
				$(".jump-cta").data('clicked',false);
				$(".main-cta-box").show();

				$(".mars-jump").fadeIn(100,function(){
					$(".mars-jump-load").show();
					$(".cta-container").delay(3000).fadeOut(300, function(){
						$(".mars-jump-load").hide();
						$(".mars-jump-cta").show();
						$(".cta-container").fadeIn(300, function(){
							$(this).delay(3000).fadeOut(300, function(){
								$(".mars-jump-cta").hide();
								$(".mars-jump-height").show();
								$(this).fadeIn(300);
							});
						});
					});
					
				});
			}
			if($(".sunset-cta").data('clicked')){
				$(".sunset-cta").data('clicked',false);
				console.log("beautiful sunset");
				$(".mars-sunset-cta").fadeIn(300);
			}
		});
	});

	$(".listen-cta").click(function(){
		$(".soundwaves").fadeIn(300);
		$(".sound-holder").html(
		"<video width='3px' height='3px' autoplay id='mars-sound'>" +
			"<source src='assets/video/mars-sound.3gp' type='video/mp4'>"+
		"</video>");
	});

	



	$(".mars-listen .finish-cta").click(function(){
		$("#mars-sound").remove();
		$(".selfie-cta, .swipe-cta").show();
		$(".soundwaves").hide();
		$({blurRadius: 10}).animate({blurRadius: 0}, {
	        duration: 500,
	        easing: 'swing', // or "linear"
	                         // use jQuery UI or Easing plugin for more options
	        step: function() {
	            console.log(this.blurRadius);
	            $('.main-content-container').css({
	                "-webkit-filter": "blur("+this.blurRadius+"px)",
	                "filter": "blur("+this.blurRadius+"px)"
	            });
	        }
	    });
	});

	$(".mars-jump-height .finish-cta").click(function(){
			$(".selfie-cta, .swipe-cta").fadeIn(300);
			$({blurRadius: 10}).animate({blurRadius: 0}, {
		        duration: 500,
		        easing: 'swing', // or "linear"
		                         // use jQuery UI or Easing plugin for more options
		        step: function() {
		            console.log(this.blurRadius);
		            $('.main-content-container').css({
		                "-webkit-filter": "blur("+this.blurRadius+"px)",
		                "filter": "blur("+this.blurRadius+"px)"
		            });
		        }
		    });
	})

	$(".finish-cta").click(function(){
		$(".cta-container").fadeOut(300,function(){
			$(".mars-jump, .mars-jump-cta, .mars-listen, .mars-jump-height").hide();
		});
	});

	$(".mars-sunset-cta .white-x").click(function(){
		$(".cta-container").fadeOut(300,function(){
			$(".mars-sunset-cta").hide();
		});
		$(".selfie-cta, .swipe-cta").fadeIn(300);
		$({blurRadius: 10}).animate({blurRadius: 0}, {
	        duration: 500,
	        easing: 'swing', // or "linear"
	                         // use jQuery UI or Easing plugin for more options
	        step: function() {
	            console.log(this.blurRadius);
	            $('.main-content-container').css({
	                "-webkit-filter": "blur("+this.blurRadius+"px)",
	                "filter": "blur("+this.blurRadius+"px)"
	            });
	        }
	    });
	});

	// Clicking the selfie box

	$(".selfie-cta").click(function(){
		$(this).add(".mars-cta-wrapper, .main-content-container,.welcome-to-mars, .swipe-cta").fadeOut(300,function(){
			$(".spacesuit-showcase").show();
			$(".pentagon, .main-cta-box").hide();
			$(".keyboard-container").show();
			$(".main-content-container").css({
				"width":"100%",
				"background":"none",
				"top":"50%",
				"left":"50%"
			}).fadeIn(300);
			$(".cta-container").fadeIn(300);
		});
	});

	// Clicking the TRANSMIT button

	$("#container .finish-cta").click(function(){
		// $(".cta-container").hide();
		$(".keyboard-container").fadeOut(300, function(){
			$(".cta-container").hide();
		});

		$(".main-cta-box").css({
				"margin":"145px 0px"
		}).fadeIn(300, function(){
			$(".cta-container").fadeIn(300);
			$(".keep-exploring").show();
		});
	
		// $(".main-cta-box").show("slow", function(){
		// 	$(".cta-container").fadeIn(300);
			
		// });
	});

	// Clicking the CONTINUE TO EXPLORE

	$(".keep-exploring .finish-cta").click(function(){
		$(".main-cta-box").fadeOut(300);
		$(".main-content-container, .spacesuit-showcase, .keep-exploring").hide()
		$(".main-content-container").css({
			"background":"rgba(255,255,255,.7)",
			"width":"815px",
			"left": "28%",
			"top":"75%"
		}).fadeIn(300,function(){
			$(".main-cta-box").css({
				"margin":"145px auto"
			});
		});
		$(".pentagon, .mars-cta-wrapper, .welcome-to-mars, .selfie-cta, .swipe-cta").fadeIn(300);
		

	});
	
});
