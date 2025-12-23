/**
 * AppController - 루트 컨트롤러
 *
 * HTTP 요청을 받아서 처리하는 역할을 합니다.
 *
 * 비유: 레스토랑의 "웨이터"
 * - 손님(브라우저)의 주문(HTTP 요청)을 받음
 * - 주방(Service)에 전달
 * - 요리(응답)를 손님에게 전달
 */

import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { PointService } from './modules/point/point.service';
import { UserService } from './modules/user/user.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './modules/user/create-user.dto';

/**
 * @Controller() 데코레이터
 *
 * "이 클래스는 컨트롤러입니다"라고 NestJS에게 알려줌
 * 괄호 안이 비어있으면 루트 경로(/)를 의미
 *
 * 예시:
 * @Controller() → 루트 경로: /
 * @Controller('users') → /users
 * @Controller('products') → /products
 */
@Controller()
export class AppController {
  /**
   * 생성자 (Constructor)
   *
   * AppService를 주입받습니다 (의존성 주입 - Dependency Injection)
   *
   * @param appService - AppService의 인스턴스
   *
   * 💡 NestJS가 자동으로 AppService를 생성해서 넣어줍니다!
   * 우리가 직접 new AppService() 할 필요 없음
   *
   * private: 이 클래스 안에서만 사용 가능
   * readonly: 값을 변경할 수 없음 (읽기 전용)
   */
  constructor(
    private readonly appService: AppService,
    private readonly pointService: PointService,
    private readonly userService: UserService,
  ) {}

  /**
   * @Get() 데코레이터
   *
   * HTTP GET 요청을 처리하는 메서드입니다.
   * 브라우저 주소창에 입력하는 것이 GET 요청!
   *
   * 경로: GET /
   * 예시: http://localhost:3000/
   *
   * 만약 @Get('hello')라면?
   * 경로: GET /hello
   * 예시: http://localhost:3000/hello
   */
  @Get()
  getHello(): string {
    // appService의 getHello() 메서드를 호출
    // 실제 로직은 Service에서 처리 (역할 분리!)
    return this.appService.getHello();

    // 🔄 흐름:
    // 1. 브라우저에서 http://localhost:3000 접속
    // 2. @Get()이 요청을 감지
    // 3. getHello() 메서드 실행
    // 4. appService.getHello() 호출
    // 5. Service에서 "Hello World!" 반환
    // 6. 브라우저에 "Hello World!" 전달
  }
  @Get('hello')
  getHelloMessage(): string {
    return this.appService.getHelloMessage();
  }

  @Get('time')
  getCurrentTime(): object {
    return this.appService.getCurrentTime();
  }

  @Get('user')
  getUser(): object {
    return this.appService.getUser();
  }

  @Get('point-info')
  getPointInfo(): object {
    return this.pointService.getUserPointInfo()
  }

  @Get('users')
  async getUsers(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Post('users')
  async createUser(@Body() body: CreateUserDto): Promise<User> {
     console.log('받은 body:', body);  // 👈 디버깅용 추가!
         // body가 없으면 에러 처리
    if (!body || !body.name || !body.email) {
      throw new Error('name과 email을 보내주세요!');
    }

    return await this.userService.createUser(body.name, body.email);
  }
}