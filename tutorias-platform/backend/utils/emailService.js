const nodemailer = require("nodemailer");

exports.enviarCorreo = (destinatario, asunto, mensaje) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: destinatario,
    subject: asunto,
    text: mensaje,
  };

  return transporter.sendMail(mailOptions);
};
