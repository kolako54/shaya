import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { WineService } from './wine.service';
import { CreateWineDto } from './dto/create-wine.dto';
import { UpdateWineDto } from './dto/update-wine.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

@Controller('wine')
export class WineController {
  constructor(private readonly wineService: WineService) {}

  @Post()
  create(@Body() createWineDto: CreateWineDto) {
    return this.wineService.create(createWineDto);
  }

  @Get()
  findAll(@Query() paginationQueryDto: PaginationQueryDto) {
    return this.wineService.findAll(paginationQueryDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.wineService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWineDto: UpdateWineDto) {
    return this.wineService.update(+id, updateWineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wineService.remove(+id);
  }
}
