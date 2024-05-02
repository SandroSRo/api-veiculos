import { Document, Model } from 'mongoose';

export default class BaseRepository<T extends Document> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async getAll(): Promise<T[]> {
    return this.model.find().exec();
  }

  async getById(id: string): Promise<T | null> {
    return this.model.findById(id).exec();
  }

  async add(data: Partial<T>): Promise<T> {
    return this.model.create(data);
  }

  async update(id: string, data: Partial<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id).exec();
  }

  async findOne(conditions: any): Promise<T | null> {
    return this.model.findOne(conditions).exec();
  }

  async find(conditions: any): Promise<T[]> {
    return this.model.find(conditions).exec();
  }

  async count(conditions?: any): Promise<number> {
    return this.model.countDocuments(conditions).exec();
  }

  async findOneAndUpdate(conditions: any, data: any, options?: any): Promise<T | any> {
    return this.model.findOneAndUpdate(conditions, data, { new: true, ...options }).exec();
  }

  async findOneAndDelete(conditions: any, options?: any): Promise<T | any> {
    return this.model.findOneAndDelete(conditions, options).exec();
  }

  async updateMany(conditions: any, data: any): Promise<any> {
    return this.model.updateMany(conditions, data).exec();
  }

  async deleteMany(conditions: any): Promise<any> {
    return this.model.deleteMany(conditions).exec();
  }

  async aggregate(pipeline: any[]): Promise<any[]> {
    return this.model.aggregate(pipeline).exec();
  }

  async exists(conditions: any): Promise<any> {
    return this.model.exists(conditions).exec();
  }

}
