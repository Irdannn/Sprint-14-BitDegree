const greeting = "Welcome!";

const callMe = (firstName, callback) => {
    setTimeout(() => {
      if (!firstName) return callback(new Error('no firstname passed in!'))
  
      const fullName = `${firstName} Smith`
  
      return callback(fullName)
    }, 1000)
  }
  
  console.log(greeting)
  callMe('Irdan', console.log)