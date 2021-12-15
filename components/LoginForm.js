import React from 'react'
import { useState } from 'react'
import { useAuth } from '../contexts/auth'
export default function LoginForm () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const handleLogin = (e) => {
    e.preventDefault()
    console.log(username, password)
    login(username, password)
  }
  return (
    // <div className='flex flex-col w-screen h-screen'>
    //   <div className='w-full max-w-xs m-auto '>
    //     <form
    //       onSubmit={(e) => handleLogin(e)}
    //       className='px-8 pt-6 pb-8 mb-4 bg-gray-800 rounded shadow-md'
    //     >
    //       <div className='mb-4'>
    //         <label
    //           className='block mb-2 text-sm font-bold text-white'
    //           htmlFor='ID'
    //         >
    //           ID
    //         </label>
    //         <input
    //           className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
    //           id='username'
    //           type='text'
    //           placeholder='Your ID'
    //           value={username}
    //           onChange={(e) => setUsername(e.target.value)}
    //           data-cy='login-id'
    //         />
    //       </div>
    //       <div className='mb-6'>
    //         <label
    //           className='block mb-2 text-sm font-bold text-white'
    //           htmlFor='password'
    //         >
    //           Password
    //         </label>
    //         <input
    //           className='w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
    //           id='password'
    //           type='password'
    //           placeholder='Password'
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           data-cy='login-password'
    //         />
    //       </div>
    //       <div className='flex items-center justify-between'>
    //         <button
    //           className='px-4 py-2 m-auto font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline'
    //           type='submit'
    //           data-cy='login-submit'
    //         >
    //           Sign In
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div className='flex flex-col w-screen h-screen text-white'>


      <div className='w-full max-w-xs p-5 m-auto bg-gray-800 rounded shadow-md'>
        <img
          alt={'logo'}
          className='w-20 mx-auto mb-5'
          src='https://i.ibb.co/71rGjSd/PEM-removebg-preview.png'
        />
        <div>
          <label className='block mb-2 ' htmlFor={'username'}>
            Username
          </label>
          <input
            className='w-full p-2 mb-6 border-b-2 border-blue-300 outline-none focus:text-gray-600'
            type='text'
            id='username'
            placeholder='Username'
          />
        </div>
        <div>
          <label className='block mb-2 ' htmlFor={'password'}>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='w-full p-2 mb-6 border-b-2 border-blue-300  outline-none focus:text-gray-600'
            placeholder='password'
          />
        </div>
        <div>
          <button
            onClick={() =>
              login(
                document.getElementById('username').value,
                document.getElementById('password').value
              )
            }
            className='w-full px-4 py-2 mb-6 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
          >
            Login
          </button>
        </div>

        <footer className='flex'>
          <a
            className='float-right text-sm text-white underline hover:text-blue-700'
            href='https://cookie-stand-rest.herokuapp.com/admin'
          >
            support
          </a>
        </footer>
      </div>
    </div>
  )
}
