"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionController = void 0;
const common_1 = require("@nestjs/common");
const question_service_1 = require("./question.service");
const question_dto_1 = require("./dto/question.dto");
let QuestionController = class QuestionController {
    constructor(questionService) {
        this.questionService = questionService;
    }
    getTest() {
        throw new common_1.HttpException('获取数据失败', common_1.HttpStatus.BAD_REQUEST);
    }
    findAll(keyword, page, pageSize) {
        console.log(keyword, page, pageSize);
        return {
            list: ['a', 'b', 'c'],
            count: 10,
        };
    }
    create() {
        return this.questionService.create();
    }
    findOne(id) {
        return this.questionService.findOne(id);
    }
    updateOne(id, questionDto) {
        console.log('questionDto', questionDto);
        return {
            id,
            title: 'aaa',
            desc: 'bbb',
        };
    }
    deleteOne(id) {
        return this.questionService.delete(id);
    }
};
exports.QuestionController = QuestionController;
__decorate([
    (0, common_1.Get)('test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], QuestionController.prototype, "getTest", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('keyword')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, question_dto_1.QuestionDto]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "updateOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "deleteOne", null);
exports.QuestionController = QuestionController = __decorate([
    (0, common_1.Controller)('question'),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], QuestionController);
//# sourceMappingURL=question.controller.js.map