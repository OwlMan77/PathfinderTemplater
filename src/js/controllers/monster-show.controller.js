angular
  .module('pfTemplater')
  .controller('MonstersShowCtrl', MonstersShowCtrl);

MonstersShowCtrl.$index = ['Monster', '$stateParams'];
function MonstersShowCtrl(Monster, $stateParams){
  const vm = this;

  vm.monster = Monster.get($stateParams);
  vm.monstersDelete = () => {
    Monster
    .delete($stateParams).then(
      console.log('Deleted');
    );

    //go to home when monster is deleted
    // .$promise.then(data => {
    //
    // })
  }
}
