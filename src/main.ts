/**
 * NestJS 애플리케이션 진입점 (Entry Point)
 *
 * 이 파일은 서버를 시작하는 파일입니다.
 * 자동차로 비유하면 "시동 버튼"과 같습니다.
 */
import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
/**
 * bootstrap 함수
 *
 * NestJS 애플리케이션을 생성하고 시작하는 함수입니다.
 *
 * @async - 비동기 함수입니다 (시간이 걸리는 작업을 기다림)
 */
async function bootstrap() {
  // NestFactory.create(): AppModule을 기반으로 NestJS 앱 생성
  // await: 앱이 완전히 만들어질 때까지 기다림
  const app = await NestFactory.create(AppModule);

  // Swagger 설정
  const config = new DocumentBuilder()
    .setTitle('My Point Learning API')
    .setDescription('My Point Learning API 문서입니다.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // app.listen(): 서버를 시작하고 특정 포트에서 요청을 기다림
  // process.env.PORT: 환경 변수에서 포트 번호 가져오기
  // ?? 3000: 환경 변수가 없으면 3000번 포트 사용

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  await app.listen(process.env.PORT ?? 3000);

  // 서버가 시작되면 http://localhost:3000 으로 접속 가능!
}

// bootstrap 함수 실행 - 여기서 모든 것이 시작됩니다!
bootstrap();
