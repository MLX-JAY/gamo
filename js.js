function computer ()
{
    let res=Math.floor(Math.random()*3);
    switch (res) 
    {
        case 0 : return "scissors" ; 
        case 1 : return "paper" ;
        default : return "rock" ;
    }
}
let play =document.querySelector("#play");
let menu=document.querySelector("#buttons");
 let score=document.querySelector(".score");
let current=document.querySelector(".current");
let end=document.querySelector(".end");
let eco ;
let Hscore;
let Cscore;
let human;
play.addEventListener("click",function()
    {
        Hscore=0;
        Cscore=0;
        eco=0;
        current.textContent="";
        end.textContent="";
        score.textContent="";
    });

    function round (human)
    {
        let h=human;
        let c=computer();

        if (h === c) {
        current.textContent="Égalité !";
        } else if (
            (h === "rock" && c === "scissors") ||
            (h === "paper" && c === "rock") ||
            (h === "scissors" && c === "paper")
        ) {
            current.textContent="Tu gagnes !";
            Hscore++;
        } else if (
            (h === "rock" && c === "paper") ||
            (h === "paper" && c === "scissors") ||
            (h === "scissors" && c === "rock")
        ) {
            current.textContent="Tu perds !";
            Cscore++;
        } else {
            console.log("Entrée invalide !");
        }

        score.textContent=`Score: Humain ${Hscore} - Ordinateur ${Cscore}`;
        
    }
    menu.addEventListener("click",function(e)
        {
            if (Hscore === undefined || Cscore === undefined || eco === undefined) return;
            let res=e.target.id;
            if (eco<5)
            {
                round (res);
                eco++;
            }
            else
            {
                if (Hscore>=Cscore)
                {
                    end.textContent="YOU WIN";
                }
                else
                {
                    end.textContent="COMPUTER WINS";
                }
                return;
            }

            });
    
