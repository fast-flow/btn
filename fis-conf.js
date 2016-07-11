var markrun = require('markrun')
fis.match('*.md', {
    rExt: '.html',
    parser: function (content) {
        var html = markrun(content)
        html = html.replace(/href="([^"]+)\.md"/g, 'href="$1.html"')
        return html
    }
})

fis.match('*.less', {
    rExt: '.css',
    parser: fis.plugin('less-2.x')
})
