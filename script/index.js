document.addEventListener("DOMContentLoaded",function()
{
var arr=[
    {
        flag: "https://www.jetpunk.com/img/user-img/66/668268833d-450.webp",
        correctName:"Canada",
        choices:["France","Angola","Canada", "Albania" ]
    },
    {
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/250px-Flag_of_Denmark.svg.png",
        correctName:"Denmark",
        choices:["Dominica","Cuba","Chad ","Denmark"]
    },
    {
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/250px-Flag_of_Egypt.svg.png",
        correctName:"Egypt",
        choices:["Egypt","Latvia ","Liberia  ","Jordan"]
    },
    {
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/250px-Flag_of_Maldives.svg.png",
        correctName:"Maldives",
        choices:[" Mali","Maldives ","Myanmar ","Montenegro"]
    },
    {
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/250px-Flag_of_Indonesia.svg.png",
        correctName:"Indonesia",
        choices:["Malaysia","Lesotho ","Indonesia ","Lebanon"] 
    },
     {
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/250px-Flag_of_India.svg.png", 
    correctName: "India",
    choices: ["India", "Pakistan", "Sri Lanka", "Nepal"]
  },
  {
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/250px-Flag_of_Germany.svg.png",
    correctName: "Germany",
    choices: ["Germany", "Belgium", "Austria", "Sweden"]
  },
  {
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/250px-Flag_of_the_United_States.svg.png",
    correctName: "United States",
    choices: ["Canada", "United States", "UK", "New Zealand"]
  },
  {
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/250px-Bandera_de_Espa%C3%B1a.svg.png", 
    correctName: "Spain",
    choices: ["Spain", "Mexico", "Portugal", "Italy"]
  },
  {
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/250px-Flag_of_Saudi_Arabia.svg.png",
    correctName: "Saudi Arabia",
    choices: ["Iraq", "Iran", "Saudi Arabia", "UAE"]
  },
    {
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/250px-Flag_of_Italy.svg.png",
    correctName: "Italy",
    choices: ["Spain", "Italy", "France", "Greece"]
  },
  {
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png",
    correctName: "Russia",
    choices: ["Ukraine", "Russia", "Poland", "Belarus"]
  },
  {
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/60px-Flag_of_the_People%27s_Republic_of_China.svg.png",
    correctName: "China",
    choices: ["Japan", "South Korea", "China", "Thailand"]
  },
  {
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/250px-Flag_of_Mexico.svg.png",
    correctName: "Mexico",
    choices: ["Mexico", "Spain", "Colombia", "Cuba"]
  },
  {
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/250px-Flag_of_South_Africa.svg.png",
    correctName: "South Africa",
    choices: ["South Africa", "Kenya", "Ghana", "Nigeria"]
  },
  {
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/250px-Flag_of_South_Korea.svg.png",
    correctName: "South Korea",
    choices: ["South Korea", "North Korea", "China", "Japan"]
  },
  {
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/250px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
    correctName: "United Kingdom",
    choices: ["United Kingdom", "USA", "Australia", "Canada"]
  },
  {
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/250px-Flag_of_Sudan.svg.png",
    correctName: "Sweden",
    choices: ["Sweden", "Norway", "Finland", "Denmark"]
  },
  {
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/250px-Flag_of_Turkey.svg.png",
    correctName: "Turkey",
    choices: ["Turkey", "Tunisia", "Iran", "Greece"]
  },
  {
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/250px-Flag_of_Austria.svg.png",
    correctName: "Australia",
    choices: ["New Zealand", "United Kingdom", "Australia", "USA"]
  }


]
var index=0 //start with flag //
var score=0
var Wrongchoice=0 //number of wrong choices //
var maxWrong=3 //number of wrong attempts//
var choicesCountainer=document.querySelector(".choices")
var img =document.querySelector(".flag"); //access img//
var choices =document.querySelectorAll(".choice");//access choices//
var next=document.querySelector(".next")
var quizContainer=document.querySelector(".Quiz_container")
function firstPlay(){
    var element=arr[index]
    img.src=element.flag
    for (let index = 0; index < choices.length; index++) {
        const e = choices[index];
        e.textContent=element.choices[index]
        e.style.backgroundColor="grey"
        e.removeEventListener("click",function(){},true)
        e.addEventListener("click",function(){
            e.style.backgroundColor="blue"
            if (e.textContent===element.correctName) {
                e.style.backgroundColor="green"
                score=score+1
            
            }else{
                e.style.backgroundColor="red"
                Wrongchoice=Wrongchoice+1
            }
        })
    }
    
}
firstPlay()
next.addEventListener("click",function(){
    index=index+1
    if (index>arr.length-1) {
       quizContainer.innerHTML=""
        quizContainer.innerHTML=`<div class="result_container">
    <h2>Quiz result</h2>
    <h1>${score}</h1>
    <div class="buttons">
    <button class="button">Replay</button>
    <button class="button">Exit</button>
    </div>
    </div>`
    }else{
        firstPlay()
    }
})

})
