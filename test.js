const plugin = require('./dist').default

plugin({
  markdownNode: {
    frontmatter: {
      title: 'Understanding Reducers: You Can Use Them Without Redux'
    },
    fields: {
      slug: 'testingtesting'
    }
  }
})
