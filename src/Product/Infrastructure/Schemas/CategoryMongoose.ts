import { Schema, Document } from 'mongoose';
import { uuid } from '@deepkit/type';
import Category from '../../../Product/Domain/Entities/Category';
import ICategoryDomain from '../../Domain/Entities/ICategoryDomain';

export type CategoryMongooseDocument = Document & ICategoryDomain;

const CategorySchema = new Schema(
  {
    _id: { type: String, default: uuid },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

CategorySchema.loadClass(Category);

export default CategorySchema;
