angular
  .module('pathfinderTemplater')
  .config(Router);

Router.$inject = ["$stateProvider", "$locationProvider", "$urlProvider"];
function Router($stateProvider, $locationProvider, $urlProvider){
  $locationProvider.html5Mode(true);
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('monstersIndex',{
    url: '/monsters',
    templateUrl: '/js/views/monsters/index.html',
    controller: 'MonstersIndexCtrl',
    controllerAs: 'MonsterIndex'
  });

  $urlRouterProvider.otherwise('/');
}
