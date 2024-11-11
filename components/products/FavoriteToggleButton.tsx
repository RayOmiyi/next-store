/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { FaHeart } from 'react-icons/fa6'
import { Button } from '../ui/button'

function FavoriteToggleButton({productId}:{productId:string}) {
  return (
    <div>
      <Button size='icon' variant='outline' className='p-2 cursor-pointer'>
        <FaHeart/>
      </Button>
    </div>
  )
}

export default FavoriteToggleButton
