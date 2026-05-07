const nodemailer=require("nodemailer")
const dotEnv=require("dotenv")

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.sendOtpEmail=async(email,otp)=>{
    try {
  await transporter.sendMail({
    from: `"OTP Verification" <${process.env.EMAIL_USER}>`, // sender address
    to: email, // list of recipients
    subject: "Your OTP Code", // subject line
   // text: "Hello world?", // plain text body
    html:`<h2> Your OTP is: ${otp} </h2> <p> Valid 5 minutes only </p>`, // HTML body
  });

  
} catch (err) {
  console.error("Error while sending mail:", err);
}
}