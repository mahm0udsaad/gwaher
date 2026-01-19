import { tool as createTool } from 'ai';
import { z } from 'zod';

export const servicesDisplayTool = createTool({
  description: 'Display service cards with images and details when user asks about car protection services',
  inputSchema: z.object({
    serviceIds: z.array(z.enum(['thermalTinting', 'ppf', 'ceramic', 'detailing']))
      .describe('Array of service IDs to display'),
  }),
  execute: async function ({ serviceIds }) {
    // Return data that will be passed to the ServicesDisplay component
    return { serviceIds };
  },
});

export const whyChooseUsTool = createTool({
  description: 'Display the "Why Choose Us" section when user asks about company advantages or why choose Wahag',
  inputSchema: z.object({
    show: z.boolean().describe('Whether to show the section').default(true),
  }),
  execute: async function ({ show }) {
    return { show };
  },
});

export const tools = {
  displayServices: servicesDisplayTool,
  displayWhyChooseUs: whyChooseUsTool,
};
