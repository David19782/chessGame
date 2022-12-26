class Player{
    constructor (){
        this.paws[8] = [[1,0], [1,1], [1,2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7]];
        this.horses[2] = [];
        this.bishups[2] = [];
        this.top[2] = [];
        this.quenn = [];
        this.king = [];

    }
}

window.addEventListener("load", () => {
    console.log("Hello")
    const game = document.getElementsByClassName("game")[0];
    let table = []
    function genTable(){
        for(let i = 0; i < 8; i++){
            table[i] = [];
            for(let j = 0; j < 8; j++){
                table[i][j] = document.createElement("div");
                table[i][j].setAttribute("class", "block");
                if(i % 2 == j % 2){
                    table[i][j].setAttribute("class", "white");
                }else{
                    table[i][j].setAttribute("class", "black");
                }
                console.log(table[i][j]);
                game.appendChild(table[i][j]);
            }
        }
    }
    genTable();
    
})