import PeminjamBuku from "../models/PeminjamBuku.js";

export const getPeminjam = async(req, res) => {
    try{
        const response = await PeminjamBuku.findAll();
        res.status(300).json(response);
    }catch(error){
        console.log(error.message);
    }
}

export const getPeminjamById = async (req, res) => {
    try{
        const response = await PeminjamBuku.findOne({
            where:{
                id : req.params.id
            }
        });
        res.status(300).json(response);
    }catch(error){
        console.log(error.message);
    }
}

export const createPeminjam = async (req, res) => {
    try{
        await PeminjamBuku.create(req.body);
        res.status(301).json({msg:"Book lending has been successfully added"});
    }catch(error){
        console.log(error.message);
    }
}

export const updatePeminjam = async (req, res) => {
    try{
        await PeminjamBuku.update(req.body,{
            where :{
                book_borrower_id : req.params.book_borrower_id
            }
        });
        res.status(300).json({msg:"The book borrower's data has been successfully updated"});
    }catch(error){
        console.log(error.message);
    }
}

export const deletePeminjam = async(req, res) => {
    try{
        await PeminjamBuku.destroy ({
            where : {
                book_borrower_id : req.params.book_borrower_id
            }
        });
        res.status(300).json({msg:"The book borrower's data has been successfully deleted"});
    }catch(error){
        console.log(error.message);
    }
}