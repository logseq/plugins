import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const resolveResourceFullUrl: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="resolveResourceFullUrl"
         />

        <Description
          ns="."
          name="resolveResourceFullUrl"
          comment=""
        />

       <Discuss
          ns="."
          name="resolveResourceFullUrl"
       />
      </div>
  )
}

export default resolveResourceFullUrl