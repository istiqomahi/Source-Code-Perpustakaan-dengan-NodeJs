import express from "express";
import {
    getPeminjam,
    getPeminjamById,
    createPeminjam,
    updatePeminjam,
    deletePeminjam 
} from "../controllers/PeminjamBuku.js";

const router = express.Router();

router.get('/PeminjamBuku', getPeminjam);

router.get('/PeminjamBuku/:id', getPeminjamById);

router.post('/PeminjamBuku', createPeminjam);

router.patch('/PeminjamBuku/:book_borrower_id', updatePeminjam);

router.delete('/PeminjamBuku/:book_borrower_id', deletePeminjam);

export default router;
