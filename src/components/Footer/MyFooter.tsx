function MyFooter() {
    return(
        <div className="grid grid-cols-12 gap-4 bg-[#0E0E0E] text-white py-10 px-5">
            <div className="col-start-5 grid grid-rows-2">
                <div className="font-semibold">Conheça-nos</div>
                <div className="text-[#9C9C9C] grid grid-rows-2">
                    <a className='hover:text-white' href="#">Sobre nós</a>
                    <a className='hover:text-white' href="#">Acessibilidade</a>
                </div>
            </div>
            <div className="col-start-8 col-span-2 grid grid-rows-2">
                <div className="font-semibold">Pagamentos</div>
                <div className="text-[#9C9C9C] grid grid-rows-2">
                    <a className='hover:text-white' href="#">Meios de pagamento</a>
                    <a className='hover:text-white' href="#">Compre pontos</a>
                </div>
            </div>
        </div>
    )
}

export default MyFooter;