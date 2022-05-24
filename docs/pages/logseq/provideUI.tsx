import { NextPage } from 'next'
import { Description } from '@/components/Description'

const provideUI: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="provideUI"
          comment="
"
        />
      </div>
  )
}

export default provideUI