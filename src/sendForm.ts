import FormData from "form-data";
import fetch from "isomorphic-fetch";

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

async function sendForm<T extends AligoApiCommonResult>(
  url: string,
  params: AligoAPICommonType
): Promise<T> {
  const requestData = new FormData();

  for await (const [k, v] of Object.entries(params)) {
    requestData.append(k, v);
  }

  const result = await fetch(url, { method: "post", body: requestData });
  const json = (await result.json()) as T;

  return json;
}

export default sendForm;
