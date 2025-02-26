import "express-session"

declare namespace NodeJS {
    export interface ProcessEnv {
        MONGO_URI : string,
        
    }
}

declare module "express-session" {
    interface SessionData {
        user ? : {
            id : string,
            username : string
        }
    }
}