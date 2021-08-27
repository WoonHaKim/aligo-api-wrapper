"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sendForm_1 = __importDefault(require("./sendForm"));
const ALIGO_API_HOST = "https://apis.aligo.in";
const sendAligoSmsRequest = (params) => __awaiter(void 0, void 0, void 0, function* () { return yield sendForm_1.default(`${ALIGO_API_HOST}/send/`, params); });
const sendAligoSmsMassRequest = (params) => __awaiter(void 0, void 0, void 0, function* () { return yield sendForm_1.default(`${ALIGO_API_HOST}/send/mass/`, params); });
const listAligoSmsSent = (params) => __awaiter(void 0, void 0, void 0, function* () { return yield sendForm_1.default(`${ALIGO_API_HOST}/list/`, params); });
const listAligoSmsSendDetail = (params) => __awaiter(void 0, void 0, void 0, function* () { return yield sendForm_1.default(`${ALIGO_API_HOST}/sms_list/`, params); });
const getAligoSmsRemain = (params) => __awaiter(void 0, void 0, void 0, function* () { return yield sendForm_1.default(`${ALIGO_API_HOST}/remain/`, params); });
exports.default = {
    sendAligoSmsRequest,
    sendAligoSmsMassRequest,
    listAligoSmsSent,
    listAligoSmsSendDetail,
    getAligoSmsRemain,
};
