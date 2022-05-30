import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const showMsg: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="UI"
          name="showMsg"
         />

        <Description
          ns="UI"
          name="showMsg"
          comment=""
        />

       <Discuss
          ns="UI"
          name="showMsg"
       />
      </div>
  )
}

export default showMsg