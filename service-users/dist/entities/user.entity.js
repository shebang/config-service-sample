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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const photo_entity_1 = require("./photo.entity");
const swagger_1 = require("@nestjs/swagger");
let User = class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
};
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column("nvarchar", { length: 20 }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column("nvarchar", { length: 20 }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: Number
    }),
    typeorm_1.Column("tinyint", { nullable: true }),
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
__decorate([
    swagger_1.ApiProperty({
        isArray: true,
        type: () => photo_entity_1.Photo
    }),
    typeorm_1.OneToMany(type => photo_entity_1.Photo, photo => photo.user, { cascade: true }),
    __metadata("design:type", Array)
], User.prototype, "photos", void 0);
User = __decorate([
    typeorm_1.Entity({ name: "service-users:User" }),
    __metadata("design:paramtypes", [String, String, Number])
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map