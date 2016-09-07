$(document).ready(function(){
    $.getJSON("skills.json" , function(skills) {
      var len = skills.length;
      var ulObj = $("#skills-test");
      var target = $("#tech-skill");

      for(var i = 0; i < len; i++) {
        //ulObj.append($("<li>").attr({"id":skills[i].name}).text(skills[i].percent));
        var div01 = $("<div class=\"skill-bar\">");
        var div02 = $("<div class=\"skill-bar-base\">");
        //var div03 = $("<div class=\"skill-bar-name\">").text(skills[i].name);
        var div03 = $("<div class=\"skill-bar-name\">").attr({"id":"skill-"+i}).text(skills[i].name);
        var div04 = $("<div class=\"skill-bar-percent\">").attr({"percent":skills[i].percent});
        //target.append($("<div>").attr({"id":skills[i].name}).text(skills[i].percent));
        //target.append(div01, div02, div03);
        var xx = div01.append(div02.append(div03).append(div04));
        //var xx2 = xx.append(div03, div04);
        target.append(xx);
      }
    });
    /*var skills = [
      {"name":"JavaScript","percent":70},
      {"name":"C++","percent":50},
      {"name":"C#","percent":40}
    ];
    for(var i in skills){
    $("#skills-test").append("<li>" + skills[i].name + "（" + skills[i].percent + "才）</li>");
  }*/
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
