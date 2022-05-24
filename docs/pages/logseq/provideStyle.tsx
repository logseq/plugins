import { NextPage } from 'next'
import { Description } from '@/components/Description'

const provideStyle: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="."
          name="provideStyle"
          comment="
"
        />
      </div>
  )
}

export default provideStyle