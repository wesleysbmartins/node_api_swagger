import { Request, Response } from "express";
import UserStore from "../../server";

/**
 * @swagger
 * 
 * /users/remove?:id:
 *   delete:
 *     summary: Remove User
 *     description: Remoção de um usuário, no qual você deve enviar o `id` do usuário em questão como parâmetro.
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário a ser removido
 *         example: 1
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
 *                   example: "Id is required!"
 */
export function RemoveUser(req: Request, res: Response) {
    try {
        const { id } = req.query;

        if(!id) {
            throw new Error("Id is required!");
        }

        res.status(200).send(UserStore.remove(parseInt(id as string)));
    } catch (err) {
        const error = {
            message: (err as Error).message,
        };

        res.status(500).send({ error });
    }
}
