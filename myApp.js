var app=angular.module('myApp',[]);  
app.filter('capitalize', function() { 
    return function(text) {
        return text[0].toUpperCase()+text.slice(1);
    }
});  