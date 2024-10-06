import React from 'react'

const AdminLogin = () => {
  return (
    <div className="flex justify-center mt-10">
      <form action="" className="flex flex-col align-cente">
        <label className="" for="username">
          Username:
        </label>
        <br />
        <input
          type="text"
          id="username"
          className="border border-black"
          name="username"
          required
        />
        <br />
        <label for="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          required
          className="border border-black"
        />
        <br />
        <input className='bg-green-600 p-2 text-center mt-2' type="submit" value="Login" />
      </form>
    </div>
  );
}

export default AdminLogin