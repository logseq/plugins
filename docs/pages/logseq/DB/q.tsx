import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const q: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="DB"
          name="q"
         />

        <Description
          ns="DB"
          name="q"
          comment=""
        />

       <Discuss
          ns="DB"
          name="q"
       />
      </div>
  )
}

export default q