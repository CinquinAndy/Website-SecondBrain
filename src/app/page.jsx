import {Hero} from '@/components/Hero'
import {Introduction} from '@/components/Introduction'
import {Pricing} from '@/components/Pricing'
import {Author} from '@/components/Author'

export default function Home() {
    return (
        <main>
            <Hero/>
            <Introduction/>
            <Pricing/>
            <Author/>
        </main>
    )
}
