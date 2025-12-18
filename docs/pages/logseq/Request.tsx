import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const Request: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="Request"
         />

        <Description
          ns="."
          name="Request"
          comment=""
        />

       <Discuss
          ns="."
          name="Request"
       />
      </div>
  )
}

export default Request