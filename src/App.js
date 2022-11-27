
import { useState, useEffect } from 'react';
import './App.css';
import CardList from './Components/card-list/card-list.component'
import SearchBox from './Components/search-box/search-box.component';


const App = () => 
{
  console.log('render');
  const [searchField, setSeacrhField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  const OnSearchChange = (event) =>
  {
    setSeacrhField(event.target.value.toLowerCase());

  }
  useEffect(() =>
  {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        setMonsters(users)
      );

  }, [])
  useEffect(() =>
  {
    const filteredMonsters = monsters.filter(x => x.name.toLowerCase().includes(searchField.toLowerCase()));
    console.log('Filtered')
    setFilteredMonsters(filteredMonsters);
  }, [searchField, monsters])

  return (
    <div className="App">

      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox onChangeHadler={OnSearchChange} placeholder={'Search Monsters'} className={'monsters-search-box'}></SearchBox>
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
}

// class App extends Component
// {
//   constructor()
//   {

//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };


//   }

//   componentDidMount()
//   {


//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () =>
//           {
//             return { monsters: users };
//           }
//         ))
//   }

//   OnSearchChange = (event) =>
//   {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() =>
//     {
//       return { searchField };
//     });
//   }


//   render()
//   {
//     const { monsters, searchField } = this.state;
//     const { OnSearchChange } = this
//     const filteredMonsters = monsters.filter(x => x.name.toLowerCase().includes(searchField.toLowerCase()));

//     return (

//       <div className="App">

//         <h1 className='app-title'>Monsters Rolodex</h1>

//         <SearchBox onChangeHadler={OnSearchChange} placeholder={'Search Monsters'} className={'monsters-search-box'}></SearchBox>

//         <CardList monsters={filteredMonsters}></CardList>
//       </div>


//     );
//   }
// }

export default App;
