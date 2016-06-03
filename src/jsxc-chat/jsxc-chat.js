


angular
  .module('jsxcChat', [])
  .directive('jsxcChat', function(){
    return{
      restrict: 'EA',
      link: link,
      template: template,
      scope: {
        config : '=',
        data: '='
      }
    }
  })

  function template(){
    return '<div>Test</div>'
  }

  function link(scope, element, attrs){

      var settings = {
        xmpp: scope.config
      };

      jsxc.init({
         logoutElement: $('#logout'),
         checkFlash: false,
         rosterAppend: 'body',
         root: ('../jsxc-build'),
         displayRosterMinimized: function() {
           console.log(scope.data)
            return true;
         },
         otr:{
           enable: false
         },
         loadSettings: function(username, password, cb) {
            cb(settings);
         },
         xmpp: {
            url: settings.xmpp.url,
            jid: scope.data.jid,
            sid: scope.data.sid,
            rid: scope.data.rid
        }
      });


  }
