import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(4, { message: "user name must be atlist 4 character" })
    .max(35, { message: "user name excede the maximum character limit" })
    .regex(/^[a-zA-Z0-9_ ]+$/, {
      message: "user name must not contain special characters, except space",
    }),
  email: z.string().email({ message: "Please provide a valid email" }).trim(),
  password: z
    .string()
    .min(4, { message: "password must be atlist 4 character" })
    .max(50, { message: "password excede the maximum character limit" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,50}$/,
      {
        message:
          "password must contain at least one upper case letter, one lower case letter, one special case character and one digit",
      }
    )
    .trim(),
});
