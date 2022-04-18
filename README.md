### Upload de Arquivos com Multer 👨‍💻

O `multer` é um manipulador de dados ***multipart/form-data***, que é usado principalmente para fazer upload de arquivos.

Link para a documentação: https://www.npmjs.com/package/multer

Link do repositório: https://github.com/expressjs/multer

### Projeto

Primeiramente instale as dependências de pacote

```
  npm i
```

Um dos pacotes  a ser instalado é o `nodemon`, uma ferramenta que reinicia automaticamete o aplicativo caso hajam alterações.

Para rodar o projeto, use o comando:

```
  npm run dev
```

### Porta
```
  3000
```

### Rotas

```
/ - Página inicial 
```
  - Retorna o HTML com o form de Upload

<br />

```
/uploads
```
  - Ao fazer o upload esta rota será chamada com a mensagem **"Uploaded"**
