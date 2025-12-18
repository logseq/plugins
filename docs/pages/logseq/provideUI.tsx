import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const provideUI: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="provideUI"
         />

        <Description
          ns="."
          name="provideUI"
          comment=""
        />

       <Discuss
          ns="."
          name="provideUI"
       />
      </div>
  )
}

export default provideUI