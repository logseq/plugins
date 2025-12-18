import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getTag: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="getTag"
         />

        <Description
          ns="Editor"
          name="getTag"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getTag"
       />
      </div>
  )
}

export default getTag