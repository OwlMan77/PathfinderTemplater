angular
  .module('monster')
  .factory('Monster', monsterFactory);

monsterFactory.$inject = ['API', '$resource'];
function monsterFactory(API, $resource){
  return $resource(`${API}/monsters/:id`, {id: '@_id'},
    {
      'get': { method: 'GET', url: `${API}/monsters/:id`, isArray: false},
      'delete': {method: 'DELETE', url: `${API}/monsters/:id`},
      'update': {method: 'PUT' }
    }
  );
}
