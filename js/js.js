$( document ).ready(function() {
$("#quotebutton").click(function(event) {
    event.preventDefault();
$.ajax({url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", success: function(file) {
  
  if(file[0].content.length > 150) { 
    $.ajax(this);
                  } else{
                    $('.txt').css('opacity', '0');
                    $('.txt').on('transitionend webkitTransitionEnd oTransitionEnd', function () {
                      // your event handler
                      $('.txt').css('opacity', '1');
                    })
                    
                    $('.quotebox').css('transform', 'scaleY(0)');
                    $('.quotebox').on('transitionend webkitTransitionEnd oTransitionEnd', function () {
                      // your event handler
                      $('.quotebox').css('transform', 'scaleY(1)');
                    })
                    
                    
  $('.quotebox h3').html('"' + file[0].content.replace(/<p>|<\/p>/g, '') + '"');
  $('.author h4').html(file[0].title);

;
  
  
  function random() {
    var back = ["#3D9970","#85144b","#001f3f","#0074D9","#FF851B","#483D8B","	#778899","#008080"];
    return back[Math.floor(Math.random() * back.length)];
}
var x = random();
  
  $("body").css("background", x);
  $(".twitter-share-button").css("background", x);
  }
  
}, tryCount : 0, error: function() {
         console.log("fail");
      }, cache: false});

});  



 let result = "https://twitter.com/intent/tweet?text=" + encodeURIComponent($('.quotebox h3').html()) + encodeURIComponent("-") +
 encodeURIComponent($('.author h4').html()) ;
  console.log(result);
  $('.twitter-share-button').click(function(){
      $(".twitter-share-button").attr("href", result);
  })



  
});