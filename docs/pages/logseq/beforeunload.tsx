import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const beforeunload: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="beforeunload"
         />

        <Description
          ns="."
          name="beforeunload"
          comment=""
        />

       <Discuss
          ns="."
          name="beforeunload"
       />
      </div>
  )
}

export default beforeunload