"use client";

import { APP_API_ROUTES } from "@/apis/api-routes";
import { appRoutes } from "@/core/approutes";
import { ApiResponse } from "@/types/global.type";
import { setZodServerErrors } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FormLabel from "@/ui/FormLabel";
import FileInput from "@/ui/FileInput";
import Button from "@/core/components/Button";
import { LoaderIcon } from "lucide-react";

type Props = {};

const formSchema = z.object({
  first_name: z.string().min(1, {
    message: "This field is required",
  }),
  last_name: z.string().min(1, {
    message: "This field is required",
  }),
  candidate_location: z.string().min(1, {
    message: "This field is required",
  }),
  email: z
    .string()
    .min(1, {
      message: "This field is required",
    })
    .email({ message: "Please enter a valid email" }),
  phone: z.string().min(1, {
    message: "This field is required",
  }),
  experience: z.string().optional(),
  country_code: z.string(),
  resume: z.any().refine((file) => file instanceof File || !!file, {
    message: "This field is required",
  }),
  privacy: z.boolean().refine((val) => val),
});

export default function ApplyNowForm({}: Props) {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      experience: "",
      first_name: "",
      last_name: "",
      phone: "",
      resume: "",
      country_code: "+91",
      privacy: false,
      candidate_location: "",
    },
    mode: "onChange",
  });
  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();

      formData.append("job", String(id));
      formData.append("email", values?.email);
      formData.append("experience", String(values?.experience));
      formData.append("first_name", values?.first_name);
      formData.append("last_name", values?.last_name);
      formData.append("phone", values?.phone);
      formData.append("country_code", values?.country_code);
      formData.append("candidate_location", values?.candidate_location);

      if (values.resume && values.resume[0]?.file) {
        formData.append("resume", values.resume[0].file);
      }

      const response = await axios.post<ApiResponse<any>>(
        APP_API_ROUTES.applyJob,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      if (response?.data?.status) {
        toast.success(response?.data?.message);
        form.reset();
      }
    } catch (error: any) {
      setZodServerErrors<typeof formSchema>(
        error?.response?.data?.errors,
        form.setError,
      );
    }
  };

  const privacyChecked = form.watch("privacy");

  return (
    <div className="bg-white isolate p-8">
      <div className="md:max-w-[21.975rem] lg:max-w-[29.3rem] xl:max-w-[36.625rem] 2xl:max-w-[43.95rem] 3xl:max-w-[54.938rem] mx-auto w-full">
        <h4 className="text-black text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] 3xl:text-[3.75rem]">
          Get in touch
        </h4>
        <div className="mt-3.5 md:mt-[0.8rem] lg:mt-[1.067rem] xl:mt-[1.333rem] 2xl:mt-[1.6rem] 3xl:mt-[2rem]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid gap-3.5 md:gap-[1.2rem] lg:gap-[1.6rem] xl:gap-[2rem] 2xl:gap-[2.4rem] 3xl:gap-[3rem]"
            >
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FIRST NAME</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LAST NAME</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        placeholder="Enter last name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>EMAIL</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        placeholder="Enter email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>PHONE NUMBER</FormLabel>
                    <FormControl>
                      <div className="flex items-center bg-[#F5F5F5]">
                        <FormField
                          control={form.control}
                          name="country_code"
                          render={({ field }) => (
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger className="w-[80px] border-none bg-transparent focus:ring-0 focus:outline-none">
                                <SelectValue placeholder="+91" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="+91">+91</SelectItem>
                                <SelectItem value="+1">+1</SelectItem>
                                <SelectItem value="+44">+44</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        />
                        <Input
                          {...field}
                          type="tel"
                          placeholder="Enter number"
                          className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="candidate_location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LOCATION</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        placeholder="Enter location"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>YEAR OF EXPERIENCE</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        placeholder="Enter year of experience"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Show this field only when the INQUIRY TYPE value is Job seeker */}
              <FormField
                control={form.control}
                name="resume"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>RESUME</FormLabel>
                    <FormControl>
                      <FileInput
                        onChange={field.onChange}
                        value={field.value}
                        acceptType={["application/pdf"]}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="privacy"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="mt-8 md:mt-0">
                      <div className="flex items-start gap-2 md:gap-[0.2rem] lg:gap-[0.267rem] xl:gap-[0.333rem] 2xl:gap-[0.4rem] 3xl:gap-[0.5rem]">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label
                          htmlFor="toggle"
                          className="text-[#4F4F4F] text-[12px] md:text-[0.45rem] lg:text-[0.6rem] xl:text-[0.75rem] 2xl:text-[0.9rem] 3xl:text-[1.125rem]"
                        >
                          I agree to the use or processing of my personal
                          information by QNL for the purpose of fulfilling this
                          request and in accordance with{" "}
                          <span
                            onClick={() => router.push(appRoutes.privacypolicy)}
                            className="text-primary cursor-pointer"
                          >
                            QNL Privacy Statement.{" "}
                          </span>
                        </label>
                      </div>
                    </FormControl>
                    {/* <FormMessage /> */}
                  </FormItem>
                )}
              />

              <Button
                disabled={!privacyChecked || isSubmitting}
                type="submit"
                className="w-20 md:w-[3.575rem] lg:w-[4.767rem] xl:w-[5.958rem] 2xl:w-[7.15rem] 3xl:w-[8.938rem] mt-8 md:mt-[1.2rem] lg:mt-[1.6rem] xl:mt-[2rem] 2xl:mt-[2.4rem] 3xl:mt-[3rem] disabled:opacity-50 flex items-center justify-center gap-1"
              >
                {isSubmitting ? (
                  <>
                    <LoaderIcon className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
