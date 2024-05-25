export declare class QuestionService {
    private readonly questionModel;
    constructor(questionModel: any);
    create(): Promise<any>;
    findOne(id: string): Promise<any>;
    delete(id: string): Promise<any>;
}
