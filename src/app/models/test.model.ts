import {Question} from  './question.model';
export class IcfesTest {

    title: string;
    description: string;
    progress: number;
    moduleId: String;
    questions: String[];
    imageTest: string;

    constructor () {
      this.questions = new Array <String>();
    }


}
