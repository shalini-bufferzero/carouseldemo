define(
    "sampleapp/appui/datasources/hollywoodFeed",
    [
      "antie/class"
    ],
    function(Class) {
      return Class.extend({
        // You will probably want to do something more useful then returning static data
        loadHollywood : function(callbacks) {
          callbacks.onSuccess(
            [
              {
                "id":"1",
                "title":"Love Story",
                "img" : "https://files.prokerala.com/movies/pics/800/birthday-poster-of-sai-pallavi-movie-113601.jpg"
              },
              {
                "id":"2",
                "title":"Jersey",
                "img" : "https://moviegalleri.net/wp-content/gallery/jersey-movie-posters-hd/jersey-movie-posters-hd-nani-shraddha-srinath-50f38ef.jpg"
              },
              {
                "id":"3",
                "title":"Tholi Prema",
                "img" : "https://i.pinimg.com/736x/9e/60/ca/9e60ca593c36e1c945fe3adf2281c363.jpg"
              },
              {
                "id":"4",
                "title":"Majili",
                "img" : "https://i.pinimg.com/736x/06/f9/79/06f979085ea6c8ff11768c4a14feab08.jpg"
              },
              {
                "id":"5",
                "title":"V",
                "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCkujiFGF93YX-ZAx8aBfi_hijClOFK-o-BA&usqp=CAU"
              },

              {
                "id":"6",
                "title":"Ninnu Kori",
                "img" : "https://i.pinimg.com/236x/85/ff/68/85ff682e36532ee4570b690a5809e390--live-news-online-watch-news.jpg"
              },

              {
                "id":"7",
                "title":"Bahubali",
                "img" : "https://swall.teahub.io/photos/small/197-1977363_the-beginning-bahubali-telugu-movie-posters.jpg"
              }

            ]
          );
        }
      });
    });
  