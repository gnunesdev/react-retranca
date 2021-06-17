import { NextApiRequest, NextApiResponse } from "next";

export default function (req: NextApiRequest, res: NextApiResponse) {
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailData = {
    from: process.env.EMAIL_USER,
    to: "gnunesinf@gmail.com",
    subject: `Email de ${req.body.data.name}`,
    text: req.body.data.message,
  };

  transporter.sendMail(mailData, (error: any) => {
    if (!error) {
      return res.status(200).json({ message: "email sent" });
    } else {
      console.error(error);
      return res.status(400).json({ error });
    }
  });
}
