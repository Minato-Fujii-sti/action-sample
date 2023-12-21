import { z } from "zod";

// type User = {
//   name: string;
//   age: number;
// };

export const UserSchema = z.object({
  name: z.string(),
  age: z.number().min(0, { message: "生まれる前" }).max(130),
  email: z.string().email().optional(),
});

export type User = z.infer<typeof UserSchema>;

const ZodTest = () => {
  const user: User = {
    name: "fujii",
    age: 20,
  };

  const user2: User = {
    name: "10",
    age: 20,
    email: "hogehoge@ok.com",
  };

  console.log(UserSchema.parse(user));
  console.log(UserSchema.parse(user2));
  return (
    <div>
      <h1>Zod Test</h1>
    </div>
  );
};

export default ZodTest;
