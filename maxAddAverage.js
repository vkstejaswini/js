/*java script program to find maximum of two numbers, average and sum of five numbers
*/
let a=[2,6,8,4,5]
sum=0
avg=0
max=0

for(i=0;i<5;i++){
sum=sum+a[i]
if(a[i]>max)
max=a[i]


}
avg=sum/5
console.log('sum of nubers is '+sum+' , avg of numbers is '+avg+' ,max of all numbers is '+max) 