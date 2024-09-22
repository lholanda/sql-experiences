### inicializar o typescript
npx tsc --init
    tsconfig.json - usar configuracao padrão

### banco de dados Postgre
usar ->  compose.yml
rodar com -> docker compose up -d --build

### .env file
- DB_HOST=localhost
- DB_PORT=5432  
- DB_USER=postgres
- DB_PASS=postgres
- DB_NAME=sql_experiences

### yarn 

yarn init -y
   package.json - usar o padrao 
yarn install

### git configuration
git init
git commit -m 'setup'
git branch -M main
git remote add origin git@github.com:lholanda/sql-experiences.git
git push -u origin main
