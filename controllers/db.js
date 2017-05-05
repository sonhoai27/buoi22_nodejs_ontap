let pg = require('pg');

let config = {
  user: 'postgres',
  database: 'postgres',
  password: 'sonhoai',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 1000
}

let pool = new pg.Pool(config);

// pool.connect((err, client, done) => {
//     if(err) return console.log(err + '');
//     client.query('SELECT * FROM "News"', (err, result) => {
//         done(err);
//         if(err) return console.log(err + '');
//         console.log(result.rows);
//     });
// });

function queryDB(sql, arrayData) {
    return new Promise((resolve, reject) =>{
        pool.connect((err, client, done) =>{
            if(err) return reject(err)
            client.query(sql, arrayData, (error, result) =>{
                done(error)
                if(error) return reject(error)
                resolve(result)
            })
        })
    })
}

const getAllNote = () => (
    queryDB('SELECT * FROM public."NOTE"', []).then(kq => kq.rows)
)
const ThemData = (note) => {
    sql = `insert into public."NOTE" ("NoiDung") Values($1) RETURING *`
    return queryDB(sql, [note])
}
// queryDB('SELECT * FROM public."NOTE"', []).then(kq => console.log(kq))
module.exports = {
    queryDB,
    getAllNote,
    ThemData
};