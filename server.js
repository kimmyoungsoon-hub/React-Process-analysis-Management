const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/hello', (req,res) => {
    res.send({message: 'hello'});
});

app.get('/api/customers' , (req,res) => {
    res.send([
      {
        'id' : 1,
        'image' : 'https://placimg.com/64/64/1',
        'name' : '홍길동A',
        'birthday' : '961222',
        'gender' : '남자',
        'job' : '회사원'
      },
      {
        'id' : 2,
        'image' : 'https://placimg.com/64/64/2',
        'name' : '홍길동B',
        'birthday' : '961223',
        'gender' : '여자',
        'job' : '디자이너'
      },
      {
        'id' : 3,
        'image' : 'https://placimg.com/64/64/3',
        'name' : '홍길동C',
        'birthday' : '941224',
        'gender' : '남자',
        'job' : '변호사'
      }
    ]);

});

app.listen(port, () => console.log(`Listening on port ${port}`));
