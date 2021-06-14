import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseService } from './service/database/database.service';
import { BankEntity } from './db/entities/bank.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dbService: DatabaseService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('db')
  connectDb(): string {
    try {
      this.dbService.connect();
      return 'OK!';
    } catch (e) {
      return `KO! - ${e}`;
    }
  }

  @Get('banks')
  async getBanks() {
    try {
      const supabase = this.dbService.connect();
      const { data, error } = await supabase
        .from<BankEntity>('bank')
        .select('name');
      if (error) {
        throw error;
      }
      return JSON.stringify(data);
    } catch (e) {
      return `KO! - ${e}`;
    }
  }
}
