# NLW - DIA 2 - BACK-END

### Criando projeto
Dentro da pasta desejada:
- Iniciar o projeto: 
    - `yarn init -y`
- Projeto com Typescript: 
    - `yarn add typescript -D`;
    - `yarn tsc --init`
        - Mudar a linha "target": "es5" <- para -> "target": "es2017" no arquivo tsconfig.json;

- Para que o node entenda o typescript:
    - `yarn add ts-node-dev -D`.

### Express
Micro-framework que _fornece um conjunto robusto de recursos para aplicativos web e móvel_
- Instalação
    - `yarn add express`;
    - `yarn add express`;

### SQLite - KNEX
Knex: Fornce a facilidade de manipular os dados SQL com js (a mesma idéia do sequelize);
_Migrations - controlam a versão do banco de dados_

- `yarn add knex sqlite3`


## Funcionalidades

## Conexões
- Rota para listar total de conexões realizadas;
- Rota para criar uma nova conexão.

## Aulas
- Rota para criar uma aula;
- Rota para listar aulas;
    - Filtrar por matéria, dia da semana e horário;
