import { IsString, IsNumberString } from 'class-validator'

export class CreateProductDto {
  @IsString()
  name: string

  @IsNumberString()
  price: number

  @IsNumberString()
  weight: number
}
