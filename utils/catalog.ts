import { StaticImageData } from "next/image";
import pz_13_img from '@/public/images/PZ-13.png';
import pz_14_img from '@/public/images/PZ-14.png';
import pz_4_img from '@/public/images/PZ-4.png';
import pz_6_img from "@/public/images/PZ-6.png"
import pz_9_img from "@/public/images/PZ-9.jpeg"
import pz_20_img from "@/public/images/PZ-20.jpg"
import pz_17_img from "@/public/images/PZ-17.jpg"
import pz_18_img from "@/public/images/PZ-18.jpg"
import pzs_1_img from "@/public/images/PZS-01.jpg"
import pzs_2_img from "@/public/images/PZS-02.jpg"
import pzs_3_img from "@/public/images/PZS-03.jpg"
import pk_1_img from "@/public/images/PK-01.jpg"
import br_1_img from "@/public/images/BR-01.jpg"
import pz_25_img from "@/public/images/PZ-25.png"
import pz_24_img from "@/public/images/PZ-24.png"
import pz_19_img from "@/public/images/PZ-19.jpg"
import pz_21_img from "@/public/images/PZ-21.jpg"

interface IOurProduct {
    id: string;
    code: string;
    price1: string;
    price2: string;
    img: StaticImageData;
  }

export const our_products_data: IOurProduct[] = [
    {
      id: '1',
      code: 'PZ-21',
      price1: '199.000',
      price2: '',
      img: pz_21_img,
    },
    {
      id: '2',
      code: 'PZ-13',
      price1: '199.000',
      price2: '',
      img: pz_13_img,
    },
    {
      id: '3',
      code: 'PZ-14',
      price1: '249.000',
      price2: '396.000',
      img: pz_14_img,
    },
    {
      id: '4',
      code: 'PZ-20',
      price1: '490.000',
      price2: '784.000',
      img: pz_20_img,
    },
    {
      id: '5',
      code: 'PZ-4',
      price1: '490.000',
      price2: '784.000',
      img: pz_4_img,
    },
    {
      id: '6',
      code: 'PZ-6',
      price1: '199.000',
      price2: '',
      img: pz_6_img,
    },
    {
      id: '7',
      code: 'PZ-9',
      price1: '249.000',
      price2: '396.000',
      img: pz_9_img,
    },
    {
      id: '8',
      code: 'PZ-17',
      price1: '490.000',
      price2: '784.000',
      img: pz_17_img,
    },
    {
      id: '9',
      code: 'PZ-18',
      price1: '490.000',
      price2: '784.000',
      img: pz_18_img,
    },
    {
      id: '10',
      code: 'PZS-1',
      price1: '199.000',
      price2: '',
      img: pzs_1_img,
    },
    {
      id: '11',
      code: 'PZS-2',
      price1: '249.000',
      price2: '396.000',
      img: pzs_2_img,
    },
    {
      id: '12',
      code: 'PZS-3',
      price1: '490.000',
      price2: '784.000',
      img: pzs_3_img,
    },
    {
      id: '13',
      code: 'PK-1',
      price1: '490.000',
      price2: '784.000',
      img: pk_1_img,
    },
    {
      id: '14',
      code: 'BR-1',
      price1: '199.000',
      price2: '',
      img: br_1_img,
    },

    {
      id: '15',
      code: 'PZ-24',
      price1: '490.000',
      price2: '784.000',
      img: pz_24_img,
    },
    {
      id: '16',
      code: 'PZ-25',
      price1: '490.000',
      price2: '784.000',
      img: pz_25_img,
    },
    {
      id: '17',
      code: 'PZ-19',
      price1: '490.000',
      price2: '784.000',
      img: pz_19_img,
    },
  ];