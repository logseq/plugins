import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getBlockProperties: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getBlockProperties"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getBlockProperties"
       />
      </div>
  )
}

export default getBlockProperties