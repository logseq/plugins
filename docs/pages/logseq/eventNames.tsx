import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const eventNames: NextPage = () => {
  return (
      <div className="main-page-content">
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