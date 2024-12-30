"use client"
import React, { useEffect } from 'react';
import Script from 'next/script';

const ZohoForm = () => {
  useEffect(() => {
    // Initialize form validation and submission logic
    if (typeof window !== 'undefined') {
      initializeForm();
    }
  }, []);

  const initializeForm = () => {
    // Email validation function
    function validateEmail5131685000001937009() {
      const form = document.forms['WebToLeads5131685000001937009'];
      const emailFld = form.querySelectorAll('[ftype=email]');
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
    }

    // Mandatory field validation function
    function checkMandatory5131685000001937009() {
      const mndFileds = ['Company', 'Last Name'];
      const fldLangVal = ['Company', 'Last Name'];
      for (let i = 0; i < mndFileds.length; i++) {
        const fieldObj = document.forms['WebToLeads5131685000001937009'][mndFileds[i]];
        if (fieldObj && fieldObj.value.trim().length === 0) {
          alert(fldLangVal[i] + ' cannot be empty.');
          fieldObj.focus();
          return false;
        }
      }
      if (!validateEmail5131685000001937009()) return false;

      // Disable submit button to prevent multiple submissions
      document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
      return true;
    }

    // Attach form submission handler
    const form = document.getElementById('webform5131685000001937009');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (checkMandatory5131685000001937009()) {
          this.submit();
        }
      });
    }
  };

  return (
    <div>
      {/* Load jQuery */}
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js" strategy="beforeInteractive" />

      {/* Zoho Form */}
      <div id="crmWebToEntityForm" className="zcwf_lblLeft crmWebToEntityForm" style={{ backgroundColor: 'white', color: 'black', maxWidth: '600px', padding: '25px', margin: '0 auto' }}>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />

        {/* Embedded CSS */}
        <style>
          {`
            html, body {
              margin: 0px;
            }
            #crmWebToEntityForm.zcwf_lblLeft {
              width: 100%;
              padding: 25px;
              margin: 0 auto;
              box-sizing: border-box;
            }
            #crmWebToEntityForm.zcwf_lblLeft * {
              box-sizing: border-box;
            }
            #crmWebToEntityForm {
              text-align: left;
            }
            #crmWebToEntityForm * {
              direction: ltr;
            }
            .zcwf_lblLeft .zcwf_title {
              word-wrap: break-word;
              padding: 0px 6px 10px;
              font-weight: bold;
            }
            .zcwf_lblLeft .zcwf_col_fld input[type="text"],
            .zcwf_lblLeft .zcwf_col_fld textarea {
              width: 60%;
              border: 1px solid #c0c6cc !important;
              resize: vertical;
              border-radius: 2px;
              float: left;
            }
            .zcwf_lblLeft .zcwf_col_lab {
              width: 30%;
              word-break: break-word;
              padding: 0px 6px 0px;
              margin-right: 10px;
              margin-top: 5px;
              float: left;
              min-height: 1px;
            }
            .zcwf_lblLeft .zcwf_col_fld {
              float: left;
              width: 68%;
              padding: 0px 6px 0px;
              position: relative;
              margin-top: 5px;
            }
            .zcwf_lblLeft .zcwf_row {
              margin: 15px 0px;
            }
            .zcwf_lblLeft .formsubmit {
              margin-right: 5px;
              cursor: pointer;
              color: var(--baseColor);
              font-size: 12px;
            }
            .zcwf_lblLeft .zcwf_button {
              font-size: 12px;
              color: var(--baseColor);
              border: 1px solid #c0c6cc;
              padding: 3px 9px;
              border-radius: 4px;
              cursor: pointer;
              max-width: 120px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          `}
        </style>

        {/* Form */}
        <form
          id="webform5131685000001937009"
          name="WebToLeads5131685000001937009"
          action="https://crm.zoho.com/crm/WebToLeadForm"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            if (checkMandatory5131685000001937009()) {
              e.target.submit();
            }
          }}
          acceptCharset="UTF-8"
        >
          <input type="text" style={{ display: 'none' }} name="xnQsjsdp" value="2803970227aca0e8bbec3f1098322cb5861e2a5df2d133bdbb1442e6effd812c" />
          <input type="hidden" name="zc_gad" id="zc_gad" value="" />
          <input type="text" style={{ display: 'none' }} name="xmIwtLD" value="59dbd907c33d7a7b6672f4645143b08c86cd56be94f3c121a6d2b08aa2d417edd34ae1fa221a2000953dd493cbe98a49" />
          <input type="text" style={{ display: 'none' }} name="actionType" value="TGVhZHM=" />
          <input type="text" style={{ display: 'none' }} name="returnURL" value="https://prosolarng.com/solar/form" />

          <div className="zcwf_title" style={{ maxWidth: '600px', color: 'black', fontFamily: 'Arial' }}>Test</div>

          {/* Company Field */}
          <div className="zcwf_row">
            <div className="zcwf_col_lab" style={{ fontSize: '12px', fontFamily: 'Arial' }}>
              <label htmlFor="Company">Company<span style={{ color: 'red' }}>*</span></label>
            </div>
            <div className="zcwf_col_fld">
              <input type="text" id="Company" aria-required="true" aria-label="Company" name="Company" aria-valuemax="200" maxLength="200" />
              <div className="zcwf_col_help"></div>
            </div>
          </div>

          {/* Email Field */}
          <div className="zcwf_row">
            <div className="zcwf_col_lab" style={{ fontSize: '12px', fontFamily: 'Arial' }}>
              <label htmlFor="Email">Email</label>
            </div>
            <div className="zcwf_col_fld">
              <input type="text" ftype="email" autoComplete="false" id="Email" aria-required="false" aria-label="Email" name="Email" aria-valuemax="100" maxLength="100" />
              <div className="zcwf_col_help"></div>
            </div>
          </div>

          {/* Last Name Field */}
          <div className="zcwf_row">
            <div className="zcwf_col_lab" style={{ fontSize: '12px', fontFamily: 'Arial' }}>
              <label htmlFor="Last_Name">Last Name<span style={{ color: 'red' }}>*</span></label>
            </div>
            <div className="zcwf_col_fld">
              <input type="text" id="Last_Name" aria-required="true" aria-label="Last Name" name="Last Name" aria-valuemax="80" maxLength="80" />
              <div className="zcwf_col_help"></div>
            </div>
          </div>

          {/* Submit and Reset Buttons */}
          <div className="zcwf_row">
            <div className="zcwf_col_lab"></div>
            <div className="zcwf_col_fld">
              <input type="submit" id="formsubmit" role="button" className="formsubmit zcwf_button" value="Submit" aria-label="Submit" title="Submit" />
              <input type="reset" className="zcwf_button" role="button" name="reset" value="Reset" aria-label="Reset" title="Reset" />
            </div>
          </div>
        </form>
      </div>

      {/* Zoho Analytics Script */}
      <Script
        id="wf_anal"
        src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=67c3570d4b56a814edfdcdd4c95dd7c967486f4822f7f756b0e7ba09419ec5119490dc6920690031b649d0d33e9457eagid4b2b059d072982e6623bf1e5c580c39537f2b437adde152959e4e3c1fea8da22gida08b30a161e93f3ec43a6c0249232bb5b27d9a8260e79a10dfd181b0c793e89bgida0549099853c87298f6a291ab6f04f4f48326e7ecbf40f6667f4562cab954580&tw=3254e74ed61f98c8ddfd4dfe88a0ffb70a43182b04198904e505d028f1eb8f27"
        strategy="afterInteractive"
      />
    </div>
  );
};

export default ZohoForm;