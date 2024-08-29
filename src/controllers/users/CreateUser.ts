import { Request, Response } from "express";
import UserStore from "../../server";
import { User } from "../../entities/User";

/**
 * @swagger
 * 
 * /users/create:
 *   post:
 *     summary: Create User
 *     description: Criação de um usuário, no qual você deve enviar o `name` no body.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *           example:
 *             name: "Sherlock Holmes"
 * 
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
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensagem de erro
 *                   example: "Name is required!"
 */
export function CreateUser(req: Request, res: Response) {
    try {
        const user = req.body as User;

        if(!user.name) {
            throw new Error("Name is required!");
        }

        res.status(200).send(UserStore.add(user));
    } catch (err) {
        const error = {
            message: (err as Error).message,
        };

        res.status(500).send({ error });
    }
}
