angular
  .module('pathfinderTemplater')
  .factory('Template', templateFactory);

templateFactory.$inject = ['API', '$resource'];
function templateFactory(API, $resource){
  return $resource(`${API}/templates/:id`, {id: '@_id'},
    { 'query':  {method: 'GET', url: `${API}/templates`, isArray: true},
      'get': {method: 'GET', url: `${API}/templates`, isArray: false},
      'delete': {method: 'DELETE', url: `${API}/templates/:id`},
      'update': {method: 'PUT', url:`${API}/templates/:id` }
    }
  );
}
