import {Sequelize} from "sequelize";
import db from "../config/DataBase.js";

const {DataTypes} = Sequelize;

const PeminjamBuku = db.define('PeminjamBuku', {
    book_borrower_id : DataTypes.STRING,
    borrowers_name : DataTypes.STRING,
    user_id : DataTypes.STRING
}, {
    freezeTableName : true
});

export default PeminjamBuku;

(async()=>{
    await db.sync();
})();