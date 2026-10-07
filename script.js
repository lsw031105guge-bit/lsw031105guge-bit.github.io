/* ============================================================
   LSW WORKSHOP — script.js  v2
   Splash / 打字机 / 双语(李世雯↔Brandy) / Logo SVG 注入 /
   左侧目录 / 滚动高亮 / 18个Workshop
   ============================================================ */

/* ---------------- 多语言字典 ---------------- */
const I18N = {
  zh: {
    splashSub:    "WORKSHOP / 工作室",
    splashTag:    "正在把一些奇怪的东西凑在一起…",
    enter:        "[ 进入 ENTER ]",
    navMeet:      "认识",
    navWorkshops: "作品",
    navHow:       "方法",
    navNow:       "现在",
    navElsewhere: "别处",

    tocTitle:     "CONTENTS / 目录",
    tocMeet:      "Meet Me",
    tocWs:        "Workshops",
    tocHow:       "How I Make",
    tocNow:       "Currently",
    tocEl:        "Elsewhere",
    tocName:      "李世雯 / LI SHIWEN",

    heroHi:       "你好，我是李世雯 / Hi, 我是 Shih-Wen.",
    heroTitle1:   "我喜欢做东西。",
    heroTitle2:   "有时候有用。",
    heroTitle3:   "有时候很奇怪。",
    heroTitle4:   "通常两者兼有。",
    heroDesc:     "在硬件、软件、AI 和产品之间来回蹦跶。大部分时候我靠「做」来学习——这个工作坊就是这个过程的记录。",
    heroMeta1:    "4 段实习经历",
    heroMeta2:    "18+ 个 Workshops",
    heroMeta3:    "3+ 个线下展会",
    scroll:       "↓ 向下逛逛看看做过的东西 / Scroll",

    wsNum:        "02",
    wsTitle:      "WORKSHOPS / 我做过的",
    wsSub:        "一些我做过、测过、拆过、焊过的东西。点卡片直接跳转到对应项目页面 / 视频 / 教程。",

    howTitle:     "HOW I MAKE / 我怎么做东西",
    howSub:       "做东西会用到的工具、方法和技术栈。/ The tools, methods and stacks.",
    hwSoft:       "软件 / 代码",
    hwInd:        "工业 / 工程",
    howBuildD:    "硬件 · PCB · 嵌入式 · 传感器 · 焊接 · 电气。电路板、焊台、飞线——从元件到原型。",
    howMakeD:     "3D 打印 · 建模 · 产品 · 玩具 · 桌面设备。Nomad · Fusion · Procreate——拆件、打磨、上色。",
    howExploreD:  "AI · Vibe Coding · 新平台 · 新技术 · 实验。把奇怪的想法变成能跑的 Demo。",
    howShareD:    "Bilibili · X · Hackster · 小红书 · 技术文章 · 线下分享。做了就拍出来、写出来、讲出来。",
    howMeetD:     "展会 · Hackathon · Maker 活动 · 合作。把东西带去现场，认识更多喜欢做东西的人。",

    nowTitle:     "CURRENTLY BUILDING / 正在折腾",
    nowSub:       "现在工作台上的东西。/ What's on the workbench right now.",
    now1:         "一个和 ESP32 有关的小东西",
    now2:         "一个 AI 陪伴小玩意",
    now3:         "测试一个新的摄像头模组",
    now4:         "学一个大概率用不上的新技术",

    elTitle:      "ELSEWHERE / 别处也有我",
    elSub:        "在别的平台找到我。/ I also exist elsewhere.",
    elGithub:     "用代码搞破坏的地方",
    elHackster:   "做硬件项目的主站（教程 + 项目全）",
    elBili:       "项目过程视频",
    elX:          "碎碎念和项目动态",
    elXhs:        "一些创意和产品视觉",
    elCsdn:       "技术文章和技术分析",
    footerName:   "李世雯 · LSW",
  },
  en: {
    splashSub:    "WORKSHOP",
    splashTag:    "putting weird things together…",
    enter:        "[ ENTER ]",
    navMeet:      "Meet",
    navWorkshops: "Workshops",
    navHow:       "How",
    navNow:       "Now",
    navElsewhere: "Elsewhere",

    tocTitle:     "CONTENTS",
    tocMeet:      "Meet Me",
    tocWs:        "Workshops",
    tocHow:       "How I Make",
    tocNow:       "Currently",
    tocEl:        "Elsewhere",
    tocName:      "BRANDY LI",

    heroHi:       "Hi, I'm Brandy / 你好，我是李世雯.",
    heroTitle1:   "I make things.",
    heroTitle2:   "Sometimes useful.",
    heroTitle3:   "Sometimes weird.",
    heroTitle4:   "Usually both.",
    heroDesc:     "Working between hardware, software, AI and products. Most of the time I learn by making. This workshop is basically a record of that process.",
    heroMeta1:    "4 internships",
    heroMeta2:    "18+ workshops",
    heroMeta3:    "3+ exhibitions",
    scroll:       "↓ Scroll to explore",

    wsNum:        "02",
    wsTitle:      "WORKSHOPS",
    wsSub:        "A collection of things I've made, tested, broken, and learned from. Click a card for project page, video or tutorial.",

    howTitle:     "HOW I MAKE",
    howSub:       "The tools, methods and stacks / 我怎么做东西.",
    hwSoft:       "Software / Code",
    hwInd:        "Industry / Engineering",
    howBuildD:    "Hardware · PCB · Embedded · Sensors · Soldering. From components to prototypes.",
    howMakeD:     "3D Printing · Modeling · Product · Toys · Desktop devices. Nomad · Fusion · Procreate.",
    howExploreD:  "AI · Vibe Coding · New platforms · Experiments. Turning weird ideas into running demos.",
    howShareD:    "Bilibili · X · Hackster · Xiaohongshu · Articles · Talks. Making then documenting.",
    howMeetD:     "Exhibitions · Hackathons · Maker events · Collabs. Bringing things out to meet people.",

    nowTitle:     "CURRENTLY BUILDING",
    nowSub:       "What's on the workbench right now / 现在正在折腾的.",
    now1:         "something with ESP32",
    now2:         "an AI toy companion",
    now3:         "testing a new camera module",
    now4:         "learning something I probably don't need",

    elTitle:      "ELSEWHERE",
    elSub:        "I also exist elsewhere / 我在别的地方也存在.",
    elGithub:     "where I break things with code",
    elHackster:   "where I make hardware (full tutorials + projects)",
    elBili:       "where I show what happened",
    elX:          "where I think out loud",
    elXhs:        "where I put some of the other stuff",
    elCsdn:       "technical write-ups",
    footerName:   "Brandy · LSW",
  }
};

/* ---------------- Workshop 数据 (18个) ---------------- */
const WORKSHOPS = [
  /* --- Hackster 热门 6 个 + 补充 --- */
  {
    id: 101,
    title: { zh: "$40 Vibe Coding 语音键盘 · 完整教程", en: "$40 Vibe Coding Voice Keyboard" },
    liner: {
      zh: "不到 40 美元做一把无线 Vibe Coding 键盘——含完整分步教程、建模、焊接、代码。Hackster 6200+ views 🔥",
      en: "Build a wireless Vibe Coding voice keyboard under $40 — full step-by-step tutorial."
    },
    status: "done", statusT: { zh: "HOT · 教程", en: "HOT · TUTORIAL" },
    year: "2026", tags: ["ESP32","HACKSTER","6.2K🔥"], thumb: "pt-kb",
    href: "https://www.hackster.io/lsw031105guge-bit/40-to-build-a-wireless-vibe-coding-voice-keyboard-cbade2",
    featured: true
  },
  {
    id: 102,
    title: { zh: "ADHD 专属植物管家 🌱", en: "ADHD Exclusive Plant Steward" },
    liner: {
      zh: "一个艺术交互装置：每天给植物「浇水」就能获得成就感。Hackster 3100+ views。",
      en: "Artistic interactive installation that gives me daily accomplishment via watering. 3.1K views."
    },
    status: "done", statusT: { zh: "FEATURED", en: "FEATURED" },
    year: "2026", tags: ["XIAO ESP32C3","OLED","HACKSTER"], thumb: "pt-plant",
    href: "https://www.hackster.io/lsw031105guge-bit/adhd-exclusive-plant-steward-6a7617"
  },
  {
    id: 103,
    title: { zh: "定制你的植物健康管家（教程）", en: "Customize Plant Health Steward — Guide" },
    liner: {
      zh: "基于 Seeed 土壤湿度传感器的保姆级教程。Hackster 6100+ views。",
      en: "Step-by-step guide to customize a Seeed soil moisture sensor into a steward. 6.1K views."
    },
    status: "done", statusT: { zh: "TUTORIAL", en: "TUTORIAL" },
    year: "2026", tags: ["MOISTURE","GROVE","TUTORIAL"], thumb: "pt-tutorial",
    href: "https://www.hackster.io/lsw031105guge-bit/how-to-customize-a-personal-plant-health-steward-9beb91"
  },
  {
    id: 104,
    title: { zh: "新手克隆 Mochi 的 10 个生死细节", en: "Mochi Project Cloning for Noobs" },
    liner: {
      zh: "没人告诉你的 10 个决定成败的细节——手把手克隆 Mochi。Hackster 8600+ views 🔥🔥",
      en: "10 make-or-break details that stump everyone. Hackster's top piece: 8.6K+ views!"
    },
    status: "done", statusT: { zh: "TOP · 8.6K", en: "TOP · 8.6K" },
    year: "2026", tags: ["MOCHI","TUTORIAL","8.6K🔥🔥"], thumb: "pt-mochi",
    href: "https://www.hackster.io/lsw031105guge-bit/how-a-noob-can-clone-the-mochi-project-cdf60d"
  },
  {
    id: 105,
    title: { zh: "蓝牙 6 测距：很美好，还不能用", en: "Bluetooth Channel Sounding — Not Ready" },
    liner: {
      zh: "从 8cm 标定到多径、玻璃和现实翻车——蓝牙 6 测距到底怎么样？",
      en: "From 8cm calibration to multipath, glass and real-world failures. BT 6 ranging outside the datasheet."
    },
    status: "exp", statusT: { zh: "EXPERIMENT", en: "EXPERIMENT" },
    year: "2026", tags: ["NORDIC","BLE 6","CHANNEL-SOUNDING"], thumb: "pt-ble",
    href: "https://www.hackster.io/lsw031105guge-bit/bluetooth-channel-sounding-cool-but-not-ready-231193"
  },
  {
    id: 106,
    title: { zh: "Nordic 蓝牙测距（技术篇）", en: "Bluetooth Ranging with Nordic Channel Sounding" },
    liner: {
      zh: "基于 Nordic Channel Sounding 的实测过程。",
      en: "Deep-dive into Bluetooth ranging with Nordic Channel Sounding."
    },
    status: "exp", statusT: { zh: "TECH DEEP DIVE", en: "TECH DEEP DIVE" },
    year: "2026", tags: ["NORDIC","nRF54LM20A","RANGE"], thumb: "pt-ble",
    href: "https://www.hackster.io/lsw031105guge-bit/bluetooth-ranging-with-nordic-channel-sounding-6575fe"
  },

  /* --- 原有作品集项目 --- */
  {
    id: 1,
    title: { zh: "Vibe Coding Keyboard（B站制作过程）", en: "Vibe Coding Keyboard (BTS on Bilibili)" },
    liner: {
      zh: "想要一把键盘，所以自己做了一把。建模 → 写代码 → 焊接 → 加功能 → 拍视频，一周搞定。",
      en: "I wanted a keyboard, so I made one. Modeled → coded → soldered → shipped in ~1 week."
    },
    status: "done", statusT: { zh: "COMPLETED", en: "COMPLETED" },
    year: "2026", tags: ["HARDWARE","AI","PCB"], thumb: "pt-kb",
    href: "https://www.bilibili.com/video/BV1XKobYDEhQ/"
  },
  {
    id: 2,
    title: { zh: "哈气咪 Haqimi", en: "Haqimi" },
    liner: {
      zh: "黑客松原型 → 京都 IVS 2026 → 知乎北京展会 → 澳门 Beyond。一路跑曝光。",
      en: "Hackathon prototype → Kyoto IVS 2026 → Beijing Zhihu → Macau Beyond exhibitions."
    },
    status: "proto", statusT: { zh: "PROTOTYPE · 参展", en: "PROTOTYPE · SHOWN" },
    year: "2025", tags: ["AI","PRODUCT","EXHIBITION"], thumb: "pt-haqimi",
    href: "#", missing: true
  },
  {
    id: 3,
    title: { zh: "AI 玩偶陪伴系统", en: "AI Doll Companion System" },
    liner: {
      zh: "语音模块 + 对话能力 + ars_pro 语音 Flash。作为复旦科创社团开学礼物 MVP。B站演示 ✅ CSDN分析 ✅",
      en: "Voice + chat + ars_pro flash MVP. Sent to Fudan maker club as welcome gift. Bili ✅ CSDN ✅"
    },
    status: "done", statusT: { zh: "COMPLETED", en: "COMPLETED" },
    year: "2025", tags: ["AI","HARDWARE","MVP"], thumb: "pt-ai",
    href: "https://www.bilibili.com/video/BV1XKobYDEhQ/",
    href2: "https://blog.csdn.net/C2H5OH15/article/details/146292844"
  },
  {
    id: 4,
    title: { zh: "MINI 打印机（Seeed 项目）", en: "MINI Printer (Seeed Project)" },
    liner: {
      zh: "Seeed「培养超级个体」项目的 MINI 打印机 Workhop。",
      en: "MINI Printer Workshop for Seeed 'Super Individual' program."
    },
    status: "done", statusT: { zh: "COMPLETED", en: "COMPLETED" },
    year: "2025", tags: ["HARDWARE","MAKER","SEEED"], thumb: "pt-printer",
    href: "#", missing: true
  },
  {
    id: 5,
    title: { zh: "STM32 桌面宠物", en: "STM32 Desktop Pet" },
    liner: {
      zh: "选元件 → 搭外形 → 焊接 → 代码 → 一周完赛拿奖。",
      en: "Parts → case → solder → code — built and awarded in one week."
    },
    status: "done", statusT: { zh: "COMPLETED · AWARDED", en: "COMPLETED · AWARDED" },
    year: "2024", tags: ["STM32","SOLDERING"], thumb: "pt-pet",
    href: "#", missing: true
  },
  {
    id: 6,
    title: { zh: "智能秒手称（宇构实习）", en: "Smart Scale (Yugou Tech Intern)" },
    liner: {
      zh: "宇构科技 AI 实习项目：智能秒手称。B站演示视频。",
      en: "AI intern project at Yugou Tech — smart scale demo on Bilibili."
    },
    status: "done", statusT: { zh: "COMPLETED", en: "COMPLETED" },
    year: "2025", tags: ["AI","INTERN","SCALE"], thumb: "pt-scale",
    href: "https://www.bilibili.com/video/BV1JmZnYyEgi/"
  },
  {
    id: 7,
    title: { zh: "RTOS 自习室监测与预约系统", en: "RTOS Study Room Monitor & Booking" },
    liner: {
      zh: "低功耗优化 + 多传感器融合的自习室智能监测 + 预约系统。",
      en: "Low-power + sensor fusion study room monitoring & reservation system."
    },
    status: "done", statusT: { zh: "COMPLETED", en: "COMPLETED" },
    year: "2025", tags: ["RTOS","SENSORS","LOW-POWER"], thumb: "pt-study",
    href: "https://www.bilibili.com/video/BV1JmZnYyEgi/"
  },
  {
    id: 8,
    title: { zh: "C51 循迹小车", en: "C51 Line-Following Car" },
    liner: { zh: "早期硬件练习。循迹 + 避障。", en: "Early hardware practice — line following + obstacle avoidance." },
    status: "done", statusT: { zh: "COMPLETED", en: "COMPLETED" },
    year: "2023", tags: ["C51","CAR"], thumb: "pt-car",
    href: "#", missing: true
  },
  {
    id: 9,
    title: { zh: "STM32 小车", en: "STM32 Car" },
    liner: { zh: "升级版小车：更大 MCU，更多功能。", en: "Upgraded car — bigger MCU, more features." },
    status: "done", statusT: { zh: "COMPLETED", en: "COMPLETED" },
    year: "2024", tags: ["STM32","CAR"], thumb: "pt-car",
    href: "#", missing: true
  },
  {
    id: 10,
    title: { zh: "C51 十字红绿灯系统", en: "C51 Intersection Traffic Light" },
    liner: { zh: "早期嵌入式：多种板子 + 传感器模拟交叉路口。", en: "Early embedded — multi-board + sensor intersection simulation." },
    status: "done", statusT: { zh: "COMPLETED", en: "COMPLETED" },
    year: "2023", tags: ["C51","SENSORS"], thumb: "pt-tl",
    href: "#", missing: true
  },
  {
    id: 11,
    title: { zh: "AI Vibe Coding 实验", en: "AI Vibe Coding Lab" },
    liner: { zh: "为了积累 Vibe Coding 经验做的一系列 AI 实验。", en: "A series of AI experiments to accumulate Vibe Coding mileage." },
    status: "exp", statusT: { zh: "EXPERIMENT", en: "EXPERIMENT" },
    year: "2026", tags: ["AI","VIBE-CODING"], thumb: "pt-vibe",
    href: "#", missing: true
  },
  {
    id: 12,
    title: { zh: "WIP · 更多还在焊台上", en: "WIP · More on the Workbench" },
    liner: { zh: "新东西还在焊台上，等搞完了放上来。", en: "Still soldering. Check back soon." },
    status: "going", statusT: { zh: "ONGOING", en: "ONGOING" },
    year: "2026", tags: ["WIP"], thumb: "pt-wip",
    href: "https://www.hackster.io/lsw031105guge-bit"
  },
];

/* ---------------- 平台 SVG LOGOS ---------------- */
const LOGO_SVG = {
  github: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
  hackster: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M4 6h5.2a2 2 0 0 1 1.414.586l2.372 2.372A2 2 0 0 0 14.414 9H20M4 18h5.2a2 2 0 0 0 1.414-.586l2.372-2.372A2 2 0 0 1 14.414 15H20M15 4v4M15 16v4M9 3v2M9 19v2"/><rect x="2" y="3" width="20" height="18" rx="3" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`,
  bilibili: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.813 4.653l1.414-1.414 1.414 1.414-2.12 2.121H18V8a2 2 0 0 1 2-2h1a1 1 0 0 1 1 1v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a1 1 0 0 1 1-1h1a2 2 0 0 1 2 2v1.232L5.47 4.653 6.884 3.24 9.003 5.36h5.997L17.117 3.24l.696.69zM7.5 11a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 0 0-3h-1zm8 0a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 0 0-3h-1z"/></svg>`,
  x: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.89l-5.4-7.06L4.08 22H.82l8.03-9.17L1.5 2h7.07l4.87 6.42L18.244 2zm-1.2 18h1.7L7.04 3.88H5.25L17.044 20z"/></svg>`,
  xhs: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 9.5c0 3.6-3.9 6.1-8.1 6.1V9h1.6v8.1c2.8-.7 5.2-2.9 5.2-5.6h1.3zM8.2 6.1c2.5 2.4 3.6 5.2 3.8 7.7-.4 0-.8-.1-1.2-.2-1-.7-2.2-3.1-2.8-4.8H8.2z" fill="currentColor"/></svg>`,
  csdn: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M6.8 5C5.3 5 4 6 3.8 7.6v8.8c.2 1.6 1.5 2.6 3 2.6h10.4c1.5 0 2.8-1 3-2.6V7.6C20 6 18.7 5 17.2 5H6.8zm1.7 3.2h1v8.6h-1V8.2zm2.3 1.2v6.2l2.2-1.4 2.2 1.4V9.4h-.9v4.7L11 12.8 9.5 14.1V9.4h-.7zm4.5 0h.9v6.2h-1V9.4h.1zm2.4 0h.9l1.8 3.1v-3.1h.9v6.2h-.9l-1.8-3.1v3.1h-.9V9.4z"/></svg>`,
};

/* ---------------- 全局状态 ---------------- */
let currentLang = localStorage.getItem("lsw_lang") || "zh";

/* ---------------- Splash 打字机 ---------------- */
function typeTerminal(el, text, speed = 35) {
  return new Promise(res => {
    let i = 0;
    const step = () => {
      if (i <= text.length) {
        el.textContent = text.slice(0, i);
        i++;
        setTimeout(step, speed + Math.random() * 25);
      } else {
        el.classList.add("done");
        res();
      }
    };
    step();
  });
}

async function runSplash() {
  const splash = document.getElementById("splash");
  const term1 = document.getElementById("term-1");
  const term2 = document.getElementById("term-2");
  const term3 = document.getElementById("term-3");
  const enterBtn = document.getElementById("splashEnter");
  const canvas = document.getElementById("splashCanvas");

  const name = currentLang === "zh" ? "李世雯" : "Brandy";
  const txt = [
    `INIT LSW WORKSHOP / ${name} OK`,
    "LOADING WORKSHOPS... 18 ITEMS",
    "SOLDERING JOINTS... 100%"
  ];

  await typeTerminal(term1, txt[0], 28);
  await typeTerminal(term2, txt[1], 24);
  await typeTerminal(term3, txt[2], 20);

  let autoTimer = setTimeout(enterSplash, 5000);
  enterBtn.addEventListener("click", () => {
    clearTimeout(autoTimer);
    enterSplash();
  });

  function enterSplash() {
    splashSparks(canvas);
    setTimeout(() => {
      splash.classList.add("gone");
      document.getElementById("nav").classList.add("show");
      document.getElementById("mainContent").classList.add("show");
      setTimeout(() => {
        splash.style.display = "none";
        document.getElementById("sideToc")?.classList.add("show");
        initTocObserver();
      }, 900);
    }, 300);
  }
}

/* ---------------- Splash 粒子火花 ---------------- */
function splashSparks(canvas) {
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const cx = canvas.width / 2;
  const cy = canvas.height * 0.72;
  const parts = [];
  for (let i = 0; i < 80; i++) {
    const a = Math.random() * Math.PI * 2;
    const s = 2 + Math.random() * 6;
    parts.push({
      x: cx, y: cy,
      vx: Math.cos(a) * s,
      vy: Math.sin(a) * s - 1,
      life: 60 + Math.random() * 40,
      age: 0,
      col: Math.random() < 0.7 ? "57,255,20" : "255,107,53"
    });
  }
  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    for (const p of parts) {
      p.age++;
      if (p.age > p.life) continue;
      alive = true;
      p.vy += 0.06;
      p.x += p.vx;
      p.y += p.vy;
      const a = 1 - p.age / p.life;
      ctx.fillStyle = `rgba(${p.col},${a})`;
      ctx.shadowBlur = 12;
      ctx.shadowColor = `rgba(${p.col},${a})`;
      ctx.fillRect(p.x, p.y, 2 + Math.random(), 2 + Math.random());
    }
    ctx.shadowBlur = 0;
    if (alive) requestAnimationFrame(tick);
  }
  tick();
}

/* ---------------- 注入平台 Logo ---------------- */
function injectLogos() {
  document.querySelectorAll(".el-logo[data-logo]").forEach(el => {
    const key = el.getAttribute("data-logo");
    if (LOGO_SVG[key]) el.innerHTML = LOGO_SVG[key];
  });
}

/* ---------------- 双语切换 ---------------- */
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("lsw_lang", lang);
  const dict = I18N[lang] || I18N.zh;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (dict[k] != null) el.textContent = dict[k];
  });
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  const btn = document.getElementById("langToggle");
  btn.textContent = lang === "zh" ? "中 / EN" : "EN / 中";
  btn.classList.toggle("active", lang === "en");

  const nameEl = document.getElementById("tocName");
  if (nameEl) nameEl.textContent = dict.tocName;
  const footEl = document.getElementById("footerName");
  if (footEl) footEl.textContent = dict.footerName;

  renderWorkshops();
}

function initLangToggle() {
  const btn = document.getElementById("langToggle");
  btn.addEventListener("click", () => {
    applyLang(currentLang === "zh" ? "en" : "zh");
  });
}

/* ---------------- Workshop 卡片渲染 ---------------- */
function renderWorkshops() {
  const grid = document.getElementById("wsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  WORKSHOPS.forEach((w, i) => {
    const title = w.title[currentLang] || w.title.en;
    const liner = w.liner[currentLang] || w.liner.en;
    const statusT = w.statusT && w.statusT[currentLang] ? w.statusT[currentLang] : (w.statusT?.en || w.status.toUpperCase());

    const card = document.createElement("a");
    card.className = "ws-card reveal";
    card.style.transitionDelay = (i * 0.035) + "s";
    card.href = w.href || "#";
    if (w.href && w.href !== "#") {
      card.target = "_blank";
      card.rel = "noopener";
    }

    card.innerHTML = `
      <div class="ws-top">
        <span class="ws-idx">WS · ${String(i+1).padStart(2,"0")}</span>
        <span class="ws-status ${w.status}">${statusT}</span>
      </div>
      ${w.missing ? `<span class="ws-missing mono">LINK TBD</span>` : ""}
      <div class="ws-thumb">
        <div class="ws-thumb-inner ${w.thumb || ''}"></div>
      </div>
      <div class="ws-title">${title}</div>
      <div class="ws-liner">${liner}</div>
      <div class="ws-tags">
        ${w.tags.map(t => `<span class="ws-tag">${t}</span>`).join("")}
      </div>
      <div class="ws-bottom">
        <span>${w.year}</span>
        <span class="ws-arrow">${w.missing ? '🔗?' : '→'}</span>
      </div>
    `;
    grid.appendChild(card);
  });
  observeReveal();
}

/* ---------------- 滚动显现 ---------------- */
let revealObs = null;
function observeReveal() {
  if (revealObs) revealObs.disconnect();
  revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal, .section-head, .how-card, .how-extra-card, .now-item, .el-card, .ws-card").forEach(el => {
    el.classList.add("reveal");
    revealObs.observe(el);
  });
}

/* ---------------- 滚动阴影 ---------------- */
function initNavScroll() {
  const nav = document.getElementById("nav");
  const onScroll = () => {
    if (window.scrollY > 20) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------------- 左侧目录 点击滚动 + 滚动高亮 ---------------- */
let tocObs = null;
function initToc() {
  document.querySelectorAll("#sideToc .toc-item").forEach(item => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("data-target");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}
function initTocObserver() {
  if (tocObs) tocObs.disconnect();
  const tocItems = document.querySelectorAll("#sideToc .toc-item");
  const secs = ["meet","workshops","how","now","elsewhere"].map(id => document.getElementById(id)).filter(Boolean);
  tocObs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const id = en.target.id;
        tocItems.forEach(t => t.classList.toggle("active", t.getAttribute("data-target") === id));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
  secs.forEach(s => tocObs.observe(s));
}

/* ---------------- Splash 跳过 ---------------- */
function initSplashSkip() {
  window.addEventListener("keydown", (e) => {
    const splash = document.getElementById("splash");
    if (!splash || splash.classList.contains("gone")) return;
    if (e.key === "Enter" || e.key === " " || e.key === "Escape") {
      document.getElementById("splashEnter").click();
    }
  });
}

/* ---------------- 启动 ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  injectLogos();
  initToc();
  applyLang(currentLang);
  initLangToggle();
  initNavScroll();
  initSplashSkip();
  runSplash();
});

window.addEventListener("resize", () => {
  const c = document.getElementById("splashCanvas");
  if (c) { c.width = window.innerWidth; c.height = window.innerHeight; }
});
