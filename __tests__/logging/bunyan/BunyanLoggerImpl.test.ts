/** Spies for log methods **/
import { BunyanLoggerFactory } from "../../../src/logging";
import * as Bunyan from "bunyan";
const factory = new BunyanLoggerFactory();

let spyLogTrace: jest.SpyInstance,
  spyLogDebug: jest.SpyInstance,
  spyLogInfo: jest.SpyInstance,
  spyLogWarn: jest.SpyInstance,
  spyLogError: jest.SpyInstance,
  spyLogFatal: jest.SpyInstance;

beforeEach(() => {
  jest.resetAllMocks();
  spyLogTrace = jest.spyOn(Bunyan.prototype, "trace");
  spyLogDebug = jest.spyOn(Bunyan.prototype, "debug");
  spyLogInfo = jest.spyOn(Bunyan.prototype, "info");
  spyLogWarn = jest.spyOn(Bunyan.prototype, "warn");
  spyLogError = jest.spyOn(Bunyan.prototype, "error");
  spyLogFatal = jest.spyOn(Bunyan.prototype, "fatal");
});
const messageOnlyOpts = {
  message: "message",
};

const allOpts = {
  ...messageOnlyOpts,
  error: new Error("An Error"),
  data: {
    object: { prop: "value" },
  },
};
it("traces", () => {
  const logger = factory.createLogger("name");

  logger.trace(messageOnlyOpts);
  expect(spyLogTrace).toHaveBeenCalledWith(messageOnlyOpts.message);
  logger.trace(allOpts);
  expect(spyLogTrace).toHaveBeenCalledWith({ err: allOpts.error, ...allOpts.data }, allOpts.message);
});

it("debugs", () => {
  const logger = factory.createLogger("name");

  logger.debug(messageOnlyOpts);
  expect(spyLogDebug).toHaveBeenCalledWith(messageOnlyOpts.message);
  logger.debug(allOpts);
  expect(spyLogDebug).toHaveBeenCalledWith({ err: allOpts.error, ...allOpts.data }, allOpts.message);
});

it("infos", () => {
  const logger = factory.createLogger("name");

  logger.info(messageOnlyOpts);
  expect(spyLogInfo).toHaveBeenCalledWith(messageOnlyOpts.message);
  logger.info(allOpts);
  expect(spyLogInfo).toHaveBeenCalledWith({ err: allOpts.error, ...allOpts.data }, allOpts.message);
});

it("warns", () => {
  const logger = factory.createLogger("name");

  logger.warn(messageOnlyOpts);
  expect(spyLogWarn).toHaveBeenCalledWith(messageOnlyOpts.message);
  logger.warn(allOpts);
  expect(spyLogWarn).toHaveBeenCalledWith({ err: allOpts.error, ...allOpts.data }, allOpts.message);
});

it("errors", () => {
  const logger = factory.createLogger("name");

  logger.error(messageOnlyOpts);
  expect(spyLogError).toHaveBeenCalledWith(messageOnlyOpts.message);
  logger.error(allOpts);
  expect(spyLogError).toHaveBeenCalledWith({ err: allOpts.error, ...allOpts.data }, allOpts.message);
});

it("fatals", () => {
  const logger = factory.createLogger("name");

  logger.fatal(messageOnlyOpts);
  expect(spyLogFatal).toHaveBeenCalledWith(messageOnlyOpts.message);
  logger.fatal(allOpts);
  expect(spyLogFatal).toHaveBeenCalledWith({ err: allOpts.error, ...allOpts.data }, allOpts.message);
});
