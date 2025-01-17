import { Router, Request, Response } from 'express';
import { getPaises } from '../services/Paises.service';

const PaisRouter: Router = Router();

PaisRouter.get('/', async (_req: Request, res: Response) => {
  try {
    res.status(200).json(await getPaises())
  } catch {
    res.status(404).json({error: 'no se pudo en http://localhost/api/paises'});
  }
});

export default PaisRouter;