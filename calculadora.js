let resultado = saldoDeRankeadas(400, 300)

function saldoDeRankeadas(vit, def){
	return  vit - def

}

let desempenho = resultado
let rank = rankedLevel(desempenho)

function rankedLevel(desempenho){
	if (desempenho <= 10){
    	return "Ferro";
        }
        
    else if (desempenho >= 11 && desempenho <= 20){
    	return "Bronze";
        }
        
    else if (desempenho >= 21 && desempenho <= 50){
    	return "Prata";
        }
        
    else if (desempenho >= 51 && desempenho <= 80){
    	return "Ouro";
        }
        
    else if (desempenho >= 81 && desempenho <= 90){
    	return "Diamante";
        }
        
    else if (desempenho >= 91 && desempenho <= 100){
    	return "Lendário";
        }
        
    else {
    	return "Imortal";
        }

}
        
console.log("O Herói tem de saldo de " + resultado + " pontos e está no nível " + rank)  