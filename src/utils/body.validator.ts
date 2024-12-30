import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

export const validateBody = (params: string[]) => {
  const validators = params.map((param) =>
    body(param).trim().notEmpty().withMessage(param)
  );

  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await Promise.all(validators.map((validator) => validator.run(req)));

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const missingParams = errors.array().map((error) => error.msg);
        res.status(400).json({
          success: false,
          error: `Campos vacíos: ${missingParams.join(", ")}.`,
        });
        return; 
      }
      next(); 
    } catch (error) {
      next(error); 
    }
  };
};

export const TaskBody = {
  create: ['title', 'description', 'state'],
}
