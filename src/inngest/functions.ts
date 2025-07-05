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
import { Sandbox } from "@e2b/code-interpreter";
import { getSandbox } from "./utils";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    const sandboxId = await step.run("get-sandbox-id", async () => {
      const sandbox = await Sandbox.create("ai-nextjs-test-2");
      return sandbox.sandboxId;
    });

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

    const sandboxUrl = await step.run("get-sandbox-url", async () => {
      const sandbox = await getSandbox(sandboxId);
      const host = sandbox.getHost(3000);
      return `https://${host}`;
    });

    return { output, sandboxUrl };
  }
);
