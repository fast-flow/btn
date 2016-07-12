fis.hook('relative')
var markrun = require('markrun')
fis.match('README.md', {
    rExt: '.html',
    release: 'index.html',
    parser: function (content) {
        var html = markrun(content, {
            template: [
            '<!DOCTYPE html>',
            '<html lang="en">',
            '<head>',
                '<meta charset="UTF-8">',
                '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
                '<meta http-equiv="X-UA-Compatible" content="ie=edge">',
                '<title><%-  title %></title>',
            '</head>',
            '<body>',
            '<%- content %>',
            '</body>',
            '</html>'
            ].join('\n')
        })
        html = html.replace(/href="([^"]+)\.md"/g, 'href="$1.html"')
        return html
    }
})

fis.match('*.less', {
    rExt: '.css',
    parser: fis.plugin('less-2.x')
})
fis.match('package.json', {
    release: false
})
