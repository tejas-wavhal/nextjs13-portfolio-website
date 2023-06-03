import nodeMailer from 'nodemailer'

const sendEmail = async (options: any) => {
  const transporter = nodeMailer.createTransport({
    host:  String(process.env.SMPT_HOST),  //to work well gmail
    port: Number(process.env.SMPT_PORT),  //to work well gmail
    service: process.env.SMPT_SERVICE,
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};


export default sendEmail;