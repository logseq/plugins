import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const checkSlotValid: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="UI"
          name="checkSlotValid"
         />

        <Description
          ns="UI"
          name="checkSlotValid"
          comment=""
        />

       <Discuss
          ns="UI"
          name="checkSlotValid"
       />
      </div>
  )
}

export default checkSlotValid