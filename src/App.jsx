import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'

import Books from './pages/Books'
import BookDetails from './pages/BookDetails'
import Quotes from './pages/Quotes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav style={{ display: 'flex', gap: '1rem', margin: '1rem 0' }}>
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/quotes">Quotes</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <div>
                <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
                  <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </div>
              <h1>Vite + React</h1>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
                </p>
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
            </div>
          }
        />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </Router>
  )
}

export default App
