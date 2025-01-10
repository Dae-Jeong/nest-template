import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import {
  HealthCheckService,
  HttpHealthIndicator,
  TypeOrmHealthIndicator,
  HealthCheck,
  MemoryHealthIndicator,
  DiskHealthIndicator,
} from '@nestjs/terminus';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private db: TypeOrmHealthIndicator,
    private memory: MemoryHealthIndicator,
    private disk: DiskHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  @ApiOperation({ summary: '서버 상태 확인' })
  check() {
    return this.health.check([
      // 데이터베이스 연결 상태 확인
      () => this.db.pingCheck('database'),

      // 메모리 사용량 체크 (150MB 이하인지)
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),

      // RSS 메모리 체크 (150MB 이하인지)
      () => this.memory.checkRSS('memory_rss', 150 * 1024 * 1024),

      // 디스크 저장 공간 체크 (50% 이상 여유 공간이 있는지)
      () =>
        this.disk.checkStorage('storage', {
          thresholdPercent: 0.5,
          path: '/',
        }),

      // 외부 API 상태 체크 (예시)
      () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
    ]);
  }
}
