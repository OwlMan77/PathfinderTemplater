angular
.module('pathfinderTemplater')
.controller('monstersNewCtrl', monstersNewCtrl);

monstersNewCtrl.$inject = ['Monster','$state'];
function monstersNewCtrl(Monster, $state){
  vm.create = () => {
    Monster
    .save(vm.monster)
    .then(console.log(`${vm.monster} was saved`));
  };

}
