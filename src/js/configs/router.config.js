angular
  .module('pfTemplater')
  .config(Router);

Router.$inject = ["$stateProvider", "$locationProvider", "$urlProvider"];
function Router($stateProvider, $locationProvider, $urlProvider){
  $locationProvider.html5Mode(true);
  $stateProvider
  .state('monstersIndex',{
    url: '/monsters',
    templateUrl: '/js/views/monsters/index.html'
    // controller: 'monstersI'
  });
}
