import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const connected: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="connected"
         />

        <Description
          ns="."
          name="connected"
          comment=""
        />

       <Discuss
          ns="."
          name="connected"
       />
      </div>
  )
}

export default connected