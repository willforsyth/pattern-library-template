module.exports = {
    dist: {
        options: {
            collapseWhitespace: true,
            removeComments: true,
            removeIgnored: true,
        },
        files: [{
            expand: true,
            dot: true,
            cwd: 'web/',
            src: '**/*.html',
            dest: 'web/'
        }]
    },
};
