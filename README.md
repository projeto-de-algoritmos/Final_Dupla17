# RPG MAP

**Número da Lista**: 17<br>
**Conteúdo da Disciplina**: Final<br>

## Alunos
|Matrícula | Aluno |
| -- | -- |
| 18/0124099  |  Juliana Pereira Valle Gonçalves |
| 18/0106805  |  Mateus Cunha Maia |

## Sobre 
Um caixeiro viajante chamado Nitovisk no universo de Innistrad deseja otimizar suas vendas e suas viagens. Para isso, criamos um software para auxiliá-lo. 
O software cadastra os produtos que ele deseja levar na viagem, sendo que ele existe um peso máximo que ele conseguirá carregar nessa viagem. Além disso, calcula a melhor rota para ele ir de um país a outra e retorna o lucro máximo que ele poderá obter na viagem.

## Apresentação
A apresentação do projeto pode ser vista no seguinte [link](https://youtu.be/ADjFOENr8HM).

## Screenshots

![Tela Inicial](./assets/home_page.jpeg)
</figcaption>
    Imagem 1: Tela Inicial
</figcaption>

![Tela de Resultado](./assets/results_1.jpeg)
</figcaption>
    Imagem 2: Tela de Resultado 1
</figcaption>

![Tela de Resultado](./assets/results_2.jpeg)
</figcaption>
    Imagem 3: Tela de Resultado 2
</figcaption>

## Instalação 
**Linguagem**: python e javascript<br>
**Framework**: react js<br>

Um dos pré requisitos para rodar o projeto é ter o docker e o docker-compose instalados. Outro pré-requisito é ter o python versão 3+.

Para subir o docker basta rodar o camando na pasta backend:
``` shell
$ docker-compose up --build
```

para subir o frontend basta executar os comandos dentro da pasta frontend:
``` shell
$ yarn
```
e
``` shell
$ yarn start
```

E acessar o endereço http://localhost:3000 no seu navegador.

De preferência, utilizar um navegador diferente do Google Chrome.

## Uso 
Escolha o país de origem e o país de destino e aperte o botão enviar. Feito isso, a api retornará o caminho mais otimizado entre os países selecionados.






