import React from 'react'

export default function RecoverPass() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Recover your password</h1>
      <form onSubmit={null} className='flex flex-col gap-4'></form>
      <p>Type your e-mail below.
        You will receive a mail with a reset password link within 24 hours</p>
      <input
          type='email'
          placeholder='Email'
          id='email'
          className='bg-slate-100 p-3 rounded-lg  '
          onChange={null}
        />
    </div>
  )
}
