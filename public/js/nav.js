function loadHome() {
  var home = $('#home-template').html();
  console.log('home');

  var template = Handlebars.compile($("#home-template").html());
  $('#content').html(template({}));

  toggleMenuBar('li-home');
}

function loadListings() {
  var template = Handlebars.compile($("#listings-template").html());
  console.log(template);

  $('#content').html(template({}));
  toggleMenuBar('li-listings');
}

function toggleMenuBar(activeButton) {
  // reimpl w/o hardcoded list
  var items = ['li-home', 'li-listings', 'li-customers', 'li-about'];
  console.log(items);

  _.each(items, function(item) {
    console.log(item);

    if(item === activeButton) {
      $('#'+item).addClass('active');
    } else {
      $('#' + item).removeClass('active');
    }
  });
}
