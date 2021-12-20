function calculate(){
 for(i=o; i<=500000000; i++){
 output = i;
 if(i%2000000 === 0){
 console.log(i + "iteration is over");
 }
 }
 alert("output is: " + output);
}