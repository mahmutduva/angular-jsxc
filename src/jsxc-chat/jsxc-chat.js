


angular
  .module('jsxcChat', [])
  .directive('jsxcChat', function(){
    return{
      restrict: 'EA',
      replace: true,
      link: link,
      template: template,
      scope: {}
    }
  })

  function template(){
    return '<div>Test</div>'
  }

  function link(){
    return
  }
