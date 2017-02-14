"use strict";

var app = angular.module("Corporation", [
    'ui.router', // https://ui-router.github.io/ng1/
    'ngProgress', // https://github.com/VictorBjelkholm/ngProgress
    'yaru22.md'  // https://github.com/yaru22/angular-md
]);

app.config(function ($stateProvider, // from ui.router
                     $urlRouterProvider, //
                     $locationProvider,
                     $sceDelegateProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
                url: '/',
                controller: 'HomeController',
                templateUrl: 'views/home.html'
            }
        )
        .state('smartContract', {
                url: '/smart-contract',
                controller: 'smartContractController',
                templateUrl: 'views/smartContract.html'
            }
        );

    // see:
    // http://stackoverflow.com/a/41273403/1697878
    // this resolves %2F instead of / in urls problem in AngularJS 1.6.1
    $locationProvider.hashPrefix('');

    $sceDelegateProvider.resourceUrlWhitelist([
            'self', // Allow same origin resource loads
            'https://raw.githubusercontent.com/CoinOffering/coinoffering.github.io/master/dapp/views/home.content.en.md'
        ]
    );

});

app.run([// '$rootScope',
        // '$window',
        // '$sce',
        '$rootScope',
        'ngProgressFactory',
        '$log',
        function (// $rootScope, //
            // $window, //
            // $sce, //
            $rootScope,
            ngProgressFactory,
            $log) {

            $log.info('app.js started');

            $rootScope.progressbar = ngProgressFactory.createInstance();
            $rootScope.progressbar.setHeight('5px'); // any valid CSS value Eg '10px', '1em' or '1%'
            $rootScope.progressbar.setColor('blue');

        } // end: app.run
    ]
);
