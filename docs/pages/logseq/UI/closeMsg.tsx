import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const closeMsg: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="UI"
          name="closeMsg"
         />

        <Description
          ns="UI"
          name="closeMsg"
          comment=""
        />

       <Discuss
          ns="UI"
          name="closeMsg"
       />
      </div>
  )
}

export default closeMsg