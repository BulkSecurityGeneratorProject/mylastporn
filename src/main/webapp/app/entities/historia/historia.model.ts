import { BaseEntity } from './../../shared';

const enum Status {
    'ACTIVE',
    'INATIVE',
    'WHAIT'
}

export class Historia implements BaseEntity {
    constructor(
        public id?: number,
        public titulo?: string,
        public descricao?: any,
        public gay?: boolean,
        public imagem?: string,
        public status?: Status,
        public visitado?: number,
        public datacriado?: any,
        public userId?: number,
        public visibilidadeId?: number,
        public tipoId?: number,
        public tags?: BaseEntity[],
        public paginas?: BaseEntity[],
    ) {
        this.gay = false;
    }
}
