import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Buku = db.define('buku', {
    Id_book : DataTypes.STRING,
    Book_name: DataTypes.STRING,
    Book_state : DataTypes.STRING,
    Author_book : DataTypes.STRING,
    book_publication_year : DataTypes.STRING
},{
    freezeTableName:true
});

export default Buku;

(async()=>{ //fungsi untuk mengjendret table, jika table tidak terdapat di database
    await db.sync();
})();