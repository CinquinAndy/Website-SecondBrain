import Image from 'next/image'
import Link from 'next/link'

import {GridPattern} from '@/components/GridPattern'
import authorImage from '@/images/LogoCinquinAndy.svg'

function TwitterIcon(props) {
    return (
        <svg aria-hidden="true" viewBox="0 0 40 40" {...props}>
            <path
                d="M13.817 33.753c12.579 0 19.459-10.422 19.459-19.458 0-.297 0-.592-.02-.884a13.913 13.913 0 0 0 3.411-3.543 13.65 13.65 0 0 1-3.928 1.077 6.864 6.864 0 0 0 3.007-3.784 13.707 13.707 0 0 1-4.342 1.66 6.845 6.845 0 0 0-11.655 6.239A19.417 19.417 0 0 1 5.654 7.915a6.843 6.843 0 0 0 2.117 9.128 6.786 6.786 0 0 1-3.104-.853v.086a6.842 6.842 0 0 0 5.487 6.704 6.825 6.825 0 0 1-3.088.116 6.847 6.847 0 0 0 6.39 4.75A13.721 13.721 0 0 1 3.334 30.68a19.36 19.36 0 0 0 10.483 3.066"/>
        </svg>
    )
}

export function Author() {
    return (
        <section
            id="author"
            aria-labelledby="author-title"
            className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
        >
            <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-50/20 [mask-image:linear-gradient(transparent,white)]">
                <GridPattern x="50%" y="100%"/>
            </div>
            <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
                <div className="bg-slate-50 pt-px sm:rounded-2xl">
                    <div
                        className="relative mx-auto -mt-24 h-44 w-44 overflow-hidden rounded-full shadow-2xl md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-10 lg:h-72 lg:w-72 bg-white/10">
                        <Image
                            className="absolute inset-0 h-full w-full object-cover transform scale-50"
                            src={authorImage}
                            alt=""
                            sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
                        />
                    </div>
                    <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
                        <p className="mt-8 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                            <span className="block text-indigo-600 noto-serif font-black">Andy Cinquin –</span>
                            Hey ! Je suis l&apos;entrepreneur derrière ce site.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-slate-700">
                            CEO de la start-up ForMenu, Co-fondateur de la plateforme e-commerce Artriste, Co-fondateur du SaaS ToolHive,
                            Freelance depuis {new Date().getFullYear() - 2020} ans, et développeur chez Infotel, je suis un
                            développeur passionné et entrepreneur depuis plusieurs années.
                        </p>
                        <p className="mt-4 text-lg tracking-tight text-slate-700">
                            Je souhaite partager avec vous mes connaissances et mon expérience dans le domaine exceptionnel du développement.
                            Et le monde de la tech&apos;.
                        </p>
                        <p className="mt-8">
                            <Link
                                href="mailto:contact@andy-cinquin.fr"
                                className="inline-flex items-center text-base font-medium tracking-tight text-blue-600"
                            >
                                <TwitterIcon className="h-10 w-10 fill-current"/>
                                <span className="ml-4"></span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
