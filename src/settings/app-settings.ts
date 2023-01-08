//базовые настройки env переменных
//по умолчанию переменные берутся сначала из ENV илм смотрят всегда на staging
//для подстановки локальных значений переменных использовать исключительно локальные env файлы env.development.local
//при необходимости добавляем сюда нужные приложению переменные
export type EnvironmentVariable = { [key: string]: string | undefined };
export type EnvironmentsTypes = 'DEVELOPMENT' | 'STAGING' | 'PRODUCTION' | 'TEST';
export class EnvironmentSettings {
  constructor(private env: EnvironmentsTypes) {}

  getEnv() {
    return this.env;
  }

  isProduction() {
    return this.env === 'PRODUCTION';
  }

  isStaging() {
    return this.env === 'STAGING';
  }

  isDevelopment() {
    return this.env === 'DEVELOPMENT';
  }

  isTesting() {
    return this.env === 'TEST';
  }
}

class APISettings {
  public readonly FRIEND_TOKEN: string;
  public readonly CONTENT_BASE_DIR: string;

  constructor(private envVariables: EnvironmentVariable) {
    this.FRIEND_TOKEN = envVariables.FRIEND_TOKEN || '123';
    this.CONTENT_BASE_DIR = envVariables.CONTENT_BASE_DIR || 'IT_INCUBATOR';
  }
}

export class DatabaseSettings {
  public readonly MONGO_URL: string;

  constructor(private envVariables: EnvironmentVariable) {
    this.MONGO_URL =
      envVariables.MONGO_URL ||
      'mongodb://learning_progress:2EDWVUQQZKk8zET6@3.69.103.174:27017/LEARNING_PROGRESS?retryWrites=true&w=majority';
  }
}

class LoggerSettings {
  public readonly HOST: string;
  public readonly URL_PATH: string;
  constructor(private envVariables: EnvironmentVariable) {
    this.HOST = envVariables.LOGGER_HOST || 'logger.staging.it-incubator.ru';
    this.URL_PATH = envVariables.LOGGER_URL_PATH || 'api/logger/create';
  }
}

const env = new EnvironmentSettings((process.env.ENV || 'DEVELOPMENT') as EnvironmentsTypes);

export class AppSettings {
  constructor(public env: EnvironmentSettings, public api: APISettings) {}
}
const api = new APISettings(process.env);
export const appSettings = new AppSettings(env, api);
