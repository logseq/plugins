import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getBlockProperty: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="getBlockProperty"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="getBlockProperty"
       />
      </div>
  )
}

export default getBlockProperty