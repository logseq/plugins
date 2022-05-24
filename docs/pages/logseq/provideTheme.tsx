import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const provideTheme: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="provideTheme"
          comment="
"
        />

       <Discuss
          ns="."
          name="provideTheme"
       />
      </div>
  )
}

export default provideTheme