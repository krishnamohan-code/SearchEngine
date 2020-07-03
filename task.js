$("#search").click(function(){
   $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
    {
      tags: $("#searchterm").val(),
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
  // document.getElementById("search").addEventListener(onclick,function()
  // {
  //   document.getJSON(
  //     "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
  //     {
  //       tags:getElementById("searchterm").val(),
  //       tagmode:"any",
  //       format:"json"
  //     },
  //     function(data)
  //     {
  //       document.each(data.items,function(i,item)
  //       {
  //         document.createElement('img').setAttribute("src",item.media.m);
  //         if ( i == 100) return false;
  //       });
  //     }
  //   )
  // });