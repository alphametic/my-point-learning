# NestJS 학습 진행 상황

> 📅 **마지막 업데이트**: 2026-01-03
> 🎯 **다음 할 일**: Week 2 마무리 - UpdateUserDto 개선 (PartialType), Swagger 데코레이터 추가

---

## ✅ 전체 진행률

**Week 1**: ████████ 100% (7/7 완료) 🎉
**Week 2**: ███████░░ 80% (7/9 완료) 🔄
**Week 3**: ░░░░░░░░░ 0% (0/7 완료)

**전체**: █████████████████░░░ 61% (14/23 완료)

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
- [x] **의존성 주입 심화** ✅ 완료 (2025-11-01)
  - UserService 생성 (사용자 정보 관리)
  - PointService 생성 (UserService 주입받아 사용)
  - Service → Service 의존성 주입 실습 성공
  - app.module.ts에 providers 등록
  - app.controller.ts에서 PointService 사용
  - GET /point-info 엔드포인트 추가 및 테스트 성공

### Day 5-7: 데이터베이스 연결

- [x] **TypeORM 설정** ✅ 완료 (2025-11-04)
  - `src/config/typeorm.config.ts` 설정 파일 생성 (이미 완료되어 있었음)
  - TypeOrmModule.forRoot() 사용법 이해
  - 환경 변수로 DB 연결 정보 관리
- [x] **MySQL 연결** ✅ 완료 (2025-11-04)
  - .env 파일로 데이터베이스 설정
  - MySQL 데이터베이스 'my_point_learning' 생성
  - 서버 실행 및 TypeORM 연결 확인 성공
- [x] **첫 Entity 생성** ✅ 완료 (2025-11-22)
  - User Entity 생성 (src/entities/user.entity.ts)
  - Entity 데코레이터 이해 및 적용 (@Entity, @Column, @PrimaryGeneratedColumn, @CreateDateColumn)
  - typeorm.config.ts에 Entity 등록
  - 서버 실행 및 users 테이블 자동 생성 확인 성공
- [x] **Repository 패턴 이해 및 첫 CRUD 실습** ✅ 완료 (2025-12-21)
  - UserService 생성 및 Repository 주입 (@InjectRepository)
  - UserModule 생성 (TypeOrmModule.forFeature, exports)
  - app.module.ts에 UserModule 등록
  - GET /users, POST /users 엔드포인트 추가
  - 실제 데이터베이스에 데이터 저장/조회 성공
  - Swagger 테스트 및 curl 명령어 사용

---

## Week 2: CRUD 구현

### Day 8-10: User CRUD

- [x] **DTO 작성** ✅ 완료 (2025-12-23)
  - CreateUserDto 클래스 생성 (src/modules/user/dto/create-user.dto.ts)
  - UpdateUserDto 클래스 생성 (src/modules/user/dto/update-user.dto.ts)
  - DTO의 역할 이해 (Data Transfer Object)
- [x] **class-validator 설치 및 검증 추가** ✅ 완료 (2025-12-23)
  - class-validator, class-transformer 패키지 설치
  - CreateUserDto에 검증 데코레이터 추가 (@IsNotEmpty, @IsString, @MinLength, @IsEmail)
  - UpdateUserDto에 검증 데코레이터 추가 (@IsOptional)
  - main.ts에 ValidationPipe 전역 설정
- [x] **TypeORM 2단계 저장 프로세스 이해** ✅ 완료 (2025-12-23)
  - create() 메서드: DTO → Entity 인스턴스 변환 (메모리)
  - save() 메서드: Entity를 데이터베이스에 저장
  - Object.assign() 동작 원리 학습
- [x] **UserService 코드 작성** ✅ 완료 (2026-01-03)
  - findOne(), create(), updateUser(), remove() 메서드 구현
- [x] **에러 처리 추가** ✅ 완료 (2026-01-03)
  - NotFoundException (404): 사용자 없을 때
  - ConflictException (409): 이메일 중복 시
- [x] **Controller 업데이트** ✅ 완료 (2026-01-03)
  - GET /users/:id, PATCH /users/:id, DELETE /users/:id 추가
  - @Param, @Patch, @Delete 데코레이터 사용
- [ ] Swagger 데코레이터 추가
- [x] **전체 CRUD 테스트** ✅ 완료 (2026-01-03)
  - 모든 엔드포인트 정상 동작 확인
  - Validation 동작 확인

### Day 11-14: Validation 추가

- [x] **class-validator 설치** ✅ 완료 (2025-12-23)
- [x] **DTO에 검증 규칙 추가** ✅ 완료 (2025-12-23)
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

### 2026-01-03 (Day 7) 🎉

**완료한 것**:
- ✅ UserService CRUD 메서드 전체 확인 및 이해
  - findOne(): ID로 조회 + NotFoundException
  - create(): DTO 사용 + ConflictException
  - updateUser(): Object.assign + 에러 처리
  - remove(): 삭제 + 메시지 반환
- ✅ Controller 엔드포인트 추가
  - GET /users/:id (특정 사용자 조회)
  - PATCH /users/:id (사용자 수정)
  - DELETE /users/:id (사용자 삭제)
  - @Param, @Patch, @Delete 데코레이터 사용
- ✅ ValidationPipe 전역 설정 (main.ts)
  - whitelist: DTO에 없는 필드 자동 제거
  - forbidNonWhitelisted: DTO에 없는 필드 있으면 에러
  - transform: 자동 타입 변환
- ✅ CreateUserDto에 validation 데코레이터 추가
  - @IsNotEmpty, @IsString, @MinLength, @IsEmail
- ✅ 전체 CRUD 테스트 성공
  - 모든 엔드포인트 정상 동작
  - Validation 에러 메시지 정상 출력

**배운 개념**:
- **ValidationPipe transform 옵션**: URL 파라미터(문자열)를 자동으로 숫자로 변환
  - transform: false → @Param('id') id: number 해도 실제로는 문자열
  - transform: true → 자동으로 숫자로 변환됨 (+id 불필요)
- **PartialType**: CreateUserDto를 상속받아 모든 필드를 optional로 변환
  - @nestjs/mapped-types 패키지 필요
  - 코드 중복 없이 UpdateUserDto 생성 가능
- **패키지 설치 방법**: yarn add vs package.json 직접 수정
  - 명령어가 더 빠르고 안전 (버전 자동 선택, lock 파일 자동 업데이트)

**다음 세션 계획**:
- UpdateUserDto 개선 (PartialType 사용)
- Swagger 데코레이터 추가 (@ApiTags, @ApiOperation 등)
- +id를 id로 변경 (transform: true 활용)

---

### 2025-12-23 (Day 6) 📚

**완료한 것**:
- ✅ DTO 클래스 작성 완료
  - CreateUserDto: 사용자 생성 시 데이터 전송
  - UpdateUserDto: 사용자 수정 시 데이터 전송 (모든 필드 optional)
  - DTO의 역할 완벽 이해 (Data Transfer Object)
- ✅ class-validator 검증 시스템 구축
  - class-validator, class-transformer 패키지 설치
  - @IsNotEmpty, @IsString, @MinLength, @IsEmail 데코레이터 적용
  - @IsOptional 데코레이터로 선택적 필드 처리
  - main.ts에 ValidationPipe 전역 설정 (whitelist, forbidNonWhitelisted, transform)
- ✅ TypeORM 2단계 저장 프로세스 완벽 이해
  - create(): DTO → Entity 인스턴스 변환 (메모리에만 존재)
  - save(): Entity를 실제 데이터베이스에 저장
  - 왜 2단계로 나눠져 있는지 이해 (저장 전 수정/검증 가능)
- ✅ Object.assign() 동작 원리 학습
  - source 객체의 속성을 target 객체에 복사
  - UPDATE에서 일부 필드만 수정할 때 유용
  - PATCH 요청 처리에 필수적

**배운 개념**:
- **DTO (Data Transfer Object)**: 계층 간 데이터 전송 객체
  - 검증 규칙 정의 가능
  - Swagger 문서화 자동 생성
  - 타입 안정성 제공
- **class-validator 데코레이터**:
  - @IsNotEmpty(): 빈 값 불가
  - @IsString(): 문자열만 허용
  - @MinLength(n): 최소 길이 검증
  - @IsEmail(): 이메일 형식 검증
  - @IsOptional(): 선택적 필드 (없어도 됨)
- **ValidationPipe 옵션**:
  - whitelist: true → DTO에 없는 필드 자동 제거
  - forbidNonWhitelisted: true → DTO에 없는 필드 있으면 에러
  - transform: true → JSON을 DTO 클래스 인스턴스로 변환
- **create() vs save()**:
  - create(): 메모리에 Entity 인스턴스 생성 (DB 저장 ❌)
  - save(): 실제 DB에 INSERT/UPDATE (DB 저장 ✅)
  - 2단계로 나눈 이유: 저장 전 수정/검증/관계 설정 가능
- **Object.assign(target, source)**:
  - source의 속성을 target에 복사
  - 같은 이름의 속성은 덮어쓰기
  - source에 없는 속성은 target에 그대로 유지
  - UPDATE(PATCH)에서 일부 필드만 수정할 때 필수

**실습 성과**:
- 🎯 완전한 DTO 시스템 구축
- 🎯 자동 데이터 검증 시스템 완성
- 🎯 TypeORM 저장 프로세스 완벽 이해
- 🎯 UPDATE 로직의 핵심 원리 파악

**질문과 답변**:
- Q: Object.assign()은 무엇? → A: source 객체의 속성을 target에 복사 (덮어쓰기)
- Q: create()만 하면? → A: 메모리에만 존재, DB에 저장 안 됨 (id가 undefined)
- Q: save()만 하면? → A: 가능하지만 create()로 Entity 인스턴스 만드는 게 권장
- Q: @IsOptional()은? → A: 필드가 없어도 괜찮음, 제공되면 다른 데코레이터로 검증
- Q: ValidationPipe는? → A: 모든 요청에 대해 DTO 검증을 자동으로 수행

**다음 세션 계획**:
- Week 2 Day 8-10 계속:
  - UserService 코드 직접 작성
    - findOne() 메서드 (ID로 조회)
    - create() 메서드 (DTO 사용, 에러 처리)
    - update() 메서드 (Object.assign 사용)
    - remove() 메서드 (삭제)
  - 에러 처리 추가
    - NotFoundException (404)
    - ConflictException (409, 중복 이메일)
  - UserController 업데이트
    - DTO 적용
    - GET /users/:id
    - PATCH /users/:id
    - DELETE /users/:id
  - Swagger 데코레이터 추가
  - 전체 CRUD 테스트

**메모**:
- DTO는 단순히 데이터 전송만이 아니라 검증과 문서화의 핵심!
- class-validator 덕분에 비즈니스 로직에서 검증 코드 제거 가능
- ValidationPipe로 전역 검증 설정하면 모든 엔드포인트에 자동 적용
- create() + save()의 2단계 프로세스가 유연성을 제공
- Object.assign()이 UPDATE 로직의 핵심 (일부 필드만 수정 가능)

---

### 2025-12-21 (Day 5) 🎉

**완료한 것**:
- ✅ Repository 패턴 완벽 이해
  - Repository = 데이터베이스 작업 도구
  - @InjectRepository를 통한 의존성 주입
  - TypeOrmModule.forFeature로 Repository 등록
- ✅ UserService 구현 완료
  - findAll() 메서드 (모든 사용자 조회)
  - createUser() 메서드 (새 사용자 생성)
  - Repository.create() + save() 2단계 패턴
- ✅ UserModule 생성 완료
  - imports, providers, exports 구조 이해
  - 모듈 기반 아키텍처 실습
- ✅ API 엔드포인트 추가
  - GET /users (모든 사용자 조회)
  - POST /users (새 사용자 생성)
- ✅ 실제 데이터베이스 CRUD 성공
  - 데이터 저장 및 조회 확인
  - MySQL에 실제 데이터 저장됨

**배운 개념**:
- **Repository 패턴**: 데이터베이스 작업을 캡슐화하는 패턴
- **의존성 주입**: @InjectRepository(Entity)로 Repository 자동 생성
- **async/await의 필요성**: 데이터베이스 작업은 시간이 걸림 → 비동기 처리로 서버가 멈추지 않게
- **Promise<타입>**: "나중에 타입을 줄게"라는 약속
  - Promise<User[]> vs Promise<object> (구체적 타입이 더 좋음)
- **@Body() 데코레이터**: HTTP 요청 body 데이터 받기
  - @Body() body: { name: string; email: string }
  - DTO 클래스 사용 권장 (Swagger 문서화)
- **NestJS의 Exception Filter**: 에러를 자동으로 잡아서 표준 형식으로 응답
  - JSON 파싱 에러 → Controller 도달 전에 처리됨
  - 500 Internal Server Error vs 명확한 에러 메시지
- **중복 데이터 에러**: ER_DUP_ENTRY (나중에 try-catch로 처리 예정)

**실습 성과**:
- 🎯 완전한 CRUD API 구현 (조회, 생성)
- 🎯 Module 기반 구조 이해
- 🎯 실제 데이터베이스 연동 성공
- 🎯 비동기 프로그래밍 개념 이해
- 🎯 TypeScript 타입 시스템 이해 심화

**질문과 답변**:
- Q: Repository 주입이란? → A: NestJS가 자동으로 Repository 인스턴스를 만들어서 넣어줌
- Q: async/await은 왜? → A: 데이터베이스 작업 중에도 다른 요청 처리 가능 (서버 안 멈춤)
- Q: Promise란? → A: "나중에 줄게"라는 약속 (비동기 작업의 결과)
- Q: Promise<object>는? → A: 너무 애매함, Promise<User[]>처럼 구체적으로!
- Q: @Body()는? → A: HTTP 요청 body에서 데이터 가져오기
- Q: 에러 메시지 어디서? → A: NestJS 내장 Exception Filter
- Q: 로그가 안 찍혀? → A: JSON 파싱 실패하면 Controller까지 안 감

**트러블슈팅**:
- ⚠️ JSON 파싱 에러: 따옴표 누락으로 발생 → 올바른 JSON 형식 사용
- ⚠️ Swagger Request Body 안 보임: 인라인 타입 대신 DTO 클래스 사용 필요
- ⚠️ 중복 이메일 에러: 500 에러 대신 409 Conflict 반환 필요 (나중에 처리)
- ✅ curl 명령어로 POST 요청 테스트 성공

**다음 세션 계획**:
- Week 2 Day 8-10: User CRUD 완성
  - CreateUserDto 클래스 생성 (DTO 패턴)
  - class-validator로 검증 추가
  - 에러 처리 추가 (ConflictException)
  - UPDATE, DELETE 메서드 추가
  - 전체 CRUD 완성

**메모**:
- Repository 패턴 덕분에 SQL 작성 없이 데이터베이스 조작 가능!
- 비동기 처리가 왜 필요한지 완벽히 이해 (서버 성능!)
- TypeScript의 타입 시스템이 개발자를 많이 도와줌
- Module 구조로 코드를 분리하니 훨씬 깔끔함
- 에러 처리가 실무에서 얼마나 중요한지 깨달음

---

### 2025-11-22 (Day 4)

**완료한 것**:
- ✅ User Entity 생성 완료
  - `src/entities/user.entity.ts` 파일 생성
  - 5개 필드 구현: id, name, email, points, createdAt
  - 각 데코레이터의 역할 이해
- ✅ TypeORM 설정 업데이트
  - `typeorm.config.ts`에 User Entity import 추가
  - entities 배열에 User 등록
- ✅ 테이블 자동 생성 확인
  - 서버 실행 후 CREATE TABLE 쿼리 로그 확인
  - MySQL에 users 테이블 자동 생성 성공

**배운 개념**:
- **Entity**: TypeScript 클래스 → 데이터베이스 테이블 매핑
- **데코레이터 (@)**: "앳" 또는 "골뱅이", 메타데이터 추가 기능
- **@Entity('users')**: 클래스를 users 테이블과 매핑
- **@PrimaryGeneratedColumn()**: AUTO_INCREMENT 기본 키
- **@Column()**: 일반 컬럼 (VARCHAR)
- **@Column({ unique: true })**: 중복 불가 제약
- **@Column({ default: 0 })**: 기본값 설정
- **@CreateDateColumn()**: 생성 시각 자동 저장
- **export 키워드**: 다른 파일에서 사용 가능하게 공개
- **import 키워드**: 다른 파일에서 가져오기
- **synchronize: true**: 개발 중 Entity → Table 자동 변환

**실습 성과**:
- 🎯 첫 Entity 직접 작성 성공
- 🎯 TypeORM의 자동 테이블 생성 체험
- 🎯 SQL을 작성하지 않고도 테이블 생성
- 🎯 Entity 코드가 SQL로 어떻게 변환되는지 확인

**질문과 답변**:
- Q: `touch` 명령어는? → A: 빈 파일 생성 (macOS/Linux)
- Q: `@`는 뭐라고 읽나? → A: "앳" 또는 "골뱅이"
- Q: `@Column({ default: 0 })` 속성 정의? → A: 객체 형태로 중괄호 안에 설정
- Q: `export`는 왜 사용? → A: 다른 파일에서 사용 가능하게 공개

**트러블슈팅**:
- ⚠️ acquireTimeout, timeout 경고: MySQL2 버전 이슈, 동작에는 문제없음
- ✅ 모든 작업 성공적으로 완료

**다음 세션 계획**:
- Week 1 Day 5-7 계속:
  - Repository 패턴 이해
  - Repository를 Service에 주입하기
  - CRUD 기본 메서드 학습 (find, findOne, save, update, remove)
  - 첫 데이터 저장 및 조회 실습

**메모**:
- Entity 클래스 하나로 테이블 자동 생성되는 게 정말 신기함!
- 데코레이터가 TypeORM에게 "이건 이렇게 처리해!"라고 알려주는 표시
- synchronize: true는 개발 중에만 사용, 운영에서는 Migration 사용 필수
- TypeScript 클래스 → SQL 자동 변환이 ORM의 핵심 기능

---

### 2025-11-04 (Day 3)

**완료한 것**:
- ✅ TypeORM 설정 확인 및 이해
  - `src/config/typeorm.config.ts` 파일 확인
  - 별도 파일로 설정 분리하는 패턴 학습
  - TypeOrmModule.forRoot(typeOrmConfig) 사용법
- ✅ 환경 변수(.env) 확인
  - DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE
  - process.env로 환경 변수 읽기
- ✅ MySQL 연결 테스트 성공
  - 서버 실행 후 TypeORM 연결 로그 확인
  - `SELECT version()` 쿼리 자동 실행 확인
  - 'my_point_learning' 데이터베이스 연결 성공
- ✅ Entity 개념 학습
  - Entity = 데이터베이스 테이블과 매핑되는 TypeScript 클래스
  - @Entity(), @PrimaryGeneratedColumn(), @Column() 데코레이터 역할 이해
  - User Entity 설계 및 가이드 제공

**배운 개념**:
- **ORM (Object-Relational Mapping)**: 객체와 데이터베이스 테이블을 자동 매핑
- **TypeORM 설정 분리**: config 파일로 관리하면 유지보수 편리
- **환경 변수 관리**: 민감한 정보(비밀번호 등)를 .env로 분리
- **synchronize: true**: 개발 중에만 사용, Entity 변경사항을 자동으로 DB 반영
- **Entity 데코레이터**:
  - `@Entity('테이블명')`: 테이블과 매핑
  - `@PrimaryGeneratedColumn()`: 자동 증가 기본 키
  - `@Column()`: 일반 컬럼
  - `@Column({ unique: true })`: 중복 불가 컬럼
  - `@Column({ default: 값 })`: 기본값 설정
  - `@CreateDateColumn()`: 생성 시각 자동 저장

**실습 성과**:
- 🎯 TypeORM과 MySQL 연결 성공
- 🎯 설정 파일 구조 이해
- 🎯 Entity 개념 및 데코레이터 학습
- 🎯 다음 세션을 위한 준비 완료

**트러블슈팅**:
- ⚠️ 포트 충돌 (EADDRINUSE): 기존 프로세스 종료로 해결
- ⚠️ 환경 변수 이름 불일치 발견: DB_NAME vs DB_DATABASE (현재는 동작 중)
- ⚠️ 사용하지 않는 import 발견: time, connect (삭제 권장)
- ⚠️ MySQL2 경고: acquireTimeout, timeout 옵션 무시됨 (동작에는 문제없음)

**다음 세션 계획**:
- Week 1 Day 5-7 계속:
  - User Entity 파일 직접 생성 (`src/entities/user.entity.ts`)
  - app.module.ts의 entities 배열에 User Entity 등록
  - 서버 재시작 후 users 테이블 자동 생성 확인
  - Repository 패턴 학습 및 첫 CRUD 실습

**메모**:
- TypeORM의 synchronize는 개발 중에만 true, 운영에서는 Migration 사용
- Entity는 클래스지만 데이터베이스 테이블의 구조를 정의하는 역할
- 데코레이터는 클래스나 속성에 메타데이터를 추가하는 TypeScript 기능
- TypeORM이 Entity를 보고 자동으로 CREATE TABLE SQL을 생성

---

### 2025-11-01 (Day 2)

**완료한 것**:
- ✅ 의존성 주입(DI) 심화 실습 완료
- ✅ UserService 생성 및 구현
  - `src/modules/user/user.service.ts`
  - getUserName(), getUserPoints() 메서드
- ✅ PointService 생성 및 구현
  - `src/modules/point/point.service.ts`
  - UserService를 constructor로 주입받음
  - getUserPointInfo() 메서드로 사용자 포인트 정보 반환
- ✅ app.module.ts에 providers 등록
  - UserService, PointService 추가
- ✅ app.controller.ts에 엔드포인트 추가
  - GET /point-info 추가
  - PointService 주입받아 사용
- ✅ API 테스트 성공

**배운 개념**:
- **Service → Service 의존성 주입**: 한 Service가 다른 Service를 사용하는 방법
- **constructor 주입**: `constructor(private readonly userService: UserService) {}`
- **싱글톤 패턴**: NestJS가 Service 인스턴스를 하나만 생성해서 재사용
- **모듈 구조**: `src/modules/` 폴더로 기능별 분리
- **함수 참조 vs 호출**: `method` (참조) vs `method()` (호출)

**실습 성과**:
- 🎯 2개의 Service 생성 및 연동
- 🎯 DI 패턴 실전 적용
- 🎯 모듈 구조 이해
- 🎯 총 5개의 REST API 완성 (기존 4개 + /point-info)

**트러블슈팅**:
- ⚠️ 오타 발견: `mesage` → `message`
- ⚠️ 함수 호출 괄호 누락: `getUserPointInfo` → `getUserPointInfo()`
- ✅ 두 가지 모두 해결하고 테스트 성공!

**다음 세션 계획**:
- Week 1 Day 5-7: 데이터베이스 연결
  - TypeORM 설정 (이미 설치됨)
  - MySQL 연결 설정
  - 첫 Entity 생성 (User)
  - Repository 패턴 학습

**메모**:
- Service가 다른 Service를 주입받는 것도 Controller가 Service를 주입받는 것과 동일한 패턴
- providers 배열 순서는 상관없음 (NestJS가 자동으로 의존성 해결)
- 모듈 구조로 파일을 정리하면 프로젝트가 깔끔해짐

---

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
- [x] ~~의존성 주입이 정확히 어떻게 동작하는지?~~ ✅ 해결 (2025-11-01)
  - Service → Service 주입 실습으로 이해 완료
  - constructor를 통한 주입 메커니즘 이해
  - 싱글톤 패턴 이해
- [ ] Module을 왜 꼭 만들어야 하는지?
- [x] ~~Controller와 Service를 왜 분리하는지?~~ ✅ 해결 (2025-11-01)
  - 역할 분리로 코드 재사용성 향상
  - 테스트 용이성

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
- `src/modules/`: 기능별 모듈 폴더
  - `user/`: 사용자 관련 기능
  - `point/`: 포인트 관련 기능

### NestJS 기본 개념
- **Module**: 기능별로 코드를 분리하는 단위
- **Controller**: API 엔드포인트 정의
- **Service**: 실제 로직 처리
- **의존성 주입**: NestJS가 자동으로 인스턴스 생성 및 주입
  - Controller → Service 주입
  - Service → Service 주입
  - 싱글톤 패턴으로 인스턴스 재사용

---

## 🎯 학습 목표 체크

### 단기 목표 (이번 주)
- [x] ~~NestJS 기본 구조 완벽히 이해~~ ✅ 완료
- [x] ~~첫 API 만들기 완료~~ ✅ 완료
- [x] ~~Swagger 추가하여 문서화~~ ✅ 완료
- [x] ~~의존성 주입 심화~~ ✅ 완료

### 중기 목표 (2주차)
- [ ] User CRUD 완성
- [ ] DTO Validation 구현

### 장기 목표 (3주차)
- [ ] Relations 이해
- [ ] 고급 기능 구현

---

## 📊 학습 통계

- **총 학습 일수**: 3일
- **완료한 단계**: Week 1 Day 5-7 진행 중 (TypeORM 설정 + MySQL 연결 완료)
- **남은 단계**: Week 1 Day 5-7 (Entity 생성 + Repository) + Week 2~3
- **Week 1 Day 5-7 진행률**: 50% (TypeORM 설정, MySQL 연결 완료 / Entity 생성, Repository 대기)
- **다음 목표**: User Entity 생성 및 테이블 자동 생성 확인

---

## 💪 다음 세션 시작 방법

다음에 학습을 계속하려면:

```
"학습 계속할게요" 또는 "이어서 공부해요"
```

Claude가 자동으로 이 파일을 읽고 마지막 지점부터 안내해드립니다!
