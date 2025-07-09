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
function human ()
{
    let res=prompt( "paper rock or scissors ? ");
    return res ;
}
function game ()
{
    let Hscore=0;
    let Cscore=0;
    function round ()
    {
        let h=human();
        let c=computer();
        console.log("Human:", h);
        console.log("Computer:", c);

        if (h === c) {
            console.log("Égalité !");
        } else if (
            (h === "rock" && c === "scissors") ||
            (h === "paper" && c === "rock") ||
            (h === "scissors" && c === "paper")
        ) {
            console.log("Tu gagnes !");
            Hscore++;
        } else if (
            (h === "rock" && c === "paper") ||
            (h === "paper" && c === "scissors") ||
            (h === "scissors" && c === "rock")
        ) {
            console.log("Tu perds !");
            Cscore++;
        } else {
            console.log("Entrée invalide !");
        }

        console.log(`Score: Humain ${Hscore} - Ordinateur ${Cscore}`);
        
    }
    for (let i=0;i<5;i++)
    {
        round();
    }
    if (Cscore>Hscore)
    {
        console.log("COMPUTER WINS");
    }
    else
    {
        console.log("HUMAN WINS");
    }
}
game ();
