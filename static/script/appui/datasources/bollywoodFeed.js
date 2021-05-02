define(
    "sampleapp/appui/datasources/bollywoodFeed",
    [
      "antie/class"
    ],
    function(Class) {
      return Class.extend({
        // You will probably want to do something more useful then returning static data
        loadBollywood : function(callbacks) {
          callbacks.onSuccess(
            [
              {
                "id":"1",
                "title":"Darbar",
                "img" : "https://www.gethucinema.com/wp-content/uploads/2019/04/Darbar-1-534x462.jpg"
              },
              {
                "id":"2",
                "title":"Petta",
                "img" : "https://ih1.redbubble.net/image.794104977.6358/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"
              },
              {
                "id":"3",
                "title":"Soorai Pottru",
                "img" : "https://moviegalleri.net/wp-content/gallery/tamil-movie-new-year-2020-wishes-poster/soorarai-pottru-movie-new-year-2020-wishes-poster.jpg"
              },
              {
                "id":"4",
                "title":"Vedhalam",
                "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgHGZJXbrhrtNY2kSmMUxJghW11yrGsaiY72vxcygdAILPLApFDVYToQyib-Ouz-0Qn_w&usqp=CAU"
              },
              {
                "id":"5",
                "title": "96",
                "img" : "https://3.bp.blogspot.com/-ACEuLFluZG0/W303IbKhKvI/AAAAAAABYzY/koGZyf8TpgQCbjimcop9j0zDjaeNLdtVgCLcBGAs/s1600/96_tamil_film_poster.jpg"
              },

              {
                "id":"6",
                "title":"Super Deluxe",
                "img" : "https://1.bp.blogspot.com/-r9dPnDBG_Js/W7zbhl4ZM1I/AAAAAAAAc1s/yjhnyXmigdkf_Nuo-K2KEpGnP_HhgwVMQCLcBGAs/s1600/super-deluxe-movie-poster.jpg"
              },

              {
                "id":"7",
                "title":"Maari 2",
                "img" : "https://www.breezemasti.com/wp-content/uploads/Dhanush-Maari-2-movie-HD-poster.jpg"
              }
            ]
          );
        }
      });
    });
  