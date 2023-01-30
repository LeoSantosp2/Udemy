import { Router } from "express";
import userController from '../controllers/UserController'

import loginRequired from '../middlewares/loginRequired'

const router = new Router()

router.post('/', userController.store)

// Não deveria existir
// router.get('/', userController.index) // Lista usuários
// router.get('/:id', userController.show) // Lista usuário

router.put('/', loginRequired, userController.update)
router.delete('/', loginRequired, userController.delete)

export default router