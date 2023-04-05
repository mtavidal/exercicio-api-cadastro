import UsersRepository from "../models/users/users.js"

async function findAll (request, response) {
    try {
        const users = await UsersRepository.findAll();
        response.json(users);
    } catch (error) {
        console.log("Erro ao recuperar todos os registros de usuários: ", error);
    }
}

async function findUser (request, response) {
    try {
        const userID = request.params.id;
        const user = await UsersRepository.findByPk(userID);
        response.json(user);
    } catch (error) {
        console.log(`Erro ao recuperar o registro de usuário com o id: ${userID} `, error);
    }
}

async function addUser (request, response) {
    try {
        const userCreated = await UsersRepository.create({
            nome: request.body.nome,
            email: request.body.email,
            tipo_usuario: request.body.tipo_usuario,
            senha: request.body.senha,
        });
        response.json(userCreated);
    } catch (error) {
        console.log(`Erro ao criar registro de usuário no banco de dados`, error);
    }
}

async function uptadeUser (request, response) {
    try {
        const userID = request.params.id;
        const userUpdated = await UsersRepository.update({
            nome: request.body.nome,
            tipo_usuario: request.body.tipo_usuario,
            senha: request.body.senha,
        },
        {
            where:{
                id: userID,
            },
        }
        );
        const showUpdatedUser = await UsersRepository.findByPk(userID);
        response.json(showUpdatedUser);
    } catch (error) {
        console.log(`Erro atualizar o registro de usuário com o id: ${userID}`, error);
    }
}

async function deleteUser (request, response) {
    try {
        const userID = request.params.id;
        const userDeleted = await UsersRepository.destroy({
            where:{
                id: userID,
            },
        });
        const users = await UsersRepository.findAll();
        response.json(users);
    } catch (error) {
        console.log(`Erro excluir o registro de usuário com o id: ${userID}`, error);
    }
}

export default { findAll, findUser, addUser, uptadeUser, deleteUser }