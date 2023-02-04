import {Container} from '@/components/Container'
import {Logo} from '@/components/Logo'

export function Footer() {
    return (
        <>
            <footer className="py-16">
                <Container size={"md"} className="flex flex-col items-center justify-between md:flex-row">
                    <Logo className="h-12 w-auto text-slate-900"/>
                    <div className={"flex flex-col"}>
                        <p className="mt-6 text-base text-slate-100 md:mt-0">
                            Copyright &copy; {new Date().getFullYear()} Cinquin Andy,
                            All rights reserved.
                        </p>
                        <p className={"mt-6 text-base text-right text-slate-100"}>Designed with ♥ by Andy Cinquin</p>
                    </div>
                </Container>
            </footer>
        </>
    )
}
