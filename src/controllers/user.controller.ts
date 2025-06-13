import { Request, Response } from 'express';
import { User } from '../entities/User';
import { AppDataSource } from '../db';
import { successRes, errorRes } from '../network/response';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const userRepository = AppDataSource.getRepository(User);
        const users = await userRepository.find();
        successRes(req, res, users);
    } catch (error) {
        console.error('Error getUsers:', error);
        if (error instanceof Error) {
            errorRes(req, res, 'Error obteniendo users', error.message);
        }
    }
}

export const createUser = async (req: Request, res: Response) => {
    try {
        const { nombre, email } = req.body;
        const user = new User()
        user.nombre = nombre;
        user.email = email;

        console.log(user);

        
        const userRepository = AppDataSource.getRepository(User);
        const userSaved = await userRepository.save(user);

        //const userSaved = await user.save();

        successRes(req, res, userSaved, 201);
    } catch (error) {
        console.error('Error createUser:', error);
        if (error instanceof Error) {
            errorRes(req, res, 'Error creando user', error.message);
        }
    }
    
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOneBy({ id: parseInt(id) });

        if (!user) {
            return errorRes(req, res, 'Usuario no encontrado', '', 404);
        }

        user.merge(req.body);
        const updatedUser = await userRepository.save(user);

        successRes(req, res, updatedUser);
    } catch (error) {
        console.error('Error updateUser:', error);
        if (error instanceof Error) {
            errorRes(req, res, 'Error actualizando user', error.message);
        }
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOneBy({ id: parseInt(id) });

        if (!user) {
            return errorRes(req, res, 'Usuario no encontrado', '', 404);
        }
        successRes(req, res, user);
    } catch (error) {
        console.error('Error getUserById:', error);
        if (error instanceof Error) {
            errorRes(req, res, 'Error buscando user', error.message);
        }
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOneBy({ id: parseInt(id) });

        if (!user) {
            return errorRes(req, res, 'Usuario no encontrado', '', 404);
        }

        await userRepository.remove(user);
        successRes(req, res, 'Usuario eliminado' , 204);
    } catch (error) {
        console.error('Error deleteUser:', error);
        if (error instanceof Error) {
            errorRes(req, res, 'Error eliminando user', error.message);
        }
    }
}