import { QuestionService } from './question.service';
import { QuestionDto } from './dto/question.dto';
export declare class QuestionController {
    private readonly questionService;
    constructor(questionService: QuestionService);
    getTest(): string;
    findAll(keyword: string, page: number, pageSize: number): {
        list: string[];
        count: number;
    };
    create(): Promise<any>;
    findOne(id: string): Promise<any>;
    updateOne(id: string, questionDto: QuestionDto): {
        id: string;
        title: string;
        desc: string;
    };
    deleteOne(id: string): Promise<any>;
}
