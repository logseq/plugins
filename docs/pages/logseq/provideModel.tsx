import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const provideModel: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="provideModel"
         />

        <Description
          ns="."
          name="provideModel"
          comment=""
        />

       <Discuss
          ns="."
          name="provideModel"
       />
      </div>
  )
}

export default provideModel