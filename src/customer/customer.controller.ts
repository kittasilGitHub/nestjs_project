import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post('/create')
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    const createcustomer = await this.customerService.create(createCustomerDto);
    if(createcustomer == null)
    {
      throw new Error("Can not create data!!!")
    }
    return {
      message: "Create data complete",
      data : createcustomer,
    };
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const findcustomer = await this.customerService.findOne(+id);
    if( findcustomer == null )
    {
      throw new NotFoundException('Not Found Data');
    }
    return findcustomer;
  }

  @Get('/findfullname/:fullname')
  async findFullname(@Param('fullname') fullname: string){
    const findfullname = await this.customerService.findFullname(fullname);
    if(findfullname == null){
      throw new NotFoundException("Not Found Data!!!");
    }
    return findfullname;
  }




  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
