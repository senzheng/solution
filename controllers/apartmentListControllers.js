
angular.module("weHousing")
    .constant("apartmentListActiveClass", "active")
    .constant("apartmentListPageCount", 5) // 5 apartments per page
    .controller("apartmentListCtrl", function ($scope, $filter,
        apartmentListActiveClass, apartmentListPageCount) {
        //can be filtered by pace , didnot implement
        var selectedPlace = null;
   
        $scope.selectedPage = 1;
        $scope.pageSize = apartmentListPageCount;
        $scope.active1 = true;
        $scope.Sort = "-popularity";
        $scope.selectPage = function (newPage) {
            $scope.selectedPage = newPage;
        }

        $scope.placeFilterFn = function (apartment) {
            return selectedPlace== null ||
                apartment.place == selectedPlace;
        }

        
       $scope.getPageClass = function (page) {
            return $scope.selectedPage == page ? apartmentListActiveClass : "";
        }
        //Popularity descdening 
        $scope.SortPopularity = function () {
            $scope.Sort = "-popularity";
            $scope.active1 = true;
            $scope.active2 = false;
        }
        //price descdening 
        $scope.SortPrice = function () {
            $scope.Sort = "-price";
            $scope.active2 = true;
            $scope.active1 = false;

        }

        
        
});


