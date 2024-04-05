import { Empresa } from "../app/empresa";
import { Usuario } from "../app/usuario";

export interface DataLocalStorage {
    usuario: Usuario | null;
    empresa: Empresa | null;
    loggedDate: String;
}
