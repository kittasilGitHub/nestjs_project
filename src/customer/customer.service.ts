import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CustomerService {

  constructor(
    @InjectModel(Customer)
    private customerModel: typeof Customer,
  ){}

  create(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new customer';
  }

 async findAll() {
    // findAll() use to select all data from table
    return await this.customerModel.findAll();
    // findAll() : SELECT * FROM custormers;
  }

  async findOne(id: number) {
    return await this.customerModel.findByPk(id);
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
