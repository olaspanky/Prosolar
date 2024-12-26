// Backend API (app/api/submitForm/route.js)

export async function POST(req) {
    try {
      const body = await req.json();
      const response = await fetch('https://crm.zoho.com/crm/WebToContactForm', {
        method: 'POST',
        body: new URLSearchParams(body),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
  
      if (response.ok) {
        return new Response(JSON.stringify({ message: 'Form submitted successfully omo ogbon!' }), { status: 200 });
      } else {
        return new Response(JSON.stringify({ error: 'Failed to submit the form' }), { status: response.status });
      }
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }
  