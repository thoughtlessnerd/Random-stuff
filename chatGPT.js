import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-bC1KDFkiCDhaR2W8FvTrqpwd",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
