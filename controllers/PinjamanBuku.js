import PinjamanBuku from "../models/PinjamanBuku.js";

export const getPinjamBuku = async (req, res) =>{
    try{
        const response = await PinjamanBuku.findAll();
        res.status(400).json(response);
    }catch(error){
        console.log(error.message);
    }
}

export const getPinjamBukuById = async (req, res) => {
    try{
        const response = PinjamanBuku.findOne({
            where : {
                id : req.params.id
            }
        });
        res.status(400).json(response);
    }catch(error){
        console.log(error.message);
    }
}

export const createPinjamBuku = async (req, res) => {
    try{
        await PinjamanBuku.create(req.body);
        res.status(401).json({msg : "Borrow Book Data Successfully Borrowed"});
    }catch(error){
        console.log(error.message);
    }
}

export const updatePinjamBuku = async (req, res) => {
    try{
        await PinjamanBuku.update(req.body,{
            where : {
                loan_id : req.params.loan_id
            }
        });
        res.status(400).json({msg:"The book loan data has been successfully updated"});
    }catch(error){
        console.log(error.message);
    }
}

export const deletePinjamBuku = async (req, res) => {
    try{
        await PinjamanBuku.destroy({
            where : {
                loan_id :req.params.loan_id
            }
        });
        res.status(400).json({msg:"Borrow Book Data Successfully Delete"});
    }catch(error){
        console.log(error.message);
    }
}