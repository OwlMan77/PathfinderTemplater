angular
  .module('pfTemplater')
  .factory('Monster', monsterFactory);

monsterFactory.$inject = ['API', '$resource'];
function monsterFactory(API, $resource){
  return $resource(`${API}/monsters/:id`, {id: '@_id'},
  { 'query':  method: 'GET', url: `${API}/monsters`, isArray: true},
    'get': { method: 'GET', url: `${API}/monsters`, isArray: false},
    'delete': {method: 'DELETE', url: `${API}/monsters/:id`},
    'update': {method: 'PUT' url:`${API}/monsters/:id` }
  }
  );
}
