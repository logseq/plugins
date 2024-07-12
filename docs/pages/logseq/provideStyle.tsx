import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const provideStyle: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="."
          name="provideStyle"
         />

        <Description
          ns="."
          name="provideStyle"
          comment=""
        />

       <Discuss
          ns="."
          name="provideStyle"
       />
      </div>
  )
}

export default provideStyle