export type Client = {
  name: string;
  href: string;
  logo: string;
  /** width/height of the source asset for next/image intrinsic sizing */
  width: number;
  height: number;
};

export const clients: Client[] = [
  {
    name: "Kina Bank",
    href: "https://www.kinabank.com.pg/",
    logo: "/logos/kinabank.png",
    width: 668,
    height: 207,
  },
  {
    name: "BSP",
    href: "https://www.bsp.com.pg/",
    logo: "/logos/bsp.png",
    width: 805,
    height: 795,
  },
  {
    name: "Boroko Motors",
    href: "https://borokomotors.com/",
    logo: "/logos/boroko-motors.jpg",
    width: 320,
    height: 320,
  },
  {
    name: "Kenmore Properties",
    href: "https://kenmoreproperties.com.pg/",
    logo: "/logos/kenmore.png",
    width: 427,
    height: 104,
  },
  {
    name: "Southern Cross Assurance",
    href: "https://scal.com.pg/",
    logo: "/logos/southern-cross.png",
    width: 700,
    height: 356,
  },
];
