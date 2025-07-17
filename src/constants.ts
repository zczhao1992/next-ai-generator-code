export const PROJECT_TEMPLATES = [
  {
    emoji: "🎬",
    title: "Build a Netflix clone",
    title_zh: "构建 Netflix 克隆",
    prompt:
      "Build a Netflix-style homepage with a hero banner (use a nice, dark-mode compatible gradient here), movie sections, responsive cards, and a modal for viewing details using mock data and local state. Use dark mode.",
    prompt_zh:
      "构建 Netflix 风格首页：包含主视觉横幅（使用美观的深色模式兼容渐变效果）、电影分类区域、响应式卡片，以及通过模拟数据和本地状态实现详情弹窗。使用深色模式设计。"
  },
  {
    emoji: "📦",
    title: "Build an admin dashboard",
    title_zh: "构建管理仪表盘",
    prompt:
      "Create an admin dashboard with a sidebar, stat cards, a chart placeholder, and a basic table with filter and pagination using local state. Use clear visual grouping and balance in your design for a modern, professional look.",
    prompt_zh:
      "创建管理仪表盘：包含侧边栏、统计卡片、图表占位区，以及支持筛选和分页的基础表格（使用本地状态）。采用清晰的视觉分组和平衡布局，实现现代专业风格。"
  },
  {
    emoji: "📋",
    title: "Build a kanban board",
    title_zh: "构建看板面板",
    prompt:
      "Build a kanban board with drag-and-drop using react-beautiful-dnd and support for adding and removing tasks with local state. Use consistent spacing, column widths, and hover effects for a polished UI.",
    prompt_zh:
      "使用 react-beautiful-dnd 构建支持拖拽的看板面板，通过本地状态实现任务增删功能。保持一致的间距、列宽和悬停效果，打造精致UI。"
  },
  {
    emoji: "🗂️",
    title: "Build a file manager",
    title_zh: "构建文件管理器",
    prompt:
      "Build a file manager with folder list, file grid, and options to rename or delete items using mock data and local state. Focus on spacing, clear icons, and visual distinction between folders and files.",
    prompt_zh:
      "构建文件管理器：包含文件夹列表、文件网格视图，支持通过模拟数据和本地状态重命名/删除项目。注重间距控制、清晰图标设计，强化文件夹与文件的视觉区分。"
  },
  {
    emoji: "📺",
    title: "Build a YouTube clone",
    title_zh: "构建 YouTube 克隆",
    prompt:
      "Build a YouTube-style homepage with mock video thumbnails, a category sidebar, and a modal preview with title and description using local state. Ensure clean alignment and a well-organized grid layout.",
    prompt_zh:
      "构建 YouTube 风格首页：包含模拟视频缩略图、分类侧边栏，以及通过本地状态实现的标题和描述预览弹窗。确保清晰的对齐方式和网格布局组织。"
  },
  {
    emoji: "🛍️",
    title: "Build a store page",
    title_zh: "构建商店页面",
    prompt:
      "Build a store page with category filters, a product grid, and local cart logic to add and remove items. Focus on clear typography, spacing, and button states for a great e-commerce UI.",
    prompt_zh:
      "构建商店页面：包含分类筛选器、商品网格，以及通过本地状态实现的购物车增删逻辑。注重清晰的排版、间距控制和按钮状态设计，打造优秀电商UI。"
  },
  {
    emoji: "🏡",
    title: "Build an Airbnb clone",
    title_zh: "构建 Airbnb 克隆",
    prompt:
      "Build an Airbnb-style listings grid with mock data, filter sidebar, and a modal with property details using local state. Use card spacing, soft shadows, and clean layout for a welcoming design.",
    prompt_zh:
      "构建 Airbnb 风格房源网格：使用模拟数据实现筛选侧边栏，通过本地状态展示房源详情弹窗。运用卡片间距、柔和阴影和简洁布局，营造温馨视觉体验。"
  },
  {
    emoji: "🎵",
    title: "Build a Spotify clone",
    title_zh: "构建 Spotify 克隆",
    prompt:
      "Build a Spotify-style music player with a sidebar for playlists, a main area for song details, and playback controls. Use local state for managing playback and song selection. Prioritize layout balance and intuitive control placement for a smooth user experience. Use dark mode.",
    prompt_zh:
      "构建 Spotify 风格音乐播放器：包含播放列表侧边栏、歌曲详情主区域和播放控制组件。通过本地状态管理播放和选曲功能。优先考虑布局平衡与控件直观性，确保流畅用户体验。使用深色模式。"
  }
] as const;

export const MAX_SEGMENTS = 4;

export const SANDBOX_TIMEOUT_IN_MS = 60_000 * 10 * 3; // 30 分钟
