import React from 'react'
import './assets/css/main.scss'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import NavBar from './components/NavBar'
import Container from '@mui/material/Container'
import Home from './pages/Home'
import Departamentos from './pages/Departamentos'
import FormDepartamento from './pages/FormDepartamento'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Container fixed>
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />
              <Route path='/departamentos'>
                <Route index element={<Departamentos />} />
                {/* <Route path=':idDepartamento' element={<DepartamentosDetalhes />} /> */}
                <Route path='new' element={<FormDepartamento />} />
                <Route path='edit/:idDepartamento' element={<FormDepartamento />} />
              </Route>
            </Route>
            {/* Fica fora do / */}
            {/* <Route path='*' element={<NotFound />} /> */}
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
