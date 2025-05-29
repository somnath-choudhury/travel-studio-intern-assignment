import { Injectable } from '@nestjs/common';
import { supabase } from '../supabase/supabase.client';
import { CreateRequestDto } from './dto/create-request.dto';

@Injectable()
export class RequestsService {
  async createRequest(dto: CreateRequestDto) {
    const { guest_name, guest_phone, request_text, timestamp } = dto;

    const { data, error } = await supabase
      .from('guest_requests')
      .insert([
        {
          guest_name,
          guest_phone,
          request_text,
          timestamp,
          status: 'pending',
        },
      ])
      .select()
      .single();

    if (error) {
      throw new Error(`Insert failed: ${error.message}`);
    }

    return { message: 'Request saved successfully', data };
  }

  async getAllRequests() {
    const { data, error } = await supabase
      .from('guest_requests')
      .select('*')
      .order('timestamp', { ascending: false });

    if (error) {
      throw new Error(`Fetch failed: ${error.message}`);
    }

    return data;
  }

  async getPendingRequests() {
    const { data, error } = await supabase
      .from('guest_requests')
      .select('*')
      .eq('status', 'pending')
      .order('timestamp', { ascending: false });

    if (error) {
      throw new Error(`Fetch failed: ${error.message}`);
    }

    return data;
  }

  async updateStatus(id: number, status: string) {
    const { error } = await supabase
      .from('guest_requests')
      .update({ status })
      .eq('id', id);

    if (error) throw new Error(error.message);

    return { message: 'Status updated' };
  }
}



