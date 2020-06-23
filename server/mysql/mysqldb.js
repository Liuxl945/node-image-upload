import mysql from 'mysql'

const poll = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'qqinsoft@youwu',
    database: 'world'
})

const query = (sql) => {
    return new Promise((resolve, reject) => {
        poll.getConnection((err, connection) => {
            if (err) {
                resolve(err)
                return
            }
            connection.query(sql, (err, data) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(data)
            })
            connection.release()
        })
    })
}

async function select(sql) {
    let data = ''
    let result = {}
    let dataList = await query(sql)
        .catch((err) => {
            data = err
        })

    if(data) {
        sql = `INSERT INTO log(log,time) VALUES('${data.toString()}',now())`
        await query(sql)

        result = {
            code: 500,
            message: '服务器错误',
            data: data,
        }
    } else {

        result = {
            code: 200,
            message: '数据获取成功',
            data: dataList,
        }
    }
    return result
}


module.exports = {
    query,
    select
}