import { Star } from "lucide-react"

interface ReviewCardProps {
  name: string
  location: string
  rating: number
  comment: string
}

export function ReviewCard({ name, location, rating, comment }: ReviewCardProps) {
  return (
    <div className="flex-shrink-0 w-80 bg-white border-2 border-red-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-red-500 text-red-500" />
        ))}
      </div>

      {/* Comment */}
      <p className="text-gray-700 text-lg mb-6 leading-relaxed">"{comment}"</p>

      {/* Author */}
      <div className="border-t border-gray-200 pt-4">
        <p className="font-semibold text-black text-lg">{name}</p>
        <p className="text-gray-500">{location}</p>
      </div>
    </div>
  )
}
