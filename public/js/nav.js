var Nav = {

    loadHome: function() {
      var home = $('#home-template').html();
      console.log('home');

      var template = Handlebars.compile($("#home-template").html());
      $('#content').html(template({}));

      this.toggleMenuBar('li-home');
    },

    loadListings: function() {
      var template = Handlebars.compile($("#listings-template").html());

      $('#content').html(template({}));
      this.toggleMenuBar('li-listings');      
    },

    toggleMenuBar: function(activeButton){
      // reimpl w/o hardcoded list
      var items = ['li-home', 'li-listings', 'li-customers', 'li-about'];
      console.log(items);

      _.each(items, function(item) {

        if(item === activeButton) {
          $('#'+item).addClass('active');
        } else {
          $('#' + item).removeClass('active');
        }
      });
    }
};

