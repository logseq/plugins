import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const queryElementById: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="UI"
          name="queryElementById"
         />

        <Description
          ns="UI"
          name="queryElementById"
          comment=""
        />

       <Discuss
          ns="UI"
          name="queryElementById"
       />
      </div>
  )
}

export default queryElementById