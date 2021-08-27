import sendForm, { AligoAPICommonType, AligoApiCommonResult } from "./sendForm";

const ALIGO_API_HOST = "https://apis.aligo.in";

type AligoMessgeType = "SMS" | "LMS" | "MMS";

export interface AligoSendSMSParams extends AligoAPICommonType {
  sender?: string; // constant에 고정되어있음
  receiver: string;
  msg: string;

  msg_type?: AligoMessgeType;
  destination?: string;

  rdate?: string;
  rtime?: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

const sendAligoSmsRequest: (
  params: AligoSendSMSParams
) => Promise<AligoApiSmsSendResult> = async (params: AligoSendSMSParams) =>
  await sendForm<AligoApiSmsSendResult>(`${ALIGO_API_HOST}/send/`, params);

const sendAligoSmsMassRequest: (
  params: AligoSendSMSParams
) => Promise<AligoApiSmsSendResult> = async (params: AligoSendSMSParams) =>
  await sendForm<AligoApiSmsSendResult>(`${ALIGO_API_HOST}/send/mass/`, params);

const listAligoSmsSent: (
  params: AligoSendSMSParams
) => Promise<AligoSmsSendListResult> = async (params: AligoSendSMSParams) =>
  await sendForm<AligoSmsSendListResult>(`${ALIGO_API_HOST}/list/`, params);

const listAligoSmsSendDetail: (
  params: AligoSendSMSParams
) => Promise<AligoApiSmsSendResult> = async (params: AligoSendSMSParams) =>
  await sendForm(`${ALIGO_API_HOST}/sms_list/`, params);

const getAligoSmsRemain: (
  params: AligoAPICommonType
) => Promise<AligoApiSmsSendResult> = async (params: AligoAPICommonType) =>
  await sendForm(`${ALIGO_API_HOST}/remain/`, params);

export default {
  sendAligoSmsRequest,
  sendAligoSmsMassRequest,
  listAligoSmsSent,
  listAligoSmsSendDetail,
  getAligoSmsRemain,
};
