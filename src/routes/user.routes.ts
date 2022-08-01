import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();
const productController = new UserController();

router.post('/users', productController.create);

export default router;