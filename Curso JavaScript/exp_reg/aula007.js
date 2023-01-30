const { html2 } = require('./base')

//console.log(html2.match(/<((\w+)[\s\S]*?)>([\s\S]*?)<(\/\1>)/g))
console.log(html2.replace(/(<(\w+)([\s\S]*?)>)([\s\S]*?)(<\/\1>)/g, '$1 HAHA $4 HAHA $5'))