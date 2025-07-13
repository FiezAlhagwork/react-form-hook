import { z} from "zod"


export const  signInSchema = z.object({
    firstName:z.string(),
    lastName:z.string(),
    email:z.email("البريد الإلكتروني غير صالح"),
    password:z.string(),
})

export type SignupSchemaType = z.infer<typeof signInSchema>