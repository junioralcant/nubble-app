import {stringUtils} from '@utils';
import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;
export const signUpSchema = z.object({
  username: z
    .string()
    .min(5, 'username muito curto')
    .regex(userNameRegex, 'Username inválido')
    .toLowerCase(),
  firstName: z
    .string()
    .min(3, 'Name muito curto')
    .max(30, 'name muito longo')
    .transform(stringUtils.capitalizeFirstLetter),
  lastName: z
    .string()
    .min(3, 'Name muito curto')
    .max(30, 'name muito longo')
    .transform(stringUtils.capitalizeFirstLetter),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
});

export type SignUpSchemaTypes = z.infer<typeof signUpSchema>;
