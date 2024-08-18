import React from "react";
import { BaseLayout } from "../_layouts/BaseLayout";
import { FaDotCircle } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <BaseLayout>
      <section id="features" className="bg-black py-12">
        <div
          className=" rounded-[50px]  mx-5  md:px-8 xl:px-0 px-4 py-5 max-w-[1200px] m-auto"
          style={{
            backgroundColor:"#18185E",
            backgroundImage:
              'url("https://www.carmedis.com/wp-content/uploads/2024/02/Online-Software-AI-BG.webp")',
          }}
        >
          <div className="w-full">
            <div className="animate__animated animate__zoomOutUp">
              <ul className="flex items-center text-white justify-center space-x-4 mb-8">
                <li className="flex items-center gap-2 border border-1 rounded-full px-4  py-2">
                  {/* <i className="fas fa-dot-circle text-blue-500 mr-2"></i> */}
                  <FaDotCircle className="text-xl" />
                  <span>How it works</span>
                </li>
              </ul>
              <h2 className="text-2xl text-white  text-center font-bold mb-6">
                Heres how Carmedis works and how to use
              </h2>
              <p className="text-lg text-white  mb-12 text-center">
                By following these steps, you can easily use the Carmedis app to
                request car maintenance and repair services, track the progress
                of your service request, and make payments with convenience and
                ease.
              </p>
              <div className="grid space-y-5 ">
                <div className="bg-[#FFFFFF12] border border-[#FFFFFF2B] text-white drop-shadow-2xl rounded-[16px] p-6 ">
                  <h5 className="text-lg font-semibold mb-2">
                    Download the App
                  </h5>
                  <p className="mb-4">
                    Visit the App Store (for iOS devices) or Google Play Store
                    (for Android devices).
                  </p>
                  <p>
                    Search for “Carmedis” and download the app to your
                    smartphone.
                  </p>
                </div>
                <div className="bg-[#FFFFFF12] border border-[#FFFFFF2B] text-white drop-shadow-2xl rounded-[16px] p-6 ">
                  <h5 className="text-lg font-semibold mb-2">Registration</h5>
                  <p className="mb-4">
                    Open the Carmedis app and click on “Register”.
                  </p>
                  <p>
                    Create your account by providing your email address and
                    creating a password.
                  </p>
                  <p>
                    Verify your registration by entering the OTP sent to your
                    email.
                  </p>
                </div>
                <div className="bg-[#FFFFFF12] border border-[#FFFFFF2B] text-white drop-shadow-2xl rounded-[16px] p-6 ">
                  <h5 className="text-lg font-semibold mb-2">
                    Complete Profile
                  </h5>
                  <p>
                    Fill in all relevant details in your profile, including your
                    name, contact information, and address.
                  </p>
                </div>
                <div className="bg-[#FFFFFF12] border border-[#FFFFFF2B] text-white drop-shadow-2xl rounded-[16px] p-6 ">
                  <h5 className="text-lg font-semibold mb-2">
                    Vehicle Details
                  </h5>
                  <p>
                    Input details about your vehicle, including make, model, and
                    year.
                  </p>
                </div>
                <div className="bg-[#FFFFFF12] border border-[#FFFFFF2B] text-white drop-shadow-2xl rounded-[16px] p-6 ">
                  <h5 className="text-lg font-semibold mb-2">Make a Request</h5>
                  <p>Navigate to the service request section of the app.</p>
                  <p>
                    Input your location and select your car from the list of
                    vehicles on your profile.
                  </p>
                  <p>Describe the issues you are facing with your car.</p>
                </div>
                <div className="bg-[#FFFFFF12] border border-[#FFFFFF2B] text-white drop-shadow-2xl rounded-[16px] p-6 ">
                  <h5 className="text-lg font-semibold mb-2">
                    Real-time Response
                  </h5>
                  <p>
                    Your request will be accepted in real-time by the nearest
                    authorized auto shop within 4 minutes.
                  </p>
                  <p>
                    Proceed with conversation with the auto shop via the app’s
                    chat features.
                  </p>
                </div>
                <div className="bg-[#FFFFFF12] border border-[#FFFFFF2B] text-white drop-shadow-2xl rounded-[16px] p-6 ">
                  <h5 className="text-lg font-semibold mb-2">
                    Schedule Inspection
                  </h5>
                  <p>Agree on the necessary inspection with the auto shop.</p>
                  <p>Discuss and agree on pricing for the service.</p>
                </div>
                <div className="bg-[#FFFFFF12] border border-[#FFFFFF2B] text-white drop-shadow-2xl rounded-[16px] p-6 ">
                  <h5 className="text-lg font-semibold mb-2">
                    Invoice and Payment
                  </h5>
                  <p>An invoice will be sent to you via the app.</p>
                  <p>Accept the invoice and proceed to make payment.</p>
                  <p>
                    Top up your wallet for easy and fast payments, or use online
                    payment methods such as virtual account transfer, USSD, or
                    card payment.
                  </p>
                  <p>
                    Do not make payment outside the platform for your safety
                    purposes.
                  </p>
                </div>
                <div className="bg-[#FFFFFF12] border border-[#FFFFFF2B] text-white drop-shadow-2xl rounded-[16px] p-6 ">
                  <h5 className="text-lg font-semibold mb-2">
                    Instant Payment Confirmation
                  </h5>
                  <p>You will receive confirmation of successful payment.</p>
                  <p>The auto shop will be notified automatically.</p>
                </div>
                <div className="bg-[#FFFFFF12] border border-[#FFFFFF2B] text-white drop-shadow-2xl rounded-[16px] p-6 ">
                  <h5 className="text-lg font-semibold mb-2">Track Progress</h5>
                  <p>
                    Track the progress of your service request via the app until
                    completion.
                  </p>
                  <p>
                    Receive notifications and updates on the status of your
                    service.
                  </p>
                </div>
                <div className="bg-[#FFFFFF12] border border-[#FFFFFF2B] text-white drop-shadow-2xl rounded-[16px] p-6 ">
                  <h5 className="text-lg font-semibold mb-2">Rating</h5>
                  <p>
                    After completion of the service, select pick up and ensure
                    to rate the performance of the auto shop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default HowItWorks;
