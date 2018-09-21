let global = 10
if(true){
    var local= 5// if declared as let instead as var, throws an error when tried to print out of scope
    console.log('global value is:'+global);
    console.log('local value is:'+local)
    
}
console.log('global value is:'+global);
console.log('local value is:'+local)//throws an error if local is not declared as var.
