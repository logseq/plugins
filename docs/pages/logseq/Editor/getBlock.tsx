import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getBlock: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getBlock"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getBlock"
       />
      </div>
  )
}

export default getBlock