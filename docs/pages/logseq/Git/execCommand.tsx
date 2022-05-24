import { NextPage } from 'next'
import { Description } from '@/components/Description'

const execCommand: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Git"
          name="execCommand"
          comment=""
        />
      </div>
  )
}

export default execCommand