const boxes = document.querySelectorAll(".box");
const reset = document.querySelector(".reset")
const msgContainer = document.querySelector(".msg-container")
const msg = document.querySelector("#msg")


let turnO = true;

//winning patterns
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
// console.log("box was clicked")
if(turnO===true){
    box.innerText = "O";
    turnO = false;
}else{
    box.innerText = "X";
    turnO = true
}
box.disabled = true;

checkWinner()
    }) 
});

const disableBoxes = ()=>{
    for(let box of boxes ){
        box.disabled = true;
    }
}
const enableBoxes = ()=>{
     for(let box of boxes ){
        box.disabled = false;
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
disableBoxes();
    boxes.forEach(box => box.disabled = true);
    
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return;
            }
        }
    }
    const resetGame = () => {
    turnO = true;
    enableBoxes();

    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });

    msgContainer.classList.add("hide");
};

reset.addEventListener("click", resetGame);

};
