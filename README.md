Inteli - Instituto de Tecnologia e Liderança
Inteli - Instituto de Tecnologia e Liderança

InPuT
Nome do grupo
Integrantes:
Erik Batista da Silva
Gabrielle Dias Cartaxo
Gustavo Wagon Widman
Luiza Rodrigues Santana
Murilo de Souza Prianti Silva
Pedro Faria Santos

📝 Descrição
O IPT possui um problema relacionado aos seus relatórios, os quais são extremamente grandes e massantes. Com o objetivo de tentar resolver isso apresentamos o InPuT, uma aplicação web para uma visualização mais amigavel dos dados de relatórios de ferrovias do IPT.

📁 Estrutura de pastas

T08_G01_V(VERSÃO)_Web_application_document.pdf

Faça o mesmo para a documentação em formato DOCX.
|--> documentos
 | --> outros
 | T(NUMERO_DA_TURMA)_G(NUMERO_DO_GRUPO)_V(VERSÃO)_Web_application_document.pdf
 | T(NUMERO_DA_TURMA)_G(NUMERO_DO_GRUPO)_V(VERSÃO)_Web_application_document.docx
|--> imagens
|--> src
 |--> Backend
 |--> Frontend
| readme.md
| license.txt

Dentre os arquivos presentes na raiz do projeto, definem-se:

readme.md: arquivo que serve como guia e explicação geral sobre o projeto (o mesmo que você está lendo agora).

documentos: aqui estarão todos os documentos do projeto. Há também uma pasta denominada outros onde estão presentes aqueles documentos complementares ao web application document.

imagens: imagens relacionadas ao projeto como um todo (por exemplo imagens do sistema, do grupo, logotipos e afins).

src: nesta pasta encontra-se todo o código fonte do sistema (existem duas subpastas backend e frontend que contêm, respectivamente, o código do servidor e o código da página web).

💻 Configuração para desenvolvimento
Aqui encontram-se todas as instruções necessárias para a instalação de todos os programas, bibliotecas e ferramentas imprescindíveis para a configuração do ambiente de desenvolvimento.

Baixar e instalar o node.js: https://nodejs.org/pt-br/ (versão 16.15.1 LTS)
Clone o repositório em questão.
No modo administrador, abra o "prompt de comando" ou o "terminal" e, após, abra a pasta "src/backend" no diretório raiz do repositório clonado e digite o segundo comando:
npm install
Isso instalará todas as dependências definidas no arquivo package.json que são necessárias para rodar o projeto. Agora o projeto já está pronto para ser modificado. Caso ainda deseje iniciar a aplicação, digite o comando abaixo no terminal:

npm start
Agora você pode acessar a aplicação através do link http://localhost:3000/
O servidor está online.
Alunos inteli (remover essa observação do readme.md após leitura e execução):

1. Certifique-se que há um arquivo "package.json" na pasta backend do projeto.

2. Dentro deste arquivo, encontre a propriedade "scripts", e adicione um atributo de nome "start"
com o valor "node <CAMINHO_DO_ARQUIVO_DO_SERVIDOR>." Atenção: "<CAMINHO_DO_ARQUIVO_DO_SERVIDOR>" 
deve ser substituído pelo caminho para o arquivo principal da aplicação, utilizado para subir o
servidor. Por exemplo, se o arquivo utilizado para subir o servidor é "app.js", o atributo start
deve possuir o valor "node app.js".

3. No arquivo utilizado para subir a aplicação, defina a porta padrão de execução para "3031".
🗃 Histórico de lançamentos
0.2.1 - 25/01/2022
Atualização de documentos (código do módulo permanece inalterado).
0.2.0 - 15/01/2022
Remove setDefaultXYZ()
Adiciona init()
0.1.1 - 11/01/2022
Crash quando chama baz()
0.1.0 - 10/01/2022
O primeiro lançamento adequado
Renomeia foo() para bar()
0.0.1 - 01/01/2022
Trabalho em andamento

## 📋 Licença/License

<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><span property="dct:title">InPuT</span> by <span property="cc:attributionName">Erik Batista, Gabrielle Cartaxo, Gustavo Wagon, Luiza Santana, Murilo Prianti e Pedro Faria.</span> is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>

🎓 Referências
Aqui estão as referências usadas no projeto:

https://www.ipt.br/

