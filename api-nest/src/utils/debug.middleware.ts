import { NestMiddleware } from '@nestjs/common';
import { sessionType } from './session-type';

export class DebugMiddleware implements NestMiddleware {
  use(req, res, next) {
    console.log(process.env.ENV_TEST);
    console.log(process.env.DEVELOP_ENV_TEST);
    console.log('debug middleware 実行');
    console.log(req.headers);
    if (req.headers['debug-key'] == process.env.DEBUG_KEY) {
      //デバッグキーが設定されていれば、ログイン済みとする
      const session: sessionType = req.session;
      session.login = {
        id: 0,
        user_id: 'debug',
        username: 'debug',
        password: 'debug',
        created_at: null,
        updated_at: null,
      };
    }
    next();
  }
}
