import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomerRequest() {
  return (
    <div className="p-8 mx-auto max-w-2xl mt-8 bg-white rounded-md"style={{
      fontWeight: "500",
      border:"1px solid rgba(195, 166, 109, 0.5)",
      borderRadius: "1.5rem "
    }}>
  <div>
    <h2 className="text-2xl font-semibold mb-2">Customer Request</h2>
    <p className="text-gray-600 mb-4 mt-6">Customer Mobile Number</p>
    <input
      className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
      type="number"
      placeholder="9087765383"
    />
    <button
      className="w-28 bg-black mt-2 text-white py-2 rounded-md hover:bg-black"
      type="submit"
    ><Link to="/customer-otp">Send OTP</Link>
      
    </button>
  </div>
</div>

  )
}
