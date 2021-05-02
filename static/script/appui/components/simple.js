define(
  "sampleapp/appui/components/simple",
  [
    "antie/widgets/component",
    "antie/widgets/button",
    "antie/widgets/label",
    "antie/widgets/verticallist",
    "antie/widgets/carousel",
    "antie/datasource",
    "antie/widgets/carousel/binder",
    "antie/widgets/horizontalcarousel",
    "sampleapp/appui/formatters/simpleformatter",
    "sampleapp/appui/datasources/simplefeed",
    // "sampleapp/appui/datasources/bollywoodFeed",
    // "sampleapp/appui/datasources/hollywoodFeed",
    "antie/widgets/carousel/keyhandlers/activateFirstHandler",
    'antie/widgets/list',
    'antie/events/keyevent',
    'antie/events/mediaevent',
    "antie/widgets/horizontallist"
  ],
  function (Component,Button,  Label, VerticalList, Carousel,  DataSource, Binder, HorizontalCarousel,  SimpleFormatter,  BollywoodFeed, HollywoodFeed, ActivateFirstHandler,List, KeyEvent,MediaEvent,HorizontalList)  {

    // All components extend Component
     return Component.extend({
      init: function init () {
        var self,  verticalListMenu;

        self = this;

        // It is important to call the constructor of the superclass
        init.base.call(this, "simplecomponent");

        // Get a reference to the current application and device objects
        this._application = this.getCurrentApplication();
        this._device = this._application.getDevice();

    this.addEventListener(
        "beforerender",
        function(ev) {
            self._onBeforeRender(ev);
            self._onKeyDown(ev)
            
        }
    );

    this.addEventListener("aftershow", function appReady(evt) {
      self.getCurrentApplication().ready();
      self.removeEventListener('aftershow', appReady);
    });
  
    
            this.addEventListener("beforehide", function (evt) {
              self._onBeforeHide(evt);
            });
    
            this.addEventListener("select", function(evt) {
              self.parentWidget.back();
            });
            this.addEventListener('keydown', function(e) {
              self._onKeyDown(e);
          });
          this.addEventListener("aftershow", function(evt) {
              var previouslyFocusedButton = evt.state;
              previouslyFocusedButton.focus();
      });
          
            
      },
        // // // Add the labels to the component
        // helloWorldLabel = new Label("helloWorldLabel", "Bufferzero");
        //  this.appendChildWidget(helloWorldLabel);

        //  welcomeLabel = new Label("welcomeLabel", "This is my first example on carausel");
        // // this.appendChildWidget(welcomeLabel);


        // =========================================================

        _onBeforeRender: function(ev) {

                
          // Create a horizontal list that contains buttons to control the video
          // var playerControlButtons = new VerticalList("playerButtons");
  
          // var play = new Button('play1');
          // play.appendChildWidget(new Label('PLAY'));
          // playerControlButtons.appendChildWidget(play);
          // // play.addEventListener('select', function(evt) {
          // //   self.getPlayer().resume();
          // // });
  
          // var play1 = new Button('play2');
          // play1.appendChildWidget(new Label('PLAY'));
          // playerControlButtons.appendChildWidget(play);
          // // play1.addEventListener('select', function(evt) {
          // //   self.getPlayer().resume();
          // // });
          // var play2 = new Button('play3');
          // play2.appendChildWidget(new Label('PLAY'));
          // playerControlButtons.appendChildWidget(play);
          // // play2.addEventListener('select', function(evt) {
          // //   self.getPlayer().resume();
          // // });
          // var play3 = new Button('play4');
          // play3.appendChildWidget(new Label('PLAY'));
          // playerControlButtons.appendChildWidget(play);
          // // play3.addEventListener('select', function(evt) {
          // //   self.getPlayer().resume();
          // // });
          // this.appendChildWidget(playerControlButtons);
  
          
          // Create a horizontal list that contains buttons to control the video
          var playerControlButtons1 = new VerticalList("playerButtons");
  
          var search = new Button('search');
          search.appendChildWidget(new Label('Search'));
          playerControlButtons1.appendChildWidget(search);
          
  
          var home = new Button('home');
          home.appendChildWidget(new Label('Home'));
          playerControlButtons1.appendChildWidget(home);
         
          var movies = new Button('movies');
          movies.appendChildWidget(new Label('Movies'));
          playerControlButtons1.appendChildWidget(movies);
          
          var music = new Button('music');
          music.appendChildWidget(new Label('Music'));
          playerControlButtons1.appendChildWidget(music);
         
          var profile = new Button('profile');
          profile.appendChildWidget(new Label('Profile'));
          playerControlButtons1.appendChildWidget(profile);
         

          var webseries = new Button('webseries');
          webseries.appendChildWidget(new Label('Webseries'));
          playerControlButtons1.appendChildWidget(webseries);
          
  
          var sports = new Button('sports');
          sports.appendChildWidget(new Label('Sports'));
          playerControlButtons1.appendChildWidget(sports);
          
          
          this.appendChildWidget(playerControlButtons1);
  
          var playerControlButtons1 = new HorizontalList("playerButtons2");

          //just try
           
           //create a new formatter and feed
         SimpleFormatter=new SimpleFormatter();
         bollywoodFeed=new BollywoodFeed();         
          hollywoodFeed=new HollywoodFeed();

//         //create a DataSource
           self._bollywoodDataSource=new DataSource(this, bollywoodFeed , "loadBollywood")
           self._hollywoodDataSource=new DataSource(this, hollywoodFeed , "loadHollywood")

//         //labels
          var bollywoodLabel=new Label("label1", "Bollywood Movies")
         var hollywoodLabel=new Label("label2", "Hollywood Movies")
        
//         //creating new horizontal carousel
          self._bollywoodCarousel=new HorizontalCarousel("bollywoodCarousel" )
          self._hollywoodCarousel=new HorizontalCarousel("hollywoodCarousel" )


          this._bollywoodCarousel.setDataSource(this._bollywoodCarousel);
          this._hollywoodCarousel.setDataSource(this.hollywoodCarousel);
  
//         //Binding the data

     var binderBollywood= new Binder(SimpleFormatter, self._bollywoodDataSource);
             binderBollywood.appendAllTo(self._bollywoodCarousel)

      var binderHollywood= new Binder(SimpleFormatter, self._hollywoodDataSource);         
        binderHollywood.appendAllTo(self._hollywoodCarousel)   

             verticalListMenu = new VerticalList("mainMenuList");           
               verticalListMenu.appendChildWidget(bollywoodLabel);
             verticalListMenu.appendChildWidget(self._bollywoodCarousel);
             verticalListMenu.appendChildWidget(hollywoodLabel);            
              verticalListMenu.appendChildWidget(self._hollywoodCarousel);

            self.appendChildWidget(verticalListMenu );

             // var horizCarouselHandler=new ActivateFirstHandler();
            // horizCarouselHandler.attach(self._bollywoodCarousel)
             // horizCarouselHandler.attach(self._hollywoodCarousel)


             this.addEventListener("beforerender", function (ev){

               this._carousel.setDataSource(self._dataSource)
           })
 
             this.addEventListener("aftershow", function  appReady(evt){

              self.getCurrentApplication().ready();
               self.removeEventListener('aftershow',appReady)
        
              },
  
        
             );       
        }

          });

    
      }
  );
