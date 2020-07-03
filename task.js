var name;
$("#search").click(function(){
  name = $("#searchterm").val();
  window.location.href = "result.html";
});
$(document).ready(function(){
   $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
    {
      tags: name,
      tagmode: "any",
      format: "json"
    },
    function(data) {
      $.each(data.items, function(i,item){
        $("<img/>").attr("src", item.media.m).prependTo("#results");
        if ( i == 100) return false;
      });
    });
  });
