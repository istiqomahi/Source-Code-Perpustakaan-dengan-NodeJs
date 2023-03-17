import User from "../models/UserLogin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUser = async (req, res) => {
    try{
        const User = await User.findOne({
            attributes : ['id','name','email']
        });
        res.json(User);
    }catch(error){
        res.senStatus(101);
    }
}

export const Register = async (req, res) => {
    const {name, email, password, confpassword} = req.body;
    if(password !== confpassword) return res.status(400).json({msg:"Password & konfirm password tidak cocok"});
    const salt = await bcrypt.genSalt();
    const hashpassword = await bcrypt.hash(password, salt);
    try{
        await User.create({
            name:name,
            email:email,
            password:hashpassword
        });
        res.json({msg:"Register Berhasil"});
    }catch(error){
        console.log(error);
    }
}

export const Login = async(req, res) => {
    try{
        const user = await User.findAll({
            where:{
                email:req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);

        if (!match) return res.status(400).json({msg:"Wrong Password"});
        const Id = user[0].id;
        const name = user[0].name;
        const email=user[0].email;
        const accessToken = jwt.sign({Id, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn :'20s'
        });
        const refreshToken = jwt.sign({Id, name,email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn:'1d'
        });
        await User.update({refresh_token:refreshToken},{
            where:{
                Id : Id
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        });
        res.json({ accessToken });
    }catch(error){
        res.status(404).json({msg:"Email tidak di temukan"});
    }
}

export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await User.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await User.update({refresh_token:null},{
        where:{
            id:userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}
