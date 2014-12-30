var controller = new ScrollMagic();



/*=============================Scene 2===============================*/
var tl2 = new TimelineMax(); //Create Timeline
// build animation
var tween2 = TweenMax.to(".logo15y .n, .logoburj .n", 0.25, {opacity: 0});
var tween2C1 = TweenMax.to(".logo15y .r, .logoburj .r", 0.25, {opacity: 1});
var tween2C2 = tl2.to(".content1", 0.25, {marginTop: "-50px", opacity:0, delay:0.5}).to(".content1", 0, {"display":"none"});
var tween2C3 = TweenMax.to(".content1, .punch", 0.25, {color:"#fff"});
var tween2C4 = TweenMax.to(".content2", 0.25, {opacity: 1, delay:0.75});
var tween2C5 = TweenMax.from(".content2", 0.25, {y:50, delay:0.75});
var tween2C6 = TweenMax.from(".line-art", 0.25, {"bottom": -130});
var tween2C7 = TweenMax.to(".line-art", 0.25, {opacity: 1});



var scene2 = new ScrollScene({
  triggerElement: '#section2', // point of execution
})
.setTween([tween2, tween2C1, tween2C2, tween2C3, tween2C4, tween2C5, tween2C6, tween2C7]);
scene2.setClassToggle(".social-icons, .btmarrow-container", "active"); //add class in social icon and down arrow





/*=============================Scene 3===============================*/
var tl3 = new TimelineMax();//Create Timeline
var tween3 = tl3.to(".s3 .bg", 0.5, {opacity: 0, delay:0.5})
				.staggerFrom('.s3 .leftbar, .s3 .rightbar', .5, {y:50, opacity:0}, 0.25, 1/*, null, myFunction}*/)
				.staggerFrom('.s3 .animation', .5, {left:-50, opacity:0}, 0.25, 1.5/*, null, myFunction}*/);


var scene3 = new ScrollScene({
  triggerElement: '#section3', // point of execution
})
.setTween([tween3])
;



/*=============================Scene 4===============================*/
var tl4 = new TimelineMax();//Create Timeline
var tween4 = tl4.to(".s4 .bg", 0.5, {opacity: 0, delay:0.5})
				.staggerFrom('.s4 .leftbar, .s4 .rightbar', .5, {y:50, opacity:0}, 0.25, 1/*, null, myFunction}*/)
				.staggerFrom('.s4 .animation', .5, {left:-50, opacity:0}, 0.25, 1.5/*, null, myFunction}*/);


var scene4 = new ScrollScene({
  triggerElement: '#section4', // point of execution
})
.setTween([tween4])
;


/*=============================Scene 5===============================*/
var tl5 = new TimelineMax();//Create Timeline
var tween5 = tl5.to(".s5 .bg", 0.5, {opacity: 0, delay:0.5})
				.staggerFrom('.s5 .leftbar, .s5 .rightbar', .5, {y:50, opacity:0}, 0.25, 1/*, null, myFunction}*/)
				.staggerFrom('.s5 .animation', .5, {left:-50, opacity:0}, 0.25, 1.5/*, null, myFunction}*/);


var scene5 = new ScrollScene({
  triggerElement: '#section5', // point of execution
})
.setTween([tween5])
;


/*=============================Scene 6===============================*/
var tl6 = new TimelineMax();//Create Timeline
var tween6 = tl6.to(".s6 .bg", 0.5, {opacity: 0, delay:0.5})
				.staggerFrom('.s6 .leftbar, .s6 .rightbar', .5, {y:50, opacity:0}, 0.25, 1/*, null, myFunction}*/)
				.staggerFrom('.s6 .animation', .5, {left:-50, opacity:0}, 0.25, 1.5/*, null, myFunction}*/);


var scene6 = new ScrollScene({
  triggerElement: '#section6', // point of execution
})
.setTween([tween6])
;


/*=============================Scene 7===============================*/
var tl7 = new TimelineMax();//Create Timeline
var tween7 = tl7.to(".s7 .bg", 0.5, {opacity: 0, delay:0.5})
				.staggerFrom('.s7 .leftbar, .s7 .rightbar', .5, {y:50, opacity:0}, 0.25, 1/*, null, myFunction}*/)
				.staggerFrom('.s7 .animation', .5, {left:-50, opacity:0}, 0.25, 1.5/*, null, myFunction}*/);


var scene7 = new ScrollScene({
  triggerElement: '#section7', // point of execution
})
.setTween([tween7])
;


/*=============================Scene 8===============================*/
var tl8 = new TimelineMax();//Create Timeline
var tween8 = tl8.to(".s8 .bg", 0.5, {opacity: 0, delay:0.5})
				.staggerFrom('.s8 .leftbar, .s8 .rightbar', .5, {y:50, opacity:0}, 0.25, 1/*, null, myFunction}*/)
				.staggerFrom('.s8 .animation', .5, {left:-50, opacity:0}, 0.25, 1.5/*, null, myFunction}*/);


var scene8 = new ScrollScene({
  triggerElement: '#section8', // point of execution
})
.setTween([tween8])
;


/*=============================Scene 9===============================*/
var tl9 = new TimelineMax();//Create Timeline
var tween9 = tl9.to(".s9 .bg", 0.5, {opacity: 0, delay:0.5})
				.staggerFrom('.s9 .leftbar, .s9 .rightbar', .5, {y:50, opacity:0}, 0.25, 1/*, null, myFunction}*/)
				.staggerFrom('.s9 .animation', .5, {left:-50, opacity:0}, 0.25, 1.5/*, null, myFunction}*/);


var scene9 = new ScrollScene({
  triggerElement: '#section9', // point of execution
})
.setTween([tween9])
;


/*=============================Scene 10===============================*/
var tl10 = new TimelineMax();//Create Timeline
var tween10 = tl10.to(".s10 .bg", 0.5, {opacity: 0, delay:0.5})
				  .staggerFrom('.s10 .leftbar, .s10 .rightbar', .5, {y:50, opacity:0}, 0.25, 1/*, null, myFunction}*/)
				  .staggerFrom('.s10 .animation', .5, {left:-50, opacity:0}, 0.25, 1.5/*, null, myFunction}*/);


var scene10 = new ScrollScene({
  triggerElement: '#section10', // point of execution
})
.setTween([tween10])
;


/*=============================Scene 11===============================*/
var tl11 = new TimelineMax();//Create Timeline
var tween11 = tl11.to(".s11 .bg", 0.5, {opacity: 0, delay:0.5})
				  .staggerFrom('.s11 .leftbar, .s11 .rightbar', .5, {y:50, opacity:0}, 0.25, 1/*, null, myFunction}*/)
				  .staggerFrom('.s11 .animation', .5, {left:-50, opacity:0}, 0.25, 1.5/*, null, myFunction}*/);


var scene11 = new ScrollScene({
  triggerElement: '#section11', // point of execution
})
.setTween([tween11])
;


/*=============================Scene 12===============================*/
var tl12 = new TimelineMax();//Create Timeline
var tl12C1 = new TimelineMax();//Create Timeline
var tween12 = tl12.to(".s12 .bg", 2, {opacity: 0, delay:0.5})
				  .staggerFrom('.s12 .animation', .5, {bottom:-50, opacity:0}, 0.25 /*, 40, null, myFunction}*/)
				  .staggerFrom('.jumeirah-home, .share-story', .5, {bottom:-50, opacity:0}, 0.25)
				  .to('.social-icons', .5, {right:"50%", "margin-right":-103, opacity:0})
				  .to('.social-icons', 0, {display:"none"})
				  .from('.connect-burj', .5, {bottom:-50, opacity:0})
				  .to('.social-icons', 0, {bottom:75})
			  ;	  
var tween12C1 = tl12C1.to('.btmarrow-container', .5, {opacity:0})
					  .to('.btmarrow-container', 0, {"display":"none"})
					  .to('.line-art', .5, {"bottom":"-110px", delay:1})
				;



var scene12 = new ScrollScene({
  triggerElement: '#section12', // point of execution
})
.setTween([tween12, tween12C1])
;



/*========================= Add Scene to ScrollMagic Controller =========================*/
controller.addScene([scene2, scene3, scene4, scene5, scene6, scene7, scene8, scene9, scene10, scene11, scene12]);







//Initialize Fullpage Js
$('#fullpage').fullpage({
	//sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
	anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage', '6thpage', '7thpage', '8thpage', '9thpage', '10thpage', '11thpage', '12thpage'],
	//menu: '#menu',
	css3: false,
	scrollingSpeed: 1500,
	easing: 'easeInOutExpo',
	navigation: true,
	navigationPosition: 'left',
	normalScrollElementTouchThreshold: 20,
	onLeave: function(index, nextIndex, direction){
		
		if (index == 1) {
			//alert('Leaving 1st');
			$('#buildYears').countTo();
		}
		
	},
	afterLoad: function(anchorLink, index){
		
		if (index == 3) {
			
			if ( !$('#num_steel, #num_cars').hasClass('active') ) {
				$('#num_steel, #num_cars').addClass('active');
				$('#num_steel, #num_cars').countTo();
			}
			
		}
		
		if (index == 4) {
			
			if ( !$('#num_gold, #num_watch').hasClass('active') ) {
				$('#num_gold, #num_watch').addClass('active');
				$('#num_gold, #num_watch').countTo();
			}
			
		}
		
		if (index == 5) {
			
			if ( !$('#num_feet, #num_marble').hasClass('active') ) {
				$('#num_feet, #num_marble').addClass('active');
				$('#num_feet, #num_marble').countTo();
			}
			
		}
		
		if (index == 6) {
			
			if ( !$('#num_meters').hasClass('active') ) {
				$('#num_meters').addClass('active');
				$('#num_meters').countTo();
			}
			
		}
		
		if (index == 7) {
			
			if ( !$('#num_million').hasClass('active') ) {
				$('#num_million').addClass('active');
				$('#num_million').countTo();
			}
			
		}
		
		if (index == 8) {
			
			if ( !$('#num_tons, #num_million2').hasClass('active') ) {
				$('#num_tons, #num_million2').addClass('active');
				$('#num_tons').countTo();
				$('#num_million2').countTo({
					decimals: 2
				});
				
			}
			
		}
		
		if (index == 9) {
			
			if ( !$('#num_mentions, #num_page').hasClass('active') ) {
				$('#num_mentions, #num_page').addClass('active');
				$('#num_mentions, #num_page').countTo({
					formatter: function (value, options) {
					  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
					}
				});
				
				
			}
			
		}
		
		if (index == 10) {
			
			if ( !$('#num_awards, #num_every_month').hasClass('active') ) {
				$('#num_awards, #num_every_month').addClass('active');
				$('#num_awards, #num_every_month').countTo();
				
			}
			
		}
		
		
		
		
		
	}
	
	

	//equivalent to jQuery `easeOutBack` extracted from http://matthewlein.com/ceaser/
	//easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
});

//Down arrow click function
$('.movedown').click(function(){
	$.fn.fullpage.moveSectionDown();
});//end

//Facebook share
$('.social-icons .icon-facebook').click(function(){
	window.open ("http://www.facebook.com/sharer.php?u=http://www.jumeirah.com/ar/hotels-resorts/dubai/burj-al-arab/","mywindow","menubar=1,resizable=1,width=500,height=400");
});

//Twitter share
$('.social-icons .icon-twitter').click(function(){
	window.open ("https://twitter.com/share?url=http://www.jumeirah.com/ar/hotels-resorts/dubai/burj-al-arab/","mywindow","menubar=1,resizable=1,width=500,height=400");
});

//Google plus share
$('.social-icons .icon-google-plus').click(function(){
	window.open ("https://plus.google.com/share?url=http://www.jumeirah.com/ar/hotels-resorts/dubai/burj-al-arab/","mywindow","menubar=1,resizable=1,width=500,height=400");
});

//share-story click 
$('.share-story').click(function(){
	$('.social-icons').fadeToggle().animate({opacity:1});
});
//end


//load body visible
$(window).load(function(){
	$('body').animate({opacity:1});
});
//end