export interface LoginResponse {
    status:  string;
    message: string;
    token:   string;
    usuario: Usuario;
}

export interface Usuario {
    google:     boolean;
    _id:        string;
    nombre:     string;
    apellido_p: string;
    apellido_m: string;
    email:      string;
    createdAt:  Date;
    updatedAt:  Date;
    __v:        number;
}
