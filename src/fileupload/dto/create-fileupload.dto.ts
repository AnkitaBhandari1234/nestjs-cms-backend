import { ApiProperty } from "@nestjs/swagger";
import { HasMimeType, IsFile, MaxFileSize, MemoryStoredFile } from "nestjs-form-data";

export class CreateFileuploadDto {
    @ApiProperty({type:'string',format:'binary'})
    @IsFile()
    @MaxFileSize(5_00_000)
    @HasMimeType(['image/jpeg','image/png','application/pdf'])
    files:MemoryStoredFile
    
    @ApiProperty({nullable:true})
    fileurl:string
    

    
}
