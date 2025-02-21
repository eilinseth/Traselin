interface User {
    _id : string,
    username : string,
    email : string,
    password :string,
    createdAt : string,
    updatedAt :string,
    __V : number

}

export interface Users {
    data : User[]
}

export interface UserBody {
    username : string,
    email : string,
    password : string
}

export interface LoginBody {
    userOrEMail : string,
    password : string
}