import React from 'react';

import data from "./data.json"
import Title from "./sections/title"
import About from './sections/about';
import Skill from './sections/skill';
import Nav from "./component/navbar"
import SnowStorm from 'react-snowstorm';

function App() {

  return (
    <div className="App" >
     
        <SnowStorm/>
      <Nav></Nav>
      <Title data={data} />
    <About data={data} />
<Skill data={data} /> 
<SnowStorm/>

      
    </div>
  );
}

export default App;
