import { NextPage } from 'next'
import { Description } from '@/components/Description'

const saveIgnoreFile: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Git"
          name="saveIgnoreFile"
          comment=""
        />
      </div>
  )
}

export default saveIgnoreFile