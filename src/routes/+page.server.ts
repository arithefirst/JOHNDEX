import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { db } from '$lib/server/db';
import { john } from '$lib/server/db/schema';

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const { userId } = locals.auth;

    if (!userId) {
      return fail(401);
    }

    const data = await request.formData();
    const name = data.get('name') as string;
    const item = data.get('item') as string;

    if (!name || !item) {
      return fail(400, { message: 'Bad data.' });
    }

    try {
      await db.insert(john).values({
        name,
        item,
      });
    } catch (e) {
      return fail(500, { message: (e as Error).message });
    }

    return {};
  },
};
