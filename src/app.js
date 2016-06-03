angular
    .module('app',["jsxcChat"])
    .controller('appController',appController);


function appController($scope) {
    var vm = this;

    vm.config = {
      url: 'https://jabber.freebirdairlines.com:5288/http-bind',
      domain: 'freebird.local',
      resource: 'cockpitweb',
      overwrite: true,
      onlogin: true
    };

    vm.data =  {
      "jid": "mahmut.duva@freebird.local",
      "sid": "9e8385ca119206c6f5c61638168e6226716accc4",
      "rid": 3963496211
    };

}
