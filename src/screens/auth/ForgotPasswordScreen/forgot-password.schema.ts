import {z} from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().email('E-mail inválido'),
});

export type ForgotPasswordSchemaTypes = z.infer<typeof forgotPasswordSchema>;
