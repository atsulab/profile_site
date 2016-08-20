$(document).ready(function(){
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if($(window).scrollTop() > 0){
      $('#header-bar').stop().animate({opacity:1-((scrollTop-80)/100)}, 10);
      $('#header-bar').css('background-position','0 ' + -(scrollTop*1.1)+'px');
    }else{
      $('#header-bar').stop().animate({opacity:1}, 10);
    }

    var skillbarPos = $('.skill-bar').offset().top - $(window).height() + 200;
    if(scrollTop > skillbarPos){
      SkillBarAnimation();
    }

  });
});

/*function SkillBarAnimation(){
  $('.skill-bar[data-percent]').each(function(){
    //var per = $('.skill-bar').attr('data-percent');
    var per = $(this).attr('data-percent');
    $('.skill-bar-percent').animate(
    	{ width: per} , {duration: 4000, easing: 'swing' }
    );
  });
}*/

function SkillBarAnimation(){
  $('.skill-bar-percent[percent]').each(function(){
    //var per = $('.skill-bar').attr('data-percent');
    var per = $(this).attr('percent');
    $(this).animate(
    	{ width: per} , {duration: 4000, easing: 'swing' }
    );
  });
}

/*
  $('.skill-bar[data-percent]').each(function () {
    var progress = $(this);
    var percentage = $(this).attr('data-percent');
	   $('.skill-bar-percent').animate({'width': percentage}, {duration: 3000});
  });
*/

    /*$({countNum: 0}).animate({countNum: percentage}, {
      duration: 2000,
      easing:'linear',
      step: function() {
      var pct = '';
      if(percentage == 0){
        pct = Math.floor(this.countNum) + '%';
      }else{
        pct = Math.floor(this.countNum+1) + '%';
      }
      progress.text(pct) && progress.siblings().children().css('width',pct);
    }
  });*/
