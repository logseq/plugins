import { NextPage } from 'next'
import { Description } from '@/components/Description'

const provideModel: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="provideModel"
          comment="
"
        />
      </div>
  )
}

export default provideModel