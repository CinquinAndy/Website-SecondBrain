import Image from 'next/image'

import { Button } from '@/components/Button'
import coverImage from '@/images/cover-res-3.png'

import backgroundImage from '@/images/background_4.jpg'

export function Hero() {
    return (
        <header className="relative bg-[#0b070f]">
            <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden">
                <Image
                    className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2
                    sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
                    src={backgroundImage}
                    alt=""
                    width={918}
                    height={1495}
                    priority
                    unoptimized
                />
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0b070f]" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b070f]" />
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 lg:grid-cols-12 lg:gap-y-20 lg:px-3 py-10">
                <div className="relative flex items-start lg:col-span-5 lg:row-span-2">
                    <div className="relative z-10 mx-auto flex w-64 rounded-xl shadow-xl md:w-80 lg:w-auto">
                        <Image className="w-full" src={coverImage} alt="" priority />
                    </div>
                </div>

                <div className="pt-16 lg:col-span-7 lg:pt-0 lg:pl-16 xl:pl-24 z-50">
                    <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                        <h1 className="text-3xl font-extrabold text-slate-100 sm:text-5xl">
                            Accédez à plusieurs années de travail, de réflexion, et de recherche dans {"l'informatique"} !
                        </h1>
                        <p className="mt-8 text-lg text-slate-400">
                            Des outils, des méthodes, des techniques, des astuces, des conseils,
                            des ressources, des liens, des références, des idées,
                            des expériences, des anecdotes, tout ce dont vous avez besoin
                            dans le monde de la {"tech'"} et du développement.
                        </p>
                        <div className="mt-12 flex gap-4">
                            <Button href="mailto:contact@andy-cinquin.fr">
                                Accéder à mon second cerveau
                            </Button>
                            <Button href="mailto:contact@andy-cinquin.fr" variant="outline">
                                Faire le votre
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
