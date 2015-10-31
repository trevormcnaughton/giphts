var $search = $('#search');
var api = 'http://api.giphy.com/v1/gifs/search';
var opts = {
  q: 'popular',
  fmt: 'json',
  limit: 100,
  api_key: 'dc6zaTOxFJmzC'
}

handleAjax(api, opts);

$('form').on('submit', function(e) {
  e.preventDefault();
  opts.q = $('#search').val();
  handleAjax(api, opts);
});

function handleGifs(response) {
  $('body').animate({scrollTop: 0}, 300, 'swing');
  var tmpl = '<ul class="gif-list">'
  $.each(response.data, function(i, gif) {
    tmpl += '<a class="gif__link" href="' + gif.url + '" target="_blank">';
    tmpl += '<li class="gif__image" style="height:' + gif.images.original.height + 'px;background-image: url(' + gif.images.original.url + ')"></li></a>';
  });
  tmpl += '</ul>';
  $('.gif-grid').html(tmpl);
}

function handleAjax(url, data) {
  $.ajax({
    url: url,
    data: data,
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    success: handleGifs
  });
}
