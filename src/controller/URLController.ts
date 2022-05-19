import { config } from "../config/Constants";
import { Request, Response } from "express";
import shortId from 'shortid';
import { URLModel } from "../database/model/URL";

export default class URLController {

  public async redirect(req: Request, res: Response): Promise<void> {
    const {hash} = req.params;
    const url = {
      "originURL": "https://www.linkedin.com/in/mauricio-mds/",
      "hash": "iIoHKM9AH",
      "shortURL": "http://localhost:5000/iIoHKM9AH"
    }
    res.redirect(url.originURL);
  }

  public async shorten(req: Request, res: Response): Promise<void> {
    const {originURL} = req.body; 
    const url = await URLModel.findOne({originURL})

    if (url) {
      res.json(url);
      return;
    }

    const hash = shortId.generate();
    const shortURL = `${config.API_URL}/${hash}`;
    const newUrl = await URLModel.create({hash, shortURL, originURL});
    res.json(newUrl);
  }
}