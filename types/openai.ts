import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}
export enum OpenAIModelID {
  CUSTOM_1 = 'simple-conversation-chat',
  CUSTOM_2 = 'retrieval-conversation-chat'
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.CUSTOM_2;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.CUSTOM_1]: {
    id: OpenAIModelID.CUSTOM_1,
    name: 'SIMPLE',
    maxLength: 12000,
    tokenLimit: 3000,
  },
  [OpenAIModelID.CUSTOM_2]: {
    id: OpenAIModelID.CUSTOM_2,
    name: 'RETRIEVAL',
    maxLength: 12000,
    tokenLimit: 3000,
  },
};


