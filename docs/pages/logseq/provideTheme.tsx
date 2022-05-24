import { NextPage } from 'next'
import { Description } from '@/components/Description'

const provideTheme: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="provideTheme"
          comment="
"
        />
      </div>
  )
}

export default provideTheme