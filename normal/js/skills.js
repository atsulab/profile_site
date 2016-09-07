$(document).ready(function(){
    $.getJSON("skills.json" , function(skills) {
      var len = skills.length;
      var ulObj = $("#skills-test");
      var target = $("#tech-skill");

      for(var i = 0; i < len; i++) {
        var div01 = $("<div class=\"skill-bar\">");
        var div02 = $("<div class=\"skill-bar-base\">");
        var div03 = $("<div class=\"skill-bar-name\">").attr({"id":"skill-"+i}).text(skills[i].name);
        var div04 = $("<div class=\"skill-bar-percent\">").attr({"percent":skills[i].percent});
        var divSkills = div01.append(div02.append(div03).append(div04));
        target.append(divSkills);
      }
    });
});
