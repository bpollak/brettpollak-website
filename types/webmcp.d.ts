type WebMCPToolInput = Record<string, unknown>;

interface WebMCPToolExecutionOptions {
  signal?: AbortSignal;
}

interface WebMCPTool {
  name: string;
  description: string;
  inputSchema?: Record<string, unknown>;
  execute: (
    input: WebMCPToolInput,
    options?: WebMCPToolExecutionOptions
  ) => unknown | Promise<unknown>;
}

interface WebMCPRegisterToolOptions {
  signal?: AbortSignal;
  exposedTo?: string[];
}

interface WebMCPModelContext {
  registerTool(
    tool: WebMCPTool,
    options?: WebMCPRegisterToolOptions
  ): Promise<unknown>;
}

declare global {
  interface Document {
    modelContext?: WebMCPModelContext;
  }
}

export {};
