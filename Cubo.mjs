export default class Cubo {
    constructor(){
        
    }
    async teste(condi) {
    return new Promise((x,y)=>{
        if(condi){
            setTimeout(() => {
                x("oi");
            }, 3000);
        }else{
            y("Deu ruim mermão");
        }
    })
    }
}