export class HomeController{
    constructor($scope,DataService){
        $scope.message = "Welcome to the Home Page!";
        $scope.data = DataService.data;
    }
    
}
