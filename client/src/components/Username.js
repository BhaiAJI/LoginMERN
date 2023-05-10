import React from 'react'

export default function Username() {
  return (
    <div className="container mx-auto">
      <div className='flex justify-center items-center h-screen'>
        <div>
          <div className='title flex flex-col items-center'>
            <h4 className='text 5xl font-bold'>Hello Gaurav MERN</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-5'>
              Explore More by connecting with us!
            </span>
          </div>

          <form className='py-1'>
            <div className='profile flex justify-center py-4'>
              <img src='https://fastly.picsum.photos/id/648/536/354.jpg?hmac=aiTRoFj_53OJi6_yAxgwFVIx99cVD05qpLBCWWj4zzg' alt='avtar' />
            </div>

            <div className='textbox'>
              <input type="textinput" placeholder='Username' />
              <button type='submit'>Let's go</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
