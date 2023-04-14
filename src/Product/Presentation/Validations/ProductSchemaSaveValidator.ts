import { z } from 'zod';

const ProductSchemaSaveValidator = z.object({
  title: z.string(),
  description: z.string(),
  price: z.number(),
  stock: z.number(),
  newCategory: z.string(),
});

export default ProductSchemaSaveValidator;
