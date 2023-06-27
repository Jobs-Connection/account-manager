import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Applicant } from './applicant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Applicant])],
  controllers: [],
  providers: []
})
export class ApplicantsModule {}