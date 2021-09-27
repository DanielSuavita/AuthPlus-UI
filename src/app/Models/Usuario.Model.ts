import { Roles } from "./Roles.Model";

export interface Usuario{
    celular : number;
    contrasena : string;
    correo : string;
    id : number;
    nombre : string;
    nombreUsuario : string;
    rol : Roles;
}
