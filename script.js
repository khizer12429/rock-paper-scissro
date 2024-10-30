const Usersc = document.getElementById("usersc");
const Compsc = document.getElementById("compsc");
const finalmsg = document.getElementById("last_msg");
const ComputerImg = document.getElementById("com_img");
const resetq = document.getElementById("resets");


const compchoice = () => {
    let arr = ['rock', 'paper', 'scissor'];
    let compresult = arr[Math.floor(Math.random() * 3)];
    // let imagePath = '';
    switch (compresult) {
        case 'rock':
            imagePath = 'images/rock.png'; 
            break;
        case 'paper':
            imagePath = 'images/paper.png'; 
            break;
        case 'scissor':
            imagePath = 'images/scissor.png';
            break;
    }
    ComputerImg.src = imagePath;
    // Computer.innerText = compresult;
    return compresult;
};

let usersc = 1;
let compsc = 1;

    const user_choice = (choice) => {
        const b = compchoice();
        if (choice === b) {
            finalmsg.innerText = "Tie";
            finalmsg.style.color = "black";
        } else if (
            (choice === 'rock' && b === 'paper') ||
            (choice === 'paper' && b === 'scissor') ||
            (choice === 'scissor' && b === 'rock')
        ) {
            finalmsg.innerText = "User wins";
            finalmsg.style.color = "yellow";
            Usersc.innerText = usersc;
            
            usersc++;
        } else {
            finalmsg.innerText = "Computer wins";
            finalmsg.style.color = "red";
            Compsc.innerText = compsc;
            compsc++;
        }

    };
    const resetForm = (reset) => {
        Usersc.innerText = 0;
        Compsc.innerText = 0;
        usersc = 1;
        compsc = 1;
        finalmsg.innerText = "Make your choice!";
        finalmsg.style.color = "black";
        finalmsg.style.fontWeight = "bold";
        Computer.innerText = "";
        ComputerImg.src = ''; // Clear the image
    };
  
      



