import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import headerBg from '../../assets/images/header.jpg'

const Header = () => {
  const [showForm, setShowForm] = useState(true);

  const toggleForm = () => {
    setShowForm(!showForm);
  }

  let genderData = [{ label: 'Male' }, { label: 'Female' }, { label: 'Non-Binary' }];
  return (
    <div className='w-full headerHeight bg-cover bg-no-repeat flex justify-end items-center' style={{ backgroundImage: `url(${headerBg})` }}>
      {showForm ? (
        <div className='w-[45%] mr-16 flex flex-col gap-4' id='registrationForm'>
          <div className='w-full border rounded-lg border-slate-500 px-8 py-4 flex flex-col items-center gap-8'>
            <p className='text-4xl text-[#32289f] underline'>Registration</p>
            <FormControl autoComplete="off" className='flex flex-col gap-4 w-full'>
              <div className='flex gap-6'>
                <TextField
                  required
                  fullWidth
                  label="First Name"
                />
                <TextField
                  required
                  fullWidth
                  label="Last Name"
                />
              </div>
              <div className='flex gap-6'>
                <TextField
                  required
                  fullWidth
                  id="outlined-required"
                  label="Email ID"
                  type='email'
                />
                <TextField
                  required
                  fullWidth
                  label="Phone Number"
                  name="numberformat"
                />
              </div>
              <div className='flex gap-6'>
                <TextField
                  required
                  fullWidth
                  label="Date Of Birth"
                  type='date'
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Autocomplete
                  disablePortal
                  required
                  fullWidth
                  options={genderData}
                  renderInput={(params) => <TextField {...params} label="Gender" />}
                />
              </div>
              <div className='flex gap-6'>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type='password'
                />
                <TextField
                  required
                  fullWidth
                  label="Confirm Password"
                  type='password'
                />
              </div>
              <Button variant="contained">Submit</Button>
            </FormControl>
          </div>
          <div className='flex justify-center'>
            <p className='text-lg'>Already Have Account <span className='underline text-[#32289f] cursor-pointer' onClick={toggleForm}>Log In</span></p>
          </div>
        </div>
      ) : (

        <div className='w-[45%] mr-16 flex flex-col gap-4' id='loginForm'>
          <div className='w-full border rounded-lg border-slate-500 px-8 py-4 flex flex-col items-center gap-8'>
            <p className='text-4xl text-[#32289f] underline'>Log In</p>
            <FormControl autoComplete="off" className='flex flex-col gap-4 w-full'>
              <div className='flex flex-col gap-6'>
                <TextField
                  required
                  fullWidth
                  label="Email ID"
                  type='email'
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type='password'
                />
              </div>
              <Button variant="contained">Log In</Button>
            </FormControl>
          </div>
          <div className='flex justify-center'>
            <p className='text-lg'>Don't Have Account <span className='underline text-[#32289f] cursor-pointer' onClick={toggleForm}>Register</span></p>
          </div>
        </div>
      )}

    </div>
  )
}

export default Header