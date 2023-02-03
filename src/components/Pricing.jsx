import clsx from 'clsx'

import {Button} from '@/components/Button'
import {CheckIcon} from '@/components/CheckIcon'
import {Container} from '@/components/Container'
import {GridPattern} from '@/components/GridPattern'
import Image from "next/image";
import backgroundImage from "@/images/background_4.jpg";

function Plan({name, description, price, features, href, featured}) {
    return (
        <div
            className={clsx(
                'relative px-4 py-16 sm:rounded-5xl sm:px-10 md:py-12 lg:px-12',
                featured && 'bg-indigo-900 sm:shadow-lg rounded-lg'
            )}
        >
            {featured && (
                <div className="absolute inset-0 text-white/10 [mask-image:linear-gradient(white,transparent)]">
                    <GridPattern x="50%" y="50%"/>
                </div>
            )}
            <div className="relative flex flex-col">
                <h3
                    className={clsx(
                        'mt-7 text-lg font-semibold tracking-tight',
                        featured ? 'text-white' : 'text-slate-100'
                    )}
                >
                    {name}
                </h3>
                <p
                    className={clsx(
                        'mt-2 text-lg tracking-tight',
                        featured ? 'text-white' : 'text-slate-100'
                    )}
                >
                    {description}
                </p>
                <p className="order-first flex font-display font-bold">
          <span
              className={clsx(
                  'ml-1 mt-1 text-7xl tracking-tight',
                  featured ? 'text-white' : 'text-slate-50'
              )}
          >
            {price}
          </span>
                    <span
                        className={clsx(
                            'text-[1.75rem] leading-tight',
                            featured ? 'text-blue-200' : 'text-slate-300'
                        )}
                    >
            {featured ? '€' : '€/mois'}
          </span>
                </p>
                <div className="order-last mt-8">
                    <ul
                        role="list"
                        className={clsx(
                            '-my-2 divide-y text-base tracking-tight',
                            featured
                                ? 'divide-white/10 text-white'
                                : 'divide-white/10 text-slate-50'
                        )}
                    >
                        {features.map((feature) => (
                            <li key={feature} className="flex py-2">
                                <CheckIcon
                                    className={clsx(
                                        'h-8 w-8 flex-none',
                                        featured ? 'fill-white' : 'fill-slate-50'
                                    )}
                                />
                                <span className="ml-4">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <Button
                    href={href}
                    color={featured ? 'white' : 'slate'}
                    className="mt-8"
                    aria-label={`Get started with the ${name} plan for $${price}`}
                >
                    Ça m&apos;intéresse
                </Button>
            </div>
        </div>
    )
}

export function Pricing() {
    return (
        <section
            id="pricing"
            aria-labelledby="pricing-title"
            className="scroll-mt-14 pt-16 pb-72 sm:scroll-mt-32 sm:pt-20 sm:pb-32 lg:pt-32 relative"
        >
            <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden -z-20">
                <Image
                    className="absolute top-0 left-0 translate-y-[45%] translate-x-[-55%] -scale-x-100 sm:left-1/2
                    sm:translate-y-[25%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
                    src={backgroundImage}
                    alt=""
                    width={918}
                    height={1495}
                    priority
                    unoptimized
                />
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0b070f]"/>
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b070f]"/>
            </div>
            <Container>
                <p className="mt-8 font-display text-3xl font-extrabold tracking-tight text-slate-50 sm:text-6xl">
                    Choisissez votre formule
                </p>
                <p className="mt-4 max-w-xl text-lg tracking-tight text-slate-200">
                    Je vous propose 2 formules complètement différentes, pour vous permettre de choisir celle qui vous convient le mieux.
                </p>
            </Container>
            <div className="mx-auto px-2 mt-16 max-w-5xl lg:px-6">
                <div className="grid bg-white/5  rounded-2xl pb-6 px-6 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-6xl md:px-8 md:pt-16 lg:p-20">
                    <Plan
                        name="Accès à mon second cerveau"
                        description="Parfait pour se former en informatique. Pour ceux qui ne savent pas par où commencer. Vous aurez accès à toutes mes connaissances !"
                        price={4.99}
                        href="mailto:contact@andy-cinquin.fr"
                        features={[
                            'Technos back-end',
                            'Technos front-end',
                            'Technos cloud',
                            'Technos IA',
                            'Technos DevOps',
                            'Technos UX/UI',
                            'Design',
                            'Marketing',
                            'Gestion de projet',
                        ]}
                    />
                    <Plan
                        featured
                        name="Formation complète"
                        description="Vous voulez faire votre propre second cerveau ? Ce plan est fait pour vous. Je vous accompagne de A à Z
                        pour créer cet outil fantastique !"
                        price={299}
                        href="mailto:contact@andy-cinquin.fr"
                        features={[
                            'Accompagnement personnalisé',
                            'Réponse rapide à toutes vos questions',
                            'Partage de bonnes pratiques',
                            'Partage d\'expériences',
                            'Atteinte des objectifs plus rapidement',
                            'Plus grande efficacité dans votre organisation'
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}
