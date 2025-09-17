"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
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
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/core/components/Button";
import axios from "axios";
import type { ApiResponse } from "@/types/global.type";
import { APP_API_ROUTES } from "@/apis/api-routes";
import { toast } from "sonner";
import { LoaderIcon } from "lucide-react";
import { INQUIRY_TYPES } from "@/constants";
import { setZodServerErrors } from "@/utils";
import { useRouter } from "next/navigation";
import { appRoutes } from "@/core/approutes";
import FormLabel from "@/ui/FormLabel";
import FileInput from "@/ui/FileInput";

type Props = {};

const formSchema = z.object({
  inquiry_type: z.string().min(1, {
    message: "This field is required",
  }),
  first_name: z.string().min(1, {
    message: "This field is required",
  }),
  last_name: z.string().min(1, {
    message: "This field is required",
  }),
  candidate_location: z.string().optional(),
  email: z
    .string()
    .min(1, {
      message: "This field is required",
    })
    .email({ message: "Please enter a valid email" }),
  phone: z.string().min(1, {
    message: "This field is required",
  }),
  company: z.string().optional(),
  country: z.string().min(1, {
    message: "This field is required",
  }),
  message: z.string().min(1, {
    message: "This field is required",
  }),
  experience: z.string().optional(),
  country_code: z.string(),
  resume: z.any().optional(),
  privacy: z.boolean().refine((val) => val),
});

export default function ContactUsForm({}: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inquiry_type: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      country_code: "+91",
      country: "",
      message: "",
      privacy: false,
      company: "",
      experience: "",
      candidate_location: "",
    },
    mode: "onChange",
  });

  const router = useRouter();

  const {
    formState: { isSubmitting },
  } = form;

  const isJobSeeker = form.watch("inquiry_type");
  const privacyChecked = form.watch("privacy");

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();

      formData.append("inquiry_type", values?.inquiry_type);
      formData.append("first_name", values?.first_name);
      formData.append("last_name", values?.last_name);
      formData.append("email", values?.email);
      formData.append("phone", `${values?.country_code}${values?.phone}`);

      if (isJobSeeker === "job_seeker") {
        formData.append("experience", String(values?.experience));
        formData.append(
          "candidate_location",
          String(values?.candidate_location),
        );
      }

      if (values?.company && values?.company !== "") {
        formData.append("company", values?.company);
      }
      formData.append("country", values?.country);
      formData.append("message", values?.message);

      if (values.resume && values.resume[0]?.file) {
        formData.append("resume", values.resume[0].file);
      }
      const formUrl =
        isJobSeeker === "job_seeker"
          ? APP_API_ROUTES.applyJob
          : APP_API_ROUTES.contactUs;
      const response = await axios.post<ApiResponse<any>>(formUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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
                name="inquiry_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>Inquiry type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {INQUIRY_TYPES.map((item) => (
                              <SelectItem value={item?.value} key={item?.value}>
                                {item?.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>FIRST NAME</FormLabel>
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
                    <FormLabel required>LAST NAME</FormLabel>
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
                    <FormLabel required>EMAIL</FormLabel>
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
                    <FormLabel required>PHONE NUMBER</FormLabel>
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

              {isJobSeeker === "job_seeker" && (
                <>
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
                            placeholder="Enter the year of experience"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {isJobSeeker !== "job_seeker" && (
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company /Organization</FormLabel>
                      <FormControl>
                        <Input
                          className=""
                          placeholder="Enter the company / organization"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {/* <FormField
            control={form.control}
            name=""
            render={({ field }) => (
              <FormItem>
                <FormLabel  >your role</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>COUNTRY / Region</FormLabel>
                    <FormControl>
                      <Input
                        className=""
                        placeholder="Enter the country / region"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>HOW CAN WE HELP YOU</FormLabel>
                    <FormControl>
                      <Textarea
                        className="text-black"
                        {...field}
                        placeholder="Type your message here."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Show this field only when the INQUIRY TYPE value is Job seeker */}
              {isJobSeeker === "job_seeker" && (
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
                    </FormItem>
                  )}
                />
              )}

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
                  </FormItem>
                )}
              />

              <Button
                disabled={!privacyChecked || isSubmitting}
                type="submit"
                className="flex items-center justify-center disabled:opacity-50 w-20 md:w-[3.575rem] lg:w-[4.767rem] xl:w-[5.958rem] 2xl:w-[7.15rem] 3xl:w-[8.938rem] mt-8 md:mt-[1.2rem] lg:mt-[1.6rem] xl:mt-[2rem] 2xl:mt-[2.4rem] 3xl:mt-[3rem]"
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
