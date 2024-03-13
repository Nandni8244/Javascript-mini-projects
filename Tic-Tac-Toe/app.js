let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newbtn = document.querySelector("#newbtn");
let msg = document.querySelector(".winner");
let turno=true;

const winpatterns = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
   box.addEventListener("click", () =>{
    if(turno)
    {
        box.innerText = "O";
        turno = false;
    }
    else
    {
        box.innerText = "X";
        turno = true;  
    }
    box.disabled = true;
    
   checkwinner();
   })
});

const showwinner = (winner) =>{
    msg.innerText=`Congratulations..!! \n The Winner is ${winner}`;
    msg.classList.remove("hide");
    for (box of boxes){
        box.disabled=true;
    }
}


const resetgame =() =>{
    turno=true;
    for(box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
    msg.classList.add("hide")
}


const checkwinner = () =>{
    for( let pattern of winpatterns)
    {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !="")
        {
            if(pos1===pos2 && pos2===pos3)
            {
               showwinner(pos1);
            }
        
        }
    }
}

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);