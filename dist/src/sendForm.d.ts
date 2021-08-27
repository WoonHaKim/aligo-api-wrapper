export interface AligoAPICommonType {
    /**
     * aligo api key
     */
    key: string;
    /**
     * aligo user id
     */
    user_id: string;
    /**
     * aligo sms sender number
     */
    sender?: string;
    testmode_yn?: "Y";
}
export interface AligoApiCommonResult {
    result_code: number;
    message: string;
}
declare function sendForm<T extends AligoApiCommonResult>(url: string, params: AligoAPICommonType): Promise<T>;
export default sendForm;
