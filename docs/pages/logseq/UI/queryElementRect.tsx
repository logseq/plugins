import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const queryElementRect: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="UI"
          name="queryElementRect"
         />

        <Description
          ns="UI"
          name="queryElementRect"
          comment=""
        />

       <Discuss
          ns="UI"
          name="queryElementRect"
       />
      </div>
  )
}

export default queryElementRect