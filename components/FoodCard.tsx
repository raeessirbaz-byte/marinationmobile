import Image from "next/image";

interface FoodCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
}

export default function FoodCard({ name, description, price, image, badge }: FoodCardProps) {
  return (
    <div className="glass-card group h-full flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {badge && (
          <span className="absolute top-4 left-4 bg-primary text-text-cream font-heading text-xs py-1 px-3 rounded-full">
            {badge}
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-charcoal via-transparent to-transparent opacity-60" />
      </div>
      
      <div className="p-8 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl text-text-cream group-hover:text-primary transition-colors">{name}</h3>
          <span className="text-xl text-primary font-heading">{price}</span>
        </div>
        <p className="text-text-beige text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        <button className="flex items-center gap-2 text-text-cream font-heading text-sm tracking-widest group-hover:gap-4 transition-all">
          ADD TO ORDER
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>
    </div>
  );
}
