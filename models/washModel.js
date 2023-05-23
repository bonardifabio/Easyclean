const mongoose=require("mongoose");
const washSchema= mongoose.Schema({
    Richiedente:{type:String, required:true},
    Data:{type:Date, required:true},
    Indirizzo:String,
    Telefono:{type:Number, required:true},
    Tipo:{type:String, required:true, enum:['Suv', 'Berlina', 'Utilitaria']}
});

const washModel= mongoose.model('Washe',washSchema);

module.exports={
    totalPrice: async function(){
        
    }
}