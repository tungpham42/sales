import { Bilingual } from "../i18n/translations";

export interface Feature {
  title: Bilingual;
  desc: Bilingual;
}

export interface PricingTier {
  id: string;
  name: Bilingual;
  price: Bilingual;
  sites: Bilingual;
  popular?: boolean;
  bullets: Bilingual[];
}

export interface Product {
  slug: string;
  accent: "indigo" | "teal";
  name: string;
  tagline: Bilingual;
  summary: Bilingual;
  windowTab: string;
  chips: string[];
  features: Feature[];
  pricing: PricingTier[];
}

export const products: Product[] = [
  {
    slug: "softy-layouts",
    accent: "indigo",
    name: "SOFTY Custom Layouts for TinyMCE",
    tagline: {
      vi: "Chèn khối giao diện dựng sẵn ngay trong Classic Editor",
      en: "Ready-made layout blocks, inserted right inside Classic Editor",
    },
    summary: {
      vi: "SOFTY thêm một menu thả xuống ngay trên thanh công cụ TinyMCE (Classic Editor). Chỉ cần chọn một khối — CTA, mục lục, bảng sản phẩm, bảng giá, hộp cảnh báo — và nội dung được chèn kèm định dạng đẹp sẵn, không cần biết code hay shortcode.",
      en: "SOFTY adds a dropdown right on the TinyMCE (Classic Editor) toolbar. Pick a block — CTA, table of contents, product grid, pricing table, alert box — and it drops in fully styled, no code or shortcode memorizing required.",
    },
    windowTab: "post-editor.php",
    chips: [
      "CTA",
      "TOC",
      "Products",
      "Pricing",
      "FAQ",
      "Alert box",
      "Testimonial",
      "Comparison",
    ],
    features: [
      {
        title: {
          vi: "Menu thả xuống ngay trong TinyMCE",
          en: "A dropdown built into TinyMCE",
        },
        desc: {
          vi: "Xuất hiện ngay trên thanh công cụ Classic Editor quen thuộc, không cần cài thêm page builder.",
          en: "Sits right on the familiar Classic Editor toolbar — no separate page builder to learn.",
        },
      },
      {
        title: { vi: "Thư viện khối đa dạng", en: "A library of ready blocks" },
        desc: {
          vi: "CTA, mục lục tự động, bảng sản phẩm, bảng so sánh, bảng giá, hộp cảnh báo, khối đánh giá và nhiều hơn nữa.",
          en: "CTAs, auto table of contents, product grids, comparison tables, pricing tables, alert boxes, review blocks, and more.",
        },
      },
      {
        title: {
          vi: "Tuỳ chỉnh không cần code",
          en: "Style without touching code",
        },
        desc: {
          vi: "Đổi màu, khoảng cách và kiểu chữ ngay trong bảng điều khiển, không đụng tới CSS.",
          en: "Adjust colors, spacing and typography from a panel — no CSS required.",
        },
      },
      {
        title: { vi: "Tương thích mọi theme", en: "Works with any theme" },
        desc: {
          vi: "Khối được dựng bằng CSS gọn nhẹ, không xung đột với theme hiện có của bạn.",
          en: "Blocks are built with lightweight CSS that won't fight your existing theme.",
        },
      },
      {
        title: { vi: "Nhẹ, không làm chậm trang", en: "Lightweight by design" },
        desc: {
          vi: "Không kèm theo trình dựng trang cồng kềnh, chỉ tải đúng phần cần dùng.",
          en: "No bloated page-builder runtime — only what a block actually needs gets loaded.",
        },
      },
      {
        title: {
          vi: "Import / export bộ khối",
          en: "Import and export block sets",
        },
        desc: {
          vi: "Sao chép bộ layout đã tuỳ chỉnh sang website khác chỉ trong một cú nhấp.",
          en: "Copy a customized layout set to another site in a single click.",
        },
      },
    ],
    pricing: [
      {
        id: "layouts-personal",
        name: { vi: "Gói tiêu chuẩn", en: "Standard" },
        price: { vi: "300.000đ", en: "$12" },
        sites: { vi: "1 tên miền", en: "1 domain" },
        bullets: [
          {
            vi: "Đổi màu theo nhận diện thương hiệu",
            en: "Change colors to match brand identity",
          },
          {
            vi: "Toàn bộ khối layout có sẵn",
            en: "Full library of layout blocks",
          },
          { vi: "Nâng cấp miễn phí trong 1 năm", en: "1 year of updates" },
          { vi: "Hỗ trợ qua email", en: "Email support" },
          { vi: "Hướng dẫn miễn phí", en: "Free guideline" },
          { vi: "Cài đặt miễn phí", en: "Free setup" },
        ],
      },
      {
        id: "layouts-agency",
        name: { vi: "Gói cao cấp", en: "Premium" },
        price: { vi: "999.000đ", en: "$40" },
        sites: { vi: "5 tên miền", en: "5 domains" },
        popular: true,
        bullets: [
          {
            vi: "Đổi màu theo nhận diện thương hiệu",
            en: "Change colors to match brand identity",
          },
          {
            vi: "Toàn bộ khối layout có sẵn",
            en: "Full library of layout blocks",
          },
          { vi: "Nâng cấp miễn phí trong 1 năm", en: "1 year of updates" },
          { vi: "Hỗ trợ qua email", en: "Email support" },
          { vi: "Hướng dẫn miễn phí", en: "Free guideline" },
          { vi: "Cài đặt miễn phí", en: "Free setup" },
          {
            vi: "Import/export bộ khối tuỳ biến",
            en: "Import/export custom block sets",
          },
          { vi: "Hỗ trợ ưu tiên", en: "Priority support" },
        ],
      },
    ],
  },
  {
    slug: "ai-chatbot",
    accent: "teal",
    name: "AI Chatbot",
    tagline: {
      vi: "Trợ lý AI trực trang, hiểu nội dung và trả lời như người thật",
      en: "An on-site AI assistant that knows your content and talks like a real person",
    },
    summary: {
      vi: "AI Chatbot là widget chat AI cho website, dùng RAG để trả lời đúng theo nội dung của bạn, kết nối Facebook và Zalo, có sẵn Live Chat khi cần người thật tiếp quản, cùng bộ công cụ phân tích và thu thập lead đầy đủ.",
      en: "AI Chatbot is an AI chat widget for your site. It uses RAG to answer from your own content, connects to Facebook and Zalo, hands off to Live Chat when a human is needed, and comes with a full analytics and lead-capture toolkit.",
    },
    windowTab: "ai-chatbot-widget",
    chips: [
      "RAG",
      "Facebook",
      "Zalo",
      "Live Chat",
      "Canned Responses",
      "Auto Suggestions",
      "Analytics",
      "Voice Chat",
    ],
    features: [
      {
        title: {
          vi: "RAG trên nội dung website",
          en: "RAG grounded on your content",
        },
        desc: {
          vi: "Chatbot đọc hiểu bài viết, trang và sản phẩm của bạn để trả lời chính xác, không bịa thông tin.",
          en: "The chatbot reads your posts, pages and products to answer accurately instead of guessing.",
        },
      },
      {
        title: {
          vi: "Kết nối Facebook & Zalo",
          en: "Facebook & Zalo connected",
        },
        desc: {
          vi: "Đồng bộ hội thoại từ Fanpage và Zalo OA về cùng một khung quản lý.",
          en: "Sync conversations from your Fanpage and Zalo OA into one inbox.",
        },
      },
      {
        title: {
          vi: "Live Chat chuyển tiếp người thật",
          en: "Live Chat handover",
        },
        desc: {
          vi: "Chuyển cuộc trò chuyện cho nhân viên bất cứ lúc nào khách cần hỗ trợ sâu hơn.",
          en: "Hand a conversation to a human agent the moment a visitor needs more than AI can give.",
        },
      },
      {
        title: { vi: "Câu trả lời soạn sẵn", en: "Canned responses" },
        desc: {
          vi: "Lưu sẵn các câu trả lời hay dùng để nhân viên phản hồi nhanh và nhất quán.",
          en: "Save frequently used answers so agents reply fast and stay consistent.",
        },
      },
      {
        title: { vi: "Gợi ý tự động", en: "Auto suggestions" },
        desc: {
          vi: "Đề xuất câu hỏi tiếp theo giúp khách tiếp tục trò chuyện tự nhiên hơn.",
          en: "Suggests the next likely question so the conversation keeps flowing naturally.",
        },
      },
      {
        title: { vi: "Phân tích chi tiết", en: "Analytics" },
        desc: {
          vi: "Theo dõi số hội thoại, chủ đề được hỏi nhiều và tỉ lệ chuyển đổi thành lead.",
          en: "Track conversation volume, the topics asked most, and lead conversion rate.",
        },
      },
      {
        title: { vi: "Theo dõi nguồn truy cập", en: "Referrer URL tracking" },
        desc: {
          vi: "Biết khách đến từ trang nào trước khi bắt đầu trò chuyện để tư vấn đúng ngữ cảnh.",
          en: "See which page a visitor came from before chatting, for context-aware answers.",
        },
      },
      {
        title: {
          vi: "Lọc theo thiết bị & quốc gia",
          en: "Device & country filter",
        },
        desc: {
          vi: "Bật/tắt chatbot hoặc đổi kịch bản theo thiết bị và quốc gia truy cập.",
          en: "Turn the widget on or off, or switch scripts, based on device and visitor country.",
        },
      },
      {
        title: { vi: "Voice Chat", en: "Voice Chat" },
        desc: {
          vi: "Khách có thể nói chuyện bằng giọng nói, chatbot trả lời lại bằng giọng nói.",
          en: "Visitors can speak to the bot and hear a spoken reply back.",
        },
      },
      {
        title: { vi: "Realtime JSON RAG", en: "Realtime JSON RAG" },
        desc: {
          vi: "Nạp dữ liệu động từ API JSON theo thời gian thực, ví dụ tồn kho hay giá hiện tại.",
          en: "Feeds in live data from a JSON API in real time — stock levels, current pricing and the like.",
        },
      },
      {
        title: {
          vi: "Form thu thập lead trước chat",
          en: "Pre-chat leads form",
        },
        desc: {
          vi: "Thu thập tên, email, số điện thoại trước khi bắt đầu cuộc trò chuyện.",
          en: "Collects name, email and phone before the conversation even starts.",
        },
      },
      {
        title: { vi: "Tìm kiếm bài viết / trang", en: "Post & page searching" },
        desc: {
          vi: "Chatbot tìm và dẫn khách thẳng tới đúng bài viết hoặc trang sản phẩm.",
          en: "The bot searches and links visitors straight to the right post or product page.",
        },
      },
    ],
    pricing: [
      {
        id: "chatbot-starter",
        name: { vi: "Gói tiêu chuẩn", en: "Standard" },
        price: { vi: "300.000đ", en: "$12" },
        sites: { vi: "1 tên miền", en: "1 domain" },
        bullets: [
          {
            vi: "Đổi màu theo nhận diện thương hiệu",
            en: "Change colors to match brand identity",
          },
          {
            vi: "RAG + Live Chat + Canned Responses",
            en: "RAG + Live Chat + Canned Responses",
          },
          { vi: "Form thu thập lead", en: "Pre-chat leads form" },
          { vi: "Phân tích cơ bản", en: "Core analytics" },
          { vi: "Hướng dẫn miễn phí", en: "Free guideline" },
          { vi: "Cài đặt miễn phí", en: "Free setup" },
        ],
      },
      {
        id: "chatbot-business",
        name: { vi: "Gói cao cấp", en: "Premium" },
        price: { vi: "999.000đ", en: "$40" },
        sites: { vi: "5 tên miền", en: "5 domains" },
        popular: true,
        bullets: [
          {
            vi: "Đổi màu theo nhận diện thương hiệu",
            en: "Change colors to match brand identity",
          },
          {
            vi: "RAG + Live Chat + Canned Responses",
            en: "RAG + Live Chat + Canned Responses",
          },
          { vi: "Form thu thập lead", en: "Pre-chat leads form" },
          { vi: "Phân tích cơ bản", en: "Core analytics" },
          { vi: "Hướng dẫn miễn phí", en: "Free guideline" },
          { vi: "Cài đặt miễn phí", en: "Free setup" },
          {
            vi: "Facebook, Zalo, Voice Chat",
            en: "Facebook, Zalo, Voice Chat",
          },
          { vi: "Realtime JSON RAG", en: "Realtime JSON RAG" },
        ],
      },
    ],
  },
];

export interface ServiceItem {
  title: Bilingual;
  desc: Bilingual;
}

export const services: ServiceItem[] = [
  {
    title: {
      vi: "Phát triển plugin theo yêu cầu",
      en: "Custom plugin development",
    },
    desc: {
      vi: "Xây dựng plugin riêng cho nghiệp vụ của bạn, từ ý tưởng tới bản chạy ổn định trên production.",
      en: "Built for your exact workflow, from a rough idea to a stable release running in production.",
    },
  },
  {
    title: {
      vi: "Tuỳ biến & phát triển theme",
      en: "Theme customization & development",
    },
    desc: {
      vi: "Chỉnh sửa theme có sẵn hoặc dựng theme mới đúng bản thiết kế bạn đưa ra.",
      en: "Adjust an existing theme or build a new one that matches the design you hand us.",
    },
  },
  {
    title: {
      vi: "Bảo trì & tối ưu tốc độ",
      en: "Maintenance & speed optimization",
    },
    desc: {
      vi: "Theo dõi lỗi, cập nhật định kỳ và tối ưu tốc độ tải trang hàng tháng.",
      en: "Ongoing monitoring, regular updates, and monthly page-speed tuning.",
    },
  },
  {
    title: { vi: "Tích hợp & triển khai", en: "Integration & onboarding" },
    desc: {
      vi: "Kết nối SOFTY Layouts và AI Chatbot với hệ thống CRM, kho hàng hoặc quy trình nội bộ của bạn.",
      en: "Wire SOFTY Layouts and AI Chatbot into your CRM, inventory system, or internal workflow.",
    },
  },
];

export interface Testimonial {
  quote: Bilingual;
  name: string;
  role: Bilingual;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: {
      vi: "Biên tập viên của mình không rành code nhưng vẫn tự chèn được khối CTA và mục lục chỉ trong vài phút đầu dùng thử.",
      en: "My editors aren't technical at all, but they had CTA blocks and a table of contents working within minutes of trying it.",
    },
    name: "Minh Tran",
    role: {
      vi: "Quản lý nội dung, cửa hàng nội thất",
      en: "Content manager, furniture retailer",
    },
    initials: "MT",
  },
  {
    quote: {
      vi: "AI Chatbot trả lời đúng thông tin tồn kho theo thời gian thực nhờ Realtime JSON RAG, khách không còn phải chờ nhân viên.",
      en: "AI Chatbot answers with real-time stock info through Realtime JSON RAG, so customers stop waiting on a human reply.",
    },
    name: "Thu Ha Nguyen",
    role: {
      vi: "Chủ shop thời trang online",
      en: "Owner, online fashion store",
    },
    initials: "TH",
  },
  {
    quote: {
      vi: "Form thu lead trước chat cộng với lọc theo quốc gia giúp đội sale của mình chỉ nhận đúng khách tiềm năng.",
      en: "The pre-chat leads form plus country filtering means our sales team only sees the leads worth chasing.",
    },
    name: "David Pham",
    role: {
      vi: "Trưởng phòng marketing, SaaS B2B",
      en: "Marketing lead, B2B SaaS",
    },
    initials: "DP",
  },
];

export interface FaqItem {
  q: Bilingual;
  a: Bilingual;
}

export const faqs: FaqItem[] = [
  {
    q: {
      vi: "SOFTY Custom Layouts có hoạt động với Gutenberg hoặc Elementor không?",
      en: "Does SOFTY Custom Layouts work with Gutenberg or Elementor?",
    },
    a: {
      vi: "SOFTY được thiết kế riêng cho Classic Editor (TinyMCE). Nếu site của bạn dùng Gutenberg, bạn vẫn có thể bật lại Classic Editor cho từng bài viết để dùng SOFTY.",
      en: "SOFTY is built specifically for the Classic Editor (TinyMCE). If your site runs Gutenberg, you can switch a post back to Classic Editor to use SOFTY on it.",
    },
  },
  {
    q: {
      vi: "AI Chatbot lấy dữ liệu huấn luyện từ đâu?",
      en: "Where does AI Chatbot get its training data?",
    },
    a: {
      vi: "Chatbot đọc trực tiếp bài viết, trang và sản phẩm trên website của bạn qua RAG, và có thể nạp thêm dữ liệu động qua Realtime JSON RAG cho các thông tin thay đổi liên tục.",
      en: "The bot reads directly from your posts, pages and products through RAG, and can pull in live data via Realtime JSON RAG for anything that changes constantly.",
    },
  },
  {
    q: {
      vi: "Tôi có thể dùng thử trước khi mua không?",
      en: "Can I try before I buy?",
    },
    a: {
      vi: "Có, cả hai sản phẩm đều có bản dùng thử 14 ngày, đầy đủ tính năng, không cần khai báo thẻ tín dụng.",
      en: "Yes, both products come with a 14-day full-feature trial, no credit card required.",
    },
  },
  {
    q: {
      vi: "Giấy phép có áp dụng cho nhiều website không?",
      en: "Does one license cover multiple sites?",
    },
    a: {
      vi: "Gói Cá nhân/Starter áp dụng cho 1 tên miền. Gói Agency/Business mở rộng cho 5 tên miền, phù hợp với agency quản lý nhiều khách hàng.",
      en: "The Personal/Starter plan covers 1 domain. The Agency/Business plan covers 5 domains, which suits an agency managing several client sites.",
    },
  },
  {
    q: {
      vi: "Có hỗ trợ kỹ thuật tiếng Việt không?",
      en: "Is Vietnamese-language support available?",
    },
    a: {
      vi: "Có, đội ngũ hỗ trợ trả lời bằng cả tiếng Việt và tiếng Anh qua email và live chat trong giờ làm việc.",
      en: "Yes, the support team replies in both Vietnamese and English over email and live chat during business hours.",
    },
  },
];
