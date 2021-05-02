define(
    "sampleapp/appui/components/menucomponent",
    [
      "antie/widgets/component",
      "antie/widgets/button",
      "antie/widgets/label",
      "antie/widgets/verticallist",
      "antie/widgets/carousel",
      "antie/datasource",
      "antie/widgets/carousel/binder",
      "antie/widgets/horizontalcarousel",
      "sampleapp/appui/formatters/menuformatter",
      // "sampleapp/appui/datasources/simplefeed",
      "sampleapp/appui/datasources/menufeed",
    //   "sampleapp/appui/datasources/bollywoodFeed",
    //   "sampleapp/appui/datasources/hollywoodFeed",
      "antie/widgets/carousel/keyhandlers/activateFirstHandler",
      'antie/widgets/list',
      'antie/events/keyevent',
      'antie/events/mediaevent',
      "antie/widgets/horizontallist"
    ],
    function (Component,Button,  Label, VerticalList, Carousel,  DataSource, Binder, HorizontalCarousel,  MenuFormatter, MenuFeed,   ActivateFirstHandler,List, KeyEvent,MediaEvent,HorizontalList) {
  
      // All components extend Component
      return Component.extend({
        init: function init () {
          var self,  verticalListMenu;
  
          self = this;
  
          // It is important to call the constructor of the superclass
          init.base.call(this, "simplecomponent");
          //===================================================================
  
         //create a new formatter and feed
          Menuformatter=new MenuFormatter();
          menuFeed= new MenuFeed();

        
          //create a DataSource
          self._menuDataSource=new DataSource(this, menuFeed , "loadMenu")
        


  
         
          
         

         
           this._verticalList = new VerticalList("verticalList", Menuformatter, self._menuDataSource)

          this._verticalList.setDataSource(this._menuDataSource)

          var binderMenu= new Binder(Menuformatter,this._menuDataSource)
          binderMenu.appendAllTo(this._verticalList)

          verticalListMenu=new VerticalList("mainmenuList")
          
          verticalListMenu.appendChildWidget(this._verticalList)
          this.appendChildWidget(verticalListMenu)
  
           
  
              this.addEventListener("beforerender", function (ev){
  
                this._carousel.setDataSource(self._dataSource)
              })
  
              this.addEventListener("aftershow", function  appReady(evt){
  
                self.getCurrentApplication().ready();
                self.removeEventListener('aftershow',appReady)
              });
              
            },
           
          }
      )
  
            //  ===================================================================== 
    }
  );