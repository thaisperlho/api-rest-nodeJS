const express = require('express'); //fake database
let books = [];
const app = express();
//Aplicando o middleware
app.use(express.json());
//rotas
app.get("/", (req, res) => { 
    res.send("Olá");
});
//Cadastro de livros
app.post('/books_cad', (req, res) => {
const { id, titulo, autor, publicacao } = req.body;
const book = { id, titulo, autor, publicacao } 
books.push(book);
//200 é o status de criado
return res.status(200).json(book);
});
//Lista todos os livros
app.get('/books_lista', (req, res) => { const allBooks = books;
return res.status(200).json(allBooks);
});
//Busca um livros específico
app.get('/books_lista/:book_id', (req, res) => {
const { book_id } = req.params;
const book = books.find((book) => book.id === book_id); if (!book) {
res.status(404).json("nenhum livro encontrado"); } else {
return res.status(200).json(book); }
});
//Deleta um livros específico
app.delete('/books_delete/:book_id', (req, res) => {
const { book_id } = req.params;
const procura_book = books.filter(book => book.id !== book_id); books = procura_book;
return res.status(204).json("deletado");
});
//Atualiza um livros específico
app.patch('/books_update/:book_id', (req, res) => { const { titulo, autor, publicacao } = req.body;
const { book_id } = req.params;
const book = books.find(book => book.id === book_id); book.id = book.id;
book.titulo = titulo ? titulo : book.titulo;
book.autor = autor ? autor : book.autor;
book.publicacao = publicacao ? publicacao : book.publicacao; return res.status(200).json(book);
});
app.listen(8081, () => console.log("Server rodando"));