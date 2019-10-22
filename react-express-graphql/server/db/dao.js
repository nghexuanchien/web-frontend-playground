const db = require('./connection')

function get(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.get(sql, params, (err, result) => {
            if (err) {
                console.log('Error running sql: ' + sql)
                console.log(err)
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

function all(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) {
                console.log('Error running sql: ' + sql)
                console.log(err)
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}

function save(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function(err) {
            if (err) {
                console.log('Error running sql: ' + sql)
                console.log(err)
                reject(err)
            } else {
                // this.lastID;
                resolve(this.changes)
            }
        })
    })
}



module.exports = {
    get,
    all,
    save
}