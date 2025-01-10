FROM node:18-alpine AS builder

# pnpm 설치
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# 패키지 파일 복사 및 설치
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# 소스 코드 복사 및 빌드
COPY . .
RUN pnpm build

# 프로덕션 이미지
FROM node:18-alpine

# pnpm 설치
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# 빌드된 파일과 필요한 파일만 복사
COPY --from=builder /app/dist ./dist
COPY package.json pnpm-lock.yaml ./

# 프로덕션 의존성만 설치
RUN pnpm install --prod

# 프로덕션 모드로 실행
CMD ["pnpm", "start:prod"] 