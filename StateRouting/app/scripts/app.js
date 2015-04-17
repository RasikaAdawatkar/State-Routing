'use strict';

/**
 * @ngdoc overview
 * @name roombookingApp
 * @description
 * # roombookingApp
 *
 * Main module of the application.
 */

(function(){
    angular.module('stateRoutingApp', [
        'ngMessages',
        'ui.bootstrap',
        'ui.router'
       
    ]);


    angular.module('stateRoutingApp').config(function ($stateProvider, $urlRouterProvider) {
     
  
   /*$urlRouterProvider.when('/','/main')*/
      /*$urlRouterProvider.otherwise('/main')*/
      $urlRouterProvider.otherwise('/main')
      $stateProvider
      .state('main', {
            url: "/main",
            templateUrl: "views/main.html",
            controller:'MainCtrl'
        })
        .state('main.route1', {
            url: "/route1",
            templateUrl: "views/route1.html",
            controller:'route1Ctrl',
            onEnter: function()
            { console.log("entered route1") }
         
        })
          .state('main.route1.categories', {
              url: "/categories",
              templateUrl: "views/route1-categories.html",
              controller:'route1categoriesCtrl'
             
          })
          .state('main.route1.categories.fiction', {
              url: "/fiction/:id",
              templateUrl: "views/fiction.html"
            
          })
          .state('main.route1.categories.curriculum', {
              url: "/curriculum/:id",
              templateUrl: "views/curriculum.html",
              controller:'curriculumCtrl'
            
          })
          .state('main.route2', {
            url: "/route2",
            templateUrl: "views/route2.html",
            controller: 'route2Ctrl',
            onExit:function(){
              alert("we just left route 2")
            }
            
          })
          .state('main.route2.staff', {
            url: "/staff",
           views: {
            "staff-details": 
                         { 
                          templateUrl: "views/staff-details.html",
                          controller:"route2Ctrl"
                           },
            "staff-availability":
                         { 
                          templateUrl: "views/staff-availability.html" ,
                          controller:"chartCtrl"
                         }
      }
         
      
           
            
          })
          
        
        

    });

})();

