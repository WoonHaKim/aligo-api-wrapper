import sendForm from "./src/sendForm";
declare const _default: {
  sendForm: typeof sendForm;
  SMS: {
    sendAligoSmsRequest: (
      params: import("./src/sms").AligoSendSMSParams
    ) => Promise<import("./src/sms").AligoApiSmsSendResult>;
    sendAligoSmsMassRequest: (
      params: import("./src/sms").AligoSendSMSParams
    ) => Promise<import("./src/sms").AligoApiSmsSendResult>;
    listAligoSmsSent: (
      params: import("./src/sms").AligoSendSMSParams
    ) => Promise<import("./src/sms").AligoSmsSendListResult>;
    listAligoSmsSendDetail: (
      params: import("./src/sms").AligoSendSMSParams
    ) => Promise<import("./src/sms").AligoApiSmsSendResult>;
    getAligoSmsRemain: (
      params: import("./src/sendForm").AligoAPICommonType
    ) => Promise<import("./src/sms").AligoApiSmsSendResult>;
  };
};
export default _default;
