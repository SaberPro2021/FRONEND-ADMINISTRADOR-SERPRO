import { IcfesTest } from './test.model';

export class IcfesModule {
    _id: string;
    knowledgeArea: string;
    description: string;
    evaluationSubject: string;
    testsList: IcfesTest [];
    imageModule: string;
}
