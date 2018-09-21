console.log("started process");
var month=[
{
    birthmonth : "January" ,
    description : "People born in January are born to be leaders. You are independent and analytical as well as clever and creative which is the perfect combination. You stand out from the crowd and with an obvious charisma people are always happy to follow you. It is normal for you to follow a more traditional life than others.You are resistant to illnesses but prone to colds. You are cautious and good with money because you always think twice before spending. ",
    image : "january.png "
},
{
    birthmonth : "February" ,
    description : "Relationships are incredibly important to people born in February and one of your main characteristics is your empathy for others. Finding that special person is a lifelong goal for you and if you do not succeed, you can become depressed and negative. You have a caring heart and will make a great parent.These people are very goal orientated and are often described as ambitious and successful. You love your freedom and can often become rebellious if you find themselves restricted. Easily hurt, you have a very sensitive soul but can become angry easily, although you very rarely show it. ",
    image : "february.png "
},
{
    birthmonth : "March" ,
    description : "People born in March are often very lucky people. Often in the right place at the right time you have the potential to make a lot of money, but can also lose it quickly. You are prone to addiction and vices. Relationships do not always suit you as you are prone to being unfaithful but when you fall in love it is of the very deep kind.You are often said to live in the clouds as you love peace and tranquility. Often dreaming and fantasizing, you love to travel and serve others. You also love to be paid attention so often make quick decisions when choosing partners. On the negative side, you are known to be easily angered and quite revengeful. ",
    image : "march.png "
},
{
    birthmonth : "April" ,
    description : "Ambitious and charismatic, people born in April and meant to be leaders. You are stubborn, bossy, smart and creative which is a good combination and means you are always surrounded by friends and lovers. You do have to be careful not to be too bossy or you can push people away but nothing will stop you from achieving your goals.You make the best friend as you are always generous, caring and loving but because you can be hasty, you often feel regret. You are fearless and brave as well as excellent problem solvers so people often come to you for advice. ",
    image : "april.png "
},
{
    birthmonth : "May" ,
    description : "Ruled by your need for self-expression. People born in May are often talented musicians, actors, writers or creatives. You have a great amount of respect for your friends, the authorities and institutions such as the sanctity of marriage. Because you spend a lot of time socializing, you sometimes need to take some time out and spend a bit of time alone in nature.With an amazing imagination, you often develop a love of travelling and feel trapped if you stay in one place for two long. You fall in love easily and feel deeply but are easily angered when you feel you have been wronged. ",
    image : " may.png"
},
{
    birthmonth : "June" ,
    description : "People born in this month are fantastic lovers. You are very sensual and romantic but can be jealous, sometimes getting too attached to the past and forgetting to live in the moment. You are kind hearted but can't resist a bit of gossip.Often indecisive, you do not always show emotion and rarely confide in others. You can be easily bored as well as easily hurt which can be a dangerous combination. While you love to do new things, you often postpone them due to uncertainty. ",
    image : "june.png "
},
{
    birthmonth : "July" ,
    description : " Caring, sympathetic and sincere, people born in July are very candid and well loved by those close to them. You have the potential to be geniuses but are also sensitive which means you are prone to depression which leads to cynical and sarcastic behaviour. You are often referred to as loners but when you make a friend, it is for life.You are sensitive and easily hurt. While it takes a long time for you to recover after being hurt, you are not revengeful and often forgive quiet easily. This does not mean you have forgotten though and find it hard to fully trust people.",
    image : " july.png"
},
{
    birthmonth : "August" ,
    description : "People born in August are always described as loving. You care deeply about those around you and value relationships and marriage above all else. You tend to see the good in everyone which can be to your detriment. You learn new things easily and inspire others with your infectious enthusiasm.You possess all of the qualities of a leader and are successful in this position because of your quick thinking and independent thought. Often talented musicians and artist. With this fiery temperament, you can also be easily angered and often feel jealousy strongly. ",
    image : " august.png"
},
{
    birthmonth : "September" ,
    description : "People born in this month thrive in an organized environment. You are intelligent and often very spiritual. Your biggest weakness is that you are prone to become depressed so if you want to succeed, you have to try and not be so hard on yourself.You are very picky when it comes to relationships but when you find they . right one, you are incredibly loyal and generous. You have to try and be less secretive in order to let more people into your life. Incredibly smart, you have a good memories and enjoy collecting information. ",
    image : " september.png"
},
{
    birthmonth : "October" ,
    description : "You lucky fish! People born in October almost always get their way. All they have to do is think about what they desire and it often will happen. While they can be a bit revengeful and argumentative, if they manage to fight these inner demons they will succeed beyond their wildest dreams, often becoming very popular leaders.Friends are the centre of your universe. Not only do you value the relationships, you also love to bethe centre of attention, chat and meet new people. Often beautiful and sexy but prone to loosing confidence easily. Be careful not to get angry, jealus and hurt too easily but indulge your passion for traveling, the arts and literature. ",
    image : " october.png"
},
{
    birthmonth : "November" ,
    description : " November babies are positive and determined. You always strive to succeed and dream of a secure future. Money issues sometimes stress you out but because you are hardworking you will always come out on top. Remember to stay positive.You have lots of great ideas and are determined to succeed in life. You can be secretive so prefer to be alone and feel insecure in relationships. Be careful not to let your anger run away with you.",
    image : " november.png"
},
{
    birthmonth : "December" ,
    description : " Often the belle of the ball, you have a busy social calendar and love to keep busy with friends and family. This can lead to you ignoring your responsibilities. You are very lucky and wealth and love finds you easily. You are very practical and enjoy and stable lifestyle.You love to be loved and to be the centre of attention but you are not egotistical and never pretend to be something you are not. You can be impatient and make hasty decisions because you hate restrictions. Ambitious and hardworking, your future is always going to be bright.",
    image : " december.png"
}
]
function sign(){
    console.log("working")
    var userinput= document.getElementById("your-month").value.toLowerCase()

    var month=document.getElementById("birthmonth")
    var description=document.getElementById("description")
    var image=document.getElementById("image")
    for (let i = 0; i < month.length; i++) {
       if(userinput==month[i].birthmonth){
           month.innerHTML=month[i].birthmonth
           description.innerHTML= month[i].description
           image.innerHTML=month[i].image
            return

       }
       else{
        month.innerHTML="oops! That's not a sign. Try again"
        description.innerHTML= " "
        image.src="http://courtneysgamecoderocks.com/ZodiacProject/img/wrong.png"
        

       }
        
    }
}

