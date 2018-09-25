let assignGrade = function(numberScore){
    if (numberScore>92){
        return 'A';
    }
   else if ((numberScore>80)&&(numberScore<92)){
        return 'B';
    }
     else if ((numberScore>65)&&(numberScore<80)){
        return 'C';
    }
    else if ((numberScore>35)&&(numberScore<65)){
        return 'D';
    }
    else if (numberScore<35){
        return 'F';
    }
}
console.log('you got '+assignGrade(95)+' grade')
console.log('you got '+assignGrade(85)+' grade')
console.log('you got '+assignGrade(75)+' grade')
console.log('you got '+assignGrade(25)+' grade')
