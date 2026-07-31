import { Language } from "../i18n/LanguageContext";

const SALES_EMAIL = "soft.io.vn@gmail.com";

/**
 * Builds a mailto: link that opens the user's email client with a
 * pre-filled subject (and short body) for a specific product + pricing tier.
 */
export function buildPlanMailto(
  productName: string,
  tierName: string,
  price: string,
  lang: Language,
): string {
  const subject =
    lang === "vi"
      ? `Yêu cầu tư vấn gói ${tierName} - ${productName}`
      : `Inquiry about the ${tierName} plan - ${productName}`;

  const body =
    lang === "vi"
      ? `Chào SOFTY,\n\nTôi muốn tìm hiểu thêm về gói ${tierName} (${price}/năm) của ${productName}.\n\nCảm ơn!`
      : `Hi SOFTY team,\n\nI'd like to learn more about the ${tierName} plan (${price}/year) for ${productName}.\n\nThanks!`;

  const params = new URLSearchParams({ subject, body });
  return `mailto:${SALES_EMAIL}?${params.toString().replace(/\+/g, "%20")}`;
}
