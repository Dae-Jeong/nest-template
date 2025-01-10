import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@ApiTags('accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  @ApiOperation({ summary: '새 계좌 생성' })
  @ApiResponse({
    status: 201,
    description: '계좌가 성공적으로 생성됨',
    type: Account,
  })
  public create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.create(createAccountDto);
  }

  @Get()
  @ApiOperation({ summary: '모든 계좌 조회' })
  @ApiResponse({ status: 200, description: '모든 계좌 목록', type: [Account] })
  public findAll() {
    return this.accountsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: '특정 계좌 조회' })
  @ApiResponse({ status: 200, description: '계좌 정보', type: Account })
  @ApiResponse({ status: 404, description: '계좌를 찾을 수 없음' })
  public findOne(@Param('id') id: string) {
    return this.accountsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: '계좌 정보 수정' })
  @ApiResponse({
    status: 200,
    description: '계좌 정보가 수정됨',
    type: Account,
  })
  @ApiResponse({ status: 404, description: '계좌를 찾을 수 없음' })
  public update(
    @Param('id') id: string,
    @Body() updateAccountDto: UpdateAccountDto,
  ) {
    return this.accountsService.update(+id, updateAccountDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '계좌 삭제' })
  @ApiResponse({ status: 200, description: '계좌가 삭제됨' })
  @ApiResponse({ status: 404, description: '계좌를 찾을 수 없음' })
  public remove(@Param('id') id: string) {
    return this.accountsService.remove(+id);
  }
}
