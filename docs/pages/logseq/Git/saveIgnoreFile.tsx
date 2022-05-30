import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const saveIgnoreFile: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Git"
          name="saveIgnoreFile"
         />

        <Description
          ns="Git"
          name="saveIgnoreFile"
          comment=""
        />

       <Discuss
          ns="Git"
          name="saveIgnoreFile"
       />
      </div>
  )
}

export default saveIgnoreFile