import { CardProduto } from "../../components/cardProduto/CardProduto";
import image1 from "../../assets/image1.jfif";

export function Home() {
    return (
        <>
            <div className="w-full text-black flex justify-center items-center gap-10">
                <div className="w-full flex flex-col gap-6 items-center justify-center py-8">
                    <h1 className='text-3xl font-bold'>Produtos</h1>
                    <div className="w-full flex items-center justify-center gap-4">
                        <CardProduto title="Produto 1" image={image1}/>
                        <CardProduto title="Produto 2" image={image1}/>
                        <CardProduto title="Produto 3" image={image1}/>
                    </div>
                </div>
            </div>
        </>
    );
}