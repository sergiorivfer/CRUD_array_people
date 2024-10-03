// import { Person } from './components/Person';
import { People } from './components/People';
import { useState } from 'react'
import './App.css'

function App() {
  
  const [people,setPeople]= useState([
    {
      id: 1,
      name: 'sergio rf',
      role: 'desarrollador full stack',
      img: 'https://bootdey.com/img/Content/avatar/avatar6.png'
    },
    {
      id: 2,
      name: 'señor bolainas',
      role: 'desarrollador full stack',
      img: 'https://bootdey.com/img/Content/avatar/avatar5.png'
    },
    {
      id: 3,
      name: 'juanito escarcha',
      role: 'desarrollador full stack',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png'
    },
  ]);

  return (
    <div>
      <People
        people={people}
        setPeople={setPeople}
      />
    </div>
  )
}

export default App
