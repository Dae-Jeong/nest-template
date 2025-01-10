FROM node:18-alpine

# pnpm 설치
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# 패키지 파일 복사 및 설치
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# 소스 코드 복사
COPY . .

# 개발 모드로 실행
CMD ["pnpm", "start:dev"] 