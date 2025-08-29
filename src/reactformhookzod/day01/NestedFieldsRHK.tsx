import React from "react";
import z from "zod";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const userSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }),
  email: z.email({ message: "Invalid email address" }),
  address: z.object({
    street: z.string().min(1, { message: "Street is required" }),
    city: z.string().min(1, { message: "City is required" }),
    zip: z.string().regex(/^\d{4}$/, { message: "Valid ZIP code required" }),
  }),
  hobbies: z
    .array(z.string().min(2, { message: "Hobby too short" }))
    .min(1, { message: "Add at least one hobby" }),

  skills: z.array(
    z.object({
      name: z.string().min(1),
      level: z.enum(["Beginner", "Intermediate", "Expert"]),
    })
  ),

  workExperiences: z.array(
    z.object({
      company: z.string().min(1, { message: "Company is required" }),
      role: z.string().min(1, { message: "Role is required" }),
      years: z.coerce
        .number()
        .int()
        .positive()
        .min(1, { message: "Years must be at least 1" }),
      isCurrentJob: z.boolean().optional(),
    })
  ),
});

type UserFormInputs = z.infer<typeof userSchema>;

export default function NestedFieldsRHK() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<UserFormInputs>({
    mode: "onSubmit",
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      address: {
        street: "",
        city: "",
        zip: "",
      },
      hobbies: [""],
      skills: [
        {
          name: "",
          level: "Beginner",
        },
      ],
      workExperiences: [
        {
          company: "",
          role: "",
          years: 1,
          isCurrentJob: false,
        },
      ],
    },
  });

  const {
    fields: hobbyFields,
    append: appendHobby,
    remove: removeHobby,
  } = useFieldArray({
    control,
    name: "hobbies",
  });

  const {
    fields: skillFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({
    control,
    name: "skills",
  });

  const {
    fields: experienceFields,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control,
    name: "workExperiences",
  });

  const workExperiences = watch("workExperiences");

  React.useEffect(() => {
    const currentJobs = workExperiences?.filter((exp) => exp.isCurrentJob);

    if (currentJobs && currentJobs.length > 1) {
      const firstCurrentIndex = workExperiences.findIndex(
        (exp) => exp.isCurrentJob
      );

      workExperiences.forEach((_, index) => {
        if (index !== firstCurrentIndex) {
          setValue(`workExperiences.${index}.isCurrentJob` as const, false, {
            shouldValidate: true,
          });
        }
      });
    }
  }, [workExperiences, setValue]);

  const onSubmit = (data: UserFormInputs) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto space-y-6 p-6 border rounded-lg shadow-sm"
      >
        <h2 className="text-2xl font-bold">User Profile</h2>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            {...register("name")}
            className="w-full border rounded p-2"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="text"
            {...register("email")}
            className="w-full border rounded p-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Nested: Address */}
        <div className="border-t border-gray-400 pt-4">
          <h3 className="text-lg font-semibold mb-2">Address</h3>

          <div className="flex gap-5">
            <div className="flex-2">
              <label>Street</label>
              <input
                type="text"
                {...register("address.street")}
                className="w-full border rounded p-2"
              />
              {errors.address?.street && (
                <p className="text-red-500 text-sm">
                  {errors.address.street.message}
                </p>
              )}
            </div>
            <div className="flex-2">
              <label>City</label>
              <input
                type="text"
                {...register("address.city")}
                className="w-full border rounded p-2"
              />
              {errors.address?.city && (
                <p className="text-red-500 text-sm">
                  {errors.address.city.message}
                </p>
              )}
            </div>
            <div className="flex-1">
              <label>ZIP Code</label>
              <input
                type="text"
                {...register("address.zip")}
                className="w-full border rounded p-2"
              />
              {errors.address?.zip && (
                <p className="text-red-500 text-sm">
                  {errors.address.zip.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Array: Hobbies */}
        <div className="border-t border-gray-400 pt-4">
          <h3 className="text-lg font-semibold mb-2">Hobbies</h3>

          {hobbyFields.map((field, index) => (
            <div key={field.id} className="flex gap-2 mb-2">
              <input
                type="text"
                {...register(`hobbies.${index}` as const)}
                placeholder="e.g., Reading"
                className="flex-1 border rounded p-2"
              />
              <button
                type="button"
                onClick={() => removeHobby(index)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendHobby("")}
            className="bg-green-500 text-white px-3 py-1 rounded text-sm"
          >
            + Add Hobby
          </button>
          {errors.hobbies && (
            <p className="text-red-500 text-sm">{errors.hobbies.message}</p>
          )}
        </div>

        {/* Skills */}
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold mb-2">Skills</h3>
          {skillFields.map((field, index) => (
            <div key={field.id} className="border p-4 rounded mb-3 space-y-3">
              <div>
                <label>Skill Name</label>
                <input
                  type="text"
                  {...register(`skills.${index}.name` as const)}
                  className="w-full border rounded p-2"
                />
                {errors.skills?.[index]?.name && (
                  <p className="text-red-500 text-sm">
                    {errors.skills[index].name.message}
                  </p>
                )}
              </div>
              <div>
                <label>Level</label>
                <select
                  {...register(`skills.${index}.level` as const)}
                  className="w-full border rounded p-2"
                >
                  <option value="">Select Level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Expert">Expert</option>
                </select>
                {errors.skills?.[index]?.level && (
                  <p className="text-red-500 text-sm">
                    {errors.skills[index].level.message}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="bg-red-500 text-white px-3 py-1 rounded text-sm"
              >
                Remove Skill
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendSkill({ name: "", level: "Beginner" })}
            className="bg-green-500 text-white px-3 py-1 rounded text-sm"
          >
            + Add Skill
          </button>
          {errors.skills && (
            <p className="text-red-500 text-sm">{errors.skills.message}</p>
          )}
        </div>

        {/* Array of Objects: Work Experiences */}
        <div className="border-t border-gray-400 pt-4">
          <h3 className="text-lg font-semibold mb-2">Work Experience</h3>
          {experienceFields.map((field, index) => (
            <div key={field.id} className="border p-4 rounded mb-3 space-y-3">
              <div>
                <label>Company</label>
                <input
                  type="text"
                  {...register(`workExperiences.${index}.company` as const)}
                  className="w-full border rounded p-2"
                />
                {errors.workExperiences?.[index]?.company && (
                  <p className="text-red-500 text-sm">
                    {errors.workExperiences[index].company.message}
                  </p>
                )}
              </div>
              <div>
                <label>Role</label>
                <input
                  type="text"
                  {...register(`workExperiences.${index}.role` as const)}
                  className="w-full border rounded p-2"
                />
                {errors.workExperiences?.[index]?.role && (
                  <p className="text-red-500 text-sm">
                    {errors.workExperiences[index].role.message}
                  </p>
                )}
              </div>
              <div className="flex gap-2 justify-between items-center">
                <div>
                  <label>Years</label>
                  <input
                    type="number"
                    {...register(`workExperiences.${index}.years` as const)}
                    className="w-full border rounded p-2"
                  />
                  {errors.workExperiences?.[index]?.years && (
                    <p className="text-red-500 text-sm">
                      {errors.workExperiences[index].years.message}
                    </p>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    {...register(
                      `workExperiences.${index}.isCurrentJob` as const
                    )}
                  />
                  <label>Current Job</label>
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeExperience(index)}
                className="bg-red-500 text-white px-3 py-1 rounded text-sm"
              >
                Remove Experience
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              appendExperience({ company: "", role: "", years: 1 })
            }
            className="bg-green-500 text-white px-3 py-1 rounded text-sm"
          >
            + Add Experience
          </button>
          {errors.workExperiences && (
            <p className="text-red-500 text-sm">
              {errors.workExperiences.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded font-semibold hover:bg-blue-600"
        >
          Save Profile
        </button>
      </form>
    </>
  );
}
