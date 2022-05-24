import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getPage: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getPage"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getPage"
       />
      </div>
  )
}

export default getPage