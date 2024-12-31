class Hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }

    atacar(){
        let attack;
        if(this.type === 'Guerreiro'){
            attack = "espada";
        } else if(this.type === 'Mago'){
            attack = "magia";
        }else if(this.type === 'Ninja'){
            attack = "shuriken";
        }else if(this.type === 'Monge'){
            attack = "artes marciais";
        }
        console.log(`${this.type} atacou usando ${attack}`);
    }
}

const heroi = new Hero('Kurama', 25, 'Ninja');
heroi.atacar();
