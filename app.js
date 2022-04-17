const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

app.set('view engine', 'ejs')

const storage = multer.diskStorage({
  destination: (_, __, callback) => callback(null, 'uploads/'),
  filename: (_, file, callback) => callback(null, file.originalname + Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage })

app.get('/', (_, response) => {
  response.render('index');
})

app.post('/uploads', upload.single('file'), (_, response) => {
  response.status(201).json({ message: 'Uploaded' })
})

app.listen(3000, () => console.log('Porta 3000'));
