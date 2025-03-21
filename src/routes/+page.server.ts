import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { db } from '$lib/server/db';
import { john } from '$lib/server/db/schema';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import { message } from 'sveltekit-superforms';
import { clerkClient } from 'svelte-clerk/server';

const schema = z.object({
  name: z.string().min(1, 'Must not be empty.'),
  item: z.string().min(1, 'Must not be empty.'),
});

export const load = async () => {
  const form = await superValidate(zod(schema));
  const johns = await db.select().from(john).orderBy(john.createdAt);
  return { form, johns };
};

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const { userId } = locals.auth;

    if (!userId) {
      return fail(401);
    }

    const form = await superValidate(request, zod(schema));

    if (!form.valid) {
      return fail(400, { form });
    }

    const name = form.data.name;
    const item = form.data.item;

    try {
      await db.insert(john).values({
        name,
        item,
        uploader: (await clerkClient.users.getUser(userId)).fullName || 'UNKNOWN USER!',
        createdAt: new Date(),
      });
    } catch (e) {
      return fail(500, { message: (e as Error).message });
    }

    return message(form, 'Success!');
  },
};
