import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const isMainUIVisible: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="isMainUIVisible"
         />

        <Description
          ns="."
          name="isMainUIVisible"
          comment=""
        />

       <Discuss
          ns="."
          name="isMainUIVisible"
       />
      </div>
  )
}

export default isMainUIVisible