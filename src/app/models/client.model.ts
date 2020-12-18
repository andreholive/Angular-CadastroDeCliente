import { Address } from './address.model';
import { Phone } from "./phone.model";

export interface Client {
    id: number,
	nome: string;
	cpf?: string;
	cnpj?: string;
	enderecos?: Address[];
	phones?: Phone[];
	user?: number
}