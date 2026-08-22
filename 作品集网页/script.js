const categoryInfo = [
  {
    id: "剪辑包装",
    color: "#c84d3f",
    summary: "企业宣传片、专题片、展会快剪与片头包装。"
  },
  {
    id: "动画",
    color: "#19745d",
    summary: "三维动画、MG动效、IP角色与工业流程演示。"
  },
  {
    id: "展实拍",
    color: "#2f6ea6",
    summary: "展厅展项落地拍摄、现场记录与项目实拍。"
  },
  {
    id: "漫游",
    color: "#b8851e",
    summary: "展厅、展台、园区与空间方案漫游。"
  },
  {
    id: "建模",
    color: "#7b6b3e",
    summary: "三维建模、雕塑、概念图与材质渲染。"
  },
  {
    id: "学生时期",
    color: "#7256a2",
    summary: "早期视觉训练与阶段性创作。"
  }
];

const siteConfig = {
  assetBaseUrl: (window.MARS_ASSET_BASE_URL || "").replace(/\/$/, "")
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

const works = rawWorks.map((item) => ({
  ...item,
  kind: getKind(item.src),
  ext: getExtension(item.src)
}));

const featuredIds = [
  "clip-oylj-2024",
  "ani-niubao",
  "roam-shanghai-auto",
  "show-magang-rd",
  "model-sculpture"
];

const categoryLookup = new Map(categoryInfo.map((category) => [category.id, category]));
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
  nextWork: document.getElementById("nextWork")
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
  image.alt = item.title;
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

  const media = createMediaShell(item);
  const copy = document.createElement("div");
  copy.className = "card-copy";

  const kicker = document.createElement("span");
  kicker.className = "card-kicker";
  kicker.textContent = `${item.category} / ${getKindLabel(item)}`;

  const title = document.createElement("h3");
  title.textContent = item.title;

  const note = document.createElement("p");
  note.textContent = item.note;

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
    metricNode("作品", works.length),
    metricNode("视频", videoCount),
    metricNode("图像/GIF", imageCount),
    metricNode("分类", categoryInfo.length)
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
  const hero = works.find((item) => item.id === "clip-oylj-2024") || works[0];
  dom.heroVideo.src = assetUrl(hero.src);
  dom.heroVideo.play().catch(() => {});

  const railItems = featuredIds
    .map((id) => works.find((item) => item.id === id))
    .filter(Boolean)
    .slice(1, 4);

  dom.heroRail.replaceChildren(
    ...railItems.map((item) => {
      const button = document.createElement("button");
      button.className = "rail-item";
      button.type = "button";

      const thumb = document.createElement("div");
      thumb.className = "rail-thumb";
      thumb.append(createMediaShell(item));

      const body = document.createElement("div");
      const title = document.createElement("p");
      title.className = "rail-title";
      title.textContent = item.title;
      const meta = document.createElement("p");
      meta.className = "rail-meta";
      meta.textContent = `${item.category} / ${getKindLabel(item)}`;
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
      title.textContent = category.id;
      const number = document.createElement("strong");
      number.textContent = count;
      const summary = document.createElement("p");
      summary.textContent = category.summary;

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
  const filters = [{ id: "all", label: "全部" }, ...categoryInfo.map((item) => ({ id: item.id, label: item.id }))];
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
    return [item.title, item.category, item.note, ...item.tags]
      .join(" ")
      .toLowerCase()
      .includes(normalizedSearch);
  });

  dom.workGrid.replaceChildren(...currentList.map((item) => createCard(item, "work")));
  dom.emptyState.hidden = currentList.length > 0;
}

function openModal(id) {
  const item = works.find((work) => work.id === id);
  if (!item) return;

  const indexInCurrentList = currentList.findIndex((work) => work.id === id);
  currentIndex = indexInCurrentList >= 0 ? indexInCurrentList : works.findIndex((work) => work.id === id);

  dom.modalTitle.textContent = item.title;
  dom.modalCategory.textContent = `${item.category} / ${getKindLabel(item)}`;
  dom.modalMeta.textContent = item.note;
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
      dom.modalMedia.replaceChildren(errorBox("视频暂时无法加载。"));
    });
    return video;
  }

  const image = document.createElement("img");
  image.src = assetUrl(item.src);
  image.alt = item.title;
  image.addEventListener("error", () => {
    dom.modalMedia.replaceChildren(errorBox("图片暂时无法加载。"));
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

renderMetrics();
renderHero();
renderFeatured();
renderCategories();
renderFilters();
renderWorks();
