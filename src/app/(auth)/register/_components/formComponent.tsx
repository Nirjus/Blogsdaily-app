import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Lock, Mail, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
// In your login component file

const RegisterComponent: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="  w-full max-w-md m-auto mt-5"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className=" mb-4">
              <FormControl>
                <Input
                  leftIcon={<User2 size={20} color="gray" className=" ml-3" />}
                  placeholder="Enter name"
                  borderStyle={
                    form.formState.errors.name
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
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className=" mb-4">
              <FormControl>
                <Input
                  leftIcon={<Mail size={20} color="gray" className=" ml-3" />}
                  placeholder="Enter email"
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className=" mb-4">
              <FormControl>
                <Input
                  type={showPassword ? "text" : "password"}
                  leftIcon={<Lock size={20} color="gray" className=" ml-3" />}
                  placeholder="Enter password"
                  borderStyle={
                    form.formState.errors.password
                      ? "border-red-500"
                      : "border-stone-300"
                  }
                  rightIcon={
                    <div onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <Eye size={20} color="gray" className=" mr-3" />
                      ) : (
                        <EyeOff size={20} color="gray" className=" mr-3" />
                      )}
                    </div>
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
          Sign Up
        </Button>
      </form>
    </Form>
  );
};

export default RegisterComponent;
