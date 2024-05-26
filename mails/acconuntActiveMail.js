import nodemailer from "nodemailer";

// sending mail
export const sendMail = async (email, data) => {
  const tranporter = nodemailer.createTransport({
    host: `smtp.gmail.com`,
    port: 587,
    auth: {
      user: `roy77uttom@gmail.com`,
      pass: `wjzr fugo kmxz hvdx`,
    },
  });

  await tranporter.sendMail({
    from: "Blood Donation App <roy77uttom@gmail.com",
    to: `${email}`,
    subject: "Activated",
    // text: `Hi ${req.body.name}, welcome to test email. You are now enrolle ${req.body.skill} crouses. Thanks for join us`,
    html: `<h3> welcome wtith us</h3>
    <h4> Your account acctivation code is ${data.code} </h4>
    <h6>${data.link}</h6>`,

    // you can send only html or text
  });
};
