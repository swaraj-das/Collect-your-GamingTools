const nodemailer = require("nodemailer");

async function SendEmailController(req, resp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yourEmail@gmail.com", // youe email
      pass: "password", // your password
    },
  });

  const mailOptions = {
    from: "yourEmail@gmail.com",
    to: "yourEmail@gmail.com", // email where you want to receive the message
    subject: "New From Collect your GamingTools",
    text: `
            Name: ${req.body.Name}
            Email: ${req.body.Email}
            Message: ${req.body.Message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email: " + error);
      resp.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      resp.status(200).send("Form data sent successfully");
    }
  });
}

module.exports = { SendEmailController };
