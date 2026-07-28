export interface Bilingual {
  vi: string;
  en: string;
}

const dict = {
  "nav.products": { vi: "Sản phẩm", en: "Products" },
  "nav.services": { vi: "Dịch vụ", en: "Services" },
  "nav.pricing": { vi: "Bảng giá", en: "Pricing" },
  "nav.faq": { vi: "Hỏi đáp", en: "FAQ" },
  "nav.getStarted": { vi: "Dùng thử miễn phí", en: "Try it free" },

  "hero.eyebrow": {
    vi: "Bộ đôi công cụ cho website WordPress",
    en: "A pair of tools for your WordPress site",
  },
  "hero.titleLine1": { vi: "Chuyển đổi tốt hơn.", en: "More conversions." },
  "hero.titleLine2": {
    vi: "Khách hàng nhiều hơn.",
    en: "More customers.",
  },
  "hero.subtitle": {
    vi: "SOFTY Custom Layouts chèn sẵn các khối giao diện vào Classic Editor chỉ bằng vài cú nhấp chuột. AI Chatbot trực trang 24/7, hiểu nội dung website và trả lời như một nhân viên tư vấn thực thụ.",
    en: "SOFTY Custom Layouts drops ready-made layout blocks into your Classic Editor in a couple of clicks. AI Chatbot stays on your site around the clock, understands your content, and replies like a real advisor.",
  },
  "hero.ctaPrimary": { vi: "Xem SOFTY Layouts", en: "See SOFTY Layouts" },
  "hero.ctaSecondary": { vi: "Xem AI Chatbot", en: "See AI Chatbot" },
  "hero.trust1": {
    vi: "Tương thích Classic Editor",
    en: "Classic Editor ready",
  },
  "hero.trust2": { vi: "WordPress 5.0 – 7.x", en: "WordPress 5.0 – 7.x" },
  "hero.trust3": { vi: "Hỗ trợ tiếng Việt", en: "Vietnamese support" },
  "hero.mockToolbarLabel": {
    vi: "bài-viết-moi.php — Classic Editor",
    en: "new-post.php — Classic Editor",
  },
  "hero.mockDropdownLabel": {
    vi: "Chèn Layout SOFTY",
    en: "Insert SOFTY Layout",
  },
  "hero.chatBubble": {
    vi: "Chào bạn, mình cần tìm gì hôm nay?",
    en: "Hi there, what can I help you find?",
  },

  "products.eyebrow": { vi: "Hai sản phẩm chính", en: "Two flagship products" },
  "products.title": {
    vi: "Mỗi sản phẩm giải quyết một điểm nghẽn thực tế",
    en: "Each product solves one real bottleneck",
  },
  "products.subtitle": {
    vi: "Dùng riêng lẻ hoặc kết hợp cả hai để trang nội dung đẹp hơn và khách ghé thăm được chăm sóc ngay lập tức.",
    en: "Use them on their own or together, so your content looks sharp and every visitor gets tended to right away.",
  },
  "products.viewDetail": { vi: "Xem chi tiết", en: "View details" },
  "products.keyFeatures": { vi: "Tính năng nổi bật", en: "Key features" },

  "services.eyebrow": { vi: "Dịch vụ đi kèm", en: "Services" },
  "services.title": {
    vi: "Cần thứ gì đó riêng cho website của bạn?",
    en: "Need something built just for your site?",
  },
  "services.subtitle": {
    vi: "Đội ngũ SOFTY nhận tuỳ biến plugin, theme và tích hợp theo yêu cầu, không chỉ bán phần mềm đóng gói sẵn.",
    en: "The SOFTY team also customizes plugins, themes and integrations on request — we don't just ship boxed software.",
  },

  "pricing.eyebrow": { vi: "Bảng giá", en: "Pricing" },
  "pricing.title": {
    vi: "Chọn gói phù hợp với quy mô website",
    en: "Pick the plan that fits your site",
  },
  "pricing.subtitle": {
    vi: "Giá trọn gói theo năm, đã bao gồm cập nhật và hỗ trợ kỹ thuật.",
    en: "Flat annual pricing, updates and technical support included.",
  },
  "pricing.perYear": { vi: "/ năm", en: "/ year" },
  "pricing.perSite": { vi: "1 tên miền", en: "1 domain" },
  "pricing.mostPopular": { vi: "Được chọn nhiều nhất", en: "Most popular" },
  "pricing.cta": { vi: "Chọn gói này", en: "Choose plan" },

  "testimonials.eyebrow": { vi: "Người dùng nói gì", en: "What users say" },
  "testimonials.title": {
    vi: "Đang chạy trên hàng trăm website mỗi ngày",
    en: "Running on hundreds of sites every day",
  },

  "faq.eyebrow": { vi: "Hỏi đáp", en: "FAQ" },
  "faq.title": { vi: "Câu hỏi thường gặp", en: "Frequently asked questions" },

  "cta.title": {
    vi: "Sẵn sàng nâng cấp website WordPress của bạn?",
    en: "Ready to upgrade your WordPress site?",
  },
  "cta.subtitle": {
    vi: "Cài đặt trong 5 phút, dùng thử miễn phí 14 ngày, không cần thẻ tín dụng.",
    en: "Set up in five minutes, try free for 14 days, no credit card required.",
  },
  "cta.button": { vi: "Bắt đầu dùng thử", en: "Start your trial" },

  "footer.tagline": {
    vi: "Công cụ nhỏ, gọn cho website WordPress lớn mạnh.",
    en: "Small tools for a growing WordPress site.",
  },
  "footer.products": { vi: "Sản phẩm", en: "Products" },
  "footer.company": { vi: "Công ty", en: "Company" },
  "footer.support": { vi: "Hỗ trợ", en: "Support" },
  "footer.about": { vi: "Giới thiệu", en: "About" },
  "footer.contact": { vi: "Liên hệ", en: "Contact" },
  "footer.docs": { vi: "Tài liệu", en: "Documentation" },
  "footer.changelog": { vi: "Nhật ký thay đổi", en: "Changelog" },
  "footer.rights": {
    vi: "Đã đăng ký bản quyền.",
    en: "All rights reserved.",
  },

  "detail.back": { vi: "Quay lại trang chủ", en: "Back to home" },
  "detail.overview": { vi: "Tổng quan", en: "Overview" },
  "detail.features": { vi: "Tính năng chi tiết", en: "All features" },
  "detail.cta": { vi: "Dùng thử miễn phí", en: "Try it free" },
  "detail.notFoundTitle": { vi: "Không tìm thấy trang", en: "Page not found" },
  "detail.notFoundBody": {
    vi: "Sản phẩm bạn tìm không tồn tại hoặc đã được đổi tên.",
    en: "The product you're looking for doesn't exist or was renamed.",
  },
} as const;

export type TranslationKey = keyof typeof dict;

export const translations: Record<TranslationKey, Bilingual> = dict;
