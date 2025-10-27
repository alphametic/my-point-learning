# NestJS 학습 진행 상황

> 📅 **마지막 업데이트**: 2025-10-27
> 🎯 **다음 할 일**: 기본 구조 이해 → 완료 후 Hello World API 실행

---

## ✅ 전체 진행률

**Week 1**: ███████ 100% (7/7 완료) 🎉
**Week 2**: ░░░░░░░░░ 0% (0/9 완료)
**Week 3**: ░░░░░░░░░ 0% (0/7 완료)

**전체**: ███████████░░░░░░░░░ 35% (8/23 완료)

---

## Week 1: 기초 다지기

### Day 1-2: 프로젝트 설정

- [x] **NestJS CLI 설치** ✅ 완료 (2025-10-27)
- [x] **새 프로젝트 생성** ✅ 완료 (2025-10-27)
  - 프로젝트명: `my-point-learning`
- [x] **기본 구조 이해** ✅ 완료 (2025-10-27)
  - main.ts, app.module.ts, controller, service 개념
  - 의존성 주입(DI) 개념 이해
  - Provider와 Controller의 역할 이해
- [x] **Hello World API 실행** ✅ 완료 (2025-10-27)
  - 서버 시작 및 기본 API 테스트
  - HTTP 304 Not Modified 이해
  - Hot Reload 체험
  - 모든 파일에 한글 주석 추가 완료

### Day 3-4: 첫 API 만들기

- [x] **Controller 이해** ✅ 완료 (2025-10-27)
  - HTTP 요청 처리 방식
  - 데코레이터 활용법 (@Get)
  - 경로 지정 방법 (@Get('경로'))
- [x] **Service 이해** ✅ 완료 (2025-10-27)
  - 비즈니스 로직 분리
  - 의존성 주입 기초
  - 여러 메서드 작성 연습
- [x] **실습: 새 엔드포인트 만들기** ✅ 완료 (2025-10-27)
  - GET /hello - 문자열 반환
  - GET /time - 객체 반환 (Date 사용)
  - GET /user - 복잡한 객체 반환 (배열, 다양한 타입)
- [x] **Swagger 추가** ✅ 완료 (2025-10-27)
  - @nestjs/swagger 패키지 설치
  - main.ts에 Swagger 설정 추가
  - DocumentBuilder로 API 문서 정보 설정
  - /api 경로에 Swagger UI 설정
  - 4개의 API 자동 문서화 완료
- [ ] 의존성 주입 심화 ← 📍 **다음 위치**
  - DI 패턴 깊이 이해
  - Provider 고급 사용법

### Day 5-7: 데이터베이스 연결

- [ ] TypeORM 설정
- [ ] MySQL 연결
- [ ] 첫 Entity 생성
- [ ] Repository 패턴 이해

---

## Week 2: CRUD 구현

### Day 8-10: User CRUD

- [ ] User Entity 정의
- [ ] DTO 작성
- [ ] Service 메서드 구현
- [ ] Controller 엔드포인트 추가

### Day 11-14: Validation 추가

- [ ] class-validator 설치
- [ ] DTO에 검증 규칙 추가
- [ ] 에러 처리
- [ ] Swagger 문서화

---

## Week 3: 고급 기능

### Day 15-17: Relations

- [ ] OneToMany 관계
- [ ] ManyToOne 관계
- [ ] 관계 조회

### Day 18-21: 추가 기능

- [ ] Transaction 처리
- [ ] Custom Decorator
- [ ] Interceptor
- [ ] Exception Filter

---

## 📝 학습 노트

### 2025-10-27 (Day 1)

**완료한 것**:
- ✅ NestJS CLI 설치 완료
- ✅ 새 프로젝트 생성 (`my-point-learning`)
- ✅ 프로젝트 기본 구조 이해 완료
  - main.ts: 애플리케이션 진입점 (bootstrap 함수)
  - app.module.ts: 루트 모듈 (imports, controllers, providers)
  - app.controller.ts: HTTP 요청 처리 (@Controller, @Get)
  - app.service.ts: 비즈니스 로직 (@Injectable)

**배운 개념**:
- 의존성 주입(DI): NestJS가 자동으로 인스턴스를 생성해서 주입
- Provider: 주입 가능한 것들 (Service, Repository 등)
- Controller vs Service: 요청 처리 vs 로직 처리
- Trailing Comma: 코드 유지보수를 위한 컨벤션
- yarn.lock: 패키지 버전을 정확히 고정하는 파일
- HTTP 304 Not Modified: 캐시 사용 (정상 동작)
- Hot Reload: 코드 수정 시 자동 재시작
- const vs let: 재할당 불가 vs 가능
- object 타입: TypeScript의 타입 시스템
- 객체 구조: key-value 쌍, 배열, 불린 등

**완료한 작업**:
- ✅ 서버 실행 성공 (yarn start:dev)
- ✅ Hello World API 테스트 완료
- ✅ 모든 코드 파일에 한글 주석 추가
  - main.ts: 애플리케이션 진입점 설명
  - app.module.ts: 모듈 시스템 설명
  - app.controller.ts: 컨트롤러 역할 설명
  - app.service.ts: 서비스 역할 설명
- ✅ 새 엔드포인트 3개 직접 구현 성공!
  - GET /hello: 문자열 반환
  - GET /time: 현재 시간 객체 (Date 사용)
  - GET /user: 복잡한 사용자 정보 객체 (배열 포함)

**실습 성과**:
- 🎯 총 4개의 REST API 구축 완료
- 🎯 Controller-Service 패턴 반복 학습
- 🎯 다양한 데이터 타입 다루기 (문자열, 숫자, 객체, 배열, 불린)
- 🎯 실제로 동작하는 API 서버 완성!

**추가 완료**:
- ✅ Swagger 추가 완료! (http://localhost:3000/api)
  - DocumentBuilder로 API 메타 정보 설정
  - 4개의 API 자동 문서화
  - 브라우저에서 "Try it out"으로 테스트 가능

**다음 세션 계획**:
- Week 2로 진행 (데이터베이스 연결)
  - TypeORM 설치 및 설정
  - MySQL 연결
  - 첫 Entity 생성

**메모**:
- `new Service()` 대신 DI를 사용하는 이유 완벽히 이해!
- providers에 왜 Service만 넣는지 이해 완료
- node_modules 재설치는 의존성 문제 해결의 최후 수단
- yarn.lock으로 팀원 모두 같은 패키지 버전 사용
- const는 기본, let은 필요할 때만!
- 객체 반환 시 NestJS가 자동으로 JSON 변환

---

## 🤔 질문 목록

### 개념 질문
- [ ] 의존성 주입이 정확히 어떻게 동작하는지?
- [ ] Module을 왜 꼭 만들어야 하는지?
- [ ] Controller와 Service를 왜 분리하는지?

### 기술적 질문
- [ ] async/await은 언제 사용하나?
- [ ] 데코레이터(@)는 어떻게 작동하나?

---

## 💡 배운 것 요약

### 프로젝트 구조
- `src/main.ts`: 애플리케이션 진입점 (시동을 거는 곳)
- `src/app.module.ts`: 루트 모듈 (모든 부품을 조립하는 설계도)
- `src/app.controller.ts`: 컨트롤러 (HTTP 요청 처리)
- `src/app.service.ts`: 서비스 (비즈니스 로직 처리)

### NestJS 기본 개념
- **Module**: 기능별로 코드를 분리하는 단위
- **Controller**: API 엔드포인트 정의
- **Service**: 실제 로직 처리
- **의존성 주입**: NestJS가 자동으로 인스턴스 생성 및 주입

---

## 🎯 학습 목표 체크

### 단기 목표 (이번 주)
- [ ] NestJS 기본 구조 완벽히 이해
- [ ] 첫 API 만들기 완료
- [ ] Swagger 추가하여 문서화

### 중기 목표 (2주차)
- [ ] User CRUD 완성
- [ ] DTO Validation 구현

### 장기 목표 (3주차)
- [ ] Relations 이해
- [ ] 고급 기능 구현

---

## 📊 학습 통계

- **총 학습 일수**: 1일
- **완료한 단계**: 2개
- **남은 단계**: 21개
- **예상 완료일**: 약 3주 후

---

## 💪 다음 세션 시작 방법

다음에 학습을 계속하려면:

```
"학습 계속할게요" 또는 "이어서 공부해요"
```

Claude가 자동으로 이 파일을 읽고 마지막 지점부터 안내해드립니다!
