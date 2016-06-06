angular
    .module('jsxcChat', [])
    .directive('jsxcChat', function ($document) {
        return {
            restrict: 'EA',
            link: function (scope, element, attrs) {
                var settings = {
                    xmpp: scope.config
                };

                jsxc.init({
                    logoutElement: $('#logout'),
                    checkFlash: false,
                    rosterAppend: 'body',
                    root: ('../jsxc-build'),
                    displayRosterMinimized: function () {
                        return true;
                    },
                    otr: {
                        enable: false
                    },

                    loadSettings: function (username, password, cb) {
                        cb(settings);
                    },
                    xmpp: {
                        url: settings.xmpp.url,
                        jid: scope.data.jid,
                        sid: scope.data.sid,
                        rid: scope.data.rid
                    }
                });


                $document.on('restoreCompleted.jsxc', function () {
                    if(scope.disableSettings){
                        disableSettings();
                    }

                    if(scope.hideOtrButton){
                        hideOtrButton();
                    }
                });


                $document.on('show.window.jsxc',function () {
                    if(scope.hideOtrButton){
                        hideOtrButton();
                    }
                })





            },
            template: template,
            scope: {
                config: '=',
                data: '=',
                disableSettings: '@',
                hideOtrButton:'@'
            }
        }
    })


function template() {
    return '<div>Test</div>'
}


function disableSettings() {
    var element = angular.element(document.querySelector("li.jsxc_settings"));
    element.remove();
}


function hideOtrButton() {
    var element = angular.element(document.querySelector(".jsxc_otr"));
    element.remove();
}