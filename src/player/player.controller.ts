import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post('new')
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto);
  }

  @Get('all')
  findAll() {
    return this.playerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') uuid: string) {
    return this.playerService.findOne(uuid);
  }

  @Get('match/:id')
  findInMatch(@Param(':id') matchUuid: string) {
    return this.playerService.findInMatch(matchUuid);
  }

  @Patch(':id')
  update(@Param('id') uuid: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playerService.update(uuid, updatePlayerDto);
  }

  @Delete(':id')
  remove(@Param('id') uuid: string) {
    return this.playerService.remove(uuid);
  }
}
