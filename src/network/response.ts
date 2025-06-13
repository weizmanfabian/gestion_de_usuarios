import { Request, Response } from 'express';

export const successRes = (req: Request, res: Response, msg: any, status: number = 200) => {
    res.status(status).send({
        err: false,
        status: status,
        body: msg
    })
}

export const errorRes = (req: Request, res: Response, msg: any = 'Error interno', details: any = 'No hay detalles disponibles', status: number = 500,) => {
    res.status(status).send({
        err: true,
        status: status,
        body: msg,
        details: details
    })
}

