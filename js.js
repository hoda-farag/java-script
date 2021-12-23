         //first question 
let year;
for( year=2014 ;year<=2050 ;year++)
{
  const d= new Date( year,0,1)
  if( d.getDay()===0){
      console.log ("the 1st january is being a sunday " +year);
  }
  //second question
  today=new Date();
var cmas=new Date(today.getFullYear(), 11, 25);
if (today.getMonth()==11 && today.getDate()>25) 
{
cmas.setFullYear(cmas.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
" days left until Christmas!");

        //thierd question 
        function testhundred(x) {
          return ((Math.abs(100 - x) <= 20) ||
           (Math.abs(400 - x) <= 20));
        }
        
        console.log(testhundred(30));
        console.log(testhundred(80));
        console.log(testhundred(50));
        console.log(testhundred(199));
        console.log(testhundred(380));
   }
   //forth question
    function max_of_three(x,y,z){
      if(x>y){
          max_val=x;
      }else
    {
      max_val=y;
    }
    if(z>max_val){
      max_val=z;
    }
    return max_val;

    }
    console.log( max_of_three(2,8,66));
    console.log( max_of_three(250,-6,66));
    console.log( max_of_three(285,8,366));

        //the fifth question
        function capital_letter(str) 
        {
            str = str.split(" ");
        
            for (var i = 0, x = str.length; i < x; i++) {
                str[i] = str[i][0].toUpperCase() + str[i].substr(1);
            }
        
            return str.join(" ");
        }
        
console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));

//sixth question
function without_first_end(str) {
  return str.substring(1, str.length - 1);
}
console.log(without_first_end('JavaScript'));
console.log(without_first_end('css'));
console.log(without_first_end('html'));

//seventh question
function rotate_elements_left(array)
{
    return [array[1], array[2], array[0]];
}
console.log(rotate_elements_left([3, 4, 5]));  
console.log(rotate_elements_left([0, -1, 2]));  
console.log(rotate_elements_left([7, 6, 5])); 

//eighth question
function first_last_same(nums)
   {
    var end = nums.length - 1;
    if (nums.length >= 1){
       return nums[0] == nums[end];
    } else {return false;}
}

console.log(first_last_same([10, 20, 30])); 
console.log(first_last_same([10, 20, 30, 10])); 
console.log(first_last_same([20, 20, 20])); 







