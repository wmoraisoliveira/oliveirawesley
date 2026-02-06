import './App.scss'

import Logo from '../Logo.png';

function App() {
  return (
    <main className="home">
      <img
        src={Logo}
        alt="Logo - Oliveira Wesley"
        className="home__logo"
      />
      <h1 className="home__title">Oliveira Wesley</h1>
      <p className="home__subtitle">coming soon</p>
    </main>
  )
}

export default App
