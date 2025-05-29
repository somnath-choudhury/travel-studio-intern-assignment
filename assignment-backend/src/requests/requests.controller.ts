import { Controller, Post, Get, Param, Body, Patch } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/create-request.dto';

@Controller('api/requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Post()
  async create(@Body() dto: CreateRequestDto) {
    return this.requestsService.createRequest(dto);
  }

  @Get()
  async getAllRequests() {
    return this.requestsService.getAllRequests();
  }

  @Get('pending')
  async getPendingRequests() {
    return this.requestsService.getPendingRequests();
  }

  @Patch(':id')
  async updateStatus(
    @Param('id') id: string,
    @Body() body: { status: string },
  ) {
    return this.requestsService.updateStatus(Number(id), body.status);
  }
}
