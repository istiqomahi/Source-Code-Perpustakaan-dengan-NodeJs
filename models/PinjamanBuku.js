import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const PinjamanBuku = db.define('PinjamanBuku',{
    loan_id : DataTypes.STRING,
    loan_start_date : DataTypes.DATE,
    Return_rule_date : DataTypes.DATE,
    Return_Date : DataTypes.DATE,
    borrower_id : DataTypes.STRING,
    book_id : DataTypes.STRING,
    Loan_status : DataTypes.STRING 
},{
    freezeTableName : true
});

export default PinjamanBuku;

(async()=>{
    await db.sync();
})();