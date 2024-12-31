import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z.string().email({ message: "Please provide a valid email" }).trim(),
});

export default function ForgotPassForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (value: z.infer<typeof formSchema>) => {
    console.log(value);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" max-w-md m-auto w-full mt-5"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className=" mb-4">
              <FormControl>
                <Input
                  leftIcon={<Mail size={20} color="gray" className=" ml-3" />}
                  placeholder="Enter Email"
                  borderStyle={
                    form.formState.errors.email
                      ? "border-red-500"
                      : "border-stone-300"
                  }
                  {...field}
                />
              </FormControl>
              <FormMessage className=" ml-2" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className=" bg-indigo-500 hover:bg-indigo-500/90 font-normal active:bg-indigo-400 text-white p-2 rounded-lg w-full "
        >
          Send verification Link
        </Button>
      </form>
    </Form>
  );
}
