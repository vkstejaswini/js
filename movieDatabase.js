var db=[
    {
        "title": "abc",
        "duration": 45,
        "stars":["alpha","beta","gamma"]
    },
    {
        "title":"xyz",
        "duration": 60,
        "stars":["aray","bray","cray"]
    }
]

let printMovie = function(movie){
    //console.log('started processing')
    for(var i=0;i<=db.length;i++){
        var starsare=' '
        data=db[i]
        console.log(data.title+' lasts for '+data.duration+' minutes.')
        for(var j=0;j<data.stars.length;j++){
            starsare=starsare+data.stars[j]
            if(j!=data.stars.length-1){
                starsare=starsare+','
            }
           

        }
        console.log('It\'s stars are : '+starsare)

        
    }

}
printMovie(db)