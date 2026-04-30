import React from "react";

export interface Product {
  id: number;
  title: string;
  desc: string;
  image: string;
}

export const productData = {
  en: [
    {
      id: 1,
      title: "Metal Spray",
      desc: "A surface coating technology that melts metallic materials (wire or powder) and sprays them onto a workpiece to restore dimensions, provide anti-corrosion properties, and ensure wear protection.",
      image: "/metal-spray.webp",
    },
    {
      id: 2,
      title: "Repairing and Reconditioning Services",
      desc: "Comprehensive on-board pump maintenance, including mechanical seal or packing replacement to prevent leaks, worn impeller replacement, pump casing repair, bearing replacement, and precision shaft alignment between the pump and drive motor.",
      image: "/repairing.webp",
    },
    {
      id: 3,
      title: "Teflon Coating",
      desc: "A surface treatment process that applies polytetrafluoroethylene (PTFE) to materials (usually metal) to create a non-stick, smooth surface that is resistant to heat and corrosion with an extremely low friction coefficient.",
      image: "/teflon-coating.webp",
    },
  ],
  id: [
    {
      id: 1,
      title: "Metal Spray",
      desc: "teknologi pelapisan permukaan yang melelehkan material logam (kawat/serbuk) dan menyemprotkannya ke benda kerja untuk perbaikan dimensi, anti-korosi, dan perlindungan aus",
      image: "/metal-spray.webp",
    },
    {
      id: 2,
      title: "Layanan Perbaikan dan Pemeliharaan Mesin",
      desc: "perbaikan pompa di atas kapal meliputi penggantian mechanical seal/packing untuk mengatasi kebocoran, penggantian impeller yang aus, perbaikan casing pompa, penggantian bearing (laher), serta alignment (penyejajaran) poros pompa dengan motor penggerak",
      image: "/repairing.webp",
    },
    {
      id: 3,
      title: "Teflon Coating",
      desc: "proses pelapisan permukaan bahan (biasanya logam) dengan bahan sintetis politetrafluoroetilena (PTFE) untuk menciptakan permukaan yang anti lengket, halus, tahan panas, korosi, dan memiliki koefisien gesekan sangat rendah",
      image: "/teflon-coating.webp",
    },
  ],
};

export const productDataList = {
  en: [
    {
      title: "Metal Spray",
      desc: "A surface coating technology that melts metallic materials (wire or powder) and sprays them onto a workpiece to restore dimensions, provide anti-corrosion properties, and ensure wear protection.",
      image: "/metal-spray.webp",
      features: ["Arc Spray", "Flame Spray", "Plasma Spray"],
      delay: 100,
    },
    {
      title: "Repairing and Reconditioning Services",
      desc: "Comprehensive on-board pump maintenance, including mechanical seal or packing replacement to resolve leaks, worn impeller replacement, pump casing repair, bearing replacement, and precision shaft alignment between the pump and drive motor.",
      image: "/repairing.webp",
      features: [
        "Routine Inspections",
        "System Lubrication",
        "Machine Condition Reports",
      ],
      delay: 200,
    },
    {
      title: "Teflon Coating",
      desc: "A surface treatment process that applies polytetrafluoroethylene (PTFE) to materials (usually metal) to create a non-stick, smooth, and heat-resistant surface that withstands corrosion with an extremely low friction coefficient.",
      image: "/teflon-coating.webp",
      features: [
        "Non-Stick",
        "High Temperature & Chemical Resistance",
        "Self-Lubricating",
      ],
      delay: 300,
    },
  ],
  id: [
    {
      title: "Metal Spray",
      desc: "teknologi pelapisan permukaan yang melelehkan material logam (kawat/serbuk) dan menyemprotkannya ke benda kerja untuk perbaikan dimensi, anti-korosi, dan perlindungan aus.",
      image: "/metal-spray.webp",
      features: ["Arc Spray", "Flame Spray", "Plasma Spray"],
      delay: 100,
    },
    {
      title: "Layanan Perbaikan dan Pemeliharaan Mesin",
      desc: "perbaikan pompa di atas kapal meliputi penggantian mechanical seal/packing untuk mengatasi kebocoran, penggantian impeller yang aus, perbaikan casing pompa, penggantian bearing (laher), serta alignment (penyejajaran) poros pompa dengan motor penggerak.",
      image: "/repairing.webp",
      features: [
        "Pengecekan Berkala",
        "Pelumasan Sistem",
        "Laporan Kondisi Mesin",
      ],
      delay: 200,
    },
    {
      title: "Teflon Coating",
      desc: "proses pelapisan permukaan bahan (biasanya logam) dengan bahan sintetis politetrafluoroetilena (PTFE) untuk menciptakan permukaan yang anti lengket, halus, tahan panas, korosi, dan memiliki koefisien gesekan sangat rendah.",
      image: "/teflon-coating.webp",
      features: ["Tidak Lengket", "Tahan Suhu Tinggi dan Kimia", "Pelumasan"],
      delay: 300,
    },
  ],
};

export const mission = {
  en: [
    {
      text: "Providing timely and efficient machinery repair solutions to minimize customer production downtime.",
    },
    {
      text: "Utilizing cutting-edge technology and expert technicians to ensure high-quality repair results.",
    },
    {
      text: "Prioritizing occupational health and safety (K3) in every operational activity.",
    },
  ],
  id: [
    {
      text: "Memberikan solusi perbaikan mesin yang tepat waktu dan efisien untuk meminimalkan downtime produksi pelanggan.",
    },
    {
      text: "Menggunakan teknologi mutakhir dan teknisi ahli untuk menjamin kualitas hasil perbaikan.",
    },
    {
      text: "Mengutamakan keselamatan kerja ( K3 ) dalam setiap operasional.",
    },
  ],
};
