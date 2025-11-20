import { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
    title: "Le Guide du Style Japonais | Kyo Wear",
    description: "Apprenez à maîtriser le style streetwear japonais. Guide complet sur l'oversize, le layering et comment porter le Noragi et le Hoodie.",
};

export default function StyleGuidePage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-neutral-900">Maîtriser le Style Streetwear Japonais</h1>

            <div className="prose prose-lg max-w-none text-neutral-700">
                <p className="lead text-xl mb-8">
                    Le streetwear japonais n'est pas seulement une mode, c'est une philosophie.
                    Chez Kyo Wear, nous croyons en l'équilibre entre fonctionnalité urbaine et esthétique traditionnelle.
                </p>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-neutral-900">1. La Règle de l'Oversize vs Fitted</h2>
                    <p className="mb-4">
                        Le secret d'une silhouette japonaise réussie réside dans le jeu des volumes.
                        Contrairement au style occidental souvent très ajusté, le style de Tokyo joue sur des coupes amples mais structurées.
                    </p>
                    <p>
                        Pour commencer, optez pour un <Link href="/product/1" className="text-accent hover:underline font-medium">Hoodie Oversize Japonais</Link> comme pièce centrale.
                        L'important est que les épaules soient tombantes ("dropped shoulders") mais que la longueur reste maîtrisée pour ne pas tasser la silhouette.
                        Équilibrez ce volume avec un pantalon qui structure le bas, comme notre <Link href="/product/4" className="text-accent hover:underline font-medium">Pantalon Cargo Techwear</Link> à la coupe "tapered" (fuselée).
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 text-neutral-900">2. L'Art du Layering (Superposition)</h2>
                    <p className="mb-4">
                        Le "layering" est la signature du style Harajuku. Il s'agit de superposer les couches de manière visible et esthétique.
                    </p>
                    <p>
                        Une combinaison classique consiste à porter une <Link href="/product/7" className="text-accent hover:underline font-medium">Veste Kimono Noragi</Link> par-dessus un t-shirt ou même un hoodie léger.
                        Le col du Noragi crée une ligne verticale qui allonge la silhouette, tandis que le mélange des textures (coton lourd vs nylon technique) ajoute de la profondeur à votre tenue.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-neutral-900">3. Minimalisme et Détails</h2>
                    <p>
                        Le "Streetwear Japonais Premium" se distingue par son refus des logos ostentatoires.
                        Privilégiez des pièces unies, dans des tons neutres (noir, gris, olive, marine), où la qualité du tissu et la complexité de la coupe parlent d'elles-mêmes.
                    </p>
                </section>
            </div>
        </div>
    );
}
