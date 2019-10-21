Foi usado boostrap para framework de estilo.
Foi usado redux como para o flow de dados baseado na arquitetura flux.

## Instruções 

### Para executar o projeto
 
#### `npm run start`

### Para executar os tests

#### `npm run test`

### Para executar o build

#### `npm run build`


### Estrutura do Projeto

`/public`

Neste diretório fica os arquivos que não são executados pelo React


`/src`

Neste diretório ficam todos os arquivos da aplicação que são executados pelo React

`src/assets`

Aqui ficam alguns arquivos estáticos de uso da aplicação por exemplo a logo

`src/components`

Aqui ficam os componentes de uso compartilhados da aplicação. São os componentes desvinculados ao core business da aplicação.

`src/pages`

Aqui ficam as páginas da aplicação, aonde por padrão adicionei um sufixo de 'Page' ao nome da pasta e do arquivo principal exportado. Dentro de cada página adotei o padrão de uso styled components para criar estilos nos componentes, sendo assim criei um arquivo styles.js exportando cada componente de estilo da tela. Criei também uma pasta components que serve para desmembrar alguns pequenos componentes contidos na tela para simplificar a visualização e manutenção.

`src/services`

Está pasta contém os arquivos responsaveis por prover a comunicação com os serviços externos e tratar regras de negócio de forma agnóstica a qualquer modelo de flow utilizado na aplicação.

`src/store`

Está pasta contém as actions, reducers e a store da aplicação. As actions e reducers estão organizados por contexto de negócio, por exemplo, existe uma action referente ao negócio de books, logo também foi criado um reducer para trabalhar com o retorno do estado do negócio de books.


Link para ver o projeto no ar: 