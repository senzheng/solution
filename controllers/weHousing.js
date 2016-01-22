
angular.module("weHousing")
.controller("weHousingCtrl", function ($scope) {

     var data = {
        "apartments": [
        {
            "ID": "MNTC0001",
            "name": "The Pavilion on Berry",
            "image": "image-1.jpg",
            "price": 512,
            "popularity": 4,
            "description": "University of Minnesota, Twin Cities ",
            "place": "Minneapolis, MN"
        },
        {           
            "ID": "MNTC0002",
            "name": "Radius @15th",
            "image": "image-2.jpg",
            "price": 492,
            "popularity": 5,
            "description": "University of Minnesota, Twin Cities ",
            "place": "Minneapolis, MN"
        },
        {
            "ID": "MNTC0003",
            "name": "416 Lofts",
            "image": "image-3.jpg",
            "price": 460,
            "popularity": 3,
            "description": "University of Minnesota, Twin Cities ",
            "place": "Minneapolis, MN"
        },
        {
            "ID": "MNTC004",
            "name": "Edge on Oak",
            "image": "image-4.jpg",
            "price": 532,
            "popularity": 7,
            "description": "University of Minnesota, Twin Cities ",
            "place": "Minneapolis, MN"
        },
        {
            "ID": "MNTC0005",
            "name": "Sydney Hall",
            "image": "image-5.jpg",
            "price": 499,
            "popularity": 4,
            "description": "University of Minnesota, Twin Cities ",
            "place": "Minneapolis, MN"
        },
        {           
            "ID": "MNTC0006",
            "name": "Stadium View Apartment",
            "image": "image-6.jpg",
            "price": 450,
            "popularity": 5,
            "description": "University of Minnesota, Twin Cities ",
            "place": "Minneapolis, MN"
        },
        {
            "ID": "MNTC007",
            "name": "Venue at Dinkytown",
            "image": "image-7.jpg",
            "price": 560,
            "popularity": 3,
            "description": "University of Minnesota, Twin Cities ",
            "place": "Minneapolis, MN"
        },
        {
            "ID": "MNTC008",
            "name": "Station on Washington",
            "image": "image-8.jpg",
            "price": 499,
            "popularity": 7,
            "description": "University of Minnesota, Twin Cities ",
            "place": "Minneapolis, MN"
        },{
            "ID": "MNTC0009",
            "name": "GrandMarc Seven Corners",
            "image": "image-9.jpg",
            "price": 439,
            "popularity": 4,
            "description": "University of Minnesota, Twin Cities ",
            "place": "Minneapolis, MN"
        },
        {           
            "ID": "MNTC0010",
            "name": "University Commons",
            "image": "image-10.jpg",
            "price": 584,
            "popularity": 5,
            "description": "University of Minnesota, Twin Cities ",
            "place": "Minneapolis, MN"
        },
        {
            "ID": "MNTC0011",
            "name": "University Village",
            "image": "image-11.jpg",
            "price": 499,
            "popularity": 3,
            "description": "University of Minnesota, Twin Cities ",
            "place": "Minneapolis, MN"
        },
        {
            "ID": "MNTC012",
            "name": "Keeler Apartments",
            "image": "image-12.jpg",
            "price": 699,
            "popularity": 7,
            "description": "University of Minnesota, Twin Cities ",
            "place": "Minneapolis, MN"
        }
    ]
    };
    $scope.data = data;
    $scope.totalNumber = data.apartments.length;
    $scope.title = data.apartments[0].place;
    $scope.apartmentList = true;
    $scope.showDetail = function (apartment) {
           //$scope.data = apartment;
           $scope.apartmentList = false;
           $scope.apt = apartment;

        }
});
