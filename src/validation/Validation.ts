import { z } from 'zod';

export const inputZodSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .min(11, 'Phone number must be at least 11 digits')
    .regex(/^[0-9]+$/, 'Phone number must contain only digits'),
});
