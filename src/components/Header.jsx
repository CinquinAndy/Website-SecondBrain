import {Button} from '@/components/Button'
import {Container} from '@/components/Container'
import {Logo} from '@/components/Logo'

export function Header() {
    return (
        <header className="relative z-50 pb-11 lg:pt-11">
            <Container size={"lg"} className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
                <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
                    <Logo className="h-10"/>
                </div>
                <div
                    className="order-first flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 text-sm text-blue-50 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
                    <div className="mx-auto flex items-center gap-4 px-4">

                        <p className={"font-bold"}>
                            Andy Cinquin - Mon second cerveau
                        </p>


                    </div>
                </div>
                <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
                    <Button href="mailto:contact@andy-cinquin.fr">Avoir un accès</Button>
                </div>
            </Container>
        </header>
    )
}
