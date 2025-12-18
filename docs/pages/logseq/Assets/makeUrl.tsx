import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const makeUrl: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Assets"
          name="makeUrl"
         />

        <Description
          ns="Assets"
          name="makeUrl"
          comment=""
        />

       <Discuss
          ns="Assets"
          name="makeUrl"
       />
      </div>
  )
}

export default makeUrl