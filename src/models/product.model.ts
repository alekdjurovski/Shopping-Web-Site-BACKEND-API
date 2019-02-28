import { Entity, model, property, hasMany, belongsTo } from '@loopback/repository';
import { Category } from './category.model';

@model()
export class Product extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string'
  })
  imageUrl: string;

  @property({
    type: 'number'
  })
  price: number;

  @property({
    type: 'string'
  })
  manufacturer: string;

  @property({
    type: 'boolean'
  })
  isAvailable: boolean;

  @property({
    type: 'string'
  })
  shortDescription: string;

  @property({
    type: 'string'
  })
  fullDescription: string;

  @belongsTo(() => Category)
  categoryId: number;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}
