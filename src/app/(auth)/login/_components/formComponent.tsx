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
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// In your login component file

const LoginComponent: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
        <div className=" px-1 flex justify-between items-center mb-5">
          <span className=" flex  justify-center items-center">
            <Checkbox className=" mr-4" />
            <p className=" text-sm">Remember me</p>
          </span>
          <p className=" font-semibold text-indigo-500 text-sm ">
            <Link href={"/forgot-password"}>Forgot password?</Link>
          </p>
        </div>
        <Button
          type="submit"
          className=" bg-indigo-500 hover:bg-indigo-500/90 font-normal active:bg-indigo-400 text-white p-2 rounded-lg w-full "
        >
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginComponent;
