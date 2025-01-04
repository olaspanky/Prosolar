// "use client"; // Required for client-side interactivity in Next.js 14

// import { useEffect } from 'react';

// const ZohoForm = () => {
//   useEffect(() => {
//     // Load jQuery (if needed)
//     const script = document.createElement('script');
//     script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js';
//     script.async = true;
//     document.body.appendChild(script);

//     // Form submission handler
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       const isMandatory = checkMandatory5131685000001937009();
//       if (isMandatory) {
//         const formData = new FormData(e.target);
//         try {
//           const response = await fetch('https://crm.zoho.com/crm/WebToLeadForm', {
//             method: 'POST',
//             body: formData,
//           });
//           const data = await response.json();
//           const splashInfo = document.getElementById('wf_splash_info');
//           splashInfo.innerText = data.actionvalue;
//           const splash = document.getElementById('wf_splash');
//           e.target.reset();
//           splash.style.display = '';
//           setTimeout(() => {
//             splash.style.display = 'none';
//           }, 5000);
//         } catch (error) {
//           alert('An error occurred');
//         }
//       }
//     };

//     document.getElementById('webform5131685000001937009').addEventListener('submit', handleSubmit);

//     return () => {
//       document.getElementById('webform5131685000001937009').removeEventListener('submit', handleSubmit);
//       document.body.removeChild(script);
//     };
//   }, []);

//   const checkMandatory5131685000001937009 = () => {
//     const mndFields = ['Last Name'];
//     const fldLangVal = ['Full Name'];
//     for (let i = 0; i < mndFields.length; i++) {
//       const fieldObj = document.forms['WebToLeads5131685000001937009'][mndFields[i]];
//       if (fieldObj && fieldObj.value.trim().length === 0) {
//         alert(fldLangVal[i] + ' cannot be empty.');
//         fieldObj.focus();
//         return false;
//       }
//     }
//     return true;
//   };

//   const validateEmail5131685000001937009 = () => {
//     const emailFld = document.querySelectorAll('[ftype=email]');
//     for (let i = 0; i < emailFld.length; i++) {
//       const emailVal = emailFld[i].value.trim();
//       if (emailVal.length !== 0) {
//         const atpos = emailVal.indexOf('@');
//         const dotpos = emailVal.lastIndexOf('.');
//         if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
//           alert('Please enter a valid email address.');
//           emailFld[i].focus();
//           return false;
//         }
//       }
//     }
//     return true;
//   };

//   return (
//     <div id="crmWebToEntityForm" className="bg-white text-black max-w-[600px] mx-auto p-6">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />

//       <div id="wf_splash" className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-50 border border-green-300 rounded-lg p-3 hidden">
//         <div className="bg-green-500 rounded-full w-5 h-5 flex items-center justify-center mr-2">
//           <div className="w-1.5 h-2 border-b-2 border-r-2 border-white transform rotate-45"></div>
//         </div>
//         <span id="wf_splash_info"></span>
//       </div>

//       <form id="webform5131685000001937009" name="WebToLeads5131685000001937009" acceptCharset="UTF-8">
//         <input type="hidden" name="xnQsjsdp" value="1a0b7e50c5972d6838d569fd4b6f31d6c950ef7f537673c9daaae68a3837c11a" />
//         <input type="hidden" name="zc_gad" id="zc_gad" value="" />
//         <input type="hidden" name="xmIwtLD" value="596dba562e6ff5fdd33cc7d879cca8066f3160183ee624464bb444967ea812bf24dadc2db81d9bcea9fdc3ce6c9519d5" />
//         <input type="hidden" name="actionType" value="TGVhZHM=" />
//         <input type="hidden" name="returnURL" value="null" />

//         <div className="text-black font-bold mb-4">Test</div>

//         <div className="mb-4">
//           <label htmlFor="Last_Name" className="block text-sm font-medium mb-1">Full Name<span className="text-red-500">*</span></label>
//           <input type="text" id="Last_Name" name="Last Name" required className="w-full p-2 border border-gray-300 rounded" />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="Email" className="block text-sm font-medium mb-1">Email</label>
//           <input type="email" id="Email" name="Email" className="w-full p-2 border border-gray-300 rounded" />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="Mobile" className="block text-sm font-medium mb-1">Mobile</label>
//           <input type="text" id="Mobile" name="Mobile" className="w-full p-2 border border-gray-300 rounded" />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="City" className="block text-sm font-medium mb-1">City</label>
//           <input type="text" id="City" name="City" className="w-full p-2 border border-gray-300 rounded" />
//         </div>

//         <div className="flex gap-2">
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
//           <button type="reset" className="bg-gray-500 text-white px-4 py-2 rounded">Reset</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ZohoForm;

"use client"; // Required for client-side interactivity in Next.js 14

import { useEffect } from 'react';

const ZohoForm = () => {
  useEffect(() => {
    // Load jQuery (if needed)
    const jqueryScript = document.createElement('script');
    jqueryScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js';
    jqueryScript.async = true;
    document.body.appendChild(jqueryScript);

    // Load Zoho Analytics Script
    const analyticsScript = document.createElement('script');
    analyticsScript.id = 'wf_anal';
    analyticsScript.src =
      'https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=e123ec475c025efe26633f403d3a03f429a93f0adef35b04b42df57eac7c6a038572997ecadfede3cce83744c580b740gidf3800c541156da327b59bcf0f5a2077248081d4cb6e2d7847a2ba9c92c5649fegid5ec9a3e8cbe46561c24156be0ecd9c6b91a24f1ad464551d42f1043da7fe49b4gid777d2abeadff6655f3170630ae23af0d3a451ce31b44a287d5a92a2519f5686f&tw=460d8b5f12ec01fabab5d603d0fafdba80db14e9283877cb10fcda2e88743be4';
    analyticsScript.async = true;
    document.body.appendChild(analyticsScript);

    // Form submission handler
    const handleSubmit = async (e) => {
      e.preventDefault();
      const isMandatory = checkMandatory5131685000001937009();
      if (isMandatory) {
        const formData = new FormData(e.target);
        try {
          const response = await fetch('https://crm.zoho.com/crm/WebToLeadForm', {
            method: 'POST',
            body: formData,
          });
          const data = await response.json();
          const splashInfo = document.getElementById('wf_splash_info');
          splashInfo.innerText = data.actionvalue;
          const splash = document.getElementById('wf_splash');
          e.target.reset();
          splash.style.display = '';
          setTimeout(() => {
            splash.style.display = 'none';
          }, 5000);
        } catch (error) {
          alert('An error occurred');
        }
      }
    };

    document.getElementById('webform5131685000001937009').addEventListener('submit', handleSubmit);

    return () => {
      // Safely remove event listener from form
      const form = document.getElementById('webform5131685000001937009');
      if (form) {
        form.removeEventListener('submit', handleSubmit);
      }
    
      // Safely remove scripts
      try {
        if (jqueryScript && jqueryScript.parentNode) {
          document.body.removeChild(jqueryScript);
        }
        if (analyticsScript && analyticsScript.parentNode) {
          document.body.removeChild(analyticsScript);
        }
      } catch (error) {
        console.warn('Error removing scripts:', error);
      }
    };
  }, []);

  const checkMandatory5131685000001937009 = () => {
    const mndFields = ['Last Name'];
    const fldLangVal = ['Full Name'];
    for (let i = 0; i < mndFields.length; i++) {
      const fieldObj = document.forms['WebToLeads5131685000001937009'][mndFields[i]];
      if (fieldObj && fieldObj.value.trim().length === 0) {
        alert(fldLangVal[i] + ' cannot be empty.');
        fieldObj.focus();
        return false;
      }
    }
    return true;
  };

  const validateEmail5131685000001937009 = () => {
    const emailFld = document.querySelectorAll('[ftype=email]');
    for (let i = 0; i < emailFld.length; i++) {
      const emailVal = emailFld[i].value.trim();
      if (emailVal.length !== 0) {
        const atpos = emailVal.indexOf('@');
        const dotpos = emailVal.lastIndexOf('.');
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
          alert('Please enter a valid email address.');
          emailFld[i].focus();
          return false;
        }
      }
    }
    return true;
  };

  return (
    <div id="crmWebToEntityForm" className="bg-white text-black max-w-[600px] mx-auto p-6">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />

      <div id="wf_splash" className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-50 border border-green-300 rounded-lg p-3 hidden">
        <div className="bg-green-500 rounded-full w-5 h-5 flex items-center justify-center mr-2">
          <div className="w-1.5 h-2 border-b-2 border-r-2 border-white transform rotate-45"></div>
        </div>
        <span id="wf_splash_info"></span>
      </div>

      <form id="webform5131685000001937009" name="WebToLeads5131685000001937009" acceptCharset="UTF-8">
        <input type="hidden" name="xnQsjsdp" value="1a0b7e50c5972d6838d569fd4b6f31d6c950ef7f537673c9daaae68a3837c11a" />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input type="hidden" name="xmIwtLD" value="596dba562e6ff5fdd33cc7d879cca8066f3160183ee624464bb444967ea812bf24dadc2db81d9bcea9fdc3ce6c9519d5" />
        <input type="hidden" name="actionType" value="TGVhZHM=" />
        <input type="hidden" name="returnURL" value="null" />

        <div className="text-black font-bold mb-4"></div>

        <div className="mb-4">
          <label htmlFor="Last_Name" className="block text-sm font-medium mb-1">Full Name<span className="text-red-500">*</span></label>
          <input type="text" id="Last_Name" name="Last Name" required className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div className="mb-4">
          <label htmlFor="Email" className="block text-sm font-medium mb-1">Email</label>
          <input type="email" id="Email" name="Email" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div className="mb-4">
          <label htmlFor="Mobile" className="block text-sm font-medium mb-1">Mobile</label>
          <input type="text" id="Mobile" name="Mobile" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div className="mb-4">
          <label htmlFor="City" className="block text-sm font-medium mb-1">City</label>
          <input type="text" id="City" name="City" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div className="flex gap-2">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
          <button type="reset" className="bg-gray-500 text-white px-4 py-2 rounded">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default ZohoForm;