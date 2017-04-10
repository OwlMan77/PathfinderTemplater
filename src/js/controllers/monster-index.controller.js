angular
  .module('monster')
  .controller('MonstersIndexCtrl', MonstersIndexCtrl);

MonstersIndexCtrl.$index = ['API', 'Monster'];
function MonstersIndexCtrl(API, Monster){
    const vm  = this;
    vm.delete = monsterDelete;

    function monstersIndex(){
      vm.monsters = Monster.query();
    }

    function monstersDelete(monster){
      Monster
      .delete({ id: monster._id })
      .then(() => {
        monstersIndex();
      });
    }
    monstersIndex();
}
