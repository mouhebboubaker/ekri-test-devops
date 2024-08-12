import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Annonce1 from './Annonce1'

function AnnoncePage() {
  return (
    <div> 
    <Routes>
      <Route path="/1" element={<Annonce1/>} />
    </Routes>
    </div>
  )
}

export default AnnoncePage