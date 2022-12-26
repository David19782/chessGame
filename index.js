/*class Paw {
    constructor(position, type){
        this.position = position;
        this.type = type;
    }
    move() {
        if(this.type == "white"){
            if(this.position){

            }
        }
    }
}

class Black_Player{
    constructor (){
        this.paws[8] = [[1,0], [1,1], [1,2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7]];
        this.horses[2] = [[0, 1], [0, 6]];
        this.bishups[2] = [[0, 2], [0, 5]];
        this.top[2] = [[0, 0], [0, 7]];
        this.quenn = [[0,3]];
        this.king = [[0, 4]];
    }
}

class White_Player{
    constructor (){
        this.paws[8] = [[1,0], [1,1], [1,2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7]];
        this.horses[2] = [[0, 1], [0, 6]];
        this.bishups[2] = [[0, 2], [0, 5]];
        this.top[2] = [[0, 0], [0, 7]];
        this.quenn = [[0,3]];
        this.king = [[0, 4]];
    }
}*/

window.addEventListener("load", () => {
    const game = document.getElementsByClassName("game")[0];
    let table = [];
    

    function genTable(){
        for(let i = 0; i < 8; i++){
            table[i] = [];
            for(let j = 0; j < 8; j++){
                table[i][j] = document.createElement("div");
                table[i][j].setAttribute("class", "block");
               // table[i][j].textContent = `${i}_${j}`;
                if(i % 2 == j % 2){
                    table[i][j].setAttribute("class", "white");
                }else{
                    table[i][j].setAttribute("class", "black");
                }
                game.appendChild(table[i][j]);
            }
        }
    }
    genTable();
    let currImg = document.createElement("img");
    currImg.setAttribute("src", "./images/black_king_2-removebg-preview.png");
    currImg.setAttribute("class", "black_king");
    console.log(table[0][0]);
    let currImg2 = document.createElement("img");
    currImg2.setAttribute("src", "./images/white_king-removebg-preview.png");
    let currImg3 = document.createElement("img");
    currImg3.setAttribute("src", "./images/white_queen-removebg-preview.png");
    currImg3.setAttribute("class", "white_queen");
    let currImg4 = document.createElement("img");
    currImg4.setAttribute("src", "./images/black_queen-removebg-preview.png");
    currImg4.setAttribute("class", "black_queen");
    let currImg5 = document.createElement("img");
    currImg5.setAttribute("src", "./images/white_bishup-removebg-preview.png");
    currImg5.setAttribute("class", "white_bishup");
    let currImg6 = document.createElement("img");
    currImg6.setAttribute("src", "./images/black_bishup-removebg-preview.png");
    currImg6.setAttribute("class", "black_bishup");

    table[4][5].appendChild(currImg);
    table[0][2].appendChild(currImg2);
    table[7][5].appendChild(currImg3);
    table[6][2].appendChild(currImg4);
    table[3][4].appendChild(currImg5);
    table[7][3].appendChild(currImg6);




})
