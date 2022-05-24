import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const execCommand: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Git"
          name="execCommand"
          comment=""
        />

       <Discuss
          ns="Git"
          name="execCommand"
       />
      </div>
  )
}

export default execCommand