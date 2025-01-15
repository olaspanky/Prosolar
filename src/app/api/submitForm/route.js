



// import clientPromise from '@/lib/mongodb';
// import nodemailer from 'nodemailer';
// import { NextResponse } from 'next/server'; // Import NextResponse

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { name, email, phone, location, paymentPlan, product, pdfBlob } = body;

//     // Step 1: Save User Info in MongoDB
//     const client = await clientPromise;
//     const db = client.db('yourDatabase');
//     const collection = db.collection('formSubmissions');

//     await collection.insertOne({
//       name,
//       email,
//       phone,
//       location,
//       paymentPlan,
//       product,
//       timestamp: new Date()
//     });

//     // Step 2: Configure nodemailer to send email with quote
//     let transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
        // user: "prosolarng1@gmail.com",
        // pass: "opjt nxnk dieb jxnt", // Use environment variables for sensitive data
//       },
//     });

//     // Convert PDF Blob to Buffer
//     const buffer = Buffer.from(pdfBlob, 'base64');

//     let mailOptions = {
//       from: `"prosolarng1@gmail.com`,  
//       to: email, 
//       subject: "Your Quote for Solar System",
//       text: "Please find your quote attached.",
//       attachments: [
//         {
//           filename: `quote-${product.component}.pdf`,
//           content: buffer,
//           encoding: 'base64',
//         },
//       ],
//     };

//     // Send email with the quote attached
//     await transporter.sendMail(mailOptions);

//     // Return success response
//     return NextResponse.json({ message: 'Form submitted and email sent successfully!' }, { status: 200 });
//   } catch (error) {
//     console.error('Error submitting form:', error);
//     return NextResponse.json({ message: "Internal server error" }, { status: 500 });
//   }
// }
import clientPromise from '@/lib/mongodb';
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, location, paymentPlan, product, pdfBlob } = body;

    // Step 1: Save User Info in MongoDB
    const client = await clientPromise;
    const db = client.db('yourDatabase');
    const collection = db.collection('prosolar');

    const result = await collection.insertOne({
      name,
      email,
      phone,
      location,
      paymentPlan,
      product,
      timestamp: new Date()
    });

    // Step 2: Configure nodemailer to send email with quote
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "prosolarng1@gmail.com",
        pass: "opjt nxnk dieb jxnt", 
      },
    });

    // Convert PDF Blob to Buffer
    const buffer = Buffer.from(pdfBlob, 'base64');

    let mailOptions = {
      from: `"${process.env.EMAIL_USER}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Quote for Solar System",
      text: "Please find your quote attached.",
      attachments: [
        {
          filename: `quote-${product.component}.pdf`,
          content: buffer,
          encoding: 'base64',
        },
      ],
    };

    // Send email with the quote attached
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({ message: 'Form submitted and email sent successfully!', id: result.insertedId }, { status: 200 });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}