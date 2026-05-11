import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import RestaurantProfile from './pages/Profile'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<RestaurantProfile />} />
  </Routes>
)

export default Rotas
