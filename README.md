# ONT-API

<p>Esta aplicação é responsável por fazer o monitoramento do dados de um equipamentode rede, pesquisar por um específico e adicionar novos dados ao banco.</p>

Este projeto foi desenvolvido utilizando `React` + `Typescript` no front end, `Node.js` + `Typescript` no back end e o ORM `Sequelize` com `Mysql` no banco de dados.

Outras ferramntas que foram utilizadas foram o `Vite`, `React Router DOM`, `Axios` e `Tailwind` no front end e o `express`, `cors` e `joi` no back end. 


## Instruções para rodar o projeto

** Precisaremos do Docker instalado!

1 - Acesse repositório pelo terminal:
 - ```git clone git@github.com:guilhermeevencio/ONT-API.git```
 
 > No caso de repositório baixado em formato zip, extraia e pule para o passo 2
 
2 - No terminal, acesse o diretório /app:
 - ```cd personal-bank-app/app``` ou ```cd personal-bank-app-main/app```
 > Atentar para o nome da pasta após ser extraída.
 
3 - Rode o comando abaixo para subir os containers do Docker:
 - ```docker compose up -d```
 
4 - Acesse o terminal do container app-backend:
 - ```docker exec -it app-backend /bin/sh```

5 - Rode o seguinte comando para rodar as migrações do banco de dados:
 - ```npm run db:reset```
 
6 - Acesse a porta 3000 do localhost para utilizar a aplicação:
 - ```http://localhost:3000/```
