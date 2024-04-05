import { Empresa } from "./empresa";

export interface Anuncio {
    id_anuncio: number;
    nombre: string;
    descripcion: string;
    ubicacion: string;
    categoria: string;
    sueldo: string;
    contrato: string;
    modalidad:  string;
    fec_publi: string;
    fec_venc: string;
    empresa: Empresa;
    estado: number;
}