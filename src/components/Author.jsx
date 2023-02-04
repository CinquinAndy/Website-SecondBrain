import Image from 'next/image'
import Link from 'next/link'

import {GridPattern} from '@/components/GridPattern'
import authorImage from '@/images/LogoCinquinAndy.svg'
import {GitHubIcon} from "@/components/social-media/GitHub";
import {InstagramIcon} from "@/components/social-media/Instagram";
import {LinkedinIcon} from "@/components/social-media/Linkedin";
import {MaltIcon} from "@/components/social-media/Malt";

export function Author() {
    return (
        <>
            <section
                id="author"
                aria-labelledby="author-title"
                className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
            >
                <div className="absolute inset-x-0 bottom-0 top-1/2 text-slate-50/20 [mask-image:linear-gradient(transparent,white)]">
                    <GridPattern x="50%" y="100%"/>
                </div>
                <div className="relative mx-auto px-4 max-w-5xl pt-16 sm:px-6">
                    <div className="bg-slate-50 pt-px p-4 md:p-0 rounded-2xl">
                        <div
                            className="relative mx-auto -mt-24 h-52 w-52 overflow-hidden rounded-full shadow-2xl md:float-right md:mr-12 md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-10 lg:h-72 lg:w-72 bg-white/10">
                            <Image
                                className="absolute inset-0 h-full w-full object-cover transform scale-50"
                                src={authorImage}
                                alt=""
                                sizes="(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem"
                            />
                        </div>
                        <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
                            <p className="mt-8 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                                <span className="block text-indigo-600 noto-serif font-black text-4xl">Andy Cinquin –</span>
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
                            <div className={"flex gap-4 md:gap-8 flex-row items-center mt-8 flex-wrap"}>
                                <p className="md:mt-4 w-full md:w-auto">
                                    <Link id={"btn-githubicon"}
                                        href="https://github.com/CinquinAndy" target={"_blank"} rel={"noopener noreferrer"}
                                        className="inline-flex items-center text-base font-medium tracking-tight text-indigo-500"
                                    >
                                        <GitHubIcon className="h-6 w-6 fill-current"/>
                                        <span className="ml-4 hover:text-indigo-600">GitHub</span>
                                    </Link>
                                </p>
                                <p className="md:mt-4 w-full md:w-auto">
                                    <Link id={"btn-instagramicon"}
                                        href="https://www.instagram.com/cinquin.andy/" target={"_blank"} rel={"noopener noreferrer"}
                                        className="inline-flex items-center text-base font-medium tracking-tight text-indigo-500"
                                    >
                                        <InstagramIcon className="h-6 w-6 fill-current"/>
                                        <span className="ml-4 hover:text-indigo-600">Insta Pro</span>
                                    </Link>
                                </p>
                                <p className="md:mt-4 w-full md:w-auto">
                                    <Link id={"btn-linkedinicon"}
                                        href="https://www.linkedin.com/in/andy-cinquin/" target={"_blank"} rel={"noopener noreferrer"}
                                        className="inline-flex items-center text-base font-medium tracking-tight text-indigo-500"
                                    >
                                        <LinkedinIcon className="h-6 w-6 fill-current"/>
                                        <span className="ml-4 hover:text-indigo-600">LinkedIn</span>
                                    </Link>
                                </p>
                                <p className="md:mt-4 w-full md:w-auto">
                                    <Link id={"btn-malticon"}
                                        href="https://www.malt.fr/profile/andycinquin" target={"_blank"} rel={"noopener noreferrer"}
                                        className="inline-flex items-center text-base font-medium tracking-tight text-indigo-500"
                                    >
                                        <MaltIcon className="h-6 w-6 fill-current"/>
                                        <span className="ml-4 hover:text-indigo-600">Malt</span>
                                    </Link>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
