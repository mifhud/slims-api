import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CustomDate } from 'src/utils/custom-date';
import { AuthorityType } from '../mst_author.entity';

export class UpdateMSTAuthorDto {
    @ApiProperty()
    @IsNotEmpty()
    author_name: string;

    @ApiProperty()
    author_year: string;

    @ApiProperty({ default: AuthorityType.PERSONAL_NAME })
    authority_type: AuthorityType;

    @ApiProperty()
    auth_list: string;
    
    last_update: string = new CustomDate().getDate();
}