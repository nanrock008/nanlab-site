export const publicationProfile = {
  "scholarUrl": "https://scholar.google.com/citations?user=xs-J8n8AAAAJ&hl=en",
  "orcidUrl": "https://orcid.org/0000-0001-6804-2029"
};

type PublicationOverride = {
  topics?: string[];
  keywords?: string[];
  pdfUrl?: string;
  newsUrl?: string;
  image?: string;
  recent?: boolean;
  summary?: string;
  category?: string;
  publicationDate?: string;
  imageVersion?: string;
};

export const manualPublications = [
  {
    "title": "Acoustically Mediated Piezoelectric Antennas With Asymmetric Excitation Using Acoustic and Electromagnetic Co-Simulation",
    "authors": [
      "Jianle Liu",
      "Chenye Zhang",
      "Kailin Li",
      "Yahui Ji",
      "Shiyan Ma",
      "Peiran Zhang",
      "Xianfeng Liang",
      "Haifeng Gao",
      "Jinghong Guo",
      "Tian-Ling Ren",
      "Fan Yang",
      "Tianxiang Nan"
    ],
    "journal": "IEEE Transactions on Antennas and Propagation",
    "year": 2026,
    "doi": "10.1109/tap.2025.3639509",
    "url": "https://doi.org/10.1109/tap.2025.3639509",
    "volume": "74",
    "issue": "2",
    "pages": "1450-1463",
    "topics": [],
    "recent": true
  }
] as const;

export const publicationOverrides: Record<string, PublicationOverride> = {
  "10.1002/adfm.202518681": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Magnon transport",
      "Voltage-control magnetization"
    ],
    "recent": true,
    "category": "Article",
    "publicationDate": "2025-10-05",
    "summary": "Crystal symmetry in multiferroic oxides is used to tune anisotropic magnon transport, revealing a path toward electrically reconfigurable spin-wave devices.",
    "image": "/recent-publications/qiu-feature.png",
    "imageVersion": "1774918844"
  },
  "10.1002/adfm.202507757": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Magnon transport",
      "Spin-orbit torque"
    ],
    "recent": true,
    "category": "Article",
    "publicationDate": "2025-07-04",
    "summary": "Interfacial coupling is shown to switch antiferromagnetic magnon transport between conducting, weakly anisotropic, and insulating regimes in oxide multilayers.",
    "image": "/recent-publications/chen-feature.png",
    "imageVersion": "1774919739"
  },
  "10.1109/tap.2025.3639509": {
    "topics": [
      "MEMS",
      "Antennas",
      "Acoustics"
    ],
    "recent": true,
    "keywords": [
      "Acoustic antenna"
    ],
    "category": "Article",
    "publicationDate": "2026-02",
    "summary": "A coupled acoustic-electromagnetic simulation framework is introduced to design asymmetrically excited piezoelectric antennas with more realistic radiation behavior.",
    "image": "/recent-publications/liu-feature.png",
    "imageVersion": "1774918797"
  },
  "10.1109/tap.2025.3644471": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Acoustic antenna"
    ]
  },
  "10.1109/lawp.2025.3628935": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Acoustic antenna"
    ]
  },
  "10.1002/adfm.202529056": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1088/1361-6463/ae2edc": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque"
    ]
  },
  "10.1109/lawp.2024.3497012": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Acoustic antenna"
    ]
  },
  "10.1016/j.device.2025.100779": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Acoustic antenna"
    ]
  },
  "10.1109/led.2025.3601178": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Acoustic antenna",
      "Magnetic sensor"
    ]
  },
  "10.1063/5.0274464": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization",
      "Magnon transport"
    ]
  },
  "10.1109/tap.2025.3555109": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Acoustic antenna"
    ]
  },
  "10.1002/adfm.202513870": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1038/s41563-025-02392-7": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Magnon transport"
    ]
  },
  "10.1063/5.0287101": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Acoustic antenna",
      "Magnetic sensor"
    ]
  },
  "10.1038/s41598-025-20842-9": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Voltage-control magnetization",
      "Magnon transport"
    ]
  },
  "10.1142/s2010135x25500262": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Acoustic antenna",
      "Magnetic sensor"
    ]
  },
  "10.1063/5.0246527": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Magnon transport"
    ]
  },
  "10.1038/s41467-025-61490-x": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Magnon transport"
    ]
  },
  "10.1038/s41598-025-02138-0": {
    "topics": [],
    "keywords": []
  },
  "10.1002/apxr.202400206": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Acoustic antenna"
    ]
  },
  "10.3390/electronics14091859": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Acoustic antenna"
    ]
  },
  "10.1109/led.2024.3522150": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Acoustic antenna"
    ]
  },
  "10.1038/s41563-024-01856-6": {
    "topics": [],
    "keywords": []
  },
  "10.1038/s41467-024-45316-w": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque"
    ]
  },
  "10.1109/lawp.2024.3437188": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Acoustic antenna"
    ]
  },
  "10.1021/acs.nanolett.3c03704": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1109/ap-s/inc-usnc-ursi52054.2024.10687276": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Acoustic antenna"
    ]
  },
  "10.1109/iscas58744.2024.10558067": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Compute-in-memory"
    ]
  },
  "10.1002/adfm.202407046": {
    "topics": [],
    "keywords": []
  },
  "10.1063/5.0192222": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1109/tap.2024.3453439": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Acoustic antenna"
    ]
  },
  "10.1109/intermagshortpapers61879.2024.10576745": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque"
    ]
  },
  "10.1103/physrevapplied.21.024021": {
    "topics": [],
    "keywords": []
  },
  "10.1109/led.2024.3437157": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Acoustic antenna"
    ]
  },
  "10.1002/aelm.202300666": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Voltage-control magnetization"
    ]
  },
  "10.1103/physrevmaterials.8.l011401": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque"
    ]
  },
  "10.1038/s41467-024-50372-3": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Voltage-control magnetization",
      "Magnon transport",
      "Compute-in-memory"
    ]
  },
  "10.34133/research.0208": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Acoustic antenna",
      "Magnetic sensor"
    ]
  },
  "10.1038/s41467-023-38095-3": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Voltage-control magnetization",
      "Magnon transport"
    ]
  },
  "10.1063/5.0175483": {
    "topics": [],
    "keywords": []
  },
  "10.1038/s41467-023-41163-3": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque"
    ]
  },
  "10.1038/s41928-023-01080-1": {
    "topics": [],
    "keywords": []
  },
  "10.1088/1361-6463/acb71f": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Acoustic antenna"
    ]
  },
  "10.1038/s41467-023-39687-9": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1002/adfm.202308944": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization",
      "Magnon transport"
    ]
  },
  "10.1109/intermagshortpapers58606.2023.10228265": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Voltage-control magnetization",
      "Compute-in-memory"
    ]
  },
  "10.1002/adma.202301608": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Magnon transport"
    ]
  },
  "10.21203/rs.3.rs-1571984/v1": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Voltage-control magnetization",
      "Magnon transport"
    ]
  },
  "10.3390/mi13122250": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Magnetic sensor"
    ]
  },
  "10.1021/acs.nanolett.1c04332": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Magnon transport"
    ]
  },
  "10.1002/aelm.202200514": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Voltage-control magnetization"
    ]
  },
  "10.1103/physrevapplied.18.064050": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Magnon transport"
    ]
  },
  "10.1109/aps/ursi47566.2021.9704791": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Acoustic antenna"
    ]
  },
  "10.1063/5.0076924": {
    "topics": [],
    "keywords": []
  },
  "10.1109/aps/ursi47566.2021.9704370": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Magnon transport"
    ]
  },
  "10.1038/s41467-020-17999-4": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Magnon transport"
    ]
  },
  "10.1073/pnas.2014359117": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque"
    ]
  },
  "10.1126/sciadv.abd2613": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1002/adma.202004477": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1103/physrevb.101.104405": {
    "topics": [],
    "keywords": []
  },
  "10.1073/pnas.1812822116": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Magnon transport"
    ]
  },
  "10.1002/adfm.201806371": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Voltage-control magnetization"
    ]
  },
  "10.1038/s41528-018-0030-4": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Magnetic sensor"
    ]
  },
  "10.1063/1.5025623": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Magnon transport",
      "Compute-in-memory"
    ]
  },
  "10.1038/s41467-017-00343-8": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Acoustic antenna",
      "Magnetic sensor"
    ]
  },
  "10.1109/tmag.2017.2739111": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1021/acsnano.7b01547": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Voltage-control magnetization"
    ]
  },
  "10.1063/1.4979694": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1103/physrevapplied.8.044006": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Voltage-control magnetization"
    ]
  },
  "10.1063/1.4939441": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Voltage-control magnetization"
    ]
  },
  "10.1038/am.2016.139": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1063/1.4953456": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1002/adma.201602910": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque"
    ]
  },
  "10.1109/tmag.2016.2514982": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1103/physrevb.93.180402": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque"
    ]
  },
  "10.1038/srep32408": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Voltage-control magnetization"
    ]
  },
  "10.1039/c5tc03008k": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1038/srep20450": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Voltage-control magnetization"
    ]
  },
  "10.1063/1.4931757": {
    "topics": [],
    "keywords": []
  },
  "10.1142/s2010324715300017": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1103/physrevb.91.214416": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque"
    ]
  },
  "10.1109/intmag.2015.7156526": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1038/srep16480": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Voltage-control magnetization",
      "Magnon transport"
    ]
  },
  "10.1063/1.4916112": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Voltage-control magnetization"
    ]
  },
  "10.1109/jmems.2014.2322012": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Magnetic sensor"
    ]
  },
  "10.1038/srep07740": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Voltage-control magnetization"
    ]
  },
  "10.1063/1.4906752": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Voltage-control magnetization"
    ]
  },
  "10.1557/mrs.2015.195": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1038/ncomms7082": {
    "topics": [],
    "keywords": []
  },
  "10.1016/b978-1-78242-254-9.00012-3": {
    "topics": [],
    "keywords": []
  },
  "10.1063/1.4906062": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque"
    ]
  },
  "10.1063/1.4905855": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1109/intmag.2015.7157361": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1109/lmag.2015.2425360": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1007/s10854-014-2625-4": {
    "topics": [],
    "keywords": []
  },
  "10.1063/1.4868622": {
    "topics": [],
    "keywords": []
  },
  "10.1063/1.4865315": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1007/s10854-014-1707-7": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Acoustic antenna"
    ]
  },
  "10.1109/mwsym.2014.6848587": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1063/1.4871835": {
    "topics": [],
    "keywords": []
  },
  "10.1038/srep03688": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1063/1.4863257": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque"
    ]
  },
  "10.1039/c3tc31571a": {
    "topics": [],
    "keywords": []
  },
  "10.1109/ted.2014.2313095": {
    "topics": [],
    "keywords": []
  },
  "10.1063/1.4861462": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Voltage-control magnetization"
    ]
  },
  "10.1038/srep05931": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1109/lmwc.2013.2292924": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1109/tmag.2013.2244860": {
    "topics": [],
    "keywords": []
  },
  "10.1109/tmag.2013.2266897": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1007/s10854-012-1056-3": {
    "topics": [],
    "keywords": []
  },
  "10.1063/1.4827875": {
    "topics": [],
    "keywords": []
  },
  "10.1063/1.4799486": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1109/memsys.2013.6474344": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Magnetic sensor"
    ]
  },
  "10.1063/1.4839276": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1038/srep01985": {
    "topics": [
      "MEMS"
    ],
    "keywords": [
      "Magnetic sensor"
    ]
  },
  "10.1063/1.4799480": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque"
    ]
  },
  "10.1109/lmwc.2013.2247991": {
    "topics": [],
    "keywords": []
  },
  "10.1002/adma.201203792": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Voltage-control magnetization"
    ]
  },
  "10.1002/adma.201301989": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Voltage-control magnetization"
    ]
  },
  "10.1016/j.jcrysgro.2011.12.047": {
    "topics": [],
    "keywords": []
  },
  "10.1021/am300205t": {
    "topics": [],
    "keywords": []
  },
  "10.1109/tmag.2012.2199284": {
    "topics": [],
    "keywords": []
  },
  "10.1109/tmag.2012.2202270": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque"
    ]
  },
  "10.1088/1674-1056/21/6/067701": {
    "topics": [],
    "keywords": []
  },
  "10.1063/1.3698363": {
    "topics": [
      "Spintronics"
    ],
    "keywords": [
      "Spin-orbit torque",
      "Voltage-control magnetization"
    ]
  }
};
