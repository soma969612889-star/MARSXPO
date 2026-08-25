const categoryInfo = [
  {
    id: "剪辑包装",
    color: "#c84d3f",
    copy: {
      zh: {
        label: "剪辑包装",
        summary: "企业宣传片、专题片、展会快剪与片头包装。"
      },
      en: {
        label: "Editing / Packaging",
        summary: "Corporate films, documentaries, expo edits and motion packages."
      }
    }
  },
  {
    id: "动画",
    color: "#19745d",
    copy: {
      zh: {
        label: "动画",
        summary: "三维动画、MG动效、IP角色与工业流程演示。"
      },
      en: {
        label: "Animation",
        summary: "3D animation, motion graphics, IP characters and industrial process films."
      }
    }
  },
  {
    id: "展实拍",
    color: "#2f6ea6",
    copy: {
      zh: {
        label: "展实拍",
        summary: "展厅展项落地拍摄、现场记录与项目实拍。"
      },
      en: {
        label: "Exhibition Footage",
        summary: "On-site exhibition shoots, project records and installation documentation."
      }
    }
  },
  {
    id: "漫游",
    color: "#b8851e",
    copy: {
      zh: {
        label: "漫游",
        summary: "展厅、展台、园区与空间方案漫游。"
      },
      en: {
        label: "Spatial Walkthrough",
        summary: "Walkthrough films for showrooms, booths, campuses and spatial proposals."
      }
    }
  },
  {
    id: "建模",
    color: "#7b6b3e",
    copy: {
      zh: {
        label: "建模",
        summary: "三维建模、雕塑、概念图与材质渲染。"
      },
      en: {
        label: "3D / Modeling",
        summary: "3D modeling, sculpture studies, concept images and material rendering."
      }
    }
  },
  {
    id: "学生时期",
    color: "#7256a2",
    copy: {
      zh: {
        label: "学生时期",
        summary: "早期视觉训练与阶段性创作。"
      },
      en: {
        label: "Student Works",
        summary: "Early visual studies and formative creative experiments."
      }
    }
  }
];

const siteConfig = {
  assetBaseUrl: (window.MARS_ASSET_BASE_URL || "").replace(/\/$/, ""),
  languageStorageKey: "marsxpo-language"
};

const uiCopy = {
  zh: {
    htmlLang: "zh-CN",
    meta: {
      title: "Mars鹏作品集 | Motion Portfolio",
      description: "影像、动画、展厅展项、空间漫游与三维视觉作品集。"
    },
    brand: { aria: "回到顶部" },
    nav: {
      aria: "页面导航",
      works: "作品",
      resume: "简历",
      skills: "能力",
      archive: "归档"
    },
    language: { aria: "语言切换" },
    hero: {
      eyebrow: "Motion Design / Film / Exhibition",
      titleName: "Mars鹏",
      titlePortfolio: "作品集",
      copy: "从品牌影像、三维动画到展厅数字内容，把复杂项目做成可观看、可理解、能落地的视觉叙事。",
      actionWorks: "查看作品",
      actionResume: "查看简历",
      actionArchive: "全部归档",
      railAria: "精选作品"
    },
    featured: {
      eyebrow: "Featured",
      title: "Selected Motion Work",
      copy: "先用代表项目建立气质：企业叙事、IP动画、展台空间与科技展示。"
    },
    profile: {
      eyebrow: "Profile / Resume",
      titleLine1: "从创意概念，",
      titleLine2: "到成片交付。",
      lead: "马鹏，数字视觉内容制作与展陈影像负责人。熟悉视频策划、拍摄剪辑、AE视觉包装、三维资产、IP形象与AIGC辅助创作，能够从前期方案、中期制作到后期维护推进项目落地。",
      tagsAria: "核心能力",
      statsAria: "履历亮点",
      stat1: {
        kicker: "2020 - 至今",
        title: "数字部主管",
        copy: "统筹展厅数字内容、企业宣传片、空间漫游与上屏视频制作。"
      },
      stat2: {
        kicker: "20+ / Year",
        title: "项目交付",
        copy: "每年完成二十余个大小项目，覆盖大型展厅、临展与品牌影像。"
      },
      stat3: {
        kicker: "Awards",
        title: "国际设计奖项",
        copy: "参与主创项目获得 London Design Awards、IDA、GPDP 等设计奖项。"
      }
    },
    resume: {
      experienceLabel: "Experience",
      capabilityLabel: "Capabilities",
      educationLabel: "Education / Tools",
      exp1: {
        time: "2020.04 - 至今",
        title: "上海意通展览展示有限公司 / 数字部主管",
        copy: "负责方案阶段影像表现、预算与排期，统筹拍摄剪辑、特效包装、三维内容、客户沟通及展厅数字内容维护。"
      },
      exp2: {
        time: "2018.06 - 2019.09",
        title: "电子科技大学文化艺术教育中心 / CMI 项目组长",
        copy: "负责新媒体交互创作、团队协作与现场技术支持，项目涵盖投影、互动装置与发布会现场视觉。"
      },
      exp3: {
        time: "2017.04 - 2018.06",
        title: "成都意空间美术设计有限公司 / 设计制作",
        copy: "参与三维建模、视频动画与竞标表现，并完成活动视觉与现场物料设计。"
      },
      cap1: {
        title: "视频后期与成片",
        copy: "脚本梳理、拍摄落地、剪辑节奏、字幕包装、多版本输出。"
      },
      cap2: {
        title: "展陈与上屏内容",
        copy: "展厅媒体、裸眼3D大屏、空间漫游、互动展示内容制作。"
      },
      cap3: {
        title: "三维视觉与IP",
        copy: "三维建模、角色形象、简单绑定、3D打印与动效资产。"
      },
      cap4: {
        title: "AIGC 工作流",
        copy: "使用 Midjourney、Stable Diffusion、ChatGPT 辅助概念、脚本、分镜与视觉探索。"
      },
      educationTime: "2018 / Bachelor",
      educationTitle: "电子科技大学成都学院",
      educationCopy: "影视技术（动画）本科。校园阶段参与校庆视觉、新媒体交互与 AR 作品创作。",
      toolsAria: "软件与工具",
      footnote: "完整简历与联系方式可按需提供。"
    },
    categories: {
      eyebrow: "Categories",
      title: "Creative Fields",
      copy: "按真实交付方式整理，从短片剪辑到三维视觉，从现场展陈到空间漫游。"
    },
    works: {
      eyebrow: "Archive",
      title: "按分类浏览",
      copy: "按作品类别分组浏览，保留项目气质，弱化素材文件名与版本痕迹。",
      searchLabel: "Search",
      searchPlaceholder: "输入片名、类别或关键词",
      filterAria: "作品分类筛选",
      empty: "没有找到匹配作品。"
    },
    footer: { label: "Mars XPO / Motion Portfolio" },
    modal: {
      closeAria: "关闭预览",
      prev: "上一件",
      next: "下一件"
    },
    metrics: {
      works: "作品",
      videos: "视频",
      images: "图像/GIF",
      categories: "分类"
    },
    filters: { all: "全部" },
    errors: {
      video: "视频暂时无法加载。",
      image: "图片暂时无法加载。"
    }
  },
  en: {
    htmlLang: "en",
    meta: {
      title: "Mars Peng Portfolio | Motion Design",
      description: "A portfolio of film, animation, exhibition media, spatial walkthroughs and 3D visual work."
    },
    brand: { aria: "Back to top" },
    nav: {
      aria: "Page navigation",
      works: "Works",
      resume: "Resume",
      skills: "Skills",
      archive: "Archive"
    },
    language: { aria: "Language switcher" },
    hero: {
      eyebrow: "Motion Design / Film / Exhibition",
      titleName: "Mars Peng",
      titlePortfolio: "Portfolio",
      copy: "From brand films and 3D animation to exhibition media, I turn complex projects into visual stories that are watchable, legible and production-ready.",
      actionWorks: "View Works",
      actionResume: "View Resume",
      actionArchive: "Full Archive",
      railAria: "Featured works"
    },
    featured: {
      eyebrow: "Featured",
      title: "Selected Motion Work",
      copy: "A first read of the portfolio through brand narratives, IP animation, exhibition spaces and technology showcases."
    },
    profile: {
      eyebrow: "Profile / Resume",
      titleLine1: "From first idea,",
      titleLine2: "to final delivery.",
      lead: "Mars Peng is a digital visual content and exhibition media lead. His work spans video planning, shooting, editing, AE motion packaging, 3D assets, IP visuals and AIGC-assisted ideation, moving projects from proposal to production and long-term maintenance.",
      tagsAria: "Core capabilities",
      statsAria: "Resume highlights",
      stat1: {
        kicker: "2020 - Now",
        title: "Digital Dept. Lead",
        copy: "Leading exhibition media, corporate films, spatial walkthroughs and screen content production."
      },
      stat2: {
        kicker: "20+ / Year",
        title: "Projects Delivered",
        copy: "Delivering over twenty projects a year across major showrooms, temporary exhibitions and brand films."
      },
      stat3: {
        kicker: "Awards",
        title: "Design Recognition",
        copy: "Key creative projects have received recognition from London Design Awards, IDA and GPDP."
      }
    },
    resume: {
      experienceLabel: "Experience",
      capabilityLabel: "Capabilities",
      educationLabel: "Education / Tools",
      exp1: {
        time: "2020.04 - Now",
        title: "Shanghai Yitong Exhibition Display / Digital Dept. Lead",
        copy: "Responsible for proposal-stage visual storytelling, budgets and schedules, while coordinating shoots, editing, motion packaging, 3D content, client communication and exhibition media maintenance."
      },
      exp2: {
        time: "2018.06 - 2019.09",
        title: "UESTC Culture & Art Education Center / CMI Project Lead",
        copy: "Led new-media interaction projects, team coordination and on-site technical support for projection, interactive installations and launch-event visuals."
      },
      exp3: {
        time: "2017.04 - 2018.06",
        title: "Chengdu Yikongjian Art Design / Design Production",
        copy: "Contributed to 3D modeling, video animation and bidding visuals, with additional event identity and installation material design."
      },
      cap1: {
        title: "Editing & Finishing",
        copy: "Script structure, shoot execution, pacing, subtitles, motion packaging and multi-version delivery."
      },
      cap2: {
        title: "Exhibition Media",
        copy: "Showroom media, glasses-free 3D screens, spatial walkthroughs and interactive display content."
      },
      cap3: {
        title: "3D Visuals & IP",
        copy: "3D modeling, character visuals, basic rigging, 3D printing and motion-ready assets."
      },
      cap4: {
        title: "AIGC Workflow",
        copy: "Using Midjourney, Stable Diffusion and ChatGPT for concept exploration, scripts, storyboards and visual direction."
      },
      educationTime: "2018 / Bachelor",
      educationTitle: "Chengdu College of UESTC",
      educationCopy: "B.A. in Film & Television Technology (Animation), with campus work in anniversary visuals, new-media interaction and AR projects.",
      toolsAria: "Software and tools",
      footnote: "Full resume and contact details are available on request."
    },
    categories: {
      eyebrow: "Categories",
      title: "Creative Fields",
      copy: "Organized by real production routes, from edits and 3D visuals to on-site exhibition footage and spatial walkthroughs."
    },
    works: {
      eyebrow: "Archive",
      title: "Works by Category",
      copy: "Browse the portfolio by production field, with clean project titles instead of source-file names.",
      searchLabel: "Search",
      searchPlaceholder: "Search title, category or keyword",
      filterAria: "Work category filters",
      empty: "No matching works found."
    },
    footer: { label: "Mars XPO / Motion Portfolio" },
    modal: {
      closeAria: "Close preview",
      prev: "Previous",
      next: "Next"
    },
    metrics: {
      works: "Works",
      videos: "Videos",
      images: "Images/GIF",
      categories: "Fields"
    },
    filters: { all: "All" },
    errors: {
      video: "This video is temporarily unavailable.",
      image: "This image is temporarily unavailable."
    }
  }
};

const rawWorks = [
  {
    id: "clip-oylj-2024",
    title: "欧冶链金宣传片",
    category: "剪辑包装",
    src: "../作品选集/剪辑包装/241010欧冶链金宣传片.mp4",
    note: "企业品牌影像与工业视觉包装",
    tags: ["宣传片", "企业", "工业"]
  },
  {
    id: "clip-pv-2024",
    title: "24光伏展宝钢",
    category: "剪辑包装",
    src: "../作品选集/剪辑包装/24光伏展宝钢0617M.mp4",
    note: "展会传播视频与现场节奏剪辑",
    tags: ["展会", "快剪", "宝钢"]
  },
  {
    id: "clip-innovate-magang",
    title: "创新马钢最终字幕版",
    category: "剪辑包装",
    src: "../作品选集/剪辑包装/创新马钢最终字幕版.mp4",
    note: "专题片叙事与字幕成片",
    tags: ["专题片", "字幕", "马钢"]
  },
  {
    id: "clip-geothermal",
    title: "北京快剪地热宝钢展台",
    category: "剪辑包装",
    src: "../作品选集/剪辑包装/北京快剪地热宝钢展台.mp4",
    note: "展台活动快剪",
    tags: ["展台", "快剪", "活动"]
  },
  {
    id: "clip-baodi",
    title: "宝地启园",
    category: "剪辑包装",
    src: "../作品选集/剪辑包装/宝地启园0329.mp4",
    note: "园区项目影像包装",
    tags: ["园区", "项目", "包装"]
  },
  {
    id: "clip-smart-magang",
    title: "智慧马钢最终版",
    category: "剪辑包装",
    src: "../作品选集/剪辑包装/智慧马钢最终版.mp4",
    note: "智慧制造专题成片",
    tags: ["智慧制造", "专题片", "马钢"]
  },
  {
    id: "clip-train",
    title: "火车铁轨有字幕",
    category: "剪辑包装",
    src: "../作品选集/剪辑包装/火车铁轨有字幕.mp4",
    note: "交通与工业场景叙事",
    tags: ["交通", "工业", "字幕"]
  },
  {
    id: "clip-annual-chain",
    title: "链金2023年度大事记",
    category: "剪辑包装",
    src: "../作品选集/剪辑包装/链金2023年度大事记.mp4",
    note: "年度事件梳理与纪实包装",
    tags: ["年度", "大事记", "企业"]
  },
  {
    id: "clip-chain-v5",
    title: "链金第五稿",
    category: "剪辑包装",
    src: "../作品选集/剪辑包装/链金第五稿_0103.mp4",
    note: "品牌片迭代版本",
    tags: ["品牌片", "版本", "链金"]
  },
  {
    id: "clip-leiyunshang",
    title: "雷允上年会宣传片",
    category: "剪辑包装",
    src: "../作品选集/剪辑包装/雷允上年会宣传片无水印_2501010.mp4",
    note: "年会宣传与节庆氛围包装",
    tags: ["年会", "宣传片", "无水印"]
  },
  {
    id: "clip-magang-plan",
    title: "马钢十四五规划",
    category: "剪辑包装",
    src: "../作品选集/剪辑包装/马钢十四五规划0809改.mp4",
    note: "规划专题片与企业叙事",
    tags: ["规划", "专题片", "马钢"]
  },

  {
    id: "ani-210411",
    title: "动画短片 210411",
    category: "动画",
    src: "../作品选集/动画/2104112045530227.mp4",
    note: "阶段性动画成片",
    tags: ["动画", "短片"]
  },
  {
    id: "ani-finance",
    title: "宝钢财务",
    category: "动画",
    src: "../作品选集/动画/宝钢财务.mp4",
    note: "企业服务动画表达",
    tags: ["企业", "动画", "宝钢"]
  },
  {
    id: "ani-xintegang",
    title: "新特钢沙盘剪辑合成",
    category: "动画",
    src: "../作品选集/动画/新特钢沙盘剪辑合成1226.mp4",
    note: "沙盘展示视频合成",
    tags: ["沙盘", "合成", "三维"]
  },
  {
    id: "ani-niubao",
    title: "牛小宝亮相片",
    category: "动画",
    src: "../作品选集/动画/牛小宝亮相片1222字幕版.mp4",
    note: "IP角色出场动画与字幕包装",
    tags: ["IP", "角色", "字幕"]
  },
  {
    id: "ani-car-body",
    title: "白车身与机械臂",
    category: "动画",
    src: "../作品选集/动画/白车身+机械臂播放文件+火花.mp4",
    note: "工业制造流程动画",
    tags: ["汽车", "机械臂", "工业"]
  },
  {
    id: "ani-luohe",
    title: "罗河小子表情包",
    category: "动画",
    src: "../作品选集/动画/罗河小子表情包.mp4",
    note: "角色表情与短动效",
    tags: ["角色", "表情包", "IP"]
  },
  {
    id: "ani-car-particle",
    title: "车身粒子",
    category: "动画",
    src: "../作品选集/动画/车身粒子.mp4",
    note: "粒子视觉与车身动效",
    tags: ["粒子", "汽车", "视觉"]
  },
  {
    id: "ani-car-0417",
    title: "车车0417",
    category: "动画",
    src: "../作品选集/动画/车车0417.mp4",
    note: "车辆主题动画片段",
    tags: ["汽车", "动画"]
  },
  {
    id: "ani-scroll",
    title: "长卷0103",
    category: "动画",
    src: "../作品选集/动画/长卷0103.mp4",
    note: "长卷式视觉叙事",
    tags: ["长卷", "动画", "叙事"]
  },
  {
    id: "ani-space",
    title: "飞机与太空舱",
    category: "动画",
    src: "../作品选集/动画/飞机&太空舱.mov",
    note: "飞行与空间主题动画",
    tags: ["飞机", "太空", "三维"]
  },
  {
    id: "gif-application",
    title: "一体化应用",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/02一体化应用600.gif",
    note: "产品应用动图",
    tags: ["动图", "应用", "宝钢"]
  },
  {
    id: "gif-solution",
    title: "解决方案动图",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/03解决方案_1.gif",
    note: "解决方案视觉表达",
    tags: ["动图", "方案"]
  },
  {
    id: "gif-bin-meta",
    title: "B-in Meta",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/04b-in meta1000.gif",
    note: "平台概念动效",
    tags: ["动图", "平台", "概念"]
  },
  {
    id: "gif-delivery",
    title: "精准配送",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/05精准配送.gif",
    note: "服务流程动效",
    tags: ["动图", "配送", "流程"]
  },
  {
    id: "gif-vave",
    title: "VAVE",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/06VAVE600.gif",
    note: "价值工程动图",
    tags: ["动图", "VAVE"]
  },
  {
    id: "gif-new-car",
    title: "新车发布",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/07新车发布600.gif",
    note: "发布会传播动图",
    tags: ["动图", "发布", "汽车"]
  },
  {
    id: "gif-recycle",
    title: "可循环",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/08可循环-2.gif",
    note: "低碳循环主题动效",
    tags: ["动图", "低碳", "循环"]
  },
  {
    id: "gif-buy-car",
    title: "购车流程",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/08购车-1000.gif",
    note: "用户流程动图",
    tags: ["动图", "购车", "流程"]
  },
  {
    id: "gif-mobile",
    title: "移动端",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/09移动端1000.gif",
    note: "移动体验动效",
    tags: ["动图", "移动端"]
  },
  {
    id: "gif-exhibition",
    title: "展览动图",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/10展览600.gif",
    note: "展览传播动图",
    tags: ["动图", "展览"]
  },
  {
    id: "gif-bcb",
    title: "BCB讲座",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/bcb讲座.gif",
    note: "讲座活动动效",
    tags: ["动图", "讲座"]
  },
  {
    id: "gif-ctb",
    title: "CTB电池包",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/CTB电池包.gif",
    note: "汽车电池结构动效",
    tags: ["动图", "电池", "汽车"]
  },
  {
    id: "gif-ppm",
    title: "PPM",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/PPM.gif",
    note: "指标视觉动效",
    tags: ["动图", "指标"]
  },
  {
    id: "gif-sunroof",
    title: "一体天幕",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/一体天幕.gif",
    note: "汽车结构主题动图",
    tags: ["动图", "汽车", "结构"]
  },
  {
    id: "gif-low-carbon-car",
    title: "低碳汽车板",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/低碳汽车板.gif",
    note: "低碳材料传播动图",
    tags: ["动图", "低碳", "材料"]
  },
  {
    id: "gif-lifecycle",
    title: "全生命周期 ICD",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/全生命周期icd.gif",
    note: "生命周期流程动图",
    tags: ["动图", "生命周期"]
  },
  {
    id: "gif-netzero-center",
    title: "净零碳加工中心",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/净零碳加工中心 (2).gif",
    note: "低碳加工场景动图",
    tags: ["动图", "净零碳"]
  },
  {
    id: "gif-hydrogen",
    title: "氢基竖炉流程",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/宝钢氢基竖炉流程净零碳路径_1.gif",
    note: "流程科普动图",
    tags: ["动图", "流程", "低碳"]
  },
  {
    id: "gif-clean-transport",
    title: "清洁运输模式",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/支持清洁运输模式_1.gif",
    note: "运输模式动效",
    tags: ["动图", "运输", "低碳"]
  },
  {
    id: "gif-future-car",
    title: "未来车型低碳节能安全",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/支持用户未来车型实现低碳节能安全_1.gif",
    note: "汽车材料价值动图",
    tags: ["动图", "汽车", "低碳"]
  },
  {
    id: "gif-digital-coil",
    title: "数字钢卷",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/数字钢卷_1.gif",
    note: "数字化钢卷动图",
    tags: ["动图", "数字化"]
  },
  {
    id: "gif-digitalization",
    title: "数智化",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/数智化.gif",
    note: "数智化主题动效",
    tags: ["动图", "数智化"]
  },
  {
    id: "gif-laser",
    title: "激光拼焊",
    category: "动画",
    src: "../作品选集/动画/宝钢动图/激光拼焊_2.gif",
    note: "制造工艺动图",
    tags: ["动图", "激光", "工艺"]
  },

  {
    id: "show-media1",
    title: "媒体1",
    category: "展实拍",
    src: "../作品选集/展实拍/媒体1.mp4",
    note: "展厅现场影像记录",
    tags: ["实拍", "展厅"]
  },
  {
    id: "show-guanshan",
    title: "官山一镜到底",
    category: "展实拍",
    src: "../作品选集/展实拍/官山 一镜到底.mp4",
    note: "空间实拍与连续动线",
    tags: ["实拍", "一镜到底", "空间"]
  },
  {
    id: "show-auto-expo",
    title: "意通数字力量 燃动宝钢上海车展",
    category: "展实拍",
    src: "../作品选集/展实拍/意通数字力量 燃动宝钢上海车展.mp4",
    note: "车展现场实拍剪辑",
    tags: ["实拍", "车展", "宝钢"]
  },
  {
    id: "show-oylj-party",
    title: "欧冶链金 带党建",
    category: "展实拍",
    src: "../作品选集/展实拍/欧冶链金_带党建.mp4",
    note: "展陈内容现场记录",
    tags: ["实拍", "党建", "展陈"]
  },
  {
    id: "show-magang-tour",
    title: "马钢展示馆漫游截选",
    category: "展实拍",
    src: "../作品选集/展实拍/马钢展示馆漫游截选.mp4",
    note: "展示馆项目片段",
    tags: ["实拍", "展示馆", "马钢"]
  },
  {
    id: "show-magang-rd",
    title: "马钢研发中心科技展示馆",
    category: "展实拍",
    src: "../作品选集/展实拍/马钢研发中心科技展示馆.mp4",
    note: "科技展示馆实拍成片",
    tags: ["实拍", "科技馆", "马钢"]
  },

  {
    id: "roam-guizhou",
    title: "贵州勘设股份漫游",
    category: "漫游",
    src: "../作品选集/漫游/g_贵州勘设股份漫游解说合成1013B.mp4",
    note: "企业空间漫游与解说合成",
    tags: ["漫游", "空间", "解说"]
  },
  {
    id: "roam-shanghai-auto",
    title: "上海车展宝钢 DEMO",
    category: "漫游",
    src: "../作品选集/漫游/上海车展宝钢DEMO0410_加音乐.mp4",
    note: "展台方案漫游与音乐合成",
    tags: ["漫游", "车展", "宝钢"]
  },
  {
    id: "roam-cscec",
    title: "中建四局漫游",
    category: "漫游",
    src: "../作品选集/漫游/中建四局漫游_1115.mp4",
    note: "建筑空间方案漫游",
    tags: ["漫游", "建筑"]
  },
  {
    id: "roam-manufacturing",
    title: "制造业大会",
    category: "漫游",
    src: "../作品选集/漫游/制造业大会_0823_2.mp4",
    note: "大会展陈方案预演",
    tags: ["漫游", "展陈", "大会"]
  },
  {
    id: "roam-industry",
    title: "工博会",
    category: "漫游",
    src: "../作品选集/漫游/工博会.mp4",
    note: "展会空间演示",
    tags: ["漫游", "工博会"]
  },
  {
    id: "roam-industry-3d",
    title: "工博会裸眼3D音乐",
    category: "漫游",
    src: "../作品选集/漫游/工博会裸眼3D音乐.mp4",
    note: "裸眼3D视觉与音乐包装",
    tags: ["漫游", "裸眼3D", "音乐"]
  },
  {
    id: "roam-quzhou-school",
    title: "衢州中学漫游",
    category: "漫游",
    src: "../作品选集/漫游/衢州中学11 29.mp4",
    note: "校园空间方案漫游",
    tags: ["漫游", "校园"]
  },
  {
    id: "roam-chenzhi",
    title: "辰致科技上海车展投标视频",
    category: "漫游",
    src: "../作品选集/漫游/辰致科技上海车展投标视频_0307.mp4",
    note: "投标方案视频与展台预览",
    tags: ["漫游", "投标", "车展"]
  },
  {
    id: "roam-tonggu",
    title: "铜鼓生态研学提案视频",
    category: "漫游",
    src: "../作品选集/漫游/铜鼓生态研学提案视频_0727.mp4",
    note: "研学空间提案漫游",
    tags: ["漫游", "生态", "研学"]
  },

  {
    id: "model-blindbox-01",
    title: "角色概念 01",
    category: "建模",
    src: "../作品选集/建模/00184-2009272588-(masterpiece, top quality, best quality, official art, beautiful and aesthetic_1.2),Cute,Blind box,Best quality,solo,A Cyan cart.png",
    note: "角色与盲盒风格概念图",
    tags: ["建模", "角色", "概念"]
  },
  {
    id: "model-blindbox-02",
    title: "角色概念 02",
    category: "建模",
    src: "../作品选集/建模/00188-3815218810-(masterpiece, top quality, best quality, official art, beautiful and aesthetic_1.2),Cute,Blind box,Best quality,solo,A Cyan cart.png",
    note: "角色与盲盒风格概念图",
    tags: ["建模", "角色", "概念"]
  },
  {
    id: "model-fountain",
    title: "来自世界的风喷泉彩虹",
    category: "建模",
    src: "../作品选集/建模/5.1、来自世界的风喷泉彩虹06.08.mp4",
    note: "公共艺术与空间视觉视频",
    tags: ["建模", "公共艺术", "视频"]
  },
  {
    id: "model-visual-01",
    title: "三维视觉稿",
    category: "建模",
    src: "../作品选集/建模/65c0d06efa8503ba261a211dbc48bbb.png",
    note: "三维画面与氛围视觉",
    tags: ["建模", "视觉稿"]
  },
  {
    id: "model-concept-01",
    title: "概念图 01",
    category: "建模",
    src: "../作品选集/建模/b993a3e38729512f5dd7b5b8f5edb88.jpg",
    note: "视觉概念与场景设计",
    tags: ["概念", "场景"]
  },
  {
    id: "model-concept-02",
    title: "概念图 02",
    category: "建模",
    src: "../作品选集/建模/e6e17ec0bb13ecc84a3de45a2f337e2.jpg",
    note: "视觉概念与场景设计",
    tags: ["概念", "场景"]
  },
  {
    id: "model-tongluren",
    title: "同路人",
    category: "建模",
    src: "../作品选集/建模/同路人.jpg",
    note: "主题视觉作品",
    tags: ["视觉", "建模"]
  },
  {
    id: "model-baosteel-ip",
    title: "宝钢 IP",
    category: "建模",
    src: "../作品选集/建模/宝钢ip.gif",
    note: "IP形象动图",
    tags: ["IP", "动图", "宝钢"]
  },
  {
    id: "model-deer",
    title: "小鹿",
    category: "建模",
    src: "../作品选集/建模/小鹿.gif",
    note: "角色动图与形象练习",
    tags: ["角色", "动图"]
  },
  {
    id: "model-wechat-photo",
    title: "早期建模图",
    category: "建模",
    src: "../作品选集/建模/微信图片_20210115095506.jpg",
    note: "阶段性建模图像",
    tags: ["建模", "图像"]
  },
  {
    id: "model-wechat-shot",
    title: "展示截图",
    category: "建模",
    src: "../作品选集/建模/微信截图_20231205174811.png",
    note: "项目过程截图",
    tags: ["截图", "展示"]
  },
  {
    id: "model-sculpture-02",
    title: "雕塑 02",
    category: "建模",
    src: "../作品选集/建模/雕塑 (2).jpg",
    note: "雕塑项目图像",
    tags: ["雕塑", "建模"]
  },
  {
    id: "model-sculpture-03",
    title: "雕塑 03",
    category: "建模",
    src: "../作品选集/建模/雕塑 (3).jpg",
    note: "雕塑项目图像",
    tags: ["雕塑", "建模"]
  },
  {
    id: "model-sculpture",
    title: "雕塑",
    category: "建模",
    src: "../作品选集/建模/雕塑.jpg",
    note: "雕塑项目图像",
    tags: ["雕塑", "建模"]
  },
  {
    id: "steel-34",
    title: "钢铁材质渲染 01",
    category: "建模",
    src: "../作品选集/建模/钢铁/untitled.34.png",
    note: "材质与工业表面渲染",
    tags: ["钢铁", "材质", "渲染"]
  },
  {
    id: "steel-35",
    title: "钢铁材质渲染 02",
    category: "建模",
    src: "../作品选集/建模/钢铁/untitled.35.png",
    note: "材质与工业表面渲染",
    tags: ["钢铁", "材质", "渲染"]
  },
  {
    id: "steel-36",
    title: "钢铁材质渲染 03",
    category: "建模",
    src: "../作品选集/建模/钢铁/untitled.36.png",
    note: "材质与工业表面渲染",
    tags: ["钢铁", "材质", "渲染"]
  },
  {
    id: "steel-37",
    title: "钢铁材质渲染 04",
    category: "建模",
    src: "../作品选集/建模/钢铁/untitled.37.png",
    note: "材质与工业表面渲染",
    tags: ["钢铁", "材质", "渲染"]
  },
  {
    id: "steel-38",
    title: "钢铁材质渲染 05",
    category: "建模",
    src: "../作品选集/建模/钢铁/untitled.38.png",
    note: "材质与工业表面渲染",
    tags: ["钢铁", "材质", "渲染"]
  },
  {
    id: "steel-39",
    title: "钢铁材质渲染 06",
    category: "建模",
    src: "../作品选集/建模/钢铁/untitled.39.png",
    note: "材质与工业表面渲染",
    tags: ["钢铁", "材质", "渲染"]
  },
  {
    id: "steel-40",
    title: "钢铁材质渲染 07",
    category: "建模",
    src: "../作品选集/建模/钢铁/untitled.40.png",
    note: "材质与工业表面渲染",
    tags: ["钢铁", "材质", "渲染"]
  },
  {
    id: "steel-41",
    title: "钢铁材质渲染 08",
    category: "建模",
    src: "../作品选集/建模/钢铁/untitled.41.png",
    note: "材质与工业表面渲染",
    tags: ["钢铁", "材质", "渲染"]
  },
  {
    id: "steel-42",
    title: "钢铁材质渲染 09",
    category: "建模",
    src: "../作品选集/建模/钢铁/untitled.42.png",
    note: "材质与工业表面渲染",
    tags: ["钢铁", "材质", "渲染"]
  },
  {
    id: "steel-43",
    title: "钢铁材质渲染 10",
    category: "建模",
    src: "../作品选集/建模/钢铁/untitled.43.png",
    note: "材质与工业表面渲染",
    tags: ["钢铁", "材质", "渲染"]
  },

  {
    id: "student-01",
    title: "学生时期作品 01",
    category: "学生时期",
    src: "../作品选集/学生时期/2a2a64425dea7cfabd943a0de80b51b.jpg",
    note: "早期视觉作品",
    tags: ["学生时期", "视觉"]
  },
  {
    id: "student-02",
    title: "学生时期作品 02",
    category: "学生时期",
    src: "../作品选集/学生时期/5cb81e90a31fd2042b757ea680741bc.jpg",
    note: "早期视觉作品",
    tags: ["学生时期", "视觉"]
  },
  {
    id: "student-03",
    title: "学生时期作品 03",
    category: "学生时期",
    src: "../作品选集/学生时期/9d4241ac7de5eb8fc6e0135371792ae.jpg",
    note: "早期视觉作品",
    tags: ["学生时期", "视觉"]
  }
];

const workCopy = {
  zh: {
    "clip-pv-2024": {
      title: "宝钢光伏展影像",
      note: "展会传播视频与现场节奏剪辑"
    },
    "clip-innovate-magang": {
      title: "创新马钢专题片",
      note: "企业专题叙事与字幕包装"
    },
    "clip-train": {
      title: "铁路工业影像",
      note: "交通与工业场景叙事"
    },
    "clip-annual-chain": {
      title: "链金年度大事记",
      note: "年度事件梳理与纪实包装"
    },
    "clip-chain-v5": {
      title: "链金品牌片",
      note: "企业品牌影像与视觉包装"
    },
    "ani-210411": {
      title: "动画短片",
      note: "角色与场景动画成片"
    },
    "ani-xintegang": {
      title: "新特钢沙盘展示",
      note: "沙盘展示视频与三维合成"
    },
    "ani-niubao": {
      title: "牛小宝亮相动画",
      note: "IP角色出场动画与字幕包装"
    },
    "ani-car-body": {
      title: "白车身机械臂动画",
      note: "工业制造流程动画"
    },
    "ani-car-0417": {
      title: "车辆动画片段",
      note: "车辆主题动画表达"
    },
    "ani-scroll": {
      title: "长卷视觉叙事",
      note: "长卷式视觉叙事"
    },
    "show-media1": {
      title: "展厅现场影像",
      note: "展厅现场影像记录"
    },
    "show-oylj-party": {
      title: "欧冶链金展陈记录",
      note: "展陈内容现场记录"
    },
    "show-magang-tour": {
      title: "马钢展示馆漫游",
      note: "展示馆项目影像片段"
    },
    "roam-shanghai-auto": {
      title: "宝钢上海车展漫游",
      note: "展台方案漫游与音乐包装"
    },
    "roam-manufacturing": {
      title: "制造业大会展陈漫游",
      note: "大会展陈方案预演"
    },
    "roam-industry-3d": {
      title: "工博会裸眼3D漫游",
      note: "裸眼3D视觉与音乐包装"
    },
    "roam-quzhou-school": {
      title: "衢州中学校园漫游",
      note: "校园空间方案漫游"
    },
    "roam-chenzhi": {
      title: "辰致科技车展提案",
      note: "投标方案视频与展台预览"
    },
    "roam-tonggu": {
      title: "铜鼓生态研学提案",
      note: "研学空间提案漫游"
    },
    "model-blindbox-01": {
      title: "角色盲盒概念 A",
      note: "角色与盲盒风格概念图"
    },
    "model-blindbox-02": {
      title: "角色盲盒概念 B",
      note: "角色与盲盒风格概念图"
    },
    "model-visual-01": {
      title: "三维视觉概念",
      note: "三维画面与氛围视觉"
    },
    "model-concept-01": {
      title: "场景概念图 A",
      note: "视觉概念与场景设计"
    },
    "model-concept-02": {
      title: "场景概念图 B",
      note: "视觉概念与场景设计"
    },
    "model-wechat-shot": {
      title: "项目展示截图",
      note: "项目过程与展示画面"
    },
    "model-sculpture-02": {
      title: "雕塑造型研究 A",
      note: "雕塑项目图像"
    },
    "model-sculpture-03": {
      title: "雕塑造型研究 B",
      note: "雕塑项目图像"
    },
    "model-sculpture": {
      title: "雕塑造型研究 C",
      note: "雕塑项目图像"
    },
    "student-01": {
      title: "校园视觉练习 A",
      note: "早期视觉作品"
    },
    "student-02": {
      title: "校园视觉练习 B",
      note: "早期视觉作品"
    },
    "student-03": {
      title: "校园视觉练习 C",
      note: "早期视觉作品"
    }
  },
  en: {
    "clip-oylj-2024": {
      title: "Ouyeel Chain Gold Promo Film",
      note: "Corporate brand film with industrial visual packaging."
    },
    "clip-pv-2024": {
      title: "Baosteel PV Expo Film",
      note: "Expo communication video with event-paced editing."
    },
    "clip-innovate-magang": {
      title: "Innovating MaSteel Documentary",
      note: "Documentary storytelling with subtitle-ready finishing."
    },
    "clip-geothermal": {
      title: "Baosteel Geothermal Booth Quick Edit",
      note: "Fast-paced edit for booth activity and event moments."
    },
    "clip-baodi": {
      title: "Baodi Qiyuan Park Film",
      note: "Project film packaging for a campus and park narrative."
    },
    "clip-smart-magang": {
      title: "Smart MaSteel Documentary",
      note: "Finished documentary focused on smart manufacturing."
    },
    "clip-train": {
      title: "Railway Industrial Film",
      note: "Traffic and industrial scene storytelling with subtitles."
    },
    "clip-annual-chain": {
      title: "Chain Gold 2023 Year in Review",
      note: "Annual milestone film with documentary-style packaging."
    },
    "clip-chain-v5": {
      title: "Chain Gold Brand Film V5",
      note: "Iterated version of a corporate brand film."
    },
    "clip-leiyunshang": {
      title: "Leiyunshang Annual Meeting Promo",
      note: "Festive annual-meeting promotion and event atmosphere."
    },
    "clip-magang-plan": {
      title: "MaSteel 14th Five-Year Plan",
      note: "Planning documentary with corporate narrative structure."
    },
    "ani-210411": {
      title: "Animation Short 210411",
      note: "A staged animation short and production milestone."
    },
    "ani-finance": {
      title: "Baosteel Finance",
      note: "Animated communication for corporate service content."
    },
    "ani-xintegang": {
      title: "Special Steel Sand Table Composite",
      note: "Composite video for a digital sand-table presentation."
    },
    "ani-niubao": {
      title: "Niuxiaobao Reveal Film",
      note: "IP character reveal animation with subtitle packaging."
    },
    "ani-car-body": {
      title: "Body-in-White and Robotic Arm",
      note: "Industrial manufacturing process animation."
    },
    "ani-luohe": {
      title: "Luohe Kid Expression Pack",
      note: "Character expression and short-form motion design."
    },
    "ani-car-particle": {
      title: "Car Body Particles",
      note: "Particle-based vehicle visual and body motion study."
    },
    "ani-car-0417": {
      title: "Car Animation 0417",
      note: "Vehicle-themed animation segment."
    },
    "ani-scroll": {
      title: "Long Scroll 0103",
      note: "Visual storytelling using a long-scroll composition."
    },
    "ani-space": {
      title: "Aircraft & Space Capsule",
      note: "Flight and space-themed animation sequence."
    },
    "gif-application": {
      title: "Integrated Application",
      note: "Animated product application visual."
    },
    "gif-solution": {
      title: "Solution Motion Graphic",
      note: "Visual explanation for a solution framework."
    },
    "gif-bin-meta": {
      title: "B-in Meta",
      note: "Motion concept for a platform idea."
    },
    "gif-delivery": {
      title: "Precision Delivery",
      note: "Animated service-process visualization."
    },
    "gif-vave": {
      title: "VAVE",
      note: "Animated value-engineering communication."
    },
    "gif-new-car": {
      title: "New Car Launch",
      note: "Motion graphic for a launch communication scenario."
    },
    "gif-recycle": {
      title: "Circular Reuse",
      note: "Low-carbon circularity themed motion visual."
    },
    "gif-buy-car": {
      title: "Car Purchase Flow",
      note: "Animated user journey and purchase process."
    },
    "gif-mobile": {
      title: "Mobile Experience",
      note: "Motion visual for a mobile experience."
    },
    "gif-exhibition": {
      title: "Exhibition Motion Graphic",
      note: "Animated visual for exhibition communication."
    },
    "gif-bcb": {
      title: "BCB Lecture",
      note: "Motion asset for a lecture and event scenario."
    },
    "gif-ctb": {
      title: "CTB Battery Pack",
      note: "Animated explanation of an automotive battery structure."
    },
    "gif-ppm": {
      title: "PPM",
      note: "Metric-focused motion visualization."
    },
    "gif-sunroof": {
      title: "Integrated Panoramic Roof",
      note: "Automotive structure motion visual."
    },
    "gif-low-carbon-car": {
      title: "Low-Carbon Automotive Sheet",
      note: "Animated communication for low-carbon materials."
    },
    "gif-lifecycle": {
      title: "Full Lifecycle ICD",
      note: "Animated lifecycle-process visualization."
    },
    "gif-netzero-center": {
      title: "Net-Zero Carbon Processing Center",
      note: "Low-carbon processing scene in motion."
    },
    "gif-hydrogen": {
      title: "Hydrogen-Based Shaft Furnace Flow",
      note: "Process explanation for a net-zero carbon pathway."
    },
    "gif-clean-transport": {
      title: "Clean Transport Mode",
      note: "Motion visual for clean transportation."
    },
    "gif-future-car": {
      title: "Future Vehicle Low-Carbon Safety",
      note: "Automotive material value proposition in motion."
    },
    "gif-digital-coil": {
      title: "Digital Steel Coil",
      note: "Digitalized steel-coil motion graphic."
    },
    "gif-digitalization": {
      title: "Digital Intelligence",
      note: "Motion visual for digital and intelligent operations."
    },
    "gif-laser": {
      title: "Laser Tailor Welding",
      note: "Animated manufacturing-process visual."
    },
    "show-media1": {
      title: "Exhibition Media 01",
      note: "On-site exhibition image record."
    },
    "show-guanshan": {
      title: "Guanshan One-Shot Tour",
      note: "Spatial footage with a continuous movement route."
    },
    "show-auto-expo": {
      title: "Yitong Digital Power at Auto Shanghai",
      note: "On-site auto show footage and edit."
    },
    "show-oylj-party": {
      title: "Ouyeel Chain Gold Exhibition Record",
      note: "On-site record of exhibition and party-building content."
    },
    "show-magang-tour": {
      title: "MaSteel Exhibition Hall Walkthrough Cut",
      note: "Selected segment from an exhibition hall project."
    },
    "show-magang-rd": {
      title: "MaSteel R&D Center Technology Hall",
      note: "Finished on-site film for a technology showroom."
    },
    "roam-guizhou": {
      title: "Guizhou Survey & Design Walkthrough",
      note: "Corporate spatial walkthrough with narration composite."
    },
    "roam-shanghai-auto": {
      title: "Baosteel Auto Shanghai Demo",
      note: "Booth proposal walkthrough with music finishing."
    },
    "roam-cscec": {
      title: "CSCEC Fourth Bureau Walkthrough",
      note: "Architectural space proposal walkthrough."
    },
    "roam-manufacturing": {
      title: "Manufacturing Conference Walkthrough",
      note: "Previsualization for a conference exhibition plan."
    },
    "roam-industry": {
      title: "Industry Expo",
      note: "Spatial demonstration for an exhibition project."
    },
    "roam-industry-3d": {
      title: "Industry Expo Glasses-Free 3D",
      note: "Glasses-free 3D visual and music package."
    },
    "roam-quzhou-school": {
      title: "Quzhou Middle School Walkthrough",
      note: "Campus spatial proposal walkthrough."
    },
    "roam-chenzhi": {
      title: "Chenzhi Technology Auto Shanghai Bid Film",
      note: "Bid proposal video and booth previsualization."
    },
    "roam-tonggu": {
      title: "Tonggu Eco Study Proposal Film",
      note: "Ecological study-trip spatial proposal walkthrough."
    },
    "model-blindbox-01": {
      title: "Character Concept 01",
      note: "Character and blind-box style concept image."
    },
    "model-blindbox-02": {
      title: "Character Concept 02",
      note: "Character and blind-box style concept image."
    },
    "model-fountain": {
      title: "World Wind Fountain Rainbow",
      note: "Public art and spatial visual video."
    },
    "model-visual-01": {
      title: "3D Visual Draft",
      note: "3D scene image and atmosphere visual."
    },
    "model-concept-01": {
      title: "Concept Image 01",
      note: "Visual concept and scene design."
    },
    "model-concept-02": {
      title: "Concept Image 02",
      note: "Visual concept and scene design."
    },
    "model-tongluren": {
      title: "Fellow Traveler",
      note: "Thematic visual work."
    },
    "model-baosteel-ip": {
      title: "Baosteel IP",
      note: "IP character motion graphic."
    },
    "model-deer": {
      title: "Little Deer",
      note: "Character motion and visual practice."
    },
    "model-wechat-photo": {
      title: "Early Modeling Image",
      note: "Staged 3D modeling image."
    },
    "model-wechat-shot": {
      title: "Presentation Screenshot",
      note: "Process screenshot from a project."
    },
    "model-sculpture-02": {
      title: "Sculpture 02",
      note: "Sculpture project image."
    },
    "model-sculpture-03": {
      title: "Sculpture 03",
      note: "Sculpture project image."
    },
    "model-sculpture": {
      title: "Sculpture",
      note: "Sculpture project image."
    },
    "steel-34": {
      title: "Steel Material Render 01",
      note: "Material and industrial surface rendering."
    },
    "steel-35": {
      title: "Steel Material Render 02",
      note: "Material and industrial surface rendering."
    },
    "steel-36": {
      title: "Steel Material Render 03",
      note: "Material and industrial surface rendering."
    },
    "steel-37": {
      title: "Steel Material Render 04",
      note: "Material and industrial surface rendering."
    },
    "steel-38": {
      title: "Steel Material Render 05",
      note: "Material and industrial surface rendering."
    },
    "steel-39": {
      title: "Steel Material Render 06",
      note: "Material and industrial surface rendering."
    },
    "steel-40": {
      title: "Steel Material Render 07",
      note: "Material and industrial surface rendering."
    },
    "steel-41": {
      title: "Steel Material Render 08",
      note: "Material and industrial surface rendering."
    },
    "steel-42": {
      title: "Steel Material Render 09",
      note: "Material and industrial surface rendering."
    },
    "steel-43": {
      title: "Steel Material Render 10",
      note: "Material and industrial surface rendering."
    },
    "student-01": {
      title: "Student Work 01",
      note: "Early visual work."
    },
    "student-02": {
      title: "Student Work 02",
      note: "Early visual work."
    },
    "student-03": {
      title: "Student Work 03",
      note: "Early visual work."
    }
  }
};

const works = rawWorks.map((item) => ({
  ...item,
  kind: getKind(item.src),
  ext: getExtension(item.src)
}));

const heroWorkId = "ani-niubao";

const featuredIds = [
  heroWorkId,
  "clip-oylj-2024",
  "roam-shanghai-auto",
  "show-magang-rd",
  "model-sculpture"
];

const categoryLookup = new Map(categoryInfo.map((category) => [category.id, category]));
let currentLanguage = getInitialLanguage();
let activeCategory = "all";
let searchTerm = "";
let currentList = [...works];
let currentIndex = 0;

const dom = {
  heroVideo: document.getElementById("heroVideo"),
  heroRail: document.getElementById("heroRail"),
  metrics: document.getElementById("metrics"),
  featuredGrid: document.getElementById("featuredGrid"),
  categoryStrip: document.getElementById("categoryStrip"),
  filterBar: document.getElementById("filterBar"),
  workGrid: document.getElementById("workGrid"),
  emptyState: document.getElementById("emptyState"),
  searchInput: document.getElementById("searchInput"),
  modal: document.getElementById("previewModal"),
  modalMedia: document.getElementById("modalMedia"),
  modalTitle: document.getElementById("modalTitle"),
  modalCategory: document.getElementById("modalCategory"),
  modalMeta: document.getElementById("modalMeta"),
  closeModal: document.getElementById("closeModal"),
  prevWork: document.getElementById("prevWork"),
  nextWork: document.getElementById("nextWork"),
  langButtons: document.querySelectorAll("[data-lang-option]")
};

const previewObserver =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              hydrateVideo(entry.target);
              previewObserver.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "360px" }
      )
    : null;

function getExtension(src) {
  const clean = src.split("?")[0].split("#")[0];
  return clean.slice(clean.lastIndexOf(".") + 1).toLowerCase();
}

function getKind(src) {
  const ext = getExtension(src);
  if (["mp4", "mov", "m4v"].includes(ext)) return "video";
  if (ext === "gif") return "gif";
  return "image";
}

function assetUrl(path) {
  const cleanPath = path.replace(/^(\.\.\/)+/, "");
  const encodedPath = cleanPath
    .split("/")
    .map((segment) => (segment === ".." ? segment : encodeURIComponent(segment)))
    .join("/");

  if (siteConfig.assetBaseUrl) {
    return `${siteConfig.assetBaseUrl}/${encodedPath}`;
  }

  const isInsideLocalSiteFolder = decodeURIComponent(window.location.pathname).includes("/作品集网页/");
  return `${isInsideLocalSiteFolder ? "../" : "./"}${encodedPath}`;
}

function getCategory(item) {
  return categoryLookup.get(item.category) || categoryInfo[0];
}

function normalizeLanguage(language) {
  return language === "en" ? "en" : "zh";
}

function getInitialLanguage() {
  try {
    const savedLanguage = window.localStorage.getItem(siteConfig.languageStorageKey);
    if (savedLanguage) return normalizeLanguage(savedLanguage);
  } catch (error) {
    return "zh";
  }
  return "zh";
}

function lookupCopy(language, key) {
  return key.split(".").reduce((value, part) => value && value[part], uiCopy[language]);
}

function t(key) {
  return lookupCopy(currentLanguage, key) ?? lookupCopy("zh", key) ?? key;
}

function applyStaticCopy() {
  document.documentElement.lang = t("htmlLang");
  document.title = t("meta.title");

  const description = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  description?.setAttribute("content", t("meta.description"));
  ogTitle?.setAttribute("content", t("meta.title"));
  ogDescription?.setAttribute("content", t("meta.description"));

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAriaLabel));
  });

  dom.langButtons.forEach((button) => {
    const isActive = button.dataset.langOption === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setLanguage(language) {
  const nextLanguage = normalizeLanguage(language);
  if (nextLanguage === currentLanguage) return;

  currentLanguage = nextLanguage;
  try {
    window.localStorage.setItem(siteConfig.languageStorageKey, currentLanguage);
  } catch (error) {
    // Private browsing or locked storage should not block the switch.
  }

  applyStaticCopy();
  renderAll();
  refreshOpenModal();
}

function getCategoryCopy(categoryOrId) {
  const category = typeof categoryOrId === "string" ? categoryLookup.get(categoryOrId) : categoryOrId;
  return category?.copy?.[currentLanguage] || category?.copy?.zh || { label: String(categoryOrId), summary: "" };
}

function getCategoryLabel(categoryOrId) {
  return getCategoryCopy(categoryOrId).label;
}

function getCategorySummary(categoryOrId) {
  return getCategoryCopy(categoryOrId).summary;
}

function cleanDisplayTitle(title) {
  const cleaned = title
    .replace(/\b(?:demo|draft|final|version|cut)\b/gi, "")
    .replace(/\bv\d+\b/gi, "")
    .replace(/\b\d{4,14}[a-z]?\b/gi, "")
    .replace(/^\d{2}(?=[\u4e00-\u9fa5])/g, "")
    .replace(/最终字幕版|最终版|字幕版|播放文件|无水印|截选|带党建|有字幕|第[一二三四五六七八九十百]+稿|加音乐|剪辑合成/g, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
  return cleaned || title;
}

function getWorkCopy(item) {
  const localized = workCopy[currentLanguage]?.[item.id] || {};
  const baseTitle = localized.title || item.title;
  return {
    title: cleanDisplayTitle(baseTitle),
    note: localized.note || item.note,
    tags: localized.tags || item.tags
  };
}

function getSearchText(item) {
  const category = getCategory(item);
  const zhCopy = workCopy.zh?.[item.id] || {};
  const enCopy = workCopy.en?.[item.id] || {};
  return [
    item.title,
    item.note,
    zhCopy.title,
    zhCopy.note,
    item.category,
    category.copy.zh.label,
    category.copy.zh.summary,
    category.copy.en.label,
    category.copy.en.summary,
    enCopy.title,
    enCopy.note,
    ...item.tags
  ].join(" ");
}

function renderAll() {
  renderMetrics();
  renderHero();
  renderFeatured();
  renderCategories();
  renderFilters();
  renderWorks();
}

function refreshOpenModal() {
  if (!dom.modal.classList.contains("is-open")) return;

  const item = works.find((work) => work.id === dom.modal.dataset.id);
  if (!item) return;

  const itemCopy = getWorkCopy(item);
  dom.modalTitle.textContent = itemCopy.title;
  dom.modalCategory.textContent = `${getCategoryLabel(item.category)} / ${getKindLabel(item)}`;
  dom.modalMeta.textContent = itemCopy.note;

  const image = dom.modalMedia.querySelector("img");
  if (image) image.alt = itemCopy.title;
}

function getKindLabel(item) {
  if (item.kind === "video") return item.ext.toUpperCase();
  if (item.kind === "gif") return "GIF";
  return item.ext.toUpperCase();
}

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  const bigint = parseInt(value, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}

function rgba(hex, alpha) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function hydrateVideo(video) {
  if (!video || video.src) return;
  video.src = video.dataset.src;
  video.load();
}

function observeVideo(video) {
  if (previewObserver) {
    previewObserver.observe(video);
  } else {
    hydrateVideo(video);
  }
}

function createMediaShell(item) {
  const shell = document.createElement("div");
  shell.className = "media-shell";
  const category = getCategory(item);
  shell.style.background = `linear-gradient(135deg, ${rgba(category.color, 0.32)}, rgba(17, 21, 23, 0.9))`;

  if (item.kind === "video") {
    const placeholder = document.createElement("span");
    placeholder.className = "media-placeholder";
    placeholder.textContent = getKindLabel(item);

    const video = document.createElement("video");
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.dataset.src = assetUrl(item.src);
    video.addEventListener("loadeddata", () => {
      placeholder.style.opacity = "0";
    });
    video.addEventListener("error", () => {
      placeholder.textContent = "VIDEO";
    });

    shell.append(placeholder, video);
    observeVideo(video);
    return shell;
  }

  const image = document.createElement("img");
  image.loading = "lazy";
  image.decoding = "async";
  image.src = assetUrl(item.src);
  image.alt = getWorkCopy(item).title;
  image.addEventListener("error", () => {
    image.remove();
    const placeholder = document.createElement("span");
    placeholder.className = "media-placeholder";
    placeholder.textContent = getKindLabel(item);
    shell.append(placeholder);
  });
  shell.append(image);
  return shell;
}

function addPreviewPlayback(card) {
  const video = card.querySelector("video");
  if (!video) return;

  const play = () => {
    hydrateVideo(video);
    video.play().catch(() => {});
  };

  const pause = () => {
    video.pause();
    try {
      video.currentTime = 0;
    } catch (error) {
      return;
    }
  };

  card.addEventListener("pointerenter", play);
  card.addEventListener("focus", play);
  card.addEventListener("pointerleave", pause);
  card.addEventListener("blur", pause);
}

function createCard(item, variant = "work") {
  const card = document.createElement("button");
  card.type = "button";
  card.className = variant === "feature" ? "feature-card" : "work-card";
  card.dataset.id = item.id;
  card.style.setProperty("--accent", getCategory(item).color);
  const itemCopy = getWorkCopy(item);

  const media = createMediaShell(item);
  const copy = document.createElement("div");
  copy.className = "card-copy";

  const kicker = document.createElement("span");
  kicker.className = "card-kicker";
  kicker.textContent = `${getCategoryLabel(item.category)} / ${getKindLabel(item)}`;

  const title = document.createElement("h3");
  title.textContent = itemCopy.title;

  const note = document.createElement("p");
  note.textContent = itemCopy.note;

  copy.append(kicker, title, note);
  card.append(media, copy);
  card.addEventListener("click", () => openModal(item.id));
  addPreviewPlayback(card);
  return card;
}

function renderMetrics() {
  const videoCount = works.filter((item) => item.kind === "video").length;
  const imageCount = works.length - videoCount;
  dom.metrics.replaceChildren(
    metricNode(t("metrics.works"), works.length),
    metricNode(t("metrics.videos"), videoCount),
    metricNode(t("metrics.images"), imageCount),
    metricNode(t("metrics.categories"), categoryInfo.length)
  );
}

function metricNode(label, value) {
  const group = document.createElement("div");
  const dt = document.createElement("dt");
  const dd = document.createElement("dd");
  dt.textContent = label;
  dd.textContent = value;
  group.append(dt, dd);
  return group;
}

function renderHero() {
  const hero = works.find((item) => item.id === heroWorkId) || works[0];
  dom.heroVideo.src = assetUrl(hero.src);
  dom.heroVideo.play().catch(() => {});

  const railItems = featuredIds
    .map((id) => works.find((item) => item.id === id))
    .filter(Boolean)
    .filter((item) => item.id !== hero.id)
    .slice(0, 3);

  dom.heroRail.replaceChildren(
    ...railItems.map((item) => {
      const itemCopy = getWorkCopy(item);
      const button = document.createElement("button");
      button.className = "rail-item";
      button.type = "button";

      const thumb = document.createElement("div");
      thumb.className = "rail-thumb";
      thumb.append(createMediaShell(item));

      const body = document.createElement("div");
      const title = document.createElement("p");
      title.className = "rail-title";
      title.textContent = itemCopy.title;
      const meta = document.createElement("p");
      meta.className = "rail-meta";
      meta.textContent = `${getCategoryLabel(item.category)} / ${getKindLabel(item)}`;
      body.append(title, meta);

      button.append(thumb, body);
      button.addEventListener("click", () => openModal(item.id));
      addPreviewPlayback(button);
      return button;
    })
  );
}

function renderFeatured() {
  const featured = featuredIds.map((id) => works.find((item) => item.id === id)).filter(Boolean);
  dom.featuredGrid.replaceChildren(...featured.map((item) => createCard(item, "feature")));
}

function renderCategories() {
  dom.categoryStrip.replaceChildren(
    ...categoryInfo.map((category) => {
      const count = works.filter((item) => item.category === category.id).length;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "category-tile";
      button.style.setProperty("--accent", category.color);

      const title = document.createElement("h3");
      title.textContent = getCategoryLabel(category);
      const number = document.createElement("strong");
      number.textContent = count;
      const summary = document.createElement("p");
      summary.textContent = getCategorySummary(category);

      button.append(title, number, summary);
      button.addEventListener("click", () => {
        activeCategory = category.id;
        renderFilters();
        renderWorks();
        document.getElementById("works").scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return button;
    })
  );
}

function renderFilters() {
  const filters = [
    { id: "all", label: t("filters.all") },
    ...categoryInfo.map((item) => ({ id: item.id, label: getCategoryLabel(item) }))
  ];
  dom.filterBar.replaceChildren(
    ...filters.map((filter) => {
      const count = filter.id === "all" ? works.length : works.filter((item) => item.category === filter.id).length;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "filter-button";
      button.role = "tab";
      button.setAttribute("aria-selected", String(activeCategory === filter.id));
      button.textContent = `${filter.label} ${count}`;
      button.addEventListener("click", () => {
        activeCategory = filter.id;
        renderFilters();
        renderWorks();
      });
      return button;
    })
  );
}

function renderWorks() {
  const normalizedSearch = searchTerm.trim().toLowerCase();
  currentList = works.filter((item) => {
    const categoryMatch = activeCategory === "all" || item.category === activeCategory;
    if (!categoryMatch) return false;
    if (!normalizedSearch) return true;
    return getSearchText(item).toLowerCase().includes(normalizedSearch);
  });

  const categoryGroups = categoryInfo
    .map((category) => ({
      category,
      items: currentList.filter((item) => item.category === category.id)
    }))
    .filter((group) => group.items.length > 0);

  dom.workGrid.replaceChildren(...categoryGroups.map((group) => createWorkGroup(group.category, group.items)));
  dom.emptyState.hidden = currentList.length > 0;
}

function createWorkGroup(category, items) {
  const group = document.createElement("section");
  group.className = "work-group";
  group.style.setProperty("--accent", category.color);

  const head = document.createElement("div");
  head.className = "work-group-head";

  const copy = document.createElement("div");
  const kicker = document.createElement("p");
  kicker.className = "work-group-kicker";
  const categoryIndex = categoryInfo.findIndex((item) => item.id === category.id) + 1;
  kicker.textContent = `${String(categoryIndex).padStart(2, "0")} / ${currentLanguage === "en" ? "Category" : "分类"}`;

  const title = document.createElement("h3");
  title.textContent = getCategoryLabel(category);

  const summary = document.createElement("p");
  summary.textContent = getCategorySummary(category);

  copy.append(kicker, title, summary);

  const count = document.createElement("span");
  count.className = "work-group-count";
  count.textContent = currentLanguage === "en" ? `${items.length} works` : `${items.length} 件作品`;

  head.append(copy, count);

  const grid = document.createElement("div");
  grid.className = "work-grid";
  grid.replaceChildren(...items.map((item) => createCard(item, "work")));

  group.append(head, grid);
  return group;
}

function openModal(id) {
  const item = works.find((work) => work.id === id);
  if (!item) return;

  const indexInCurrentList = currentList.findIndex((work) => work.id === id);
  currentIndex = indexInCurrentList >= 0 ? indexInCurrentList : works.findIndex((work) => work.id === id);
  const itemCopy = getWorkCopy(item);

  dom.modal.dataset.id = item.id;
  dom.modalTitle.textContent = itemCopy.title;
  dom.modalCategory.textContent = `${getCategoryLabel(item.category)} / ${getKindLabel(item)}`;
  dom.modalMeta.textContent = itemCopy.note;
  dom.modalMedia.replaceChildren(createModalMedia(item));
  dom.modal.classList.add("is-open");
  dom.modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function createModalMedia(item) {
  if (item.kind === "video") {
    const video = document.createElement("video");
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.src = assetUrl(item.src);
    video.addEventListener("error", () => {
      dom.modalMedia.replaceChildren(errorBox(t("errors.video")));
    });
    return video;
  }

  const image = document.createElement("img");
  image.src = assetUrl(item.src);
  image.alt = getWorkCopy(item).title;
  image.addEventListener("error", () => {
    dom.modalMedia.replaceChildren(errorBox(t("errors.image")));
  });
  return image;
}

function errorBox(message) {
  const box = document.createElement("div");
  box.className = "empty-state";
  box.textContent = message;
  return box;
}

function closeModal() {
  dom.modal.classList.remove("is-open");
  dom.modal.setAttribute("aria-hidden", "true");
  dom.modalMedia.querySelectorAll("video").forEach((video) => video.pause());
  dom.modalMedia.replaceChildren();
  document.body.classList.remove("modal-open");
}

function moveModal(direction) {
  const list = currentList.length ? currentList : works;
  currentIndex = (currentIndex + direction + list.length) % list.length;
  openModal(list[currentIndex].id);
}

dom.searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  renderWorks();
});

dom.langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langOption));
});

dom.closeModal.addEventListener("click", closeModal);
dom.modal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close]")) closeModal();
});
dom.prevWork.addEventListener("click", () => moveModal(-1));
dom.nextWork.addEventListener("click", () => moveModal(1));

document.addEventListener("keydown", (event) => {
  if (!dom.modal.classList.contains("is-open")) return;
  if (event.key === "Escape") closeModal();
  if (event.key === "ArrowLeft") moveModal(-1);
  if (event.key === "ArrowRight") moveModal(1);
});

applyStaticCopy();
renderAll();
