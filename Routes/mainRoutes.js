import { Router } from 'express'
import { getInfo } from '../controller/mainController.js'

const router = Router()

router.post('/getInfo', getInfo)

export default router
