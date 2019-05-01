$(document).ready(function () {
// This is To load The Slider     
//====================================================================//
$('.slider').bxSlider();      
//====================================================================//

// Ainmation for first slide in slider     
$(".f-slide h2").fadeIn(2500);
$(".navbar h2").fadeIn(2000);        
$(".home").mouseenter(function(){
   $(".features").fadeIn(100); 
});
$(".features").mouseleave(function(){
   $(".features").fadeOut(100); 
});
$(".f").mouseenter(function(){
   $(".features").fadeOut(100); 
});
 //======================================================================//
  

$(window).scroll(function(){
  
    if( $(window).scrollTop() >= $(".icons").offset().top - 300 )
    {
        $(".icons ").animate({
            opacity:1
        }, 1300);        
        
    } 
       if( $(window).scrollTop() >= $(".Template").offset().top - 300 )
    {
        $(".Template").animate({
            opacity:1
        }, 1300);        
        
    } 
    
    if( $(window).scrollTop() >= $(".works").offset().top - 300 )
    {
        $(".works").animate({
            opacity:1
            
        },1300);      
    }
    
    if( $(window).scrollTop() >= $(".l-learn").offset().top - 300 )
    {
        $(".l-learn").animate({
        
            opacity:1
        
        },1300);      
    }
    
    if( $(window).scrollTop() >= $(".teams").offset().top - 300)
    {
        $(".teams").animate({
            
            opacity:1
        
        },1300);      
    }
    
    if( $(window).scrollTop() >= $(".foot").offset().top )
    {
        $(".foot").animate({
        
            opacity:1
        
        },1000);      
    } 
    
    if( $(window).scrollTop() >= $(".content").offset().top - 400)
    {
        $(".content").animate({
        
            opacity:1
        
        },1000);      
    }
    
    
    
});
    
    
    
    
    
});
 
    



// This is a SetInterval for The first paragraph  //
var myText = "Create just what you need for your Perfect Website. Choose from a wide range of Elements & simply put them on your own Canvas.";
var myHeading = "Welcome To Canvas ";
var j = 0 ;
var typing = setInterval(function(){
     document.getElementById('type').textContent+= myText[j];   
     j++;        
     if(j > myText.length - 1)          
        {
            clearInterval(typing);
        }
        
    }, 50);

// ====================================================================== // 


// Counter in The Website 

var i = 50 ;

var myCount = setInterval(function(){
     i+= 13  ;
    document.getElementById("count").innerHTML = i;
    if(i >= 846)
    {
        clearInterval(myCount);    
    }
        
    
}, 70);

var k = 0 ;
var myCount2 = setInterval(function(){
     k+= 650  ;
    document.getElementById("count2").innerHTML = k;
    if(k >= 21500)
    {
        clearInterval(myCount2);    
    }
        
    
}, 80);



var myCount3 = setInterval(function(){
     i+= 12;
    document.getElementById("count3").innerHTML = i;
    if(i >= 408)
    {
        clearInterval(myCount3);    
    }
        
    
}, 80);


var m = 0;
var myCount4 = setInterval(function(){
     m+= 50  ;
    document.getElementById("count4").innerHTML = m;
    if(m >= 1400)
    {
        clearInterval(myCount4);    
    }
        
    
}, 90);


// End The Counter ===============================================================

















