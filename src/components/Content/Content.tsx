interface TypeProductCard {
    name: string;
    description: string;
}

function Content({name, description}: TypeProductCard) {
    return(
        <a href="#" className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="h-full w-full object-cover object-center group-hover:opacity-75"/>
            </div>
            <h3 className="mt-4 text-sm font-semibold text-[#F9A708]">{name}</h3>
            <p className="mt-1 text-lg text-white">$35 {description}</p>
        </a>
    )
}

export default Content;