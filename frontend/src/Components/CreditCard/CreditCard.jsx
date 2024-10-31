import React from 'react'
import { GenIcon} from 'react-icons'
import Nayapay from './Nayapay'
import SadaPay from './SadaPay'

const CreditCard = () => {
  return (
<div className='grid grid-cols-3'>
    <Nayapay/>
    <SadaPay/>
</div>
  )
}

export default CreditCard