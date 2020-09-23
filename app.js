var app = angular.module("portfolioSite", ["ngRoute"]); 

app.config(function ($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.controller("mainCtrl", [ "$scope", "$http", "$window", "$location", function($scope, $http, $window, $loacation) {

    $scope.submitted = false
    $scope.email = ""
    $scope.number = ""
    $scope.message = ""

    $scope.submitContact = function () {
        $http({
            method: 'POST', 
            url: 'https://api.mailjet.com/v3.1/send', 
            data: {
                "Messages":[
                    {
                        "From": {
                                "Email": "munirh@uci.edu",
                                "Name": "Humza"
                        },
                        "To": [
                            {
                                "Email": "munirh@uci.edu",
                                "Name": "Humza"
                            }
                        ],
                        "Subject": "Portfolio Site - Contact Request",
                        "TextPart": "Portfolio Site - Contact Request",
                        "HTMLPart": "<h1>Contact Request</h1><br><h2> Email:" + String($scope.email) + "</h2><br><h3>Message:</h3><p>" + String($scope.message) + "</p>"
                    } 
                ] 
            },
            headers: {
            'Authorization': 'Basic ',
            'Content-Type' : 'Application/JSON'
            }

        });

        $scope.submitted = true
    
    }
}]);