import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    // エラーハンドリングやログ出力の処理をここに記述
  }
}