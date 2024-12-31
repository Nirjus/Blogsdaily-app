import { z } from "zod";

export const formSchema = z.object({
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
