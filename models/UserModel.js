const { log } = require("console");
const fs = require("fs/promises");
const path = require("path");

const createUsers = async (email, password) => {
  let data = await fs.readFile(path.join(__dirname, "db.json"), "utf-8");
  data = await JSON.parse(data);

  if (email && password) {
    data.users.push({ 
        id: Math.ceil(Math.random() * 1400),
        email, 
        password });
  }

  await fs.writeFile(path.join(__dirname, "db.json"), JSON.stringify(data))
};




const findUsers = async (email) => {
    let data = await fs.readFile(path.join(__dirname, "db.json"), "utf-8")
    data = await JSON.parse(data)

    
    if(email) {
        const user = data.users.find(x => (x.email == email))
        console.log(user)
        
        if(user) {
            return user
        }
    }

}
module.exports.createUsers = createUsers
module.exports.findUsers = findUsers
