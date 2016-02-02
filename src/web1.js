$(document).ready(function(){
  var temp = [1,3,6,8,7,4,-3,2,-7,4];
  var min = temp[0];
  console.log(retmin());


  function retmin(){
    for(var i = 0; i<temp.length; i++){
      if( min < temp[i]){
        min = min;
      }else{
        min = temp[i];
      }
    }
    return min;
  }
});