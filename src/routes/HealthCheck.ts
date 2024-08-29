import { Router, Request, Response, NextFunction } from "express";

const router = Router();

/**
 * @swagger
 * /healthCheck:
 *   get:
 *     summary: Health Check
 *     description: Rota de teste garante que o servidor esta de pé.
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hello World!"
 */
router.get("/healthCheck",(req: Request, res: Response, next: NextFunction) => {
    res.send("Hello World!")
});

export default router;
