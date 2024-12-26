import random

# Lista de palavras para o jogo (divididas por categorias)
palavras = {
    'programacao': ['python', 'desenvolvimento', 'programacao', 'computador', 'algoritmo', 'inteligencia', 'javascript', 'html', 'css', 'java', 'php', 'ruby'],
    'comida': ['pizza', 'hamburguer', 'cachorro-quente', 'lasanha', 'macarrao', 'sushi', 'bife', 'salada', 'pao', 'bolo', 'doce', 'marmita'],
    'bebida': ['suco', 'agua', 'cafe', 'cha', 'refrigerante', 'cerveja', 'vinho', 'agua-de-coco', 'suco-de-limao', 'milkshake'],
    'animais': ['cachorro', 'gato', 'leao', 'elefante', 'tigre', 'girafa', 'zebra', 'lobo', 'coelho', 'urso', 'pinguim', 'cavalo', 'macaco', 'tartaruga', 'cervo', 'onca', 'pantera', 'hipopotamo', 'crocodilo', 'raposa', 'elefante-marinho', 'aguia', 'arara', 'pato', 'cervo', 'bicho-preguica'],
    'pais': ['brasil', 'canada', 'japao', 'franca', 'italia', 'alemanha', 'espanha', 'argentina', 'estados-unidos', 'mexico', 'india', 'china', 'australia', 'portugal'],
    'cores': ['vermelho', 'azul', 'verde', 'amarelo', 'preto', 'branco', 'laranja', 'roxo', 'rosa', 'cinza', 'marrom', 'bege'],
    'objetos': ['caneta', 'livro', 'computador', 'celular', 'televisao', 'cadeira', 'mesa', 'refrigerador', 'fogao', 'ventilador', 'relogio', 'camera', 'ferramenta', 'almofada'],
    'esportes': ['futebol', 'basketball', 'volei', 'tenis', 'natação', 'ciclismo', 'atletismo', 'boxe', 'karate', 'ping-pong', 'rugby', 'golfe'],
    'musica': ['violao', 'guitarra', 'bateria', 'piano', 'baixo', 'teclado', 'saxofone', 'flauta', 'trompete', 'cello', 'harpa', 'violino'],
}

# Escolher uma palavra aleatória de qualquer categoria
categoria = random.choice(list(palavras.keys()))
palavra = random.choice(palavras[categoria])
palavra_oculta = ['_'] * len(palavra)  # Cria uma lista de underscores para a palavra oculta
tentativas = 6  # Número de tentativas restantes

# Função para mostrar o estado atual do jogo
def exibir_palavra():
    print("Palavra: " + " ".join(palavra_oculta))

# Função para exibir o boneco da forca
def exibir_boneco(tentativas):
    if tentativas == 6:
        print("""
         ------
         |    |
              |
              |
              |
              |
        ---------
        """)
    elif tentativas == 5:
        print("""
         ------
         |    |
         O    |
              |
              |
              |
        ---------
        """)
    elif tentativas == 4:
        print("""
         ------
         |    |
         O    |
         |    |
              |
              |
        ---------
        """)
    elif tentativas == 3:
        print("""
         ------
         |    |
         O    |
        /|    |
              |
              |
        ---------
        """)
    elif tentativas == 2:
        print("""
         ------
         |    |
         O    |
        /|\\   |
              |
              |
        ---------
        """)
    elif tentativas == 1:
        print("""
         ------
         |    |
         O    |
        /|\\   |
        /     |
              |
        ---------
        """)
    elif tentativas == 0:
        print("""
         ------
         |    |
         O    |
        /|\\   |
        / \\   |
              |
        ---------
        """)

# Função principal do jogo
def jogar():
    global tentativas
    while tentativas > 0:
        exibir_boneco(tentativas)
        exibir_palavra()
        letra = input("Digite uma letra: ").lower()

        if len(letra) != 1 or not letra.isalpha():
            print("Por favor, digite apenas uma letra.")
            continue

        if letra in palavra:
            for i in range(len(palavra)):
                if palavra[i] == letra:
                    palavra_oculta[i] = letra
            print(f"Boa! A letra '{letra}' está na palavra.")
        else:
            tentativas -= 1
            print(f"Ops! A letra '{letra}' não está na palavra. Tentativas restantes: {tentativas}")

        if '_' not in palavra_oculta:
            print("Parabéns! Você ganhou!")
            break
    else:
        print(f"Você perdeu! A palavra era: {palavra}")
        exibir_boneco(tentativas)

# Inicia o jogo
print("Bem-vindo ao Jogo da Forca!")
jogar()