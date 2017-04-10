angular
  .module('monster')
  .factory('Monster');

Monster.inject['API', '$resource'];
function Monster(API, $resource){
  return $resource( `${API}/monsters/:id`, {id: '@_id'},
    {
      'get': { method: 'GET', url: `${API}/monsters/:id`, isArray: false},
      'delete': {method: 'DELETE', url: `${API}/users/:id`},
      'update': {method: 'PUT' }
    }
  )
}
}
