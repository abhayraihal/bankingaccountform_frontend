import React, { useState } from 'react';

function Form() {
    const [companyUEN, setCompanyUEN] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [fullName, setFullName] = useState('');
    const [position, setPosition] = useState('');
    const [email, setEmail] = useState('');
    const [reenteredEmail, setReenteredEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [bankStatements, setBankStatements] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const formData = {
          companyUEN,
          companyName,
          fullName,
          position,
          email,
          mobileNumber: `${countryCode} ${mobileNumber}`,
          bankStatements,
        };
    
        try {
          const response = await fetch('http://localhost:5000/submit-form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.status === 200) {
            console.log('Form data submitted successfully.');
          } else {
            console.error('Form data submission failed.');
          }
        } catch (error) {
          console.error('Form data submission failed:', error);
        }
      };

    return (
        <div className="container mt-5 bg-light">

            <form onSubmit={handleFormSubmit}>
                <div className="row bg-info rounded my-2 mx-2 align-items-center">
                    <h2 className="text-light">Company Information</h2>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3 form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="companyUEN"
                            value={companyUEN}
                            onChange={(e) => setCompanyUEN(e.target.value)}
                            placeholder='Company UEN'
                        />
                    </div>
                    <div className="col-md-6 mb-3 form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="companyName"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder='Company Name'
                        />
                    </div>
                </div>

                <div className="row bg-info rounded my-2 mx-2 align-items-center">
                    <h2 className="text-light">Applicant Information</h2>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3 form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder='Full Name'
                        />
                    </div>
                    <div className="col-md-6 mb-3 form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="position"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            placeholder='Position'
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3 form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email Address'
                        />
                    </div>
                    <div className="col-md-6 mb-3 form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="reenteredEmail"
                            value={reenteredEmail}
                            onChange={(e) => setReenteredEmail(e.target.value)}
                            placeholder='Re-enter Email Address'
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3 form-group">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                id="countryCode"
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                placeholder="Country Code"
                            />
                            <input
                                type="text"
                                className="form-control"
                                id="mobileNumber"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                                placeholder="Mobile Number"
                            />
                        </div>
                    </div>
                </div>

                <div className="row bg-info rounded my-2 mx-2 align-items-center">
                    <h2 className="text-light">Upload Documents</h2>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3 form-group">
                        <label htmlFor="bankStatements">Bank Statements</label>
                        <input
                            type="file"
                            className="form-control-file"
                            id="bankStatements"
                            onChange={(e) => setBankStatements(e.target.files[0])}
                        />
                    </div>
                    <div className="col-md-6 mb-3 form-group">
                        <p>PDFs (not scanned copies) of company's operating bank current account(s) statements for the past 6 months. Example: If today is 03 Nov 23, then please upload bank statements from May 23 to Oct 23 (both months inclusive)</p>
                        <p>If your company is multi-banked, then please upload 6 months bank statements for each bank account.</p>
                        <p>If your file is password protected, we request you to remove the password and upload the file to avoid submission failure.</p>
                        <p>In case if you are facing any issue while uploading bank statements, Please contact us on <a href="mailto:support@credilinq.ai">support@credilinq.ai</a>.</p>
                    </div>
                </div>

                <div className="form-group">

                </div>

                <div className="row bg-info rounded my-2 mx-2 align-items-center">
                    <h2 className="text-light">Terms & Conditions</h2>
                </div>
                <div>
                    <p><input type="checkbox" required /> By ticking, you are confirming that you have understood and are agreeing to the details mentioned:</p>
                    <ul>
                        <li>I confirm that I am the authorized person to upload bank statements on behalf of my company</li>
                        <li>I assure you that uploaded bank statements and provided company information match and are of the same company, if there is a mismatch then my report will not be generated</li>
                        <li>I understand that this is a general report based on the bank statements and Credilinq is not providing a solution or guiding me for my business growth</li>
                    </ul>
                    <p>
                        I have read and understand the
                        <a href="/">Terms & Conditions</a>
                    </p>
                </div>
                <button className="btn btn-primary float-right" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
