import { z } from "zod";

export const ProfileSchema = z.object({
    favorites: z.array(z.string()),
    surname: z.string(),
    name: z.string(),
    email: z.string(),
});

export type ProfileResponse = z.infer<typeof ProfileSchema>;
