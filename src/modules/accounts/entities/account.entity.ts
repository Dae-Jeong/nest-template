import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('accounts')
export class Account {
  @ApiProperty({ description: '계좌 ID' })
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({ description: '계좌 번호' })
  @Column({ unique: true })
  public accountNumber: string;

  @ApiProperty({ description: '계좌 소유자 이름' })
  @Column()
  public ownerName: string;

  @ApiProperty({ description: '계좌 잔액' })
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  public balance: number;

  @ApiProperty({ description: '계좌 유형' })
  @Column()
  public accountType: string;

  @ApiProperty({ description: '계좌 상태' })
  @Column({ default: 'active' })
  public status: string;

  @ApiProperty({ description: '생성일' })
  @CreateDateColumn()
  public createdAt: Date;

  @ApiProperty({ description: '수정일' })
  @UpdateDateColumn()
  public updatedAt: Date;
}
