const ghpages = require('gh-pages')


ghpages.publish('public', {}, function (err) {
  if (err) {
    console.error('Publishing failed', err)
  } else {
    console.log('Successfully published')
  }
})
