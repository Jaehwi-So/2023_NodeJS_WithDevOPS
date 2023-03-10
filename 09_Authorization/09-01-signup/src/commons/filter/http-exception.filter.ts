import { Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException) {
    const status = exception.getStatus();
    const message = exception.message;
    console.log('============ Exception Occured =============');
    console.log(`CODE : ${status}, Message : ${message}`);
    console.log('============================================');
  }
}
