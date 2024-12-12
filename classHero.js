let profile = {
    name: "Patolino",
    age: 347,
    race: "mago",
    
}

generateProfile(profile)

function generateProfile(profile){
    console.log(`Name: ${profile.name}`)
    console.log(`Age: ${profile.age}`)
    console.log(`Race: ${profile.race}`)
    console.log("----------------")

}

if (profile.race === "guerreiro") {
    console.log("Você é um guerreiro e atacará o Boss usando sua Espada!")
    
} 
	else if (profile.race === "mago") {
    console.log("Você é um mago e atacará o Boss usando sua Magia!")
    
}
	else if (profile.race === "monge") {
    console.log("Você é um monge e atacará o Boss usando sua Arte Marcial!")
    
}
	else if (profile.race === "ninja") {
    console.log("Você é um ninja e atacará o Boss usando sua Shuriken!")
    
}



class hero {
    constructor(guerreiro, mago, monge, ninja){
        this.guerreiro = guerreiro
        this.mago = mago
        this.monge = monge
        this.ninja = ninja
    }
    atacar(raceChosen) {
        var equipment = ""
       	switch(raceChosen) {
        	case "guerreiro":
        	equipment = "Espada"
        	break
        
        	case "mago":
        	equipment = "Magia"
        	break
        
        	case "monge":
        	equipment = "Artes Maciais"
        	break
        
        	case "ninja":
        	equipment = "Shuriken"
        	break
       }
       
       if (profile.race === "guerreiro"){
        console.log(`O ${raceChosen} ${profile.name} atacou usando ${equipment}...`)
       	console.log("")
       } 
       	else if (profile.race === "mago"){
        console.log(`O ${raceChosen} ${profile.name} atacou usando ${equipment}...`)
       	console.log("")
       }
       	else if (profile.race === "monge"){
        console.log(`O ${raceChosen} ${profile.name} atacou usando ${equipment}...`)
       	console.log("")
       }
       	else if (profile.race === "ninja"){
        console.log(`O ${raceChosen} ${profile.name} atacou usando ${equipment}...`)
       	console.log("")
       }
       	else {
        console.log("Raça inválida, verifique as opções e tente novamente!")
       }
       
    }
    
}

let theHero = new hero("guerreiro", "mago", "monge", "ninja")
let raceChosen = profile.race 
theHero.atacar(raceChosen)

console.log("O Boss vai ao chão! O " + profile.race + " é implacável!!!")