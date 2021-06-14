import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class DatabaseService {
  private supabaseApiUrl = process.env.DATABASE_URL;
  private supabaseKey = process.env.DATABASE_KEY;
  private supabase: SupabaseClient;

  public connect() {
    if (!this.supabase) {
      const DATABASE_URL = 'https://zzbhbfufxwhxozowikpj.supabase.co';
      const DATABASE_KEY =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzI3NjgyNywiZXhwIjoxOTM4ODUyODI3fQ.oqnuc_vkcBhPzopSNKpWfnRAaXDum8biAyU_Fmo7sNc';

      this.supabase = createClient(DATABASE_URL, DATABASE_KEY);
    }
    return this.supabase;
  }

  public disconnect() {
    // TODO
  }
}
