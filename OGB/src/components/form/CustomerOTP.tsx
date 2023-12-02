
// export default function CustomerOTP() {
//   return (
//     <div className="p-8 mx-auto max-w-2xl mt-8 bg-white rounded-md"style={{
//         fontWeight: "500",
//         border:"1px solid rgba(195, 166, 109, 0.5)",
//         borderRadius: "1.5rem "
//       }}>
//     <div>
//       <h2 className="text-2xl font-semibold mb-2">Please Enter OTP</h2>
//       <p className="text-gray-600 mb-4 mt-6">We have sent a one-time password to your mobile number.</p>
      

//       <button
//         className="w-28 bg-black mt-2 text-white py-2 rounded-md hover:bg-black"
//         type="submit"
//       >
//         Send OTP
//       </button>
//     </div>
//   </div>
//   )
// }
// import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

export default function CustomerOTP()  {
//   const history = useHistory();
//   const [otpDigits, setOtpDigits] = useState(['', '', '', '']);

//   const handleInputChange = (index, value) => {
//     const newOtpDigits = [...otpDigits];
//     newOtpDigits[index] = value;

//     // Move focus to the next input box if the value is entered
//     if (value !== '' && index < otpDigits.length - 1) {
//     //   document.getElementById(`otp-input-${index + 1}`).focus();
//     }

//     setOtpDigits(newOtpDigits);
//   };

//   const handleVerifyOTP = () => {
//     // Join the OTP digits to form the complete OTP
//     const enteredOTP = otpDigits.join('');

//     // Here you can implement the logic to verify the OTP
//     // For simplicity, let's assume the OTP is '1234'
//     const correctOTP = '1234';

//     if (enteredOTP === correctOTP) {
//       // If OTP is correct, navigate to the new page
//     //   history.push('/new-page');
//     } else {
//       // Handle incorrect OTP
//       alert('Incorrect OTP. Please try again.');
//     }
//   };

  return (
    <div className="p-8 mx-auto max-w-2xl bg-white shadow-md rounded-md"style={{
        fontWeight: "500",
        border:"1px solid rgba(195, 166, 109, 0.5)",
        borderRadius: "1.5rem "
      }}>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Customer Request</h2>
        <p className="text-black mb-4 mt-6">Please Enter OTP</p>
        <p className="text-gray-600 mb-4 ">We have sent a one-time password to your mobile number.</p>
        <div className="flex gap-2">
          {/* {otpDigits.map((digit, index) => ( */}
            <input
            //   key={index}
            //   id={`otp-input-${index}`}
              className="w-1/4 px-4 py-2 border border-gray-300 rounded-md text-center"
              type="number"
            //   maxLength="1"
            //   value={digit}
            //   onChange={(e) => handleInputChange(index, e.target.value)}
            />
          {/* ))} */}
        </div>
        <button
      className="w-28 bg-black mt-5 text-white py-2 rounded-md hover:bg-black"
      type="submit"
    ><Link to="/customer-form">Verify OTP</Link>
      
    </button>
      </div>
    </div>
  );
}

