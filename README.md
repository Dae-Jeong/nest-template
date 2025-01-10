# NestJS Server Template

## 개요
이 프로젝트는 NestJS 기반의 서버 템플릿으로, REST API 개발을 위한 기본적인 설정과 구조를 포함하고 있습니다.

## 기술 스택
- NestJS
- TypeScript
- PostgreSQL
- TypeORM
- Swagger

## 주요 기능
- 환경 변수 관리 (@nestjs/config)
- API 문서 자동화 (Swagger)
- 데이터베이스 ORM (TypeORM)
- 데이터 유효성 검사 (class-validator)
- CORS 지원
- API 버전 관리 (/api 프리픽스)

## 시작하기

### 사전 요구사항
- Node.js (v14 이상)
- npm (v6 이상)
- PostgreSQL

### 설치
```bash
# 패키지 설치
$ npm install
```

### 환경 변수 설정
`.env` 파일을 프로젝트 루트에 생성하고 다음 내용을 설정하세요:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=nest_template

# JWT Configuration
JWT_SECRET=your-secret-key
JWT_EXPIRATION_TIME=3600
```

### 실행

```bash
# development 모드
$ npm run start

# watch 모드
$ npm run start:dev

# production 모드
$ npm run build
$ npm run start:prod
```

### 테스트

```bash
# unit 테스트
$ npm run test

# e2e 테스트
$ npm run test:e2e

# 테스트 커버리지
$ npm run test:cov
```

## API 문서
서버 실행 후 다음 URL에서 Swagger API 문서를 확인할 수 있습니다:
- http://localhost:3000/api-docs

## 프로젝트 구조
```
src/
├── common/                 # 공통 모듈
│   ├── decorators/        # 커스텀 데코레이터
│   ├── filters/           # 예외 필터
│   ├── guards/            # 가드
│   ├── interceptors/      # 인터셉터
│   ├── middlewares/       # 미들웨어
│   └── pipes/             # 파이프
│
├── config/                # 설정 모듈
│   ├── database.config.ts # 데이터베이스 설정
│   ├── jwt.config.ts      # JWT 설정
│   └── swagger.config.ts  # Swagger 설정
│
├── modules/               # 기능 모듈
│   ├── auth/             # 인증 모듈
│   │   ├── dto/         # DTO
│   │   ├── entities/    # 엔티티
│   │   ├── guards/      # 인증 가드
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   └── auth.module.ts
│   │
│   └── users/            # 사용자 모듈
│       ├── dto/         # DTO
│       ├── entities/    # 엔티티
│       ├── users.controller.ts
│       ├── users.service.ts
│       └── users.module.ts
│
├── app.module.ts          # 루트 모듈
├── app.controller.ts      # 루트 컨트롤러
├── app.service.ts         # 루트 서비스
└── main.ts               # 애플리케이션 엔트리 포인트
```

### 디렉토리 구조 설명

- **common/**: 애플리케이션 전반에서 사용되는 공통 기능
  - decorators/: 커스텀 데코레이터 (예: @User(), @Roles())
  - filters/: 예외 처리 필터
  - guards/: 인증/인가 가드
  - interceptors/: 로깅, 변환, 캐싱 등의 인터셉터
  - middlewares/: 미들웨어
  - pipes/: 데이터 변환 및 유효성 검사 파이프

- **config/**: 환경 설정 관련 모듈
  - 데이터베이스, JWT, AWS 등 외부 서비스 설정
  - 환경별 설정 관리

- **modules/**: 비즈니스 로직 모듈
  - 각 기능별 독립적인 모듈로 구성
  - 각 모듈은 자체 컨트롤러, 서비스, DTO, 엔티티 포함

### 모듈 구조 컨벤션

각 기능 모듈은 다음 구조를 따릅니다:
```
feature/
├── dto/                # Data Transfer Objects
│   ├── create-*.dto.ts
│   ├── update-*.dto.ts
│   └── *-response.dto.ts
├── entities/          # 데이터베이스 엔티티
├── interfaces/        # 타입 정의
├── *.controller.ts    # 컨트롤러
├── *.service.ts       # 서비스
└── *.module.ts        # 모듈 정의
```

## 주요 설정

### TypeORM 설정
- 개발 환경에서 자동 스키마 동기화 활성화
- 개발 환경에서 SQL 로깅 활성화
- 엔티티 자동 감지 (`src/**/*.entity{.ts,.js}`)

### ValidationPipe 설정
- whitelist: true (DTO에 정의되지 않은 속성 제거)
- forbidNonWhitelisted: true (정의되지 않은 속성이 있을 경우 요청 거부)
- transform: true (데이터 자동 형변환)

### 보안
- CORS 활성화
- 환경 변수 파일 (.env) git 제외
- JWT 기반 인증 지원

## 라이선스
이 프로젝트는 MIT 라이선스를 따릅니다.
