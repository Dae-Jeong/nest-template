import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum } from 'class-validator';

enum AccountStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  FROZEN = 'frozen',
}

export class UpdateAccountDto {
  @ApiProperty({ description: '계좌 소유자 이름', required: false })
  @IsString()
  @IsOptional()
  ownerName?: string;

  @ApiProperty({
    description: '계좌 상태',
    enum: AccountStatus,
    required: false,
  })
  @IsEnum(AccountStatus)
  @IsOptional()
  status?: AccountStatus;
}
