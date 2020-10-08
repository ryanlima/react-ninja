import React from 'react'

const App = () => (
  <div className='app'>
    <div className='search'>
      <input
        type='search'
        placeholder='Digite o nome do usuário no GitHub'
      />
    </div>
    <div className='user-info'>
      <img src='https://avatars1.githubusercontent.com/u/37602101?v=4' alt='Avatar do usuário' />
      <h1 className='username'>
        <a href='https://github.com/ryanlima'>
          Ryan Lima
        </a>
      </h1>

      <ul className='repos-info'>
        <li>Repositories: 122</li>
        <li>Seguidores: 10</li>
        <li>Seguindo: 10</li>
      </ul>

      <div className='actions'>
        <button>Ver Repositórios</button>
        <button>Ver Favoritos</button>
      </div>

      <div className='repos'>
        <h2>Repositórios</h2>
        <ul>
          <li><a href='#'>Nome do repositório</a></li>
        </ul>
      </div>

      <div className='starred'>
        <h2>Favoritos:</h2>
        <ul>
          <li><a href='#'>Nome do repositório</a></li>
        </ul>
      </div>
    </div>
  </div>
)

export default App
