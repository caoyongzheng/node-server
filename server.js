const express = require('express')

const app = new express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const marked = require('marked')
const highlight = require('highlight.js')
marked.setOptions({
  highlight(code) {
    return highlight.highlightAuto(code).value
  }
})
app.post('/marked', function(req, res) {
  res.send(marked(req.body.md))
})

app.listen(3100, function(err) {
  if (err) {
    console.log(err)
  }
})
