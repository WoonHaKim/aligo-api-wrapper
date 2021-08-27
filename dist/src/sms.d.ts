import { AligoAPICommonType, AligoApiCommonResult } from "./sendForm";
declare type AligoMessgeType = "SMS" | "LMS" | "MMS";
export interface AligoSendSMSParams extends AligoAPICommonType {
    sender?: string;
    receiver: string;
    msg: string;
    msg_type?: AligoMessgeType;
    destination?: string;
    rdate?: string;
    rtime?: string;
    image?: any;
}
export interface AligoApiSmsSendResult extends AligoApiCommonResult {
    result_code: number;
    message: string;
    msg_id?: number;
    success_cnt?: number;
    error_count?: 0;
    msg_type?: AligoMessgeType;
}
export interface AligoSmsDetail {
    mid: string;
    mdid: number;
    type: AligoMessgeType;
    sms_count: string;
    reserve_state: string;
    msg: string;
    fail_count: string;
    reg_date: string;
    reserve: string;
}
export interface AligoSmsSendListResult extends AligoApiCommonResult {
    result_code: number;
    message: string;
    list: AligoSmsDetail[];
    next_yn: "Y" | "N";
}
declare const _default: {
    sendAligoSmsRequest: (params: AligoSendSMSParams) => Promise<AligoApiSmsSendResult>;
    sendAligoSmsMassRequest: (params: AligoSendSMSParams) => Promise<AligoApiSmsSendResult>;
    listAligoSmsSent: (params: AligoSendSMSParams) => Promise<AligoSmsSendListResult>;
    listAligoSmsSendDetail: (params: AligoSendSMSParams) => Promise<AligoApiSmsSendResult>;
    getAligoSmsRemain: (params: AligoAPICommonType) => Promise<AligoApiSmsSendResult>;
};
export default _default;
