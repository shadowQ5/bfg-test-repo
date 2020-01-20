it("should set $scope.step to 2 if the passed paramter is 2 and validateStep returns true", function () {

                var $scope = $rootScope.$new()

                var controller = $controller("signUpController", { $scope: $scope });

                $scope.clientData = {

                    password: "",

                    email: "a@a.com",

                    firstName: "Pesh",

                    lastName: "How",

                    notUSA: false,

                    zipCode: "12345"

                };

                $scope.goToStep(2);

                expect($scope.step).toEqual(2);

            });

           

 

            it("should only pass step one with the provided data", function () {

                var $scope = $rootScope.$new()

                var controller = $controller("signUpController", { $scope: $scope });

   

                $scope.clientData = {

                    password: "",

                    email: "a@a.com",

                    firstName: "Pesh",

                    lastName: "Why",

                    notUSA: false,

                    zipCode:"12345"

                };

   

                $scope.validateStep(1);

                expect($scope.invalidFields.length).toEqual(0);

                $scope.validateStep(2);

                expect($scope.invalidFields.length).toBeGreaterThan(0);

            });