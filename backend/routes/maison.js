const express = require('express')
const {
  getMaisons, 
  getMaison, 
  createMaison, 
  deleteMaison, 
  updateMaison
} = require('../controllers/maisonController')

const router = express.Router()

// GET all Maisons
router.get('/', getMaisons)

// GET a single Maison
router.get('/:id', getMaison)

// POST a new Maison
router.post('/', createMaison)

// DELETE a Maison
router.delete('/:id', deleteMaison)

// UPDATE a Maison
router.patch('/:id', updateMaison)

module.exports = router