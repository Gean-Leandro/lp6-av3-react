import Logo from '../../assets/search.svg';

function MyNavBar(){
    return (
        <div className="bg-[#3F3E3E] font-sans flex justify-between items-center pl-[100px] pr-[50px] py-5">
            <div className="text-white text-2xl font-display grid grid-cols-1">
                mercadinho
                <div className='grid grid-cols-3'>
                    <div>luiz</div>
                    <div className='col-span-2 flex items-center'>
                        <div className='bg-[#F9A708] w-[100%] h-[3px] ml-1'></div>
                    </div>
                </div>
            </div>
            <div className='bg-[#898989] flex flex-row rounded-[5px]'>
                <input className="bg-[#898989] placeholder:text-white rounded-[5px] text-center w-[500px] py-1" type="text" placeholder="BUSCAR SEU PRODUTO" />
                <a className='px-2 pt-1' href="">
                    <img src={Logo} alt="" />
                </a>
            </div>
            <div className="grid grid-cols-2 items-center">
                <div>
                    <button className="bg-[#F9A708] px-3 py-1 font-semibold rounded-sm hover:rounded-md hover:bg-[#ffc44e]">CRIAR CONTA</button>
                </div>
                <a href="http://">
                    <div className='text-white hover:text-[#F9A708]'>
                        entrar em uma conta
                        <div className='bg-[#ffff] w-[100%] h-[2px] hover:bg-[#F9A708]'></div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default MyNavBar;