const { connect } = require("./client");



const setupInput = function(conn) {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.on('data', (data) => handleUserInput(conn, data))
    stdin.resume();
    
    return stdin;
  }

  
  
  setupInput(connect)

  const handleUserInput = (conn, input) => {
    if (input === '\u0003') {
      process.exit()
    } 
    
    if (input === "w"){
        console.log('Move: up');
    }
    if (input === "a"){
        console.log('Move: left');
    }
    
    if (input === "s"){
        console.log('Move: down');
    }

    if (input === "d"){
        console.log('Move: right');
    }
    
  }
  


  module.exports={setupInput}