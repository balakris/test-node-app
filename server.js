/**
 * test http server listener
 */

var http = require('http');
var express = require('express');
var app = express();
var db_name = "balanodejs";

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

//provide a sensible default for local development
var mongodb_connection_string = 'mongodb://127.0.0.1:27017/' + db_name;
//take advantage of openshift env vars when available:
if(process.env.OPENSHIFT_MONGODB_DB_URL){
mongodb_connection_string = process.env.OPENSHIFT_MONGODB_DB_URL + db_name;
}


http.createServer(app).listen(app.get('port'), app.get('ip'), function(){
  console.log('Express server listening on ' + app.get('ip') + ' port ' + app.get('port'));
});

app.get('/', function (req, res) {
  res.send('Hello Big World!');
});