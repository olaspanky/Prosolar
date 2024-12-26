


"use client"
import { useState } from 'react';

export default function WebToContactsForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isMandatory = checkMandatory();
    if (!isMandatory) return;

    try {
      const response = await fetch('/api/zoho', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({ firstName: '', lastName: '', phone: '', description: '' });
      } else {
        alert('An error occurred while submitting the form.');
      }
    } catch (error) {
      alert('An error occurred: ' + error.message);
    }
  };

  const checkMandatory = () => {
    const mandatoryFields = ['firstName', 'lastName', 'phone'];
    const fieldLabels = ['Full Name', 'Email', 'Phone Number'];

    for (let i = 0; i < mandatoryFields.length; i++) {
      const fieldValue = formData[mandatoryFields[i]]?.trim();
      if (!fieldValue) {
        alert(`${fieldLabels[i]} cannot be empty.`);
        return false;
      }
    }
    return true;
  };

  return (
    <div className="form-container" style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'white', color: 'black', padding: '25px' }}>
      <h2 style={{ fontFamily: 'Arial' }}>20kVA SCS Form 1</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="firstName" style={{ display: 'block', fontSize: '12px', fontFamily: 'Arial' }}>
            Full Name<span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #c0c6cc', borderRadius: '4px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="lastName" style={{ display: 'block', fontSize: '12px', fontFamily: 'Arial' }}>
            Email<span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="email"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #c0c6cc', borderRadius: '4px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="phone" style={{ display: 'block', fontSize: '12px', fontFamily: 'Arial' }}>
            Phone Number<span style={{ color: 'red' }}>*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #c0c6cc', borderRadius: '4px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="description" style={{ display: 'block', fontSize: '12px', fontFamily: 'Arial' }}>
            Location/City
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', border: '1px solid #c0c6cc', borderRadius: '4px' }}
          ></textarea>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Submit
          </button>
          <button
            type="reset"
            style={{ padding: '8px 16px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            onClick={() => setFormData({ firstName: '', lastName: '', phone: '', description: '' })}
          >
            Reset
          </button>
        </div>
      </form>

      {/* Analytics Tracking Code */}
      <script
        id="wf_anal"
        dangerouslySetInnerHTML={{
          __html: `
            var script = document.createElement('script');
            script.src = "https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=ead4efb36f268aa6f15a0b787011cbca74324891d4256b8adc4bc8ea0d325fccb3bb9af2367d1f30aca279e0e9257cd1gid1bcf70f235ae421d88084dd76c51ac8657d8767c174a7149cb016f0064925ad0gid7e61f8aee0699455bf777cbc0700557d55de3d99ba4571b223bdaa275c9aa766gid4f7709b8af075b6eea57928dd700d8c43ed1e5a120bced2179dee26bfa4eb59c&tw=4ca31ff584fcfe8a0357caf67054df22df659c160c6777b29cb137987d93eb49";
            document.head.appendChild(script);
          `,
        }}
      />
    </div>
  );
}