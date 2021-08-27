"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sendForm_1 = __importDefault(require("./src/sendForm"));
const sms_1 = __importDefault(require("./src/sms"));
exports.default = {
    sendForm: sendForm_1.default,
    SMS: sms_1.default,
};
