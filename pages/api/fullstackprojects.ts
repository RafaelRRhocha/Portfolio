// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([
    {
      image: 'https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/344/external-quiz-online-learning-vitaliy-gorbachev-blue-vitaly-gorbachev.png',
      description: 'How good are you with general knowledge? Test your knowledge by getting the quiz questions right!',
      technologies: 'Next.Js, TypeScript, Tailwind',
      ref: 'https://quiz-rafaelrrhocha.vercel.app'
    }
  ])
}
