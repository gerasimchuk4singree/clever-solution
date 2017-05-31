//Preloader
var loading = true;
var timeLink;
setTimeout(function () {
	var preloader = $('#page-preloader');
	console.log(1);
	timeLink = setInterval(function () {
		console.log(2);
		preloader.find("img").addClass("pulse");
		if (!loading) {
			clearInterval(timeLink);
			preloader.fadeOut();
			preloader.delay(350).fadeOut('slow');
		}
	}, 100);
}, 5200);
$(window).on('load', function () {
	loading = false;
});

// Отложенный запуск
var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();


// Обрезание текста
function destroytextow(espt) {
	if(espt == null) {
		$(".text-full").remove();
		$(".text-overflow").show();
	} else {
		$(".text-full[data-ftnum='"+espt+"']").remove();
		$(".text-overflow[data-tonum='"+espt+"']").show();
	}
}


// Eleport
(function($) {
    $.fn.eleport = function(options) {
 
        var options = jQuery.extend({
            copyInto: '',
            copyIntroEnd: '',
            addClass: '',
            removeClass: ''
        }, options);
 
        return this.each(function() {
            if (options.copyInto)
                jQuery(this)
                        .clone()
                        .prependTo(options.copyInto)
                        .addClass(options.addClass)
                        .removeClass(options.removeClass);
            if (options.copyIntroEnd)
                jQuery(this)
                        .clone()
                        .appendTo(options.copyIntroEnd)
                        .addClass(options.addClass)
                        .removeClass(options.removeClass);
        });
    };
})(jQuery);


function textoverflow() {
	$(".text-overflow").each(function(i) {
	    i++;

	    var gettext = $(this).html();
	    var getdata = $(this).data("size");
	    var getthisclasses = $(this).attr("class");
	    var shorttext = gettext.slice(0,getdata);
	 
	    $(this).hide();
	        
	    $(this).attr("data-tonum", i);
	    $(this).after("<div class='text-full "+getthisclasses+"' data-ftnum='"+i+"'>"+gettext+"</div>");
	    
	    $(".text-full[data-ftnum='"+i+"']").html(shorttext + "... <a href='javascript:opentextmodal("+i+");' class='js-go-spoiler'>Read more</a>");        
	
	});
}



function apativescreens(esp) {

	if(esp == true) {

		if(!$(".js-intrestingbutton").length > 0) {

			$(".js-screen").each(function(i) {
				i++;

				var gettitle = $(this).data("title");

				if (i != 1) {
					$(this).prepend("<div class='js-intrestingbutton intbutton-"+i+"' data-num='"+i+"'><span>"+gettitle+"</span></div>"); 
				} else {
					$(this).append("<div class='js-intrestingbutton intbutton-"+i+"' data-num='"+i+"'><span>"+gettitle+"</span></div>"); 
				}

			});
		}

	} else {
		$(".js-intrestingbutton").remove();
	}
}



function destroyanim(esp) {
	if(esp == true) {
		if($(".fp-section").length > 0) {
			$(".fp-section").addClass("laterscreen");
			$(".fp-section.active").addClass("lateractive");
			$(".js-screen").removeClass("fp-section");
			$(".js-screen").removeClass("active");	
			$(".anim-rocket").clearQueue().stop().finish().removeAttr("style");
		}
	} else {

		if($(".laterscreen").length > 0) {
			$(".laterscreen").addClass("fp-section");
			$(".lateractive").addClass("active");
		}
	}
}

function removemodal() {
	$(".modal-shadow").remove();
}

function opentextmodal(esp) {

	if(!$("body").children(".modal-shadow").length > 0) {
		$(".js-float-menu").before("<div class='modal-shadow'></div>");
	}

	$(".text-overflow[data-tonum='"+esp+"']").clone().appendTo(".modal-shadow");
	$(".modal-shadow .text-overflow[data-tonum='"+esp+"']").wrapInner("<div class='relative js-innerscroll'></div>");
	$(".modal-shadow .text-overflow[data-tonum='"+esp+"']").show();
	$(".modal-shadow .text-overflow[data-tonum='"+esp+"']").addClass("js-active");
	$(".modal-shadow .text-overflow[data-tonum='"+esp+"']").append("<a href='javascript:removemodal();'class='js-close'></a>");
	var getheight = $(".modal-shadow .text-overflow[data-tonum='"+esp+"']").innerHeight();
	$(".modal-shadow .js-innerscroll").css({"height" : getheight});
}




function screenposition() {
	var winw = $(window).innerWidth();
	$(".js-screen").each(function(i) {
		i++;
		$(this).addClass("screen-" + i);
		if(i != 1) {
			$(this).wrapInner("<div class='js-innernormalizer'></div>");
		}
	});
}

function goscreen(screen) {
	var screentop = $(".screen-" + screen).offset().top;
	$.fn.fullpage.moveTo(screen); 
}

function goslide(screen, hidden) {
	$.fn.fullpage.moveTo(screen, hidden);
}


function sixanimation() {
	$(".anim-monitor").animate({
		'bottom': '40px',
	}, {duration: 600, easing: "jswing", complete: function() {

		$(".basket-1").animate({
				'left': '-5%', 
			}, {duration: 400, easing: "jswing", complete: function() {

				$(".basket-2").animate({
				'left': '45%', 
				}, {duration: 400, easing: "jswing", complete: function() {

					$(".basket-3").animate({
						'left': '90%', 
					}, {duration: 400, easing: "jswing", complete: function() {

					}});
				}});

			}});

		$(".anim-notebook").animate({
			'bottom': '-10px', 
		}, {duration: 500, easing: "jswing", complete: function() {

			$(".anim-pad").animate({
				'bottom': '24px', 
			}, {duration: 400, easing: "jswing", complete: function() {

				$(".anim-phone").animate({
					'bottom': '10px', 
				}, {duration: 200, easing: "jswing"});

			}});



		}});


	}});


}

function sevenanimation() {

	 $(".animated-puzzle-2").animate({
	 	top: "0px",
	 }, {duration: 600, easing: "jswing", complete: function() {

	 	$(".animated-puzzle-1").animate({
		 	left: "7%",
		 }, {duration: 600, easing: "jswing", complete: function() {

		 	$(".animated-puzzle-3").animate({
			 	left: "44.3%", 
			 }, {duration: 600, easing: "jswing"});

		 	$(".bottom-side-animation").animate({
			 	right: "6.3%",
			 }, {duration: 600, easing: "jswing", complete: function() {

			 	$(".blue-circle").animate({
				 	opacity: "0.5",
				 }, {duration: 600, easing: "jswing", complete: function() {

				 	$(".satellite-dish").animate({
					 	top: "-110%",
					 }, {duration: 600, easing: "jswing", complete: function() {

					 	$(".js-arc-buble-1").animate({
						 	opacity: "1",
						 }, {duration: 600, easing: "jswing", complete: function() {

						 	$(".js-arc-buble-2").animate({
							 	opacity: "1",
							 }, {duration: 600, easing: "jswing", complete: function() {

							 	$(".js-arc-circle").animate({
								 	opacity: "1",
								 }, {duration: 600, easing: "jswing"});


							 }});
						 	
						 }});

					 }});

				}});

			 }});
		 	
		 }});

	 }});

}

function eightanimation() {
	$(".blue-bottom .why-text").animate({
		left: "10%",
	}, {duration: 1000, easing: "jswing", complete: function() {

		$(".blue-bottom .r-rock-1").animate({
			left: "20px",
		}, {duration: 1000, easing: "jswing"});

		$(".blue-bottom .because-text").animate({
			left: "10%",
		}, {duration: 1000, easing: "jswing", complete: function() {

			$(".blue-bottom .r-rock-2").animate({
				left: "138px",
			}, {duration: 1000, easing: "jswing"});

			$(".blue-bottom .so-text").animate({
				left: "42%",
			}, {duration: 1000, easing: "jswing", complete: function() {

				$(".blue-bottom .r-rock-3").animate({
						left: "202px",
					}, {duration: 500, easing: "jswing", complete: function() {

						$(".blue-bottom .r-rock-4").animate({
							left: "259px",
						}, {duration: 500, easing: "jswing", complete: function() {


							$(".blue-bottom .js-text-rock-1").animate({
								left: "-100%",
							}, {duration: 500, easing: "jswing"});



						}});

					}});
			
				$(".blue-bottom .they-text").animate({
					left: "42%",
				}, {duration: 400, easing: "jswing"});




			}});

		}});

		


	}});

}

function nineanimation() {

	$(".js-more-clouds-1").animate({
		bottom: "0px",
	}, {duration: 500, easing: "jswing", complete: function() {

		$(".anim-microscope").animate({
			opacity: "1",
		}, {duration: 500, easing: "jswing", complete: function() {

			$(".anim-circle1").animate({
				opacity: "1",
			}, {duration: 500, easing: "jswing", complete: function() {

				$(".anim-textes").animate({
					opacity: "1",
				}, {duration: 500, easing: "jswing"});
				
			}});

		}});

	}});

}

function tenanimation() {
	$(".js-more-clouds-2").animate({
		bottom: "0px",
	}, {duration: 500, easing: "jswing", complete: function(){

		$(".js-big-orange-but").animate({
			left: "0px",
		}, {duration: 500, easing: "jswing", complete: function(){

			$(".js-righttext-but").animate({
				left: "51%",
			}, {duration: 500, easing: "jswing", complete: function(){

				$(".js-ars-buble-1").animate({
					opacity: "1",
				}, {duration: 500, easing: "jswing", complete: function(){

					$(".js-ars-buble-2").animate({
						opacity: "1",
					}, {duration: 500, easing: "jswing", complete: function(){

						$(".js-ars-circle").animate({
							opacity: "1",
						}, {duration: 500, easing: "jswing"});

					}});

				}});

			}});


		}});
		 
	}});
}

function elevenanimation() {

	var headposofs = $(".js-blockblue").position().top;
	var heightsofs = $(".js-blockblue").innerHeight();
	var thisposofs = headposofs + heightsofs + 20;

	
	headposofs = headposofs + 20;

	$(".js-text-bot-anim").animate({
		top: thisposofs,
	}, {duration: 1000, easing: "jswing"});


	$(".anim-crane").animate({
		top: "3%",
	}, {duration: 1000, easing: "jswing"});

	$(".js-blockblue").animate({
		right: "0px",
	}, {duration: 2400, easing: "easeOutBounce"});

}

function twelveanimation() {

	$(".anim-ground").animate({
		left: "0px",
	}, {duration: 500, easing: "jswing", complete: function() {

		$(".anim-girls").animate({
			left: "5%",
		}, {duration: 500, easing: "jswing", complete: function() {

			$(".anim-icons").animate({
				left: "15%",
			}, {duration: 500, easing: "jswing", complete: function() {

				$(".anim-bubles").animate({
					opacity: "0.2",
				}, {duration: 500, easing: "jswing"});
					
			}});

		}});

	}});
}

function thirteen() {

	$(".anim-houses").animate({
		bottom: "22%",
	}, {duration: 500, easing: "jswing", complete: function() {

		$(".anim-houses2").animate({
			bottom: "22%",
		}, {duration: 900, easing: "jswing", complete: function() {

			$(".anim-tree2").animate({
				bottom: "21%",
			}, {duration: 1500, easing: "jswing"});

			$(".anim-tree1").animate({
				bottom: "20%",
			}, {duration: 1500, easing: "jswing", complete: function() {

				$(".anim-tablet").animate({
					bottom: "7%",
				}, {duration: 500, easing: "jswing", complete: function() {

					$(".anim-iphone").animate({
						bottom: "17%",
					}, {duration: 300, easing: "jswing", complete: function() {

						$(".anim-tablet2").animate({
							bottom: "22%",
						}, {duration: 800, easing: "jswing"});

						$(".anim-stairway").animate({
							bottom: "3%",
						}, {duration: 200, easing: "jswing", complete: function() {

							$(".anim-man1").animate({
								left: "28.2%",
							}, {duration: 1000, easing: "jswing"});

							$(".anim-shadow").animate({
								opacity: "1",
							}, {duration: 500, easing: "jswing", complete: function() {

								$(".anim-table").animate({
									left: "2%",
								}, {duration: 800, easing: "jswing", complete: function() {

									$(".anim-man2").animate({
										left: "10%",
									}, {duration: 300, easing: "jswing", complete: function() {

										$(".anim-girl2").animate({
											left: "1.2%",
										}, {duration: 300, easing: "jswing", complete: function() {


											$(".anim-man3").animate({
												left: "-30px",
											}, {duration: 1000, easing: "jswing", complete: function() {

												$(".anim-car2").animate({
													left: "7%",
												}, {duration: 2000, easing: "jswing"});


											}});

											
										}});


										
									}});



									
								}});


								
							}});

						}});


					}});
				

				}});

				

				
				
			}});
			
		}});

	}});



}



// Позицонирование картинок 
function changeimg() {
	$(".anim-svg").each(function() {
		var takethisdata = $(this).data("img");
		var takethisclasses = $(this).attr("class");
		takethisclasses = takethisclasses.replace("anim-svg", "");
		var changethiscl = takethisdata.replace(/.png/g, ' ').replace(/.svg/g, '').replace(/.jpg/g, '');
		$(this).after("<img src='/wp-content/themes/cleversolution/images/"+takethisdata+"' class='"+changethiscl+" "+takethisclasses+"' alt=''>");
		$(this).remove();
	});
}



// Функции при resize окна



function floatmenuchange() {
	if($(".floatnav ul .active").length>0) {
		var menuliposition = $(".floatnav ul .active").position().left;
		var menuliwidth = $(".floatnav ul .active").innerWidth();
		menuliposition = menuliposition - 5;

		$(".apelmenu span").stop(false, true).animate({
			width: menuliwidth,
			left: menuliposition,
		}, {duration: 1000, easing: 'easeOutExpo'}); 
	}
}

function floatmenu() {

	$(".floatnav ul").after("<div class='apelmenu'><span><i></i></span></div>");

	if($(".floatnav ul li.current-menu-item").length > 0) {
		$(".floatnav ul li.current-menu-item").addClass("active");
	} else {
		$(".floatnav ul li:first").addClass("active");
	}

	var menuliposition = $(".floatnav ul .active").position().left;
	var menuliwidth = $(".floatnav ul .active").innerWidth();
	menuliposition = menuliposition - 5;
	$(".apelmenu span").attr("style", "left:"+menuliposition+"px;width:"+menuliwidth+"px;");

	$(".floatnav ul li a").hover(function() {
		var menuliposition = $(this).position().left;
		var menuliwidth = $(this).innerWidth();
		menuliposition = menuliposition - 5;
		
			$(".apelmenu span").stop(false, true).animate({
				width: menuliwidth,
				left: menuliposition,
			}, {duration: 500, easing: 'easeOutExpo'});

	});

	

	$(".floatnav").mouseleave(function () {
		floatmenuchange();
	});

	$(".floatnav ul li").click(function(){
		$(".floatnav ul li").removeClass("active");
		$(this).addClass("active");
	});


}


function closemodal() {
	$(".modalscreen").animate({
		opacity: 0,
	}, {duration: 500, easing: "jswing", complete: function() {
		$(".modalscreen").hide();

	} });
}


function startowl() {

	setTimeout(function() {
			$('.owl-carousel').owlCarousel({
				loop:true,
				margin:10,
				responsiveClass:true,

				responsive:{
					0:{
						items:1,
						nav:true
					},

					450:{
						items:1,
						nav:true
					},

					600:{
						items:2,
						nav:true
					},

					1050:{
						items:6,//items:8,
						nav:true
					},

					1600:{
						items:6,//items:11,
						nav:true
					},

					2000:{
						items:6,//items:11,
						nav:true
					}
				}
			});
		}, 100);

}

function modalscreen(id) {
	$(".modalscreen[data-modalid='"+id+"']").show();
	$(".modalscreen[data-modalid='"+id+"']").animate({
		opacity: 1,
	}, {duration: 500, easing: "jswing"});


	if (id == "1") {
		startowl();	
	}
}



function firstanimation() {

	$(".anim-car").animate({
		left: '72%',
	}, {duration: 4000, easing: "jswing", complete: function() {

		$(".js-topform").animate({
			top: "12%",
		}, {duration: 3000, easing: "easeOutElastic", });

	}});



	$(".anim-house").animate({
		bottom: 17,
	}, {duration: 800, easing: "easeInBack", });

	$(".anim-plane").animate({
		right: '105%',
	}, {duration: 60000, easing: "easeOutBack" });

}


function secondanimation() {
	// $(".bc1").animate({
	// 	bottom: 0,
	// }, {duration: 800, easing: "easeOutBounce", complete: function() {
    //
	// 	$(".bc2").animate({
	// 		bottom: 0,
	// 	}, {duration: 800, easing: "easeOutBounce", complete: function() {
    //
	// 	$(".bc3").animate({
	// 		bottom: 0,
	// 	}, {duration: 800, easing: "easeOutBounce", complete: function() {
    //
	// 	$(".bc4").animate({
	// 		bottom: 0,
	// 	}, {duration: 800, easing: "easeOutBounce", complete: function() {
    //
	// 	$(".bc5").animate({
	// 		bottom: 0,
	// 	}, {duration: 800, easing: "easeOutBounce", complete: function() {
    //
	// 	$(".bc6").animate({
	// 		bottom: 0,
	// 	}, {duration: 800, easing: "easeOutBounce", complete: function() {
    //
	// 	$(".bc7").animate({
	// 		bottom: 0,
	// 	}, {duration: 800, easing: "easeOutBounce",  });
    //
	// }});
    //
	// }});
    //
	// }});
    //
	// }});
    //
	// }});
    //
	// }});

	$(".anim-rocket").animate({
		top: '26%',
		right: '5%',
	}, {duration: 5000, easing: "jswing"});

    $(".animate-media").animate({
        bottom: '15.8%',
    }, {duration: 500, easing: "jswing"});


}

function fouranimation() {
	$(".pencil").animate({
		right: '30%',
	}, {duration: 1000, easing: "easeInSine", complete: function() {

		$(".girl").addClass("activegirgl"); 

		$(".bg4").animate({

			left: "2.5%",

		}, {duration: 500, easing: "jswing"});

	}});
}


function fiveanimation() {
	$(".animate-bottom").animate({
		bottom: '-15px',
	}, {duration: 2000, easing: "easeOutBounce", complete: function() {

		$(".anim-pinkline").animate({
			left: "0px",
		}, {duration: 1000, easing: "easeOutExpo"});

	}});

}

function opencloseform() {

	if($(".contect-form").offset().left < 0) {

		$(".contect-form").animate({
			left: '0px',
		}, {duration: 1000, easing: "easeOutBounce"});

		$(".contact-form-title").addClass("activeform");

	} else {
		$(".contect-form").animate({
			left: '-25%',
		}, {duration: 1000, easing: "easeOutBounce"});

		$(".contact-form-title").removeClass("activeform");
	}

} 

function hideform(els) {

	if(els == true) {

		$(".contect-form").animate({
			left: "-40%",
		}, {duration: 500, easing: "jswing"}); 

	} else {

		$(".contect-form").animate({
			left: "-25%",
		}, {duration: 500, easing: "easeOutExpo"}); 
	}

}


function hidemenu(els) {

	if(els == true) {

		$(".js-float-menu").animate({
			top: "-200px",
		}, {duration: 500, easing: "jswing"}); 

	} else {
		$(".js-float-menu").animate({
			top: "0px",
		}, {duration: 500, easing: "easeOutExpo"}); 
	}
}

function onGoodpole() {	
	$.growl.error({
		title: "Поле не заполнено",
		duration: 5000,
		message: "Вы заполнили не все поля, или заполнили их неверно."
	});
}

function onSendSuccess() {
	$.growl.notice({
		title: "Thank You",
		duration: 5000,
		message: "Your email was sent."
	});
}

function onSendError() {
	$.growl.error({
		title: "Error!",
		duration: 5000,
		message: 'An error has occurred. Please reload the page and fill out the form again.'
	});
}



$(document).ready(function() {

	changeimg();
	floatmenu(); // Меню
	screenposition();
	firstanimation();
	hideform(true);


	$("body").on("click", ".js-intrestingbutton", function() {

		if($(this).parent(".js-screen").children(".js-innernormalizer").hasClass("js-active")) {
			$(this).parent(".js-screen").children(".js-innernormalizer").removeClass("js-active");
			$(this).removeClass("js-active");
		} else {
			$(".js-innernormalizer, .js-intrestingbutton, js-mobile-contact-title, .js-innerform").removeClass("js-active");
			$(this).parent(".js-screen").children(".js-innernormalizer").addClass("js-active");
			$(this).addClass("js-active");

		}


	});

	$("body").on("click", ".js-mobile-contact-title", function() {
		$(".js-innernormalizer, .js-intrestingbutton").removeClass("js-active");
		$(this).parent(".mobile-contact").children(".js-innerform").toggleClass("js-active");
		$(this).toggleClass("js-active");
	});




	$('.js-eleport-1').eleport({ // Что копируем
	   copyInto: '.js-eleport-1-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'js-active' // добавляем класс к копии, точку перед class ставить не нужно.
	});

	$('.js-eleport-2').eleport({ // Что копируем
	   copyInto: '.js-eleport-2-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'js-active' // добавляем класс к копии, точку перед class ставить не нужно.
	});

	$('.girl').eleport({ // Что копируем
	   copyInto: '.js-eleport-3-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'js-active mobile-girl', // добавляем класс к копии, точку перед class ставить не нужно.
	   removeClass: 'girl' 
	});

	$('.bg4').eleport({ // Что копируем
	   copyInto: '.js-eleport-3-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'js-active mobile-bg4', // добавляем класс к копии, точку перед class ставить не нужно.
	   removeClass: 'bg4'
	});

	$('.pencil').eleport({ // Что копируем
	   copyInto: '.mobile-line-2', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'mobile-pencil', // добавляем класс к копии, точку перед class ставить не нужно.
	   removeClass: 'pencil'
	});

	$('.js-eleport-4').eleport({ // Что копируем
	   copyInto: '.js-eleport-4-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'mobilebluetext', // добавляем класс к копии, точку перед class ставить не нужно.
	   removeClass: 'js-eleport-4'
	});

	$('.anim-pad').eleport({ // Что копируем
	   copyInto: '.js-eleport-5-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'mobile-anim-pad', // добавляем класс к копии, точку перед class ставить не нужно.
	   removeClass: 'anim-pad'
	});

	$('.anim-notebook ').eleport({ // Что копируем
	   copyInto: '.js-eleport-5-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'mobile-anim-notebook', // добавляем класс к копии, точку перед class ставить не нужно.
	   removeClass: 'anim-notebook'
	});

	$('.anim-monitor').eleport({ // Что копируем
	   copyInto: '.js-eleport-5-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'mobile-anim-monitor', // добавляем класс к копии, точку перед class ставить не нужно.
	   removeClass: 'anim-monitor'
	});

	$('.anim-phone').eleport({ // Что копируем
	   copyInto: '.js-eleport-5-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'mobile-anim-phone', // добавляем класс к копии, точку перед class ставить не нужно.
	   removeClass: 'anim-phone'
	});

	$('.mobile-cloud-2 .anim-cloud').eleport({ // Что копируем
	   copyInto: '.js-eleport-5-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'js-mobile-cloud-2', // добавляем класс к копии, точку перед class ставить не нужно.
	});

	$('.mobile-cloud-3 .anim-cloud').eleport({ // Что копируем
	   copyInto: '.js-eleport-5-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'js-mobile-cloud-3', // добавляем класс к копии, точку перед class ставить не нужно.
	});

	$('.screen-5 .anim-balloon').eleport({ // Что копируем
	   copyInto: '.js-eleport-5-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'mobile-anim-balloon', // добавляем класс к копии, точку перед class ставить не нужно.
	   removeClass: 'anim-balloon'
	});

	$('.mobile-cloud-1 .anim-cloud').eleport({ // Что копируем
	   copyInto: '.js-eleport-5-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'js-mobile-cloud-1', // добавляем класс к копии, точку перед class ставить не нужно.
	});


	$('.js-eleport-7').eleport({ // Что копируем
	   copyInto: '.js-eleport-7-for', // куда копируем элемент, точка нужна, если это class.
	   removeClass: 'js-eleport-7'
	});

	$('.blue-circle-2').eleport({ // Что копируем
	   copyInto: '.js-eleport-6-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'mobile-blue-circle m-circle-2', // добавляем класс к копии, точку перед class ставить не нужно.
	   removeClass: 'blue-circle blue-circle-2'
	});

	$('.blue-circle-1').eleport({ // Что копируем
	   copyInto: '.js-eleport-6-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'mobile-blue-circle m-circle-1', // добавляем класс к копии, точку перед class ставить не нужно.
	   removeClass: 'blue-circle blue-circle-1'
	});

	$('.animated-puzzle-1').eleport({ // Что копируем
	   copyInto: '.js-eleport-6-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'mobile-anim-puzzle1', // добавляем класс к копии, точку перед class ставить не нужно.
	   removeClass: 'animated-puzzle-1'
	});

	$('.animated-puzzle-2').eleport({ // Что копируем
	   copyInto: '.js-eleport-6-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'mobile-anim-puzzle2', // добавляем класс к копии, точку перед class ставить не нужно.
	   removeClass: 'animated-puzzle-2'
	});

	$('.animated-puzzle-3').eleport({ // Что копируем
	   copyInto: '.js-eleport-6-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'mobile-anim-puzzle3', // добавляем класс к копии, точку перед class ставить не нужно.
	   removeClass: 'animated-puzzle-3'
	});

	$('.js-arc-circle').eleport({ // Что копируем
	   copyInto: '.js-eleport-6-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'mobile-arc-circle', // добавляем класс к копии, точку перед class ставить не нужно.
	   removeClass: 'js-arc-circle js-orange-circle'
	});

	$('.bottom-side-animation').eleport({ // Что копируем
	   copyInto: '.js-eleport-8-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'mobile-bottom-side-animation', // добавляем класс к копии, точку перед class ставить не нужно.
	   removeClass: 'bottom-side-animation x1d2 inline center lh11 font-32 upper cl-white'
	});

	$('.so-text').eleport({ // Что копируем
	   copyInto: '.js-eleport-10-for .js-textport', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'so-because-text', // добавляем класс к копии, точку перед class ставить не нужно.
	   removeClass: 'so-text font-30 bold cl-white upper'
	});

	$('.they-text').eleport({ // Что копируем
	   copyInto: '.js-eleport-10-for .js-textport', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'mobile-they-text', // добавляем класс к копии, точку перед class ставить не нужно.
	   removeClass: 'they-text cl-coral font-14 v-mid right'
	});

	$('.because-text').eleport({ // Что копируем
	   copyInto: '.js-eleport-10-for .js-textport', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'mobile-because-text', // добавляем класс к копии, точку перед class ставить не нужно.
	   removeClass: 'because-text right font-16 cl-white lh12'
	});

	$('.why-text').eleport({ // Что копируем
	   copyInto: '.js-eleport-10-for .js-textport', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'mobile-why-text', // добавляем класс к копии, точку перед class ставить не нужно.
	   removeClass: 'why-text font-65 cl-sblue bold upper lh1'
	});

	$('.leftrocks').eleport({ // Что копируем
	   copyInto: '.js-eleport-9-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'mobile-leftrocks', // добавляем класс к копии, точку перед class ставить не нужно.
	   removeClass: 'leftrocks'
	});

	$('.js-rocks').eleport({ // Что копируем
	   copyInto: '.js-eleport-9-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'mobile-rocks', // добавляем класс к копии, точку перед class ставить не нужно.
	   removeClass: 'js-rocks'
	});

	$('.js-eleport-11').eleport({ // Что копируем
	   copyInto: '.js-eleport-11-for', // куда копируем элемент, точка нужна, если это class.
	   removeClass: 'js-eleport-11'
	});

	$('.js-more-clouds-2').eleport({ // Что копируем
	   copyInto: '.js-eleport-12-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'mobile-clouds',
	   removeClass: 'anim-clouds js-more-clouds-2'
	});

	$('.js-righttext-but').eleport({ // Что копируем
	   copyInto: '.js-eleport-12-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'font-30 cl-darkorange pad-bot-20',
	   removeClass: 'js-righttext-but font-40 cl-white d-non-1024'
	});

	$('.js-eleport-14').eleport({ // Что копируем
	   copyInto: '.js-eleport-12-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'font-14 mobile-block cl-white island-v10 right js-asr-block',
	   removeClass: 'c x2d5 font-20 upper light cl-white js-eleport-14 d-non-1024'
	});

	$('.js-orange-circle-2').eleport({ // Что копируем
	   copyInto: '.js-eleport-12-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'mobile-ars-circle',
	   removeClass: 'js-orange-circle-2 js-ars-circle inline relative center cl-white light font-16'
	});

	$('.js-eleport-13').eleport({ // Что копируем
	   copyInto: '.js-eleport-12-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'font-14 mobile-block cl-white island-v10',
	   removeClass: 'js-eleport-13 c x4d5 font-20 light'
	});

	$('.js-big-orange-but').eleport({ // Что копируем
	   copyInto: '.js-eleport-12-for', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'mobile-big-orange-but',
	   removeClass: 'js-big-orange-but wfull block no-underline cl-white bg-orange upper font-26 center island-15 d-non-1024'
	});

	$('.js-eleport-19').eleport({ // Что копируем
	   copyInto: '.js-eleport-19-for .mobile-block', // куда копируем элемент, точка нужна, если это class.
	   addClass: 'right'
	});

	$('.js-eleport-to-footer').eleport({ // Что копируем
	   copyInto: '.js-eleport-footer', // куда копируем элемент, точка нужна, если это class.
		removeClass: 'display-none'
	});





	var fullPageCreated = false;
	fullpageinit();


	function fullpageinit() { 

		if(fullPageCreated === false) {
	        fullPageCreated = true;
	        if (typeof $('.js-allscreens').fullpage == 'function') {
	        	$('.js-allscreens').fullpage();
	        }
		}
		
	}


	function resizeinit() {

		if($(window).width() > 1050) {

			if($(window).width() < 1400 ) {
				destroytextow();
				textoverflow();
			} else {
				destroytextow();
			}

			if($(window).width() < 1200) {
				destroytextow(1);
			}

			if($(".js-blockblue").length > 0) {  // need for correct display of eCommerce on a mobile phone
				var headposofs = $(".js-blockblue").position().top;
				 var heightsofs = $(".js-blockblue").innerHeight();
				 var thisposofs = headposofs + heightsofs + 20;

				 headposofs = headposofs + 20;

				 $(".js-text-bot-anim").animate({
				 top: thisposofs,
				 }, {duration: 1000, easing: "jswing"});
			}

			fullpageinit();
			apativescreens(false);
			destroyanim(false);
			
		} else {
			destroytextow();
			fullPageCreated = false;
			apativescreens(true);
			if ($.fn.fullpage) {
				$.fn.fullpage.destroy('all'); 
			}
			destroyanim(true);	
		}

	}

	$("body").on("click", ".intbutton-3", function() {
		startowl();
	});



	// Отрабатываем Resize окна
	resizeinit();

	


	$(window).resize(function () {
	    waitForFinalEvent(function(){
	    	resizeinit();
	    }, 500, "some unique string");
	});

});