import UsuariosService from "../services/usuarios.service.js";

const makeAdmin = async (req, res) => {
    const { id } = req.body;

    if 

    try {
        const userId = UsuariosService.getUsuarioById(id)
    } catch (error) {
        res.status(500).json(error)
    }
    
};

// PLAN
// Que un admin cambie el estatus de admin de otro usuario
// Se necesita un ID de un usuario específico