const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'HomePage'
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'Ini halaman about'
        }
    }
]

module.exports = routes;