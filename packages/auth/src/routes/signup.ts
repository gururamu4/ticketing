import { Request, Response, Router } from "express";
import { body, validationResult } from "express-validator";
import { DatabaseError } from "../errors/database.error";
import { RequestValidationError } from "../errors/request-validatation-error";

const router = Router();

router.post('/user/signup', [
    body('email').isEmail().withMessage('Email is not valid!!'),
    body('password').trim().isLength({max: 20, min: 4}).withMessage('password must be between 4 and 20 characters')
], async(req: Request, res: Response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        throw new RequestValidationError(errors.array())
    }
    console.log('creating a user!');

    throw new DatabaseError();

    res.send({})
});

export default router;