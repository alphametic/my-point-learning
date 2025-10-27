/**
 * AppModule - 루트 모듈
 *
 * NestJS 애플리케이션의 최상위 모듈입니다.
 * 모든 컨트롤러, 서비스, 다른 모듈을 여기서 조립합니다.
 *
 * 비유: 레고 블록의 "기초판" - 모든 부품을 여기에 조립
 */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';



/**
 * @Module 데코레이터
 *
 * "이 클래스는 모듈입니다"라고 NestJS에게 알려주는 표시
 * 데코레이터: @ 기호로 시작하며, 클래스에 메타데이터를 추가
 */
@Module({
  /**
   * imports: 다른 모듈을 가져올 때 사용
   *
   * 예: TypeORM, ConfigModule 등을 나중에 여기에 추가합니다.
   * 현재는 비어있음 (추가할 모듈이 없음)
   */
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
  ],

  /**
   * controllers: HTTP 요청을 처리하는 컨트롤러 목록
   *
   * 역할: 웨이터 (손님의 주문을 받음)
   * AppController: 루트 경로(/)의 요청을 처리
   */
  controllers: [AppController],

  /**
   * providers: 주입 가능한 서비스(Provider) 목록
   *
   * 역할: 주방장 (실제 요리를 만듦)
   * AppService: 비즈니스 로직을 처리
   *
   * ❓ 왜 Service만 여기에?
   * - Controller는 주입을 "받는" 쪽
   * - Service는 주입을 "당하는" 쪽
   * - @Injectable() 데코레이터가 있는 것들을 등록
   */
  providers: [AppService],
})
export class AppModule {
  // 모듈 클래스는 보통 비어있습니다.
  // 설정은 모두 @Module 데코레이터 안에!
}
