import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const provideUI: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="provideUI"
          comment="
"
        />

       <Discuss
          ns="."
          name="provideUI"
       />
      </div>
  )
}

export default provideUI