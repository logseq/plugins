import { NextPage } from 'next'
import { Description } from '@/components/Description'

const loadIgnoreFile: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Git"
          name="loadIgnoreFile"
          comment=""
        />
      </div>
  )
}

export default loadIgnoreFile