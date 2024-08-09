import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            // Récupérer tous les utilisateurs
            const users = await prisma.user.findMany();
            return res.status(200).json(users);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
        }
    } else {
        // Gérer les méthodes non autorisées
        res.setHeader('Allow', ['GET']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}