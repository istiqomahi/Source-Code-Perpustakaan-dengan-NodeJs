import Buku from "../models/Buku.js";

export const getBuku = async(req, res) => {
    try{
        const response = await Buku.findAll();
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
}

export const getBukuById = async(req, res) => {
    try{
        const response = await Buku.findOne({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
}

export const createBuku = async(req, res) => {
    try{
        await Buku.create(req.body);
        res.status(201).json({msg:"Book data added successfully"}); 
    }catch(error){
        console.log(error.message);
    }
}

export const updateBuku = async (req, res) => {
    try{
        await Buku.update(req.body,{
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg:"Book Data has been successfully updated"});
    }catch(error){
        console.log(error.message);
    }
}

export const deleteBuku = async (req, res) => {
    try{
        await Buku.destroy({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json({msg:"Book Data successfully deleted"});
    }catch(error){
        console.log(error.message);
    }
}