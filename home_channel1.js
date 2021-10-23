const url = "https://www.xvideos.com";
var list = [];







function cheer(html){

let main  = Cheerio.load(html);
main('div[data-is-channel="1"]').each(function (index, element) {
  let items = Cheerio.load(element);
    var fil_title = items('.title').find('a').attr('title');
      var fil_duration = items('.title').find('span').text();
         var fil_thumbnail = items('.thumb').find('a > img').attr("data-src");
            var video_id = items('.thumb').find('a > img').attr("data-videoid");
               var fil_selflink = items('.thumb').find('a').attr("href");
                  var self_link = fil_selflink;
                     //var fil_hd = items('.duration').first().text();
  var hd_view = (items('.bg').find('span').text().split(/(\s+)/));
    var fil_view = hd_view[6];
      var fil_hd = items('.bg').find('span').html();
list.push({'title':fil_title,'count':index,'time':fil_duration,'thumbnail':fil_thumbnail,'video_id':video_id,'play_link':self_link,'hd':fil_hd,'view':fil_view});

});
return list;

} //Close the cheer fun







function main(){
axios.get(url)
  .then(function (response) {
    var final =  cheer(response.data);
        console.log("result :\n"+final");


  })
    .catch(function (error) {
        // handle error
            console.log(error);
              })
                .then(function () {
                    // always executed
                      });
}//Close the main
main();
