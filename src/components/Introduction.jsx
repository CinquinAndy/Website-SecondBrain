import Link from 'next/link'

import {Container} from '@/components/Container'
import Image from "next/image";
import backgroundImage from "@/images/background_4.jpg";

export function Introduction() {
    return (
        <section
            id="introduction"
            aria-label="Introduction"
            className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32 relative "
        >
            <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden -z-10">
                <Image
                    className="absolute top-0 right-0 translate-y-[10%] translate-x-[-55%] scale-x-100 sm:right-1/2
                    sm:translate-y-[6%] sm:translate-x-[98%] lg:translate-x-[106%] xl:translate-x-[122%]"
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
            <Container className="text-lg tracking-tight text-slate-200">
                <p className="font-display text-4xl font-bold tracking-tight text-slate-100">
                    Combien de fois avez-vous essayé de vous rappeler une information importante et constaté qu&apos;elle vous échappait ?
                </p>
                <p className="mt-10">
                    Combien de fois avez-vous eu du mal à vous souvenir d&apos;une seule chose utile d&apos;un livre ou d&apos;un article que vous avez lu ?
                </p>
                <p className="mt-4">
                    Combien de temps avez-vous perdu à chercher un document ou un fichier que vous étiez sûr d&apos;avoir enregistré ?
                </p>
                <p className="mt-4">
                    Si votre réponse est &quot;Ça m&apos;est arrivé aujourd&apos;hui&quot;, vous n&apos;êtes pas seul !
                </p>
                <p className="mt-4">
                    La quantité d&apos;informations qui nous atteint chaque jour est énorme et peut déboucher sur un épuisement
                    informationnel qui met à rude épreuve notre mémoire et nous laisse anxieux à l&apos;idée d&apos;oublier quelque chose.
                </p>
                <p className="mt-4">
                    L&apos;information est pourtant fondamentale pour tout ce que nous faisons, du démarrage d&apos;un projet au travail,
                    en passant par l&apos;apprentissage d&apos;une nouvelle compétence et la fondation d&apos;une entreprise.
                </p>
                <p className="mt-4 italic text-center">
                    Votre réussite professionnelle et votre bien-être dépendent directement de votre capacité à gérer les informations qui vous entourent.
                </p>
                <p className="mt-4">
                    Il est donc temps de se rendre compte que nous ne pouvons pas compter sur notre mémoire pour stocker
                    tout ce que nous devons savoir et de faire appel à la technologie pour nous aider à mémoriser.
                </p>
                <p className="mt-4">
                    C&apos;est là que le &quot;deuxième cerveau&quot; entre en jeu. Pour utiliser efficacement les informations, nous
                    devons les organiser et les rendre accessibles pour votre futur moi.
                </p>
                <p className="mt-4">
                    Construire un &quot;deuxième cerveau&quot; signifie cultiver un ensemble grandissant de connaissances qui vous appartiennent.
                    Ainsi, lorsque l&apos;occasion se présentera, que ce soit pour faire une présentation, lancer un nouveau produit, fonder une entreprise ou
                    une famille, vous aurez accès à la sagesse nécessaire pour prendre des décisions judicieuses et agir de manière efficace.
                </p>

                <p className="mt-10">
                    <Link
                        href="mailto:contact@andy-cinquin.fr"
                        className="text-base font-medium text-blue-400 hover:text-blue-500"
                    >
                        Je veux apprendre à faire mon second cerveau{' '}
                        <span aria-hidden="true">&rarr;</span>
                    </Link>
                </p>
            </Container>
        </section>
    )
}
