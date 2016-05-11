// test creation of an iife that returns some methods that can be used elsewhere
var changeText = (function($){
  var text = $('#h');
  return {
    get: function(){
      return text;
    },
    change: function(newText){
      $(text).text('Hello kids I cannot believe this might actually work' + newText);
    }
  };
}(jQuery));
