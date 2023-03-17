import express from "express";
import {
    getPinjamBuku,
    getPinjamBukuById,
    createPinjamBuku,
    updatePinjamBuku,
    deletePinjamBuku
} from "../controllers/PinjamanBuku.js";

const router = express.Router();

router.get('/PinjamanBuku', getPinjamBuku);

router.get('/PinjamanBuku/:id',getPinjamBukuById);

router.post('/PinjamanBuku',createPinjamBuku);

router.patch('/PinjamanBuku/:loan_id',updatePinjamBuku);

router.delete('/PinjamanBuku/:loan_id',deletePinjamBuku);
 
export default router;