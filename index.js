hexo.extend.tag.register("hatenablogcard", function(args) {
  var url = args[0];
  return '<iframe class="hatenablogcard" style="width: 100%; height: 155px; max-width: 680px;" src="https://hatenablog-parts.com/embed?url=' +
    url + '" width="300" height="150" frameborder="0" scrolling="no"></iframe>';
});
