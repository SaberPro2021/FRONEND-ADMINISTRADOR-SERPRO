import { Answer } from './answer.model';

export class Question {

    _id: string;
    title: string;
    icfesModuleId: string;
    statement: string;
    questionType: string;
    answers: Answer [];
    feedback : string;

    constructor (_id?: string ,statement?: string, answers?: Answer [], type?: string, correctAnswer?:string, feedback?:string) {
        this._id = _id;
        this.statement = statement;
        if (answers) {
            this.answers = answers;
        } else {
            this.answers = [];
        }
        this.questionType = type;
        this.feedback = feedback;
    }
}
