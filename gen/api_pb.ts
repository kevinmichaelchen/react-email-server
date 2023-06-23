// @generated by protoc-gen-es v1.2.1 with parameter "target=ts"
// @generated from file api.proto (package buf.connect.demo.eliza.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message buf.connect.demo.eliza.v1.RenderOptions
 */
export class RenderOptions extends Message<RenderOptions> {
  /**
   * Whether the email output is beautified.
   *
   * @generated from field: bool pretty = 1;
   */
  pretty = false;

  constructor(data?: PartialMessage<RenderOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.connect.demo.eliza.v1.RenderOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pretty", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RenderOptions {
    return new RenderOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RenderOptions {
    return new RenderOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RenderOptions {
    return new RenderOptions().fromJsonString(jsonString, options);
  }

  static equals(a: RenderOptions | PlainMessage<RenderOptions> | undefined, b: RenderOptions | PlainMessage<RenderOptions> | undefined): boolean {
    return proto3.util.equals(RenderOptions, a, b);
  }
}

/**
 * @generated from message buf.connect.demo.eliza.v1.WelcomeEmail
 */
export class WelcomeEmail extends Message<WelcomeEmail> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  constructor(data?: PartialMessage<WelcomeEmail>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.connect.demo.eliza.v1.WelcomeEmail";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WelcomeEmail {
    return new WelcomeEmail().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WelcomeEmail {
    return new WelcomeEmail().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WelcomeEmail {
    return new WelcomeEmail().fromJsonString(jsonString, options);
  }

  static equals(a: WelcomeEmail | PlainMessage<WelcomeEmail> | undefined, b: WelcomeEmail | PlainMessage<WelcomeEmail> | undefined): boolean {
    return proto3.util.equals(WelcomeEmail, a, b);
  }
}

/**
 * @generated from message buf.connect.demo.eliza.v1.CreateWelcomeEmailRequest
 */
export class CreateWelcomeEmailRequest extends Message<CreateWelcomeEmailRequest> {
  /**
   * @generated from field: buf.connect.demo.eliza.v1.RenderOptions options = 1;
   */
  options?: RenderOptions;

  /**
   * @generated from field: buf.connect.demo.eliza.v1.WelcomeEmail args = 2;
   */
  args?: WelcomeEmail;

  constructor(data?: PartialMessage<CreateWelcomeEmailRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.connect.demo.eliza.v1.CreateWelcomeEmailRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "options", kind: "message", T: RenderOptions },
    { no: 2, name: "args", kind: "message", T: WelcomeEmail },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateWelcomeEmailRequest {
    return new CreateWelcomeEmailRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateWelcomeEmailRequest {
    return new CreateWelcomeEmailRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateWelcomeEmailRequest {
    return new CreateWelcomeEmailRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateWelcomeEmailRequest | PlainMessage<CreateWelcomeEmailRequest> | undefined, b: CreateWelcomeEmailRequest | PlainMessage<CreateWelcomeEmailRequest> | undefined): boolean {
    return proto3.util.equals(CreateWelcomeEmailRequest, a, b);
  }
}

/**
 * @generated from message buf.connect.demo.eliza.v1.CreateWelcomeEmailResponse
 */
export class CreateWelcomeEmailResponse extends Message<CreateWelcomeEmailResponse> {
  /**
   * @generated from field: string html = 1;
   */
  html = "";

  constructor(data?: PartialMessage<CreateWelcomeEmailResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.connect.demo.eliza.v1.CreateWelcomeEmailResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "html", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateWelcomeEmailResponse {
    return new CreateWelcomeEmailResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateWelcomeEmailResponse {
    return new CreateWelcomeEmailResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateWelcomeEmailResponse {
    return new CreateWelcomeEmailResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateWelcomeEmailResponse | PlainMessage<CreateWelcomeEmailResponse> | undefined, b: CreateWelcomeEmailResponse | PlainMessage<CreateWelcomeEmailResponse> | undefined): boolean {
    return proto3.util.equals(CreateWelcomeEmailResponse, a, b);
  }
}

/**
 * @generated from message buf.connect.demo.eliza.v1.EmailOptions
 */
export class EmailOptions extends Message<EmailOptions> {
  /**
   * @generated from field: string to = 1;
   */
  to = "";

  /**
   * @generated from field: string subject = 2;
   */
  subject = "";

  constructor(data?: PartialMessage<EmailOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.connect.demo.eliza.v1.EmailOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "to", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "subject", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EmailOptions {
    return new EmailOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EmailOptions {
    return new EmailOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EmailOptions {
    return new EmailOptions().fromJsonString(jsonString, options);
  }

  static equals(a: EmailOptions | PlainMessage<EmailOptions> | undefined, b: EmailOptions | PlainMessage<EmailOptions> | undefined): boolean {
    return proto3.util.equals(EmailOptions, a, b);
  }
}

/**
 * @generated from message buf.connect.demo.eliza.v1.SendWelcomeEmailRequest
 */
export class SendWelcomeEmailRequest extends Message<SendWelcomeEmailRequest> {
  /**
   * @generated from field: buf.connect.demo.eliza.v1.EmailOptions options = 1;
   */
  options?: EmailOptions;

  /**
   * @generated from field: buf.connect.demo.eliza.v1.WelcomeEmail args = 2;
   */
  args?: WelcomeEmail;

  constructor(data?: PartialMessage<SendWelcomeEmailRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.connect.demo.eliza.v1.SendWelcomeEmailRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "options", kind: "message", T: EmailOptions },
    { no: 2, name: "args", kind: "message", T: WelcomeEmail },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendWelcomeEmailRequest {
    return new SendWelcomeEmailRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendWelcomeEmailRequest {
    return new SendWelcomeEmailRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendWelcomeEmailRequest {
    return new SendWelcomeEmailRequest().fromJsonString(jsonString, options);
  }

  static equals(a: SendWelcomeEmailRequest | PlainMessage<SendWelcomeEmailRequest> | undefined, b: SendWelcomeEmailRequest | PlainMessage<SendWelcomeEmailRequest> | undefined): boolean {
    return proto3.util.equals(SendWelcomeEmailRequest, a, b);
  }
}

/**
 * @generated from message buf.connect.demo.eliza.v1.SendWelcomeEmailResponse
 */
export class SendWelcomeEmailResponse extends Message<SendWelcomeEmailResponse> {
  constructor(data?: PartialMessage<SendWelcomeEmailResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "buf.connect.demo.eliza.v1.SendWelcomeEmailResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendWelcomeEmailResponse {
    return new SendWelcomeEmailResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendWelcomeEmailResponse {
    return new SendWelcomeEmailResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendWelcomeEmailResponse {
    return new SendWelcomeEmailResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SendWelcomeEmailResponse | PlainMessage<SendWelcomeEmailResponse> | undefined, b: SendWelcomeEmailResponse | PlainMessage<SendWelcomeEmailResponse> | undefined): boolean {
    return proto3.util.equals(SendWelcomeEmailResponse, a, b);
  }
}

