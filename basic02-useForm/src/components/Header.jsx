    import React from 'react'
    import logo from '../assets/logo.png'
    function Header() {
    return (
        <div className>
            <div className='flex justify-between px-8  items-center'>
                <img src={logo} alt="logo" />
                <div>
                    <ul className='flex gap-4'>
                        <li className='cursor-pointer hover:text-blue-500 border-b-2 border-blue-500'>Home</li>
                        <li className='cursor-pointer hover:text-blue-500 border-b-2 border-blue-500'>About</li>
                        <li className='cursor-pointer hover:text-blue-500 border-b-2 border-blue-500'>Contact</li>    
                    </ul>
                </div>
            </div>
        </div>
    )
    }

    export default Header