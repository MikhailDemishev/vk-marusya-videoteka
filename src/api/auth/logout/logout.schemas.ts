import { z } from "zod";

export const LogoutResponseSchema = z.object({
    result: z.boolean(),
});

export type LogoutResponse = z.infer<typeof LogoutResponseSchema>;
