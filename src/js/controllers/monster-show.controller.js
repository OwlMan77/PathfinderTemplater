angular
  .module('pathfinderTemplater')
  .controller('MonstersShowCtrl', MonstersShowCtrl);

MonstersShowCtrl.$index = ['Monster', '$stateParams', '$state'];
function MonstersShowCtrl(Monster, $stateParams, $state){
  const vm = this;

  vm.monster = Monster.get($stateParams);
  vm.monstersDelete = () => {
    Monster
    .delete($stateParams)
    .$promise.then(data => {
      $state.go('home');
    });
    //go to home when monster is deleted

  };
}
