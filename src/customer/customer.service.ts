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

  async create(createCustomerDto: CreateCustomerDto) {
    return await this.customerModel.create(
      createCustomerDto as Partial<Customer>,
    );
  }

 async findAll() {
    // findAll() use to select all data from table
    return await this.customerModel.findAll();
    // findAll() : SELECT * FROM custormers;
  }

  async findOne(id: number) {
    return await this.customerModel.findByPk(id);
  }

  async findFullname(fullname: string){
    return await this.customerModel.findOne({
        where:{
          fullname: fullname,
        },
      }
    );
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
