import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Email de ${req.body.data.name}`,
    text: req.body.data.message,
  };

  await transporter.sendMail(mailOptions, (error: any, res: any) => {
    if (!error) {
      return res.status(200).json({ message: "success" });
    } else {
      return res.status(400).json({ message: "error" });
    }
  });
}
