const { connect } = require("./client");


let connection; 

const setupInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.on('data', (data) => handleUserInput(conn, data))
    stdin.resume();
    return stdin;
  }

  
  

  const handleUserInput = (conn, input) => {
    // console.log("----++++", input)
    if (input === '\u0003') {
      process.exit()
    } 
    
    if (input === "w"){
        connection.write('Move: up');
    }
    if (input === "a"){
      connection.write('Move: left');
    }
    
    if (input === "s"){
      connection.write('Move: down');
    }

    if (input === "d"){
      connection.write('Move: right');
    }

    if (input === "h") {
      connection.write("Hello Friend");
    }
    
  }
  


  module.exports={setupInput}