import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const listenerCount: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="listenerCount"
         />

        <Description
          ns="."
          name="listenerCount"
          comment="
"
        />

       <Discuss
          ns="."
          name="listenerCount"
       />
      </div>
  )
}

export default listenerCount