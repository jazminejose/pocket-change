const router = require('express').Router()
const { Goal, User } = require('../models')
const passport = require('passport')

router.get('/goals', passport.authenticate('jwt'), async function (req, res) {
  const goals = await Goal.find({})
  res.json(goals)
})

router.post('/goals', passport.authenticate('jwt'), async function (req, res) {
  const goal = await Song.create(req.body)
  await User.findByIdAndUpdate(req.user._id, { $push: { goals: goal._id } })
  res.json(goal)
})

router.put('/goals/:id', passport.authenticate('jwt'), async function (req, res) {
  await Goal.findByIdAndUpdate(req.params.id, req.body)
  res.sendStatus(200)
})

router.delete('/goals/:id', passport.authenticate('jwt'), async function (req, res) {
  await Goal.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router