import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const saveIgnoreFile: NextPage = () => {
  return (
      <div className="main-page-content">
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