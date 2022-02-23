    require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
	  "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {
    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"8046207c1c214b5587230f5e5f8efc77" 
        }
      });
      
      var camera = new Camera({
        position: [
           -71.060217,// lon
          42.382655, // lat
          2500// elevation in meters
        ],
        tilt:45,
        heading: 180
      })
      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        camera: camera
    });
	
	var homeBtn = new Home({
        view: view
      });
      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");


    });
