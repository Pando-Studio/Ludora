import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

const Faq = () => {
    return (
        <Container maxWidth={'6xl'} pb={16}>
            <Heading textAlign={'center'} mb={8}>FAQ</Heading>
            <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                    <Heading>
                        <AccordionButton paddingX={0} gap={4}>
                            <Box flex='1' textAlign='left'>
                                Je ne suis pas familier avec l’univers des crypto et du web3 : Comment connaître/estimer la valeur de son art ? Comment convertir son art sous forme de NFT? Comment savoir combien d'exemplaires de mon NFT minter ?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </Heading>
                    <AccordionPanel pb={4}>
                        Le collectif Blockness sera là pour vous accompagner, vous transmettre nos connaissances et pour vous aider à apprendre à utiliser les outils. Nous mettons l'accent sur la collaboration au sein du collectif et de l'écosystème afin de permettre aux acteurs de se familiariser avec la blockchain.
                        Un lexique contenant la définition et l’explication des termes techniques est également mis à disposition dans le channel annonce.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <Heading>
                        <AccordionButton paddingX={0} gap={4}>
                            <Box flex='1' textAlign='left'>
                                Quel format/dimensions pour les cartes ?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </Heading>
                    <AccordionPanel pb={4}>
                        Afin de partir sur une base commune, quelques normes sont à respectées lors de la création de vos decks :
                        elles doivent respecter le format carte de tarot (ratio de 60/113)
                        vous pouvez choisir d'ajouter ou non une bordure ou encore un bandeau pour le nom de la carte c'est assez libre de ce côté
                        pour les transformer en NFTs elles devront être scannées en haute qualité
                        chaque carte de votre deck devra correspondre à une carte du jeu de tarot original (atout de 0 à 21 ou une des 56 cartes de base)
                        concernant la couleur (cœur, trèfle, pique, carreau) vous pouvez en créer des nouvelles tant qu'il y a en 4 contenant chacune les cartes allant de 1 à 10, le valet, le cavalier, la dame et le roi.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <Heading>
                        <AccordionButton paddingX={0} gap={4}>
                            <Box flex='1' textAlign='left'>
                                Je n’ai pas le temps de créer un deck de 78 cartes mais je souhaite quand même contribuer/participer au projet :
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </Heading>
                    <AccordionPanel pb={4}>
                        Un deck complet est souhaitable pour contribuer au projet. Nous sommes cependant conscients de la très grosse charge de travail que cela représente et nous souhaitons que vous puissiez participer au projet même si vous avez peu de temps à y consacrer. Les decks incomplets pourront donc être intégrés aux jeux et seront automatiquement complétés par les decks génériques accessibles à tous. A noter que certains jeux n’utiliseront probablement pas l’ensemble des cartes et se focaliseront sur la particularité du jeu de tarot : les atouts. Nous vous invitons donc à vous concentrer principalement sur leur création, ce qui permettra d’alimenter le maximum de jeux.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <Heading>
                        <AccordionButton paddingX={0} gap={4}>
                            <Box flex='1' textAlign='left'>
                                Comment les NFTs seront-ils droppés/distribués ?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </Heading>
                    <AccordionPanel pb={4}>
                        Plusieurs manières de mettre ses NFTs à disposition :
                        Les vendre sur une marketplace type Opensea
                        Les faire gagner grâce aux différents jeux de la plateforme (tournois / leaderboard)
                        Drop via des récompenses daily / weekly quest ?
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <Heading>
                        <AccordionButton paddingX={0} gap={4}>
                            <Box flex='1' textAlign='left'>
                                Comment fonctionne la rémunération ?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </Heading>
                    <AccordionPanel pb={4}>
                        Concernant la rémunération, il existe plusieurs manières de gagner de l’argent avec ce projet :
                        En premier lieu, vous pouvez tout simplement vendre des exemplaires de vos NFTs sur des marketplaces ou directement à des acheteurs.
                        Si vous choisissez de distribuer vos NFTs via notre projet et nos jeux, vous aurez au préalable défini un pourcentage qui correspondra à des royalties que vous toucherez sur chacune des transactions de vos NFTs une fois mis en circulation.
                        Pour finir, nous avons réservé des parts du projet pour les artistes qui permettront de mettre ce projet sur pied. Cela se traduira par un certain nombre de token (voir modèle économique du projet) qui prendront de la valeur au fur et à mesure que le projet prendra de l’ampleur. Il s’agit là d’une rémunération purement spéculative qui pourra être effective grâce à votre investissement et à celui de tous les acteurs du projet.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <Heading>
                        <AccordionButton paddingX={0} gap={4}>
                            <Box flex='1' textAlign='left'>
                                Est-ce que c'est aux artistes de faire la communication de leur deck ?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </Heading>
                    <AccordionPanel pb={4}>
                        L’objectif de ce projet est de créer une communauté autour de ce dernier. La communication autour de ce projet doit donc se faire de plusieurs manières et par plusieurs canaux :
                        Tout d’abord concernant les marques/sponsors/investisseurs, nous nous chargerons de promouvoir le projet et les artistes pour attirer ce type d’acteur.
                        Nous nous chargeons également de promouvoir votre travail directement sur nos plateformes (les différents jeux, discord…) en vous créditant de manière ostensible.
                        Cependant, afin de favoriser l’effet réseau et la construction d’une communauté, vous pouvez activer votre réseau personnel pour permettre à d’autres artistes / utilisateurs de rejoindre le projet et de faire partie de la communauté.
                        Vous pouvez également faire votre propre publicité pour vendre directement vos NFTs sur d’autres plateformes sans passer par le projet
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <Heading>
                        <AccordionButton paddingX={0} gap={4}>
                            <Box flex='1' textAlign='left'>
                                Quels sont les intérêts de ce projet ?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </Heading>
                    <AccordionPanel pb={4}>
                        Pour terminer cette FAQ, il nous semble essentiel de revenir sur l’intérêt de ce projet, que ce soit pour vous, pour nous, pour les utilisateurs ou encore pour les marques. Nous avons pensé ce projet dans l’objectif de mettre à disposition un protocole et un framework permettant à des organisations d'interagir et de fédérer leurs communautés de manière ludique via des technologies web3 (blockchain, NFTs, dApp, DAO). Ce projet à pour objectif de répondre aux des différents acteurs de l'écosystème que nous souhaitons créer :
                        Les marques : de nombreuses marques cherchent à s’intégrer dans l’univers des cryptomonnaies et des NFTs, mais ne savent pas forcément par quelle porte y entrer. Leur objectif est également de fédérer une communauté de clients autour de leurs produits et de leur image. Nous leur proposons donc de créer une crypto-identité via notre plateforme, sur laquelle ils pourront créer des decks de NFTs et des jeux à l'effigie de leurs produits et de leur identité visuelle ainsi que de réunir leurs utilisateurs et de récompenser leur participation à la vie de la marque via des cadeaux.
                        Les utilisateurs : les utilisateurs de notre plateforme pourront jouer à des jeux, faire partie d’une communauté, participer activement à la vie de leur marque favorite et être récompensé via des NFTs pour cette participation. Cela leur offre l’opportunité de collectionner, d’échanger et de vendre ces NFTs de manière ludique, tout en spéculant sur la valeur de ces derniers afin de potentiellement s’enrichir.
                        Les artistes : les artistes participant au projet auront, pour ceux n’étant pas déjà familier avec le monde de la crypto, un accompagnement pour leur permettre de découvrir et d’investir ce nouveau moyen de partager et de vendre leur art. Ils auront également une forte visibilité, que ce soit auprès du public ou auprès des marques qui s’engageront dans le projet. Pour finir, ils auront également la rétribution pécuniaire stipulée ci-dessus.
                        Blockness : ce projet nous permettra de montrer ce que le collectif est capable de produire. Il permettra également d'agrandir et d’étendre le collectif à différents types d’acteurs de l’univers de la crypto. Pour finir, il permettra de former avec des marques une relation de confiance pour d’éventuels projets futurs, mais aussi d’attirer de nouveaux clients.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Container>
    )
}

export default Faq