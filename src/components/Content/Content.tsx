function Content() {
    return(
        <div className="bg-[#1C1C1C]">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="mb-10 text-white text-lg">PRODUTOS</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    <a href="#" className="group">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                        </div>
                        <h3 className="mt-4 text-sm font-semibold text-[#F9A708]">Earthen Bottle</h3>
                        <p className="mt-1 text-lg text-white">$48</p>
                    </a>
                    <a href="#" className="group">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                        </div>
                        <h3 className="mt-4 text-sm font-semibold text-[#F9A708]">Nomad Tumbler</h3>
                        <p className="mt-1 text-lg text-white">$35</p>
                    </a>
                    <a href="#" className="group">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                        </div>
                        <h3 className="mt-4 text-sm font-semibold text-[#F9A708]">Focus Paper Refill</h3>
                        <p className="mt-1 text-lg text-white">$89</p>
                    </a>
                    <a href="#" className="group">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                        <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                        </div>
                        <h3 className="mt-4 text-sm font-semibold text-[#F9A708]">Machined Mechanical Pencil</h3>
                        <p className="mt-1 text-lg text-white">$35</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Content;