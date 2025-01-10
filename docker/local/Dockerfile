FROM node:18-alpine

# pnpm 설치
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# 패키지 파일만 복사
COPY package.json pnpm-lock.yaml ./

# 의존성 설치
RUN pnpm install

# 소스 코드는 볼륨으로 마운트됨
CMD ["pnpm", "start:dev"] 