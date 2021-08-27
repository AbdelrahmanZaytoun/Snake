const net = require("net");
const { IP, PORT } = require('./constants');


const connect = function () {
    const conn = net.createConnection({
      host:IP,// IP address here,
      port: PORT // PORT number here,
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
    conn.on("connect",()=>{console.log("Successfully connected to game server")})
    conn.on('connect', () => { conn.write(' Name: ZAY')});
    // conn.on('connect', () => { conn.write( "Move: down")});
   
  


    return conn;
  };
  
  
  console.log("Connecting ...");
  connect();




  module.exports={connect}