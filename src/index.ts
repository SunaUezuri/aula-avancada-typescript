import { GerenciadorVeiculos } from "./classes/GerenciadorVeiculos"
import { Carro } from "./interface/Carro"
import { Moto } from "./interface/Moto"

const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    portas: 4,

    acelerar: () => "O carro está acelerando!"
}

const minhaMoto: Moto = {
    marca: "Honda",
    modelo: "CB 500",
    ano: 2021,
    cilindradas: 500,

    acelerar: () => "A moto está acelerando!"
}

console.log(`Carro: ${meuCarro}`)
console.log(meuCarro.acelerar)
console.log(`Moto: ${minhaMoto}`)
console.log(minhaMoto.acelerar)

const gerenciadorCarro = new GerenciadorVeiculos<Carro>();
const gerenciadorMoto = new GerenciadorVeiculos<Moto>();

gerenciadorCarro.adicionar(meuCarro);
gerenciadorMoto.adicionar(minhaMoto);

//Listando os veículos em cada um dos gerenciadores
gerenciadorCarro.listarVeiculos();
gerenciadorMoto.listarVeiculos();

//Removendo os itens da lista
gerenciadorCarro.remover(meuCarro);
gerenciadorMoto.remover(minhaMoto);

//Verificando se a remoção foi feita
gerenciadorCarro.listarVeiculos();
gerenciadorMoto.listarVeiculos();