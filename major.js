/*
program to find if a person is minor or major using initialization and functions
*/
function abc(age,category){
    if((age>=21)&&(category=="male"))
        console.log('age>=21 male>>eligible to marry.you are Still minor')
    else if((age>=18)&&(category=="female"))
        console.log('age>=18 female>>eligible to marry. you are still minor')
    else
        console.log(age+" "+category+" "+'not eligible to marry.')

}
var efg=new abc(20,"male")
var efg1=new abc(22,"male")
var efg2=new abc(22,"female")
var efg3=new abc(17,"female")
