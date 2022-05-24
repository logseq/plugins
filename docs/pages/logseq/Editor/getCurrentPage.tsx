import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getCurrentPage: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getCurrentPage"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getCurrentPage"
       />
      </div>
  )
}

export default getCurrentPage