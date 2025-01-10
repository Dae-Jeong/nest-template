import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum, IsNumber, Min } from 'class-validator';

enum AccountType {
  SAVINGS = 'savings',
  CHECKING = 'checking',
}

export class CreateAccountDto {
  @ApiProperty({ description: '계좌 소유자 이름' })
  @IsString()
  @IsNotEmpty()
  ownerName: string;

  @ApiProperty({ description: '계좌 유형', enum: AccountType })
  @IsEnum(AccountType)
  @IsNotEmpty()
  accountType: AccountType;

  @ApiProperty({ description: '초기 입금액', minimum: 0 })
  @IsNumber()
  @Min(0)
  initialBalance: number;
}
