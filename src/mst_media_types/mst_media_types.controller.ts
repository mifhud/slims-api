import { Controller, Get, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthGuard } from '@nestjs/passport';

import { MSTMediaTypesService } from './mst_media_types.service';
import { MST_Media_Type } from './mst_media_type.entity';

// @ApiBearerAuth()
@ApiTags('mst-media-type')
@Controller('mst-media-type')
// @UseGuards(AuthGuard())
export class MSTMediaTypesController {
  constructor(
    private MSTMediaTypesService: MSTMediaTypesService
  ) { }

  @Get('/:media_type')
  @ApiQuery({ name: 'media_type', required: false })
  getMSTMediaTypesByMediaType(@Query('media_type') media_type: string): Promise<MST_Media_Type[]> {
    return this.MSTMediaTypesService.getMSTMediaTypesByMediaType(media_type);
  }
}