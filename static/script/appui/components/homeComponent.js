define("app/appui/components/homecomponent", [
    "antie/widgets/component",
    "antie/widgets/button",
    "antie/widgets/label",
    "antie/widgets/verticallist",
    "antie/widgets/carousel",
    "antie/datasource",
    "app/appui/formatters/homeformatter",
    "app/appui/datasources/simplefeed",
    'app/appui/globals',
    'logituit/libs/util',
    "app/appui/formatters/spotlightformatter",
  ], function (Component, Button, Label, VerticalList, Carousel, DataSource, HomeFormatter, SimpleFeed, Globals, Utils, SpotlightFormatter) {
  
    var self;
    // All components extend Component
    return Component.extend({
      init: function init() {
        self = this;
        self.simpleFeed = new SimpleFeed();
        self.globals = new Globals();
        self.utils = new Utils()
        console.log(self.globals.logger());
  
        // It is important to call the constructor of the superclass
        this.init.base.call(this, self.globals.HOME_COMPONENT);
  
        self.addEventListener('beforerender', function (evt) {
          self._onBeforeRender(evt);
          console.log("beforerender event" + evt);
        })
  
        self.addEventListener('aftershow', function appReady(evt) {
          console.log("aftershow event" + evt);
          self._onAfterShow(evt);
        })
  
      },
  
      _onBeforeRender: function (evt) {
        var verticalListMenu;
        // Create a vertical list and append the buttons to navigate within the list
        verticalListMenu = new VerticalList("mainMenuList");
        this.appendChildWidget(verticalListMenu);
        console.log('_onBeforeRender' + evt);
      },
      
      _onAfterShow: function appReady(evt) {
        // calls Application.ready() the first time the component is shown
        // the callback removes itself once it's fired to avoid multiple calls.
          self.getCurrentApplication().ready();
          self.removeEventListener('aftershow', appReady);
          self.carouselExampleSelected();
          console.log('_onAfterShow' + evt);
      },
  
      carouselExampleSelected() {
        self.utils.application.pushComponent(self.globals.HOME_CONTAINER, "app/appui/components/carouselcomponent", self._getCarouselConfig());
      },
  
      _getCarouselConfig: function () {
        return {
          description: "LEFT and RIGHT to navigate movies, SELECT/Enter to go back",
          dataSource: new DataSource(null, self.simpleFeed, 'loadData'),
          formatter: new HomeFormatter(),
          // orientation: Carousel.orientations.VERTICAL,
          orientation: Carousel.orientations.HORIZONTAL,
          carouselId: 'verticalCullingCarousel',
          animOptions: {
            skipAnim: false
          },
  
          carouselExampleSelected() {
              self.utils.application.pushComponent(self.globals.HOME_CONTAINER,
                  self.globals.COMPONENT_PATH.CAROUSEL_COMPONENT, self._getCarouselConfig());
          },
  
          _getCarouselConfig: function () {
              return {
                  description: "LEFT and RIGHT to navigate movies, SELECT/Enter to go back",
                  dataSource: new DataSource(null, self.simpleFeed, 'loadData'),
                  formatter: new SimpleFormatter(),
                  // orientation: Carousel.orientations.VERTICAL,
                  orientation: Carousel.orientations.HORIZONTAL,
                  carouselId: 'verticalCullingCarousel',
                  animOptions: {
                      skipAnim: false
                  },
                  alignment: {
                      normalisedAlignPoint: 0.5,
                      normalisedWidgetAlignPoint: 0.5
                  },
                  initialItem: 0,
                  type: "CULLING",
                  lengths: 650
              };
          }
      
  }

}

});
    });
  