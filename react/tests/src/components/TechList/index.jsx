import React, { useState } from 'react'

// import { Container } from './styles';

export default function TechList() {
  const [techs, setTechs] = useState([])

  function handleAddTech() {
    setTechs([...techs, 'NodeJS'])
  }

  return (
    <div>
      <ul data-testid="tech-list">
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <button onClick={handleAddTech}>adicionar</button>
    </div>
  )
}
