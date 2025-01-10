import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) {}

  public async create(createAccountDto: CreateAccountDto): Promise<Account> {
    const account = this.accountRepository.create({
      ownerName: createAccountDto.ownerName,
      accountType: createAccountDto.accountType,
      balance: createAccountDto.initialBalance,
      accountNumber: this.generateAccountNumber(),
    });

    return this.accountRepository.save(account);
  }

  public async findAll(): Promise<Account[]> {
    return this.accountRepository.find();
  }

  public async findOne(id: number): Promise<Account> {
    const account = await this.accountRepository.findOne({ where: { id } });
    if (!account) {
      throw new NotFoundException(`Account with ID ${id} not found`);
    }
    return account;
  }

  public async update(
    id: number,
    updateAccountDto: UpdateAccountDto,
  ): Promise<Account> {
    const account = await this.findOne(id);
    Object.assign(account, updateAccountDto);
    return this.accountRepository.save(account);
  }

  public async remove(id: number): Promise<void> {
    const account = await this.findOne(id);
    await this.accountRepository.remove(account);
  }

  private generateAccountNumber(): string {
    return Math.random().toString().slice(2, 12);
  }
}
