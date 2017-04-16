angular
.module('pfTemplater')
.controller('monstersNewCtrl', monstersNewCtrl);

monstersNewCtrl.$inject = ['Monster','$state'];
function monstersNewCtrl(Monster, $state){
  vm.create = () =>{
    Monster
    .save(vm.monster);
  }

}
