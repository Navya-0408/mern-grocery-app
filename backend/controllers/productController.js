const  Product=require("../models/Product")

exports.createProduct = async(req,res) =>{
    try{
        const {name, desc, price, category,unit}=req.body 
        const image= req.file?`/uploads/${req.file.filename}`:null
        
        const products = await Product.create({
            name, desc, price, category,unit,image
        })
        
        return res.status(200).json({msg:"products added",products})

    } catch (error){
     console.error(error.meassage)
    }
}

exports.getProducts=async(req,res)=>{
    try{
        const newProducts = await Product.find()
        
        return res.status(201).json({msg:"success",newProducts})
    } catch(error){
          console.error(error.message)
    }
}