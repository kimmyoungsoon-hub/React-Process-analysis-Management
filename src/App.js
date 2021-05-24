
import { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id' : 1,
  'image' : 'https://placimg.com/64/64/1',
  'name' : '홍길동1',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '회사원'
},
{
  'id' : 2,
  'image' : 'https://placimg.com/64/64/2',
  'name' : '홍길동2',
  'birthday' : '961223',
  'gender' : '여자',
  'job' : '회사원'
},
{
  'id' : 3,
  'image' : 'https://placimg.com/64/64/3',
  'name' : '홍길동3',
  'birthday' : '941224',
  'gender' : '남자',
  'job' : '변호사'
}
]


class App extends Component {
  render () {
    return (
      <div>
        {
          customers.map( c =>{
            return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
            );
          })
        }
        
  </div>
    );

  }
}
export default App;
