export type TeamMember = {
  name: string;
  nativeName?: string;
  email: string;
  image: string;
  interests: string[];
  bio?: string;
  imageClassName?: string;
};

export type TeamSection = {
  title: string;
  members: TeamMember[];
};

export const teamSections: TeamSection[] = [
  {
    title: "Principal Investigator",
    members: [
      {
        name: "Tianxiang Nan",
        nativeName: "南天翔",
        email: "nantianxiang@mail.tsinghua.edu.cn",
        image: "/team/image1.jpeg",
        interests: ["Beyond-CMOS technologies"],
        bio: "Tianxiang Nan is an Associate Professor at the School of Integrated Circuits, Tsinghua University. Prior to joining Tsinghua, he was a Postdoctoral Researcher at the University of Wisconsin-Madison from 2015 to 2018 and at Cornell University from 2018 to 2019. He earned his Ph.D. in Electrical Engineering from Northeastern University in Boston in 2015.",
      },
    ],
  },
  {
    title: "Postdoctoral Researchers",
    members: [
      {
        name: "Guiping Ji",
        nativeName: "纪桂萍",
        email: "guipingji@hotmail.com",
        image: "/team/image2.png",
        interests: ["Spintronics", "Complex oxides"],
      },
      {
        name: "Yuhan Liang",
        nativeName: "梁宇晗",
        email: "yhliang@mail.tsinghua.edu.cn",
        image: "/team/image3.jpeg",
        interests: [
          "Multiferroic magnon devices",
          "Spin-orbit torque magnetic memory",
        ],
      },
    ],
  },
  {
    title: "PhD Students",
    members: [
      {
        name: "Chenye Zhang",
        nativeName: "张晨烨",
        email: "cy-zhang20@mails.tsinghua.edu.cn",
        image: "/team/image4.jpeg",
        interests: ["Sensors", "Acoustic wave devices"],
      },
      {
        name: "Yahui Ji",
        nativeName: "季雅惠",
        email: "jiyh20@mails.tsinghua.edu.cn",
        image: "/team/image5.jpeg",
        interests: ["Acoustic antennas"],
      },
      {
        name: "Dingsong Jiang",
        nativeName: "姜丁菘",
        email: "jds18@mails.tsinghua.edu.cn",
        image: "/team/image6.jpeg",
        interests: ["MTJ", "SOT-MRAM"],
      },
      {
        name: "Yuxuan Ma",
        nativeName: "马宇轩",
        email: "mayx21@mails.tsinghua.edu.cn",
        image: "/team/image7.jpeg",
        interests: ["PMUT", "Acoustic wave devices"],
      },
      {
        name: "Hao Gu",
        nativeName: "顾昊",
        email: "guh22@mails.tsinghua.edu.cn",
        image: "/team/image8.jpeg",
        imageClassName: "team-image-rotate-90",
        interests: [
          "Circuit design for wireless implantable bioelectronics",
          "Wireless power transfer",
          "Low-power communication",
        ],
      },
      {
        name: "Cancheng Xiao",
        nativeName: "肖灿城",
        email: "xiaocc22@mails.tsinghua.edu.cn",
        image: "/team/image9.png",
        interests: [
          "Advanced and emerging computing based on advanced and emerging devices",
          "AI-enabled integrated circuit engineering",
        ],
      },
      {
        name: "Kailin Li",
        nativeName: "李凯霖",
        email: "li-kl23@mails.tsinghua.edu.cn",
        image: "/team/image10.jpeg",
        interests: [
          "Acoustic wave filters",
          "Tunable and reconfigurable acoustic wave devices",
        ],
      },
      {
        name: "Jianle Liu",
        nativeName: "刘建乐",
        email: "liujl24@mail.tsinghua.edu.cn",
        image: "/team/image11.jpeg",
        interests: [
          "Acoustically actuated antennas",
          "Electrically small antennas",
          "On-chip antennas",
        ],
      },
      {
        name: "Jiahao Zhao",
        nativeName: "赵嘉豪",
        email: "zhaojh24@mails.tsinghua.edu.cn",
        image: "/team/image12.jpeg",
        interests: [
          "Edge AI accelerator based on CIM",
          "Efficient deployment of AI models",
        ],
      },
      {
        name: "Baiyu Su",
        nativeName: "苏柏煜",
        email: "suby22@mail.tsinghua.edu.cn",
        image: "/team/image13.jpeg",
        interests: [
          "Probabilistic computing",
          "Reservoir computing",
          "Computing in memory",
        ],
      },
      {
        name: "Yuheng Yang",
        nativeName: "杨宇恒",
        email: "yangyuhe25@mails.tsinghua.edu.cn",
        image: "/team/image14.jpeg",
        interests: ["DTCO", "AI-driven design"],
      },
      {
        name: "Chiyuan Wang",
        nativeName: "王驰原",
        email: "wangchiy25@mails.tsinghua.edu.cn",
        image: "/team/image15.jpeg",
        interests: ["Analog IC"],
      },
      {
        name: "Xuezhen Zhang",
        nativeName: "张雪贞",
        email: "zhang-xz22@mails.tsinghua.edu.cn",
        image: "/team/image16.jpeg",
        interests: ["Spintronics device", "Probabilistic computing"],
      },
      {
        name: "Chenyu Zhao",
        nativeName: "赵宸宇",
        email: "cy-zhao22@mails.tsinghua.edu.cn",
        image: "/team/image17.jpeg",
        interests: [
          "In-memory computing device based on RAM",
          "AI accelerator and related circuit module design",
        ],
      },
    ],
  },
  {
    title: "Master Students",
    members: [
      {
        name: "Zhuangzhi Fan",
        nativeName: "范壮志",
        email: "fzz24@mails.tsinghua.edu.cn",
        image: "/team/image18.jpeg",
        interests: [
          "Design and simulation of piezoelectric micromachined ultrasonic transducers (PMUTs)",
        ],
      },
      {
        name: "Bingqian Song",
        nativeName: "宋冰骞",
        email: "sbq24@mails.tsinghua.edu.cn",
        image: "/team/image19.jpeg",
        interests: [
          "Computing in memory",
          "Analog and mixed-signal circuit design",
        ],
      },
      {
        name: "Fantao Gao",
        nativeName: "高凡涛",
        email: "gft24@mails.tsinghua.edu.cn",
        image: "/team/image20.jpeg",
        interests: ["Compute in memory", "MRAM"],
      },
      {
        name: "Ziwei Han",
        nativeName: "韩紫薇",
        email: "hzw24@mails.tsinghua.edu.cn",
        image: "/team/image21.jpeg",
        interests: ["Compute in memory", "SOT-MTJ"],
      },
      {
        name: "Shengbiao Hu",
        nativeName: "胡胜彪",
        email: "husb25@mail.tsinghua.edu.cn",
        image: "/team/image22.jpeg",
        interests: ["Sensor analog front-end", "Ultrasound ASIC"],
      },
      {
        name: "Shunqi Chen",
        nativeName: "陈顺奇",
        email: "chenshunqi25@mails.tsinghua.edu.cn",
        image: "/team/image23.jpeg",
        interests: ["MEMS and analog front-end", "Ultrasound system and ASIC"],
      },
      {
        name: "Sirui Lu",
        nativeName: "卢思睿",
        email: "lu-sr25@mails.tsinghua.edu.cn",
        image: "/team/image24.jpeg",
        interests: ["Field-free switching of SOT-MRAM", "P-bit"],
      },
      {
        name: "Binyi Dai",
        nativeName: "戴彬逸",
        email: "daiby25@mails.tsinghua.edu.cn",
        image: "/team/image25.jpeg",
        interests: ["Acoustic wave devices", "Antennas"],
      },
      {
        name: "Xinpeng Yan",
        nativeName: "闫鑫鹏",
        email: "yanxp25@mails.tsinghua.edu.cn",
        image: "/team/image26.jpeg",
        interests: ["RF filters", "Analog IC design"],
      },
      {
        name: "Wang Kaiqi",
        nativeName: "王凯淇",
        email: "wangkq25@mail.tsinghua.edu.cn",
        image: "/team/image27.jpeg",
        interests: ["Analog circuit", "MRAM"],
      },
      {
        name: "Yining Li",
        nativeName: "李怡宁",
        email: "liyn25@mails.tsinghua.edu.cn",
        image: "/team/image28.jpeg",
        interests: ["Agentic IC design", "LLM-assisted DTCO workflow"],
      },
      {
        name: "En Li",
        nativeName: "李恩",
        email: "le25@mails.tsinghua.edu.cn",
        image: "/team/image29.jpeg",
        interests: ["AI for analog circuit design", "AI and agents for science"],
      },
      {
        name: "Yiyuan Xiao",
        nativeName: "肖轶元",
        email: "xiaoyy25@mails.tsinghua.edu.cn",
        image: "/team/image30.jpeg",
        interests: ["Architecture design of CIM"],
      },
      {
        name: "Letian Wang",
        nativeName: "王乐天",
        email: "2156494675@qq.com",
        image: "/team/image31.jpeg",
        interests: ["SOT-MTJ", "LLM"],
      },
      {
        name: "Teach Won",
        nativeName: "王第基",
        email: "2829676978@qq.com",
        image: "/team/image32.jpeg",
        interests: [
          "Analog circuit design",
          "Magnetoresistive random access memory (MRAM) circuit design",
        ],
      },
      {
        name: "Quan An",
        nativeName: "安泉",
        email: "anq820@126.com",
        image: "/team/image33.jpeg",
        interests: ["SOT-MRAM", "Compute in memory"],
      },
      {
        name: "Jiaqi Zhang",
        nativeName: "张嘉琪",
        email: "jqzhang730@163.com",
        image: "/team/image34.jpeg",
        interests: ["MRAM-based CIM", "Probabilistic computing"],
      },
      {
        name: "Yuan Ma",
        nativeName: "马媛",
        email: "lonelyconscious@163.com",
        image: "/team/image35.jpeg",
        interests: [
          "Micromagnetic simulation and spintronic device physics",
          "AI-assisted device modeling",
        ],
      },
    ],
  },
];
