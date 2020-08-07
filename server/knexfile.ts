// import path from 'path';

// module.exports = {
//     client: 'sqlite3',
//     connection: {
//         filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
//     },
//     migrations: {
//         directory: path.resolve(__dirname, 'src','database', 'migrations')
//     },
//     useNullAsDefault: true
// }


import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src','database', 'database.sqlite'),
        connectTimeout: 90000
    },
    migrations: {
        directory: path.resolve(__dirname, 'src','database', 'migrations'),
    },
    debug: true,
    pool: {
      min: 1,
      max: 20,
    },
    useNullAsDefault: true
}