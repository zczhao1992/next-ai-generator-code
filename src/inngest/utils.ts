// import { SANDBOX_TIMEOUT_IN_MS } from "@/constants";
import { Sandbox } from "@e2b/code-interpreter";
import { AgentResult, type Message, TextMessage } from "@inngest/agent-kit";

export async function getSandbox(sandboxId: string) {
  const sandbox = await Sandbox.connect(sandboxId);
  //   await sandbox.setTimeout(SANDBOX_TIMEOUT_IN_MS); // 半小时

  return sandbox;
}
