

// // import clientPromise from "@/lib/mongodb"; // MongoDB connection utility
// // import nodemailer from 'nodemailer';
// // import { NextResponse } from 'next/server'; // Import NextResponse

// // export async function POST(req) {
// //   try {
// //     const body = await req.json();
// //     const { name, email, phone, location, paymentPlan, product, pdfBlob } = body;

// //     // Step 1: Save User Info in MongoDB
// //     const client = await clientPromise;
// //     const db = client.db('yourDatabase');
// //     const collection = db.collection('formSubmissions');

// //     await collection.insertOne({
// //       name,
// //       email,
// //       phone,
// //       location,
// //       paymentPlan,
// //       product,
// //       timestamp: new Date()
// //     });

// //     // Step 2: Configure nodemailer to send email with quote
// //     let transporter = nodemailer.createTransport({
// //       service: 'gmail',
// //       auth: {
// //         user: "olakareemomobolarinwa@gmail.com",
// //         pass: "ebjp ltcy haae oqtl" , // Ensure you use environment variables for sensitive data
// //       },
// //     });

// //     // Convert PDF Blob to Buffer
// //     const buffer = Buffer.from(pdfBlob, 'base64');

// //     let mailOptions = {
// //       from: `"Your Company" <no-reply@company.com>`,  
// //       to: email, 
// //       subject: "Your Quote for Solar System",
// //       text: "Please find your quote attached.",
// //       attachments: [
// //         {
// //           filename: `quote-${product.component}.pdf`,
// //           content: buffer,
// //           encoding: 'base64',
// //         },
// //       ],
// //     };

// //     // Send email with the quote attached
// //     await transporter.sendMail(mailOptions);

// //     // Return success response
// //     return NextResponse.json({ message: 'Form submitted and email sent successfully!' }, { status: 200 });
// //   } catch (error) {
// //     console.error('Error submitting form:', error);
// //     return NextResponse.json({ message: "Internal server error" }, { status: 500 });
// //   }
// // }

// // export function handler(req) {
// //   if (req.method === 'POST') {
// //     return POST(req);
// //   } else {
// //     return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
// //   }
// // }



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
//         user: "prosolarng1@gmail.com",
//         pass: "opjt nxnk dieb jxnt", // Use environment variables for sensitive data
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

async function getZohoAccessToken() {
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;

  const url = 'https://accounts.zoho.com/oauth/v2/token';

  const params = new URLSearchParams({
    refresh_token: refreshToken,
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'refresh_token',
  });

  const response = await fetch(`${url}?${params.toString()}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch Zoho access token');
  }

  const data = await response.json();
  return data.access_token;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, location, paymentPlan, product, pdfBlob } = body;

    // Step 1: Save User Info in MongoDB
    const client = await clientPromise;
    const db = client.db('yourDatabase');
    const collection = db.collection('formSubmissions');

    await collection.insertOne({
      name,
      email,
      phone,
      location,
      paymentPlan,
      product,
      timestamp: new Date(),
    });

    // Step 2: Create a Lead in Zoho CRM
    const accessToken = await getZohoAccessToken();

    const zohoResponse = await fetch('https://www.zohoapis.com/crm/v2/Leads', {
      method: 'POST',
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [
          {
            Last_Name: name,
            Email: email,
            Phone: phone,
            Description: `Location: ${location}, Payment Plan: ${paymentPlan}, Product: ${product.component}`,
          },
        ],
      }),
    });

    if (!zohoResponse.ok) {
      throw new Error('Failed to create lead in Zoho CRM');
    }

    const zohoData = await zohoResponse.json();

    // Step 3: Configure nodemailer to send email with quote
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'prosolarng1@gmail.com',
        pass: process.env.EMAIL_PASSWORD, // Use environment variables for sensitive data
      },
    });

    // Convert PDF Blob to Buffer
    const buffer = Buffer.from(pdfBlob, 'base64');

    let mailOptions = {
      from: 'prosolarng1@gmail.com',
      to: email,
      subject: 'Your Quote for Solar System',
      text: 'Please find your quote attached.',
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
    return NextResponse.json(
      {
        message: 'Form submitted, lead created in Zoho CRM, and email sent successfully!',
        zohoData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Internal server error', error: error.message }, { status: 500 });
  }
}
