
import { Link } from 'react-router-dom'
// import { Button } from '../../../components/ui/button'

export default function Deposit() {
  return (
    <div  className="border-2 p-3 "
    style={{
      fontWeight: "500",
      border: "1px solid rgba(195, 166, 109, 0.5)",
      borderRadius: "1.5rem ",
    }}>
        <div >
          <Link to="/overThe-Customer"><img className="w-5" src="./src/assets/icon/backbutton.svg" alt="" /></Link>
          <h2 className='mt-2 '>Upload Ornaments Details</h2>
        </div>

        <div className='flex gap-56 mt-3 ml-3'>
            <div>
                <h2>Ornament Name</h2>
                <input className='border-2 border-[gray] rounded-xl w-96 h-11 mt-2 mb-2' type="text" />
            
                <h2>Ornament Category</h2>
                <input  className='border-2 border-[gray] rounded-xl w-96 h-11 mt-2 mb-2' type="text" name="" id="" />

                <h2>Ornament Description</h2>
                <textarea  className='border-2 border-[gray] rounded-xl w-96 h-36 mt-2 mb-2' name="" id="" ></textarea>
            </div>

            <div>
                <div className='w-100 h-40 mt-2 bg-[#EDE6D8]' style={{
      fontWeight: "500",
      border: "1px dashed rgba(195, 166, 109, 0.5)",
      borderRadius: "1.5rem ",

    }} >
      <div>
                    <img className='mt-10 ml-44 mb-5 w-12' src="./src/assets/icon/upload.svg" alt="" />
                    <span className='ml-28 '>Drag And Drop File Here</span>
                    </div>

                </div>
                <div className='flex gap-24 mt-5 '>
                  <div >
                  <h2>Weight(gm)</h2>
                  <input className='border-2 border-[gray] rounded-xl w-40 h-11 mt-2 mb-2' type="text" />
                  </div>
                  <div>
                    <h2>Purity Of Gold</h2>
                    <input className='border-2 border-[gray] rounded-xl w-40 h-11 mt-2 mb-2' type="text" />
                  </div>
                </div>
                <div className='flex gap-24'>
                  <div>
                  <h2>Height(mm)</h2>
                  <input className='border-2 border-[gray] rounded-xl w-40 h-11 mt-2 mb-2' type="text" />
                  </div>
                  <div>
                    <h2>Width(mm)</h2>
                    <input className='border-2 border-[gray] rounded-xl w-40 h-11 mt-2 mb-2' type="text" />
                  </div>
                </div>
            </div>

        </div>

        <div className='w-100 mt-3 p-3 ' style={{
      fontWeight: "500",
      border: "1px solid rgba(195, 166, 109, 0.5)",
      borderRadius: "1.5rem ",

    }}>
      <div className='flex justify-between '>
          <h2>Gem Details</h2>
          {/* <img className='mr-2 w-8' src="./src/assets/icon/add.svg" alt="" /> */}
          </div>
          <div className='flex  gap-56 mt-2'>
            <div>
            <h2>Number Of Gems</h2>
            <input className='border-2 border-[gray] rounded-xl w-96 h-11 mt-2 mb-4' type="text" />
            <h2>Purity Of Gems</h2>
            <select className='border-2 border-[gray] rounded-xl w-96 h-11 mt-2 mb-2' name="" id=""></select>
            </div>
            <div>
            <h2>Type Of Gems</h2>
            <select className='border-2 border-[gray] rounded-xl w-96 h-11 mt-2 mb-4' name="" id=""></select>
            <h2>Weight Of Gems</h2>
            <input className='border-2 border-[gray] rounded-xl w-96 h-11 mt-2 mb-4' type="text" name="" id="" />
            </div>

          </div>

        </div>

        <div className='w-100 mt-8 p-3 ' style={{
      fontWeight: "500",
      border: "1px solid rgba(195, 166, 109, 0.5)",
      borderRadius: "1.5rem ",

    }}>
      <div className='flex justify-between '>
          <h2>Gem Details</h2>
          <img className='mr-2 w-8' src="./src/assets/icon/add.svg" alt="" />
          </div>
          <div className='flex  gap-56 mt-2'>
            <div>
            <h2>Number Of Gems</h2>
            <input className='border-2 border-[gray] rounded-xl w-96 h-11 mt-2 mb-4' type="text" />
            <h2>Purity Of Gems</h2>
            <select className='border-2 border-[gray] rounded-xl w-96 h-11 mt-2 mb-2' name="" id=""></select>
            </div>
            <div>
            <h2>Type Of Gems</h2>
            <select className='border-2 border-[gray] rounded-xl w-96 h-11 mt-2 mb-4' name="" id=""></select>
            <h2>Weight Of Gems</h2>
            <input className='border-2 border-[gray] rounded-xl w-96 h-11 mt-2 mb-4' type="text" name="" id="" />
            </div>

          </div>

        </div>


        <div className='w-100 mt-8 p-3  ' style={{
      fontWeight: "500",
      border: "1px solid rgba(195, 166, 109, 0.5)",
      borderRadius: "1.5rem ",

    }}>
      <div className='flex justify-between '>
          <h2>Metal Detail</h2>
          <img className='mr-2 w-8' src="./src/assets/icon/add.svg" alt="" />
          </div>
          <div className=' mt-2'>
            <div className='flex gap-56'>
            <div>
            <h2>Typ of metal</h2>
            <select className='border-2 border-[gray] rounded-xl w-96 h-11 mt-2 mb-2' name="" id=""></select>
            </div>
            <div>
            <h2>Weight Of Metal</h2>
            <input className='border-2 border-[gray] rounded-xl w-96 h-11 mt-2 mb-4' type="text" />
            </div>

            </div>
            
          </div>

        </div>

        <div className='w-100  p-3 flex flex-col gap-3 mt-8 ' style={{
      fontWeight: "500",
      border: "1px solid rgba(195, 166, 109, 0.5)",
      borderRadius: "1.5rem ",

    }}>
          <span className='text-[#0000004D]'>Locker Number</span>
          <input className='border-2 border-[gray] rounded-xl w-96 h-11 mt-2 mb-4' type="text" placeholder='4021'/>

        </div>

        <button className="w-28 bg-black mt-5 text-white py-2 ml-2 rounded-md mb-5 hover:bg-black"
      type="submit">submit</button>

        

      
    </div>
  )
}
