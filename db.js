var mysql=require('mysql2');
var util=require('util');

var conn=mysql.createConnection({
    host:'blgmqu1rcmvpdyo9niwh-mysql.services.clever-cloud.com',
    user:'umxfzqtnq6nkv9pg',
    password:'fgTMnTUPugoDowpxvfcG',
    database:'blgmqu1rcmvpdyo9niwh'
});

var exe=util.promisify(conn.query).bind(conn);

module.exports=exe;
