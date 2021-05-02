define(
    "sampleapp/appui/formatters/menuformatter",
    [
      "antie/formatter",
      "antie/widgets/label",
      "antie/widgets/button",
      "antie/widgets/image"
    ],
    function(Formatter, Label, Button, Image) {
      return Formatter.extend({
        format : function (iterator) {
          var button, item;
          item = iterator.next();
          button = new Button("fruit" + item.id);
          button.addClass("iconButton")
          image=new Image("img-item.id", item.img, { width : 50, height: 20})
          image.addClass("iconImg")
          button.appendChildWidget(image);

          title=new Label(item.title)
          title.addClass("iconLabel")
          button.appendChildWidget(title);
          
          return button;
          
        }
      });
    }
  );

