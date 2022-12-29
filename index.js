window.addEventListener("load", () => {
    const game = document.getElementsByClassName("game")[0];
    // make figure
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
        let curr = document.createElement("img");
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
        
        move(table) {
            let avMoves = [];
            let [i, j] = this.position;
            if(i == 0){
                this.becomeQueen();
            }
            if(this.type == "white"){
                if(table[i - 1][j] == undefined){
                    avMoves.push([i - 1, j]);
                    if(i == 6 && table[i - 2][j] == undefined){
                        avMoves.push([i - 2, j]);
                    }
                    
                }
                if(table[i - 1][j - 1] != undefined){
                    avMoves.push([i - 1, j - 1]);
                }
                if(table[i - 1][j - 1] != undefined){
                    avMoves.push([i - 1, j + 1]);
                }
                
            }else{
                if(table[i + 1][j] == undefined){
                    avMoves.push([i + 1, j]);
                    if(i == 1 && table[i + 2][j] == undefined){
                        avMoves.push([i + 2, j]);
                    }
                    
                }
                if(table[i + 1][j - 1] != undefined){
                    avMoves.push([i + 1, j - 1]);
                }
                if(table[i + 1][j - 1] != undefined){
                    avMoves.push([i + 1, j + 1]);
                }
            }
            return avMoves;
            
        }

        becomeQueen(){

        }
    }

    class King{
        constructor(position, type, url) {
            this.position = position;
            this.type = type;
            this.url = url;
        }
    }

    class Queen{
        constructor(position, type, url) {
            this.position = position;
            this.type = type;
            this.url = url;
        }
    }
    class Horse{
        constructor(position, type, url) {
            this.position = position;
            this.type = type;
            this.url = url;
        }
    }
    class Bishup{
        constructor(position, type, url) {
            this.position = position;
            this.type = type;
            this.url = url;
        }
    }
    class Top{
        constructor(position, type, url) {
            this.position = position;
            this.type = type;
            this.url = url;
        }
    }
    
    // make players

    class Black_Player{
        constructor() {
            this.paws = [
                new Paw([1, 0], "black", urls["black_paw"]),
                new Paw([1, 1], "black", urls["black_paw"]), 
                new Paw([1, 2], "black", urls["black_paw"]), 
                new Paw([1, 3], "black", urls["black_paw"]), 
                new Paw([1, 4], "black", urls["black_paw"]), 
                new Paw([1, 5], "black", urls["black_paw"]), 
                new Paw([1, 6], "black", urls["black_paw"]), 
                new Paw([1, 7], "black", urls["black_paw"]), 
            ];
            this.king = new King([0, 4], "black", urls["black_king"]);
            this.queen = new Queen([0, 3], "black", urls["black_king"]);
            this.bishups = [
                new Bishup([0, 2], "black", urls["black_bishup"]),
                new Bishup([0, 5], "black", urls["black_bishup"])
            ]
            this.horses = [
                new Horse([0, 1], "black", urls["black_horse"]),
                new Horse([0, 6], "black", urls["black_horse"])
            ]
            this.tops = [
                new Top([0, 0], "black", urls["black_top"]),
                new Top([0, 7], "black", urls["black_top"])
            ]
        }

        display() {
            let m = [];
            for(let i = 0; i < this.paws.length; i++){
                m.push([[...this.paws[i].position], makeImg("black_paw")]);
            }
            if(this.king)m.push([[...this.king.position], makeImg("black_king")]);
            if(this.queen)m.push([[...this.queen.position], makeImg("black_queen")]);
            for(let i = 0; i < this.bishups.length; i++){
                m.push([[...this.bishups[i].position], makeImg("black_bishup")]);
            }
            for(let i = 0; i < this.horses.length; i++){
                m.push([[...this.horses[i].position], makeImg("black_horse")]);
            }
            for(let i = 0; i < this.tops.length; i++){
                m.push([[...this.tops[i].position], makeImg("black_top")]);
            }
            return m;
        }

    }

    class White_Player{
        constructor (){
            this.paws = [
                new Paw([6, 0], "white", urls["white_paw"]), 
                new Paw([6, 1], "white", urls["white_paw"]),
                new Paw([6, 2], "white", urls["white_paw"]),
                new Paw([6, 3], "white", urls["white_paw"]),
                new Paw([6, 4], "white", urls["white_paw"]),
                new Paw([6, 5], "white", urls["white_paw"]),
                new Paw([6, 6], "white", urls["white_paw"]),
                new Paw([6, 7], "white", urls["white_paw"])
            ];
            this.king = new King([7, 4], "white", urls["white_king"]);
            this.queen = new Queen([7, 3], "white", urls["white_queen"]);
            this.bishups = [
                new Bishup([7, 5], "white", urls["white_bishup"]),
                new Bishup([7, 2], "white", urls["white_bishup"])
            ]
            this.horses = [
                new Horse([7, 1], "white", urls["white_horse"]),
                new Horse([7, 6], "white", urls["white_horse"])
            ]
            this.tops = [
                new Top([7, 0], "white", urls["white_top"]),
                new Top([7, 7], "white", urls["white_top"])
            ]
        }
    
        display(){
            let m = [];
            for(let i = 0; i < this.paws.length; i++){
                m.push([[...this.paws[i].position], makeImg("white_paw")]);
            }
            if(this.king)m.push([[...this.king.position], makeImg("white_king")]) 
            if(this.queen)m.push([[...this.queen.position], makeImg("white_queen")]);
            for(let i = 0; i < this.bishups.length; i++){
                m.push([[...this.bishups[i].position], makeImg("white_bishup")])
            }
            for(let i = 0; i < this.horses.length; i++){
                m.push([[...this.horses[i].position], makeImg("white_horse")]);
            }
            for(let i = 0; i < this.tops.length; i++){
                m.push([[...this.tops[i].position], makeImg("white_top")]);
            }
            return m;
        }
    }

    // and gen start table

    let table = [];
    let pole = [];
    for(let i = 0; i < 8; i++)pole[i] = [];
    for(let i = 0; i < 8; i++){
        if(i == 1){
            for(let j = 0; j < 8; j++){

                pole[i][j] = new Paw([i, j], "black", urls["black_paw"]);
            }
            for(let j = 0; j < 8; j++){
                pole[6][j] = new Paw([6, j], "white", urls["white_paw"]);
            }
        }
        if(i == 0){
            for(let j = 0; j < 8; j++){
                if(j == 0 || j == 7){
                    pole[i][j] = new Top([i, j], "black", urls["black_top"]);
                }
                if(j == 1 || j == 6){
                    pole[i][j] = new Bishup([i, j], "black", urls["black_bishup"]);
                }
                if(j == 2 || j == 5){
                    pole[i][j] = new Horse([i, j], "black", urls["black_horse"]);
                }
                if(j == 3){
                    pole[i][j] = new King([i, j], "black", urls["black_king"]);
                }            
                if(j == 4){
                    pole[i][j] = new Queen([i, j], "black", urls["black_queen"]);
                }
            }
        }
        if(i == 7){
            for(let j = 0; j < 8; j++){
                if(j == 0 || j == 7){
                    pole[i][j] = new Top([i, j], "white", urls["white_top"]);
                }
                if(j == 1 || j == 6){
                    pole[i][j] = new Bishup([i, j], "white", urls["white_bishup"]);
                }
                if(j == 2 || j == 5){
                    pole[i][j] = new Horse([i, j], "white", urls["white_horse"]);
                }
                if(j == 3){
                    pole[i][j] = new King([i, j], "white", urls["white_king"]);
                }            
                if(j == 4){
                    pole[i][j] = new Queen([i, j], "white", urls["white_queen"]);
                }
            }
        }
    }
    //console.log(pole)
    // make test

    
    function genTable(){
        for(let i = 0; i < 8; i++){
            table[i] = [];
            for(let j = 0; j < 8; j++){
                table[i][j] = document.createElement("div");
                table[i][j].setAttribute("class", "block");
            // table[i][j].textContent = `${i}_${j}`;
                table[i][j].setAttribute("id", `${i}_${j}`);
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
    function clearBoard(){
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                if(i % 2 == j % 2){
                    table[i][j].setAttribute("class", "white");
                }else{
                    table[i][j].setAttribute("class", "black");
                }
            }
        }
    }

    function moveFigure(position1, position2){
        let curr = table[position1[0]][position1[1]].children[0];
        let type = curr.className;
        let fig = type.split("_")[1];
        pole[position1[0]][position1[1]] = undefined;
        if(fig == "paw"){
            pole[position2[0]][position2[1]] = new Paw([...position2], type.split("_")[0], urls[type]);
        }else if(fig == "king"){
            pole[position2[0]][position2[1]] = new King([...position2], type.split("_")[0], urls[type]);
        }else if(fig == "queen"){
            pole[position2[0]][position2[1]] = new Queen([...position2], type.split("_")[0], urls[type]);
        }else if(fig == "bishup"){
            pole[position2[0]][position2[1]] = new Bishup([...position2], type.split("_")[0], urls[type]);
        }else if(fig == "horse"){
            pole[position2[0]][position2[1]] = new Horse([...position2], type.split("_")[0], urls[type]);
        }else if(fig == "Top"){
            pole[position2[0]][position2[1]] = new Top([...position2], type.split("_")[0], urls[type]);
        }
        
        table[position2[0]][position2[1]].appendChild(makeImg(type))
        table[position1[0]][position1[1]].children[0].remove();
    }
    let player1 = new White_Player();
    let player2 = new Black_Player();
    player1.display().forEach(el => {
        //console.log(el);
        table[el[0][0]][el[0][1]].appendChild(el[1]);
    })
    player2.display().forEach(el => {
        //console.log(el);
        table[el[0][0]][el[0][1]].appendChild(el[1]);
    })
    //test();
    
    // make events
    let selected = false;
    let obj = {
        currPosition: [],
        avMoves: []
    }
    let currMoves = [];
    document.getElementsByClassName("game")[0].addEventListener("click", (e) => {
        //console.log(e.target);
        if(e.target.className == "game")return;
        if(e.target.tagName == "IMG"){
           //   console.log(e.target.parentElement)
            curr = e.target.parentElement;
        }else{
            curr = e.target;
        }
        //console.log(curr.children)
        //console.log(curr.id)
        if(!selected && curr.children.length == 0)return;
        
        //get position of pressed square
        let position = curr.id.split("_").map(el => Number(el));
        console.log(position);
        console.log(pole[position[0]][position[1]]);
        
        if(selected){
            if(position[0] == obj.currPosition[0] && position[1] == obj.currPosition[1]){
                selected = false;
                clearBoard();
                return;
            }
            let m = false;
            for(let i = 0; i < obj.avMoves.length; i++){
                if(obj.avMoves[i][0] == position[0] && obj.avMoves[i][1] == position[1]){
                    console.log("Move figure");
                    m = true;
                    break;
                }
            }
            if(m){
                moveFigure(obj.currPosition, position);
                clearBoard();
                selected = false;
                obj = {};
                return;
            }
            console.log(obj)
            return;
        }


        if(pole[position[0]][position[1]] != undefined){
            currMoves = [...pole[position[0]][position[1]].move(pole)];
            obj.currPosition = [...position];
            obj.avMoves = [...currMoves];
            currMoves.forEach(e => {
                
                table[e[0]][e[1]].setAttribute("class", "green");
                
            })
            selected = true;
            
        }
        
        
    })
    

})
