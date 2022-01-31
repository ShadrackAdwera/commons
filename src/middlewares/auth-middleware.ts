import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { HttpError } from '../error/HttpError';

interface JwtPayloadProps extends JwtPayload {
    userId: string;
    email: string;
}

// to modify an existing interface . . . 
declare global {
    namespace Express {
        interface Request {
            user?: JwtPayloadProps
        }
    }
}

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
    if(req.method==='OPTIONS') {
        return next();
    }

    let decodedToken: JwtPayloadProps;
    const token = req.headers.authorization?.split(' ')[1];

    if(!token) {
        return next(new HttpError('Auth failed', 401));
    }

    try {
        decodedToken = <JwtPayloadProps>jwt.verify(token, process.env.JWT_KEY!);
        req.user = { userId: decodedToken.userId, email: decodedToken.email };
        next();
    } catch (error) {
        return next(new HttpError('Auth failed', 401));
    }
}