const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const heroesSchema = new Schema({    
    name: {
      type: String, 
      required: true, 
      unique: true
    }
},    
{
timestamps: true
});
  
module.exports = mongoose.model('Heroes', heroesSchema);
