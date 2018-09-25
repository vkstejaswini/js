let topchoices = ['pink', 'blue' , 'green' ,'white','yellow']
let i
for(i=0;i<topchoices.length;i++){
    console.log('My # '+(i+1)+' choice is '+topchoices[i])
}
for(i=0;i<topchoices.length;i++){
    let choicenum=i+1

    if(choicenum==1){
        var suffix='st'
        

    }
    else if(choicenum==2){
        suffix='nd'

    }
    else if(choicenum==3){
        suffix='rd'
    }
    else{
        suffix='th'

    }
    console.log('My '+choicenum+suffix+ ' choice is '+topchoices[i])

}