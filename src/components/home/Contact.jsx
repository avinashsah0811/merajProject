import React from 'react'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/material/Button';

const Contact = () => {
    return (
        <div className='w-full p-8'>
            <div className='text-6xl font-semibold text-black flex gap-2 justify-center mb-10 w-full'>
                <div className='flex flex-col justify-center'>
                    <h1 className='flex justify-between'>Contact Us</h1>
                    <h2 className='text-xl text-[#32289f] self-center'>For Any Query Feel Free To Ask</h2>
                </div>
            </div>
            <div className='w-full flex justify-between gap-4'>
                <div className='w-1/2 flex justify-center items-center'>
                    <p className='text-7xl text-[#3cb043]'>AI is a mirror, reflecting not only our intellect, but our values and fears.</p>
                </div>
                <div className='w-1/2 flex flex-col gap-4' id='loginForm'>
                    <div className='w-full border rounded-lg border-slate-500 px-8 py-4 flex flex-col items-center gap-8'>
                        <FormControl autoComplete="off" className='flex flex-col gap-4 w-full'>
                            <div className='flex flex-col gap-6'>
                                <TextField
                                    required
                                    fullWidth
                                    label="Your Name"
                                    type='text'
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label="Your Email"
                                    type='email'
                                />
                                <Textarea
                                    required
                                    placeholder="Your Message"
                                    minRows={2}
                                />
                            </div>
                            <Button variant="contained">Send</Button>
                        </FormControl>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact