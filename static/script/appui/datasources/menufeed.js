define(
    "sampleapp/appui/datasources/menufeed",
    [
      "antie/class"
    ],
    function(Class) {
      return Class.extend({
        // You will probably want to do something more useful then returning static data
        loadMenu : function(callbacks) {
          callbacks.onSuccess(
            [
              {
                "id":"1",
                "title":"Search",
                "img" : "static/img/menu/icon_search.svg"
              },
              {
                "id":"2",
                "title":"Home",
                "img" : "static/img/menu/icon_home.svg"
              },
              {
                "id":"3",
                "title":"Movies",
                "img" : "static/img/menu/icon_movies.svg"
              },
              {
                "id":"4",
                "title":"Shows",
                "img" : "static/img/menu/icon_shows.svg"
              },
              {
                "id":"5",
                "title":"TV",
                "img" : "static/img/menu/icon_tv.svg"
              },
              {
                "id":"6",
                "title":"Music",
                "img" : "static/img/menu/icon_music.svg"
              },
              {
                "id":"7",
                "title":"Prime",
                "img" : "static/img/menu/icon_prime.svg"
              },
              {
                "id":"8",
                "title":"Account",
                "img" : "static/img/menu/icon_user.svg"
              },
              {
                "id":"9",
                "title":"My Library",
                "img" : "static/img/menu/icon_library.svg"
              }
            ]
          );
        }
      });
    });