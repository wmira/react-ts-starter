import { doSomething1 } from 'module1/util'

interface ILoginResult {
  token?: string  
}

export interface IApi {
  login(username: string, password: string): Promise<ILoginResult>
}

export const creatApi = (): IApi => {
  return {
    async login(username: string, password: string) {
      const res = await fetch('/api/auth', { method: 'post' });
      return { token: doSomething1() };
    }
  }
}