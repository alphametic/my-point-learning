# CLAUDE.md - 학습용 프로젝트 설정

이 파일은 NestJS 학습을 위한 새 프로젝트를 생성할 때 프로젝트 루트에 복사해서 사용하세요.

**사용 방법**:
```bash
# 새 프로젝트 생성 후
nest new my-learning-project
cd my-learning-project

# 이 파일을 프로젝트 루트에 CLAUDE.md로 복사
cp /path/to/this/file/학습용-CLAUDE.md ./CLAUDE.md
```

---

## 프로젝트 개요

이 프로젝트는 **NestJS, TypeScript, TypeORM 학습을 위한 실습용 프로젝트**입니다.

**학습 목표**:
- NestJS 핵심 개념 마스터하기
- TypeORM으로 데이터베이스 다루기
- REST API 개발 전체 흐름 이해하기
- 실무에서 사용 가능한 코드 작성법 배우기

---

## 개발 환경

### 기술 스택

- **프레임워크**: NestJS
- **언어**: TypeScript
- **데이터베이스**: MySQL 8.0
- **ORM**: TypeORM
- **API 문서**: Swagger
- **패키지 매니저**: Yarn

### 필수 설치 프로그램

```bash
# Node.js 18 이상
node --version  # v18.x.x 이상

# Yarn
yarn --version  # 1.22.x 이상

# MySQL
mysql --version # 8.0.x 이상
```

---

## 명령어

### 개발 서버

```bash
# 의존성 설치
yarn install

# 개발 서버 실행 (hot reload)
yarn start:dev

# 프로덕션 빌드
yarn build

# 프로덕션 실행
yarn start:prod
```

### 코드 생성 (NestJS CLI)

```bash
# 모듈 생성
nest generate module 모듈명
# 줄여서: nest g mo 모듈명

# 컨트롤러 생성
nest generate controller 컨트롤러명
# 줄여서: nest g co 컨트롤러명

# 서비스 생성
nest generate service 서비스명
# 줄여서: nest g s 서비스명

# 한번에 생성 (모듈, 컨트롤러, 서비스)
nest generate resource 리소스명
# 줄여서: nest g res 리소스명
```

### 테스트

```bash
# 단위 테스트
yarn test

# 감시 모드
yarn test:watch

# 커버리지
yarn test:cov

# E2E 테스트
yarn test:e2e
```

### 코드 품질

```bash
# 린트 검사
yarn lint

# 코드 포맷팅
yarn format
```

---

## 프로젝트 구조

```
src/
├── main.ts                 # 애플리케이션 진입점
├── app.module.ts           # 루트 모듈
├── app.controller.ts       # 루트 컨트롤러
├── app.service.ts          # 루트 서비스
│
├── config/                 # 설정 파일
│   └── database.config.ts  # DB 설정
│
├── entities/               # 데이터베이스 엔티티
│   ├── user.entity.ts      # 사용자 엔티티
│   └── point-log.entity.ts # 포인트 로그 엔티티
│
├── modules/                # 기능별 모듈
│   ├── user/               # 사용자 모듈
│   │   ├── user.module.ts
│   │   ├── user.controller.ts
│   │   ├── user.service.ts
│   │   └── dto/            # 데이터 전송 객체
│   │       ├── create-user.dto.ts
│   │       └── update-user.dto.ts
│   │
│   └── point/              # 포인트 모듈
│       ├── point.module.ts
│       ├── point.controller.ts
│       └── point.service.ts
│
└── common/                 # 공통 유틸리티
    ├── filters/            # 예외 필터
    ├── guards/             # 가드
    ├── interceptors/       # 인터셉터
    └── pipes/              # 파이프
```

---

## 🔄 세션 관리 (학습 지속성)

### 세션 시작하기

매번 학습을 시작할 때 이렇게 요청하세요:

```
"학습 계속할게요" 또는 "이어서 공부해요"
```

**Claude의 동작**:
1. `LEARNING_PROGRESS.md` 파일을 자동으로 읽습니다
2. 마지막 완료 지점을 확인합니다
3. "지난번에 [X]까지 완료하셨네요! 다음은 [Y]입니다" 안내
4. 해당 단계의 상세 가이드를 제시합니다

### 세션 종료하기

학습을 마칠 때:

```
"오늘은 여기까지" 또는 "저장하고 종료할게요"
```

**Claude의 동작**:
1. `LEARNING_PROGRESS.md` 파일을 업데이트합니다
2. 오늘 완료한 것을 요약합니다
3. 다음 세션에 할 일을 명시합니다

### 학습 진행 확인하기

언제든지 현재 진행 상황을 확인하려면:

```
"어디까지 했더라?" 또는 "진행 상황 보여줘"
```

**Claude**: `LEARNING_PROGRESS.md` 내용 요약 제시

---

## 📚 학습 방식: Step-by-Step 가이드 (필수!)

**⚠️ 중요: Claude는 코드를 직접 작성하지 않습니다!**

이 프로젝트에서 Claude는 **단계별 가이드만 제공**하고, **학습자가 직접 코딩**해야 합니다.

### 왜 직접 코딩해야 하나요?

1. ✅ **손에 익히기**: 타이핑하면서 코드가 몸에 배임
2. ✅ **이해도 향상**: 복사-붙여넣기보다 10배 효과
3. ✅ **에러 경험**: 에러를 만나고 해결하면서 성장
4. ✅ **실전 대비**: 실무에서는 직접 작성해야 함

---

### 방식 1: 자세한 가이드 (기본 방식)

#### **요청 방법**:
```
"Swagger 추가하고 싶어요. Step-by-step으로 알려주세요"
```

#### **Claude의 응답 예시**:
```
Step 1: 패키지 설치
  - 명령어: yarn add @nestjs/swagger
  - 터미널에서 실행하세요

Step 2: main.ts 파일 열기
  - 위치: src/main.ts
  - IDE에서 파일을 열어주세요

Step 3: import 추가
  - 어디에: 파일 상단 (다른 import 아래)
  - 무엇을: SwaggerModule, DocumentBuilder
  - 직접 타이핑해보세요!

Step 4: bootstrap() 함수 안에 설정 코드 추가
  - 어디에: app 생성 후, app.listen() 호출 전
  - 무엇을: Swagger 설정 (힌트로 제공됨)
```

**이제 직접 코딩하세요!** ✍️

---

### 방식 2: 힌트 시스템 활용

막힐 때만 순차적으로 힌트를 요청하는 방식입니다.

#### **1단계: 혼자 시도해보기**
```
- Step-by-step 가이드만 보고 직접 코딩
- 에러가 나도 괜찮습니다! (오히려 좋음!)
- 최대한 스스로 해결해보세요
```

#### **2단계: 막히면 힌트 요청**
```
사용자: "힌트 1 주세요"
Claude: [첫 번째 힌트만 제공]

사용자: (여전히 막힘) "힌트 2 주세요"
Claude: [두 번째 힌트 제공]

사용자: (계속 막힘) "힌트 3 주세요"
Claude: [세 번째 힌트 제공]

...필요한 만큼 반복...
```

**힌트 예시**:
```markdown
<details>
<summary>🔍 힌트 1: 필요한 패키지</summary>

@nestjs/swagger 패키지가 필요합니다.
yarn add 명령어로 설치하세요.
</details>

<details>
<summary>🔍 힌트 2: import 해야 할 것</summary>

@nestjs/swagger에서 다음을 import:
- SwaggerModule
- DocumentBuilder
</details>

<details>
<summary>🔍 힌트 3: 코드 작성 위치</summary>

bootstrap() 함수 안에서:
1. app 생성 후
2. app.listen() 전에
3. Swagger 설정 코드를 추가하세요
</details>
```

#### **3단계: 완성 후 리뷰 요청**
```
사용자: "다 했어요! 코드 리뷰해주세요"

Claude의 동작:
  1. ✅ 잘한 점 칭찬
  2. 💡 개선할 수 있는 점 제시
  3. 🎓 추가로 배울 수 있는 포인트 설명
  4. 📝 LEARNING_PROGRESS.md 업데이트 제안
```

---

## 학습 진행 방식

### ⭐ Claude Code에게 요청할 때

**학습 모드 자동 활성화**:
이 프로젝트에서 Claude Code는 자동으로 **학습 모드**로 동작합니다.

**학습 모드의 특징**:
1. ✅ **단계별 설명**: 각 코드의 의미를 상세히 설명
2. ✅ **주석 포함**: 모든 코드에 한글 주석 추가
3. ✅ **개념 설명**: 처음 나오는 개념은 별도로 설명
4. ✅ **예제 제공**: 실제 사용 예시 포함
5. ✅ **질문 유도**: 이해를 돕는 질문 제시

### 📝 코드 작성 요청 예시

**좋은 요청 예시**:
```
"User 엔티티를 만들어주세요.
- id, name, email, createdAt 필드 필요
- 각 필드의 역할도 설명해주세요"
```

**더 좋은 요청 예시**:
```
"User 엔티티를 만들어주세요.
TypeORM 데코레이터가 무엇인지 모르니까
각 데코레이터의 역할도 함께 설명해주세요"
```

### 🎯 학습 가이드라인

#### DO (권장)

1. **작은 단위로 배우기**
   ```
   ❌ "포인트 시스템 전체를 만들어주세요"
   ✅ "먼저 User 엔티티만 만들어주세요"
   ```

2. **이해 안 되면 바로 질문하기**
   ```
   "왜 @Injectable() 데코레이터가 필요한가요?"
   "@Column()과 @PrimaryColumn()의 차이는 뭔가요?"
   ```

3. **직접 코드 수정해보기**
   ```
   "User 엔티티에 age 필드를 추가하고 싶어요"
   "컨트롤러에 새로운 엔드포인트를 추가하려면?"
   ```

4. **에러를 두려워하지 않기**
   ```
   "이 에러가 왜 발생했나요?"
   "TypeError: Cannot read property... 해결 방법은?"
   ```

#### DON'T (비권장)

1. **모든 것을 한번에 요청하지 않기**
   - 한 번에 하나의 개념만 배우기

2. **복사-붙여넣기만 하지 않기**
   - 코드를 이해하고 직접 타이핑하기

3. **에러를 무시하고 넘어가지 않기**
   - 에러는 최고의 선생님입니다

---

## 코드 작성 규칙 (학습용)

### 📌 모든 코드에 주석 포함

**예시**:

```typescript
/**
 * 사용자 서비스
 *
 * 사용자와 관련된 비즈니스 로직을 처리합니다.
 * - 사용자 생성
 * - 사용자 조회
 * - 사용자 업데이트
 */
@Injectable()
export class UserService {
  /**
   * UserService 생성자
   *
   * @param userRepository - User 엔티티의 Repository (의존성 주입)
   *
   * 💡 의존성 주입(Dependency Injection):
   * NestJS가 자동으로 UserRepository 인스턴스를 생성해서 넣어줍니다.
   */
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  /**
   * 모든 사용자 조회
   *
   * @returns 모든 사용자 배열
   *
   * 💡 async/await:
   * 데이터베이스 작업은 시간이 걸리므로 비동기로 처리합니다.
   */
  async findAll(): Promise<User[]> {
    // Repository의 find() 메서드로 모든 레코드 조회
    return this.userRepository.find();
  }
}
```

### 📌 개념 설명 박스 포함

코드에 처음 나오는 개념은 **💡 박스**로 설명:

```typescript
// 💡 데코레이터란?
// @ 기호로 시작하며, 클래스나 메서드에 메타데이터를 추가합니다.
// NestJS는 이 메타데이터를 읽어서 어떻게 동작할지 결정합니다.
@Controller('users')
export class UserController {
  // ...
}
```

### 📌 단계별 구현

복잡한 기능은 단계별로:

```typescript
// Step 1: DTO 정의
export class CreateUserDto {
  name: string;
  email: string;
}

// Step 2: Entity 정의
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

// Step 3: Service 구현
@Injectable()
export class UserService {
  async create(dto: CreateUserDto): Promise<User> {
    // 구현...
  }
}

// Step 4: Controller 구현
@Controller('users')
export class UserController {
  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }
}
```

---

## 학습 진행 단계

### Week 1: 기초 다지기

**Day 1-2**: 프로젝트 설정
- [ ] NestJS CLI 설치
- [ ] 새 프로젝트 생성
- [ ] 기본 구조 이해
- [ ] Hello World API 실행

**Day 3-4**: 첫 API 만들기
- [ ] Controller 이해
- [ ] Service 이해
- [ ] 의존성 주입 이해
- [ ] Swagger 추가

**Day 5-7**: 데이터베이스 연결
- [ ] TypeORM 설정
- [ ] MySQL 연결
- [ ] 첫 Entity 생성
- [ ] Repository 패턴 이해

### Week 2: CRUD 구현

**Day 8-10**: User CRUD
- [ ] User Entity 정의
- [ ] DTO 작성
- [ ] Service 메서드 구현
- [ ] Controller 엔드포인트 추가

**Day 11-14**: Validation 추가
- [ ] class-validator 설치
- [ ] DTO에 검증 규칙 추가
- [ ] 에러 처리
- [ ] Swagger 문서화

### Week 3: 고급 기능

**Day 15-17**: Relations
- [ ] OneToMany 관계
- [ ] ManyToOne 관계
- [ ] 관계 조회

**Day 18-21**: 추가 기능
- [ ] Transaction 처리
- [ ] Custom Decorator
- [ ] Interceptor
- [ ] Exception Filter

---

## 환경 변수 (.env)

```env
# 서버 설정
PORT=3000
NODE_ENV=development

# 데이터베이스 설정
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_DATABASE=learning_db

# Swagger 설정 (개발 환경에서만)
ENABLE_SWAGGER=true
```

---

## Swagger 문서

### 접속 주소

```
http://localhost:3000/api
```

### API 테스트 방법

1. Swagger 페이지 접속
2. 원하는 API 엔드포인트 클릭
3. "Try it out" 버튼 클릭
4. 필요한 파라미터 입력
5. "Execute" 버튼 클릭
6. 응답 확인

---

## 데이터베이스

### MySQL 설정

```sql
-- 데이터베이스 생성
CREATE DATABASE learning_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- 사용
USE learning_db;

-- 테이블 확인
SHOW TABLES;

-- 테이블 구조 확인
DESCRIBE users;
```

### TypeORM Synchronize

**개발 환경에서만 사용**:
```typescript
TypeOrmModule.forRoot({
  // ...
  synchronize: true,  // ⚠️ 개발에서만! 프로덕션에서는 false
})
```

**synchronize: true의 의미**:
- Entity 변경사항을 자동으로 DB에 반영
- 개발 중에는 편리하지만 운영에서는 위험!
- 운영에서는 Migration 사용

---

## 학습 팁

### ✅ 효과적인 학습 방법

1. **하루에 하나의 개념만**
   - 한 번에 너무 많이 배우려고 하지 마세요
   - 하나를 완전히 이해하고 다음으로

2. **코드를 직접 타이핑하세요**
   - 복사-붙여넣기는 배움이 적습니다
   - 직접 타이핑하면서 이해하기

3. **에러를 환영하세요**
   - 에러는 배움의 기회
   - 에러 메시지를 읽고 이해하기
   - 같은 에러를 다시 만나면 더 빨리 해결

4. **Swagger로 즉시 테스트**
   - 코드를 작성하면 바로 테스트
   - 동작을 확인하면서 이해도 높이기

5. **질문 목록 만들기**
   - 이해 안 되는 부분 메모
   - 나중에 찾아보거나 질문하기

### ❌ 피해야 할 것

1. **처음부터 완벽하게 이해하려고 하지 마세요**
   - 점진적으로 이해도가 높아집니다
   - "대충 이런 거구나" 정도면 OK

2. **문서만 읽지 마세요**
   - 반드시 코드를 실행해보세요
   - 이론 < 실습

3. **너무 빨리 진도 나가지 마세요**
   - 기초가 중요합니다
   - 이해 안 되면 다시 돌아가기

---

## 자주 묻는 질문 (FAQ)

### Q1: @Injectable()과 @Controller()의 차이는?

**답변**:
- `@Injectable()`: 주입 가능한 서비스 (비즈니스 로직)
- `@Controller()`: HTTP 요청을 처리하는 컨트롤러

### Q2: async/await은 왜 사용하나요?

**답변**:
데이터베이스 작업은 시간이 걸리므로 비동기로 처리합니다.
```typescript
// ❌ 동기 (불가능)
const user = this.repository.findOne();  // undefined!

// ✅ 비동기 (올바름)
const user = await this.repository.findOne();  // User 객체
```

### Q3: Entity와 DTO의 차이는?

**답변**:
- **Entity**: 데이터베이스 테이블과 매핑
- **DTO**: 데이터 전송/검증용

### Q4: Repository는 어떻게 주입되나요?

**답변**:
1. Module에서 Entity 등록
2. Service에서 `@InjectRepository()` 사용
3. NestJS가 자동으로 Repository 생성해서 주입

---

## 트러블슈팅

### 문제 1: 서버가 시작 안 됨

**증상**:
```
Error: Cannot find module '@nestjs/core'
```

**해결**:
```bash
rm -rf node_modules yarn.lock
yarn install
```

### 문제 2: DB 연결 에러

**증상**:
```
Error: ER_ACCESS_DENIED_ERROR
```

**해결**:
1. MySQL 실행 중인지 확인
2. .env 파일 확인
3. 비밀번호 확인

### 문제 3: Entity가 테이블로 안 만들어짐

**확인 사항**:
1. `synchronize: true` 설정되어 있나?
2. Entity에 `@Entity()` 데코레이터 있나?
3. `entities` 배열에 경로 올바른가?

---

## 추가 학습 자료

### 공식 문서
- [NestJS 공식 문서](https://docs.nestjs.com/)
- [TypeORM 공식 문서](https://typeorm.io/)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs/)

### 추천 학습 순서
1. 이 프로젝트로 기초 실습
2. NestJS 공식 문서 읽기
3. 간단한 토이 프로젝트 만들기
4. 실무 프로젝트 분석

---

## Claude Code 활용 팁

### 🎓 학습에 도움되는 요청 방법

**개념 설명 요청**:
```
"의존성 주입이 뭔가요? 왜 필요한가요?"
"Repository 패턴의 장점은 뭔가요?"
```

**코드 설명 요청**:
```
"이 코드를 한 줄씩 설명해주세요"
"@InjectRepository() 데코레이터는 뭐하는 건가요?"
```

**단계별 구현 요청**:
```
"User CRUD를 만들고 싶어요.
단계별로 하나씩 설명하면서 진행해주세요"
```

**에러 해결 요청**:
```
"이런 에러가 났어요: [에러 메시지]
왜 발생했고 어떻게 해결하나요?"
```

---

**🎉 학습을 시작하신 것을 축하합니다!**

천천히, 단계별로 진행하세요.
막히는 부분이 있으면 언제든 Claude Code에게 질문하세요!

**화이팅! 💪**
