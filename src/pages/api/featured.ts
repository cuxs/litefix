// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const FEATURED_FILM =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20";

type Data = {
  film?: any
  message?: string;
  name?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try{
    const response = await fetch(FEATURED_FILM)
    const jsonRes = await response.json()
  
    return res.status(200).json({ film: jsonRes.results });
  }catch(e){
    console.log(e)
    res.status(401).send({message:"An error ocurred"})
  }
}
