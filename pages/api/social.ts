// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([
    {
      name: 'Github',
      image: 'https://user-images.githubusercontent.com/99758843/178845303-26391362-11f3-4fc3-97d6-e3af37bf1b0c.png',
      ref: 'https://github.com/RafaelRRhocha'
    },
    {
      name: 'Linkedin',
      image: 'https://user-images.githubusercontent.com/99758843/178768113-4cb5112f-44db-42e8-810d-d3214eaed70d.svg',
      ref: 'https://www.linkedin.com/in/rafael-rhocha/'
    },
    {
      name: 'Gmail',
      image: 'https://user-images.githubusercontent.com/99758843/178768125-f186d0ee-dc66-47f1-a342-a811cf5c847a.svg',
      ref: 'mailto:1rafaelrocha2@gmail.com'
    },
    {
      name: 'Instagram',
      image: 'https://user-images.githubusercontent.com/99758843/178768107-6ee5c365-6535-4530-a2d5-51efe8180728.svg',
      ref: 'https://www.instagram.com/rafaelrhocha/'
    },
    {
      name: 'Steam',
      image: 'https://user-images.githubusercontent.com/99758843/178768116-4e8ba850-9348-4d46-971c-dbaeb94d8dbd.svg',
      ref: 'https://steamcommunity.com/id/GoldenCooler/'
    },
  ])
}