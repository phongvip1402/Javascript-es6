import logo from './logo.svg';
import './App.css';
import List from './components/List';

const patternItems = [
  {
    'id':1,
    'title':'to do 1'
  },
  {
    'id':2,
    'title':'to do 2'
  },
  {
    'id':3,
    'title':'to do 3'
  },
  {
    'id':4,
    'title':'to do 4'
  },
  {
    'id':5,
    'title':'to do 5'
  },
]
function App() {
  return (
   <div style= {{with:'500px',padding:'40px'}}>
    <List items = {patternItems}/>
   </div>
  );
}

export default App;
