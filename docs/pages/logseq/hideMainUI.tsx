import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const hideMainUI: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="hideMainUI"
         />

        <Description
          ns="."
          name="hideMainUI"
          comment=""
        />

       <Discuss
          ns="."
          name="hideMainUI"
       />
      </div>
  )
}

export default hideMainUI