export const contactConfig = {
  whatsappUrl: process.env.NEXT_PUBLIC_HYPERGALAXY_WHATSAPP_URL || "",
  email: process.env.NEXT_PUBLIC_HYPERGALAXY_CONTACT_EMAIL || "",
} as const;
