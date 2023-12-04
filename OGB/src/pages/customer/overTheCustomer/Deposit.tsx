import React from 'react'
import { Link } from 'react-router-dom'

export default function Deposit() {
  return (
    <div  className="border-2 p-3"
    style={{
      fontWeight: "500",
      border: "1px solid rgba(195, 166, 109, 0.5)",
      borderRadius: "1.5rem ",
    }}>
        <div >
          <Link to="/overThe-Customer"><img className="w-5" src="./src/assets/icon/backbutton.svg" alt="" /></Link>
          <h2 className='mt-2 '>Upload Ornaments Details</h2>
        </div>

        <div className='flex justify-between mt-3'>
            <div>
                <h2>Ornament Name</h2>
                <input type="text" />
            
                <h2>Ornament Category</h2>
                <input type="text" name="" id="" />

                <h2>Ornament Description</h2>
                <textarea name="" id="" ></textarea>
            </div>

            <div>
                <div className='w-96 h-36 ' style={{
      fontWeight: "500",
      border: "1px solid rgba(195, 166, 109, 0.5)",
      borderRadius: "1.5rem ",
    }} >
                    <img className='mt-10' src="./src/assets/icon/upload.svg" alt="" />
                </div>
            </div>

        </div>

      
    </div>
  )
}
