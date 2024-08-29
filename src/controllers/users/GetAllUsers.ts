import { Request, Response } from "express";
import UserStore from "../../server";

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único do usuário
 *           example: 1
 *         name:
 *           type: string
 *           description: Nome do usuário
 *           example: "Sherlock Holmes"
 * 
 * /users/getAll:
 *   get:
 *     summary: Get All Users
 *     description: Retorna um array de objetos `User`, cada um contendo o `id` e o `name`.
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *             example:
 *               - id: 1
 *                 name: "Sherlock Holmes"
 *               - id: 2
 *                 name: "John Watson"
 */
export function GetAllUsers(req: Request, res: Response) {
    try {
        res.status(200).send(UserStore.get());
    } catch (err) {
        const error = {
            message: (err as Error).message,
        };

        res.status(500).send({ error });
    }
}
