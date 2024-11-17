const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuarios = require('../models/Usuarios');

router.post('/register', async(req, res) => {
    const {nombre, apellido, tipo_contribuyente, numero_identificacion, direccion, informacion_adicional, email, contrasena} = req.body;

    try{
        let user = await Usuarios.findOne({where:{email}});
        if(user){
            return res.status(400).json({msg: 'Este correo ya se encuentra registrado, ¡Usuario ya existente!'});
        }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(contrasena, salt);

    user = await Usuarios.create({
        nombre,
        apellido,
        tipo_contribuyente,
        numero_identificacion,
        direccion,
        informacion_adicional,
        email,
        contrasena: hashedPassword,
    });

    const payload = {
        user: {
            id:user.id_usuario
        }
    };

    jwt.sign(payload, 'secret', {expiresIn:300}, (error, token) => {
        if(error) throw error;
        res.json({token});
    });
    }catch(error){
        console.error(error.message);
        res.status(500).send({msg: 'Error al registrar el usuario'});
    }

    
});

router.post('/login', async(req, res) => {
    const {email, contrasena} = req.body;

    try{
        let user = await Usuarios.findOne({where:{email}});
        if(!user){
            return res.status(400).json({msg: 'Este correo no se encuentra registrado, ¡Usuario no encontrado!'});
        }

        const isMatch = await bcrypt.compare(contrasena, user.contrasena);
        if(!isMatch){
            return res.status(400).json({msg: 'Contraseña incorrecta'});
        }
        
        const payload = {
            user: {
                id:user.id_usuario
            }
        };
    
        jwt.sign(payload, 'secret', {expiresIn:300}, (error, token) => {
            if(error) throw error;
            res.json({token});
        });

    }catch(error){
        console.error(error.message);
        res.status(500).send('Error al iniciar sesión');
    };
});

module.exports = router;