import { inngest } from "./client";
import {
  createAgent,
  createNetwork,
  createState,
  createTool,
  type Message,
  openai,
  type Tool,
} from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    const codeAgent = createAgent({
      name: "code-agent",
      system:
        "you are an expert next.js developer ,you write readable , maintainable code, you write simple Next.js & React snippets",
      model: openai({
        model: "deepseek-chat",
        apiKey: process.env.DEEPSEEK_API_KEY,
        baseUrl: "https://api.deepseek.com/v1",
      }),
    });

    const { output } = await codeAgent.run(
      `summarizer the following text: ${event.data.value}`
    );

    return { output };
  }
);
