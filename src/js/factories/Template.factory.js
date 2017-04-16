angular
  .module('monster')
  .factory('Template', templateFactory);

templateFactory.$inject = ['API', '$resource'];
function templateFactory(API, $resource){
  return $resource(`${API}/template/:id`, {id: '@_id'},
    {
      'get': { method: 'GET', url: `${API}/template/:id`, isArray: false},
      'delete': {method: 'DELETE', url: `${API}/monsters/:id`},
      'update': {method: 'PUT' }
    }
  );
}
