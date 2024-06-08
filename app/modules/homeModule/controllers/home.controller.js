export class HomeController{
    constructor($scope,DataService,FetchService){
        $scope.message = "Welcome to the Home Page!";
        $scope.data = DataService.data;
        FetchService.fakeFetch('htss').then(data=>console.log(data))
    }
    
}
