// ZohoForm.jsx
import React from 'react';
import Script from 'next/script';

const ZohoForm = () => {
  return (
    <div id="crmWebToEntityForm" className="bg-white text-black max-w-[600px] mx-auto p-6">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />

      <form
        id="webform5131685000001937009"
        action="https://crm.zoho.com/crm/WebToLeadForm"
        name="WebToLeads5131685000001937009"
        method="POST"
        onSubmit="javascript:document.charset='UTF-8'; return checkMandatory5131685000001937009()"
        acceptCharset="UTF-8"
      >
        {/* Hidden Inputs */}
        <input type="text" style={{ display: 'none' }} name="xnQsjsdp" value="806bd8d403c98a55a505965f9d6df98f7543767875865b8fc754479fd8f78585" />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input type="text" style={{ display: 'none' }} name="xmIwtLD" value="fd4fb529a3bb7e0c44cebd74185e423ee9cafbf787a8f2d56afd298b8d0fcde127a731ce80f3f61dc36d2e61119d3a36" />
        <input type="text" style={{ display: 'none' }} name="actionType" value="TGVhZHM=" />
        <input type="text" style={{ display: 'none' }} name="returnURL" value="https://prosolarng.com" />

        {/* Form Fields */}
        <div className="mb-4">
          <label htmlFor="Last_Name" className="block text-sm font-medium text-gray-700">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="Last_Name"
            name="Last Name"
            aria-required="true"
            aria-label="Last Name"
            maxLength="80"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            id="Email"
            name="Email"
            aria-required="false"
            aria-label="Email"
            maxLength="100"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="Mobile" className="block text-sm font-medium text-gray-700">
            Mobile
          </label>
          <input
            type="text"
            id="Mobile"
            name="Mobile"
            aria-required="false"
            aria-label="Mobile"
            maxLength="30"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="City" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            id="City"
            name="City"
            aria-required="false"
            aria-label="City"
            maxLength="100"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            id="formsubmit"
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
          <button
            type="reset"
            className="ml-3 inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Reset
          </button>
        </div>
      </form>

      {/* Scripts */}
      <Script
        id="form-scripts"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function validateEmail5131685000001937009() {
              var form = document.forms['WebToLeads5131685000001937009'];
              var emailFld = form.querySelectorAll('[ftype=email]');
              for (var i = 0; i < emailFld.length; i++) {
                var emailVal = emailFld[i].value;
                if (emailVal.trim().length !== 0) {
                  var atpos = emailVal.indexOf('@');
                  var dotpos = emailVal.lastIndexOf('.');
                  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
                    alert('Please enter a valid email address.');
                    emailFld[i].focus();
                    return false;
                  }
                }
              }
              return true;
            }

            function checkMandatory5131685000001937009() {
              var mndFileds = ['Last Name'];
              var fldLangVal = ['Full Name'];
              for (var i = 0; i < mndFileds.length; i++) {
                var fieldObj = document.forms['WebToLeads5131685000001937009'][mndFileds[i]];
                if (fieldObj && fieldObj.value.trim().length === 0) {
                  alert(fldLangVal[i] + ' cannot be empty.');
                  fieldObj.focus();
                  return false;
                }
              }
              if (!validateEmail5131685000001937009()) return false;

              var urlparams = new URLSearchParams(window.location.search);
              if (urlparams.has('service') && urlparams.get('service') === 'smarturl') {
                var webform = document.getElementById('webform5131685000001937009');
                var smarturlfield = document.createElement('input');
                smarturlfield.setAttribute('type', 'hidden');
                smarturlfield.setAttribute('value', urlparams.get('service'));
                smarturlfield.setAttribute('name', 'service');
                webform.appendChild(smarturlfield);
              }

              document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
              return true;
            }

            function tooltipShow5131685000001937009(el) {
              var tooltip = el.nextElementSibling;
              if (tooltip.style.display === 'none') {
                document.querySelectorAll('.zcwf_tooltip_over').forEach(function (t) {
                  t.style.display = 'none';
                });
                tooltip.style.display = 'block';
              } else {
                tooltip.style.display = 'none';
              }
            }
          `,
        }}
      />

      {/* Analytics Tracking Code */}
      <Script
        id="wf_anal"
        src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=78fa4ea56bd5d23d9c58922b280b1a1ad2c6707fe717d41ed3ec9d7e8cf8ae10f375362857b6d24279ef1bcd73252dccgid25ca9289320fd14f1043f21dcc135e9bb8ae6f95a6b54dd41819633eccd3eefcgid848067c21d6c7d6b897110077b28cf90d43b759bd1552776afed09d81e1c85dbgidbe559b889c2255b5f5a383d6180402c8d82dac5dfe73a4e1943b22fe27c9cb2c&tw=d4d1245fb00539dbe0d2920fd5905317629f76b3ccbe4a738278863e38708dea"
        strategy="afterInteractive"
      />
    </div>
  );
};

export default ZohoForm;