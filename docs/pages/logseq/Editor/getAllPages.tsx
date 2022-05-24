import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getAllPages: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getAllPages"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getAllPages"
       />
      </div>
  )
}

export default getAllPages