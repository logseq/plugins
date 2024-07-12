import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const provideTheme: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="provideTheme"
         />

        <Description
          ns="."
          name="provideTheme"
          comment=""
        />

       <Discuss
          ns="."
          name="provideTheme"
       />
      </div>
  )
}

export default provideTheme