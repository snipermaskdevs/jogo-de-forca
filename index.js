const readline = require('readline');  // Importa o módulo readline para capturar entradas do usuário

const palavras = {
    'programacao': ['python', 'desenvolvimento', 'programacao', 'computador', 'algoritmo', 'inteligencia', 'javascript', 'html', 'css', 'java', 'php', 'ruby'],
    'comida': ['pizza', 'hamburguer', 'cachorro-quente', 'lasanha', 'macarrao', 'sushi', 'bife', 'salada', 'pao', 'bolo', 'doce', 'marmita'],
    'bebida': ['suco', 'agua', 'cafe', 'cha', 'refrigerante', 'cerveja', 'vinho', 'agua-de-coco', 'suco-de-limao', 'milkshake'],
    'animais': ['cachorro', 'gato', 'leao', 'elefante', 'tigre', 'girafa', 'zebra', 'lobo', 'coelho', 'urso', 'pinguim', 'cavalo', 'macaco', 'tartaruga', 'cervo', 'onca', 'pantera', 'hipopotamo', 'crocodilo', 'raposa', 'elefante-marinho', 'aguia', 'arara', 'pato', 'bicho-preguica'],
    'pais': ['brasil', 'canada', 'japao', 'franca', 'italia', 'alemanha', 'espanha', 'argentina', 'estados-unidos', 'mexico', 'india', 'china', 'australia', 'portugal'],
    'cores': ['vermelho', 'azul', 'verde', 'amarelo', 'preto', 'branco', 'laranja', 'roxo', 'rosa', 'cinza', 'marrom', 'bege'],
    'objetos': ['caneta', 'livro', 'computador', 'celular', 'televisao', 'cadeira', 'mesa', 'refrigerador', 'fogao', 'ventilador', 'relogio', 'camera', 'ferramenta', 'almofada'],
    'esportes': ['futebol', 'basketball', 'volei', 'tenis', 'natação', 'ciclismo', 'atletismo', 'boxe', 'karate', 'ping-pong', 'rugby', 'golfe'],
    'musica': ['violao', 'guitarra', 'bateria', 'piano', 'baixo', 'teclado', 'saxofone', 'flauta', 'trompete', 'cello', 'harpa', 'violino']
};

// Escolhe uma palavra aleatória de todas as categorias
const categoria = Object.values(palavras).flat(); // Junta todas as palavras em um único array
const palavra = categoria[Math.floor(Math.random() * categoria.length)];

let palavraOculta = Array(palavra.length).fill('_'); // Cria um array de underscores para a palavra oculta
let tentativas = 6; // Número de tentativas

// Configura o readline para capturar entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para exibir o boneco da forca
function exibirBoneco(tentativas) {
    switch (tentativas) {
        case 6:
            console.log(`
              ------
              |    |
                   |
                   |
                   |
                   |
            ---------
            `);
            break;
        case 5:
            console.log(`
              ------
              |    |
              O    |
                   |
                   |
                   |
            ---------
            `);
            break;
        case 4:
            console.log(`
              ------
              |    |
              O    |
              |    |
                   |
                   |
            ---------
            `);
            break;
        case 3:
            console.log(`
              ------
              |    |
              O    |
             /|    |
                   |
                   |
            ---------
            `);
            break;
        case 2:
            console.log(`
              ------
              |    |
              O    |
             /|\\   |
                   |
                   |
            ---------
            `);
            break;
        case 1:
            console.log(`
              ------
              |    |
              O    |
             /|\\   |
             /     |
                   |
            ---------
            `);
            break;
        case 0:
            console.log(`
              ------
              |    |
              O    |
             /|\\   |
             / \\   |
                   |
            ---------
            `);
            break;
    }
}

// Função para exibir a palavra oculta
function exibirPalavra() {
    console.log("Palavra: " + palavraOculta.join(' '));
}

// Função principal do jogo
function jogar() {
    rl.question('Digite uma letra: ', (letra) => {
        letra = letra.toLowerCase();
        
        if (letra.length !== 1 || !/^[a-zA-Z]$/.test(letra)) {
            console.log("Por favor, digite apenas uma letra.");
            jogar();  // Repete a solicitação de entrada
            return;
        }

        if (palavra.includes(letra)) {
            for (let i = 0; i < palavra.length; i++) {
                if (palavra[i] === letra) {
                    palavraOculta[i] = letra;
                }
            }
            console.log(`Boa! A letra '${letra}' está na palavra.`);
        } else {
            tentativas--;
            console.log(`Ops! A letra '${letra}' não está na palavra. Tentativas restantes: ${tentativas}`);
        }

        exibirBoneco(tentativas);
        exibirPalavra();

        if (!palavraOculta.includes('_')) {
            console.log("Parabéns! Você ganhou!");
            rl.close();  // Encerra o jogo
            return;
        }

        if (tentativas === 0) {
            console.log(`Você perdeu! A palavra era: ${palavra}`);
            rl.close();  // Encerra o jogo
            return;
        }

        jogar();  // Chama a função novamente para continuar o jogo
    });
}

// Inicia o jogo
console.log("Bem-vindo ao Jogo da Forca!");
exibirBoneco(tentativas);
exibirPalavra();
jogar();