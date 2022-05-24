import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const loadIgnoreFile: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Git"
          name="loadIgnoreFile"
          comment=""
        />

       <Discuss
          ns="Git"
          name="loadIgnoreFile"
       />
      </div>
  )
}

export default loadIgnoreFile