import { ModuleMetadata, Type } from "@nestjs/common/interfaces";
import { IncomingWebhookDefaultArguments } from "@slack/webhook";

export interface SlackOptions extends IncomingWebhookDefaultArguments {
  url: string;
}

export interface SlackOptionsFactory {
  createSlackOptions(): Promise<SlackOptions> | SlackOptions;
}

export interface SlackAsyncOptions extends Pick<ModuleMetadata, "imports"> {
  inject?: any[];
  useClass?: Type<SlackOptionsFactory>;
  useExisting?: Type<SlackOptionsFactory>;
  useFactory?: (...args: any[]) => Promise<SlackOptions> | SlackOptions;
}
