const urls = {
    "white_king": "./images/white_king-removebg-preview.png",
    "black_king": "./images/black_king_2-removebg-preview.png",
    "black_queen": "./images/black_queen-removebg-preview.png",
    "white_queen": "./images/white_queen-removebg-preview.png",
    "white_bishup": "./images/white_bishup-removebg-preview.png",
    "black_bishup": "./images/black_bishup-removebg-preview.png",
    "white_horse": "./images/white_horse-removebg-preview.png",
    "black_horse": "./images/black_horse-removebg-preview.png",
    "white_top": "./images/white_top-removebg-preview.png",
    "black_top": "./images/black_top-removebg-preview.png",
    "white_paw": "./images/white_paw-removebg-preview.png",
    "black_paw": "./images/black_paw-removebg-preview.png"
}

function makeImg(type){
    let curr = documet.createElement("img");
    curr.setAttribute("class", type);
    curr.setAttribute("src", urls[type]);
    return curr;
}

class Paw {
    constructor(position, type, url){
        this.position = position;
        this.type = type;
        this.url = url;
    }
    move() {
        if(this.type == "white"){
            return [[position[0] - 1], [position[1] - 1]];
        }else{
            return [[position[0] + 1], [position[1] - 1]];   
        }
    }
}

class White_Player{
    constructor (){
        this.paws[8] = [
            new Paw([1, 0], "white", urls["white_paw"]), 
            new Paw([1, 1], "white", urls["white_paw"]),
            new Paw([1, 2], "white", urls["white_paw"]),
            new Paw([1, 3], "white", urls["white_paw"]),
            new Paw([1, 4], "white", urls["white_paw"]),
            new Paw([1, 5], "white", urls["white_paw"]),
            new Paw([1, 6], "white", urls["white_paw"]),
            new Paw([1, 7], "white", urls["white_paw"]),
            new Paw([1, 8], "white", urls["white_paw"])
        ];
        
    }

    display(){
        let m = [];
        for(let i = 0; i < this.paws.length; i++){
            m.push([[...this.paws[i].position], makeImg("white_paw")]);
        } 
        return m;
    }
}

/*class Black_Player{
    constructor (){
        this.paws[8] = [[1,0], [1,1], [1,2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7]];
        this.horses[2] = [[0, 1], [0, 6]];
        this.bishups[2] = [[0, 2], [0, 5]];
        this.top[2] = [[0, 0], [0, 7]];
        this.quenn = [[0,3]];
        this.king = [[0, 4]];
    }
}

*/



window.addEventListener("load", () => {
    const game = document.getElementsByClassName("game")[0];
    let table = [];
    function test() {
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
        let currImg7 = document.createElement("img");
        currImg7.setAttribute("src", "./images/white_horse-removebg-preview.png");
        currImg7.setAttribute("class", "white_horse");
        let currImg8 = document.createElement("img");
        currImg8.setAttribute("src", "./images/black_horse-removebg-preview.png");
        currImg8.setAttribute("class", "black_horse");
        let currImg9 = document.createElement("img");
        currImg9.setAttribute("src", "./images/white_top-removebg-preview.png");
        currImg9.setAttribute("class", "white_top");
        let currImg10 = document.createElement("img");
        currImg10.setAttribute("src", "./images/black_top-removebg-preview.png");
        currImg10.setAttribute("class", "black_top");
        let currImg11 = document.createElement("img");
        currImg11.setAttribute("src", "./images/white_paw-removebg-preview.png");
        currImg11.setAttribute("class", "white_paw");
        let currImg12 = document.createElement("img");
        currImg12.setAttribute("src", "./images/black_paw-removebg-preview.png");
        currImg12.setAttribute("class", "black_paw");
    
        table[4][5].appendChild(currImg);
        table[0][2].appendChild(currImg2);
        table[7][5].appendChild(currImg3);
        table[6][2].appendChild(currImg4);
        table[3][4].appendChild(currImg5);
        table[7][3].appendChild(currImg6);
        table[5][5].appendChild(currImg7);
        table[6][3].appendChild(currImg8);
        table[1][1].appendChild(currImg9);
        table[5][4].appendChild(currImg10);
        table[2][3].appendChild(currImg11);
        table[2][2].appendChild(currImg12);
    }

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
    

})
