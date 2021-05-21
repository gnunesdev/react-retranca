export default function (req, res) {
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.EMAIL_USER,
    to: "gnunesinf@gmail.com",
    subject: `Message From ${req.body.data.name}`,
    text: req.body.data.message,
    html: <div>{req.body.data.message}</div>,
  };

  return new Promise((resolve, reject) => {
    transporter
      .sendMail(mailData)
      .then((response: Response) => {
        transporter.close();
        return resolve(response);
      })
      .catch((error) => {
        transporter.close();
        return reject(error);
      });
  });
}
