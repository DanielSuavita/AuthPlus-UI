import { Usuario } from "./Usuario.Model";

export interface Log{
    fecha: Date;
    id: number;
    user: Usuario;
}
