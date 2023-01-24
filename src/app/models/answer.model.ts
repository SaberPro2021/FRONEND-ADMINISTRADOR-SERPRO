export class Answer {

    _id: string;
    statement: string;
    grade : number;
    constructor (_id?:string, grade?: number, statement?: string ) {
        this._id = _id;
        this.grade = grade ? grade : 0;
        this.statement = statement;
    }

}
