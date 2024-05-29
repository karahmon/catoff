import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateWalletAddressDto {
  @IsNotEmpty()
  @IsString()
  @Length(42, 42) // Assuming wallet addresses are exactly 42 characters long
  address: string;
}
