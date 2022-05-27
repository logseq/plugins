import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const eventNames: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="eventNames"
         />

        <Description
          ns="."
          name="eventNames"
          comment="
"
        />

       <Discuss
          ns="."
          name="eventNames"
       />
      </div>
  )
}

export default eventNames