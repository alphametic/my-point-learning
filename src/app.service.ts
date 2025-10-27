/**
 * AppService - 루트 서비스
 *
 * 비즈니스 로직을 처리하는 역할을 합니다.
 *
 * 비유: 레스토랑의 "주방장"
 * - 실제 요리(로직)를 만듦
 * - 웨이터(Controller)가 주문을 전달하면 요리를 만들어 줌
 *
 * ❓ Controller vs Service 역할 구분
 * Controller: HTTP 요청/응답 처리 (웨이터)
 * Service: 실제 비즈니스 로직 처리 (주방장)
 */

import { Injectable } from '@nestjs/common';
import { timestamp } from 'rxjs';

/**
 * @Injectable() 데코레이터
 *
 * "이 클래스는 주입 가능합니다(Injectable)"라고 NestJS에게 알려줌
 *
 * 💡 이게 있어야:
 * 1. providers: [AppService]에 등록 가능
 * 2. 다른 클래스에서 주입받을 수 있음
 * 3. NestJS가 자동으로 인스턴스를 생성 (Singleton)
 *
 * Singleton: 앱 전체에서 하나의 인스턴스만 생성되어 공유됨
 */
@Injectable()
export class AppService {
  /**
   * getHello 메서드
   *
   * "Hello NestJS!" 문자열을 반환하는 간단한 메서드
   *
   * @returns {string} "Hello NestJS!" 문자열
   *
   * 💡 실제 프로젝트에서는:
   * - 데이터베이스에서 데이터 가져오기
   * - 외부 API 호출
   * - 복잡한 계산
   * - 비즈니스 규칙 적용
   * 등의 로직이 여기에 들어갑니다!
   */
  getHello(): string {
    return 'Hello NestJS!';

    // 나중에 이렇게 바뀔 수 있음:
    // const users = await this.userRepository.find();
    // const totalPoints = this.calculatePoints(users);
    // return { users, totalPoints };
  }

  getHelloMessage(): string {
    return '안녕하세요  NestJS를 배우고 있습니다. !';
  }

  getCurrentTime(): object {
    const now = new Date();
    return {
      currentTieme: now.toLocaleDateString('ko-KR'),
      timestamp: now.getTime(),
      message: '현재 시간 정보입니다.',
    }
  }

  getUser(): object {
    return {
      id: 1,
      name: '홍길동',
      email: 'hong@example.com',
      age: 25,
      city: 'Seoul',
      hobbies: ['reading', 'traveling', 'coding'],
      isActive: true,
    }
  }

}
